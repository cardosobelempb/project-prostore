import { Module } from '@nestjs/common';
import { Hashed } from '@shared/core';
import { UserRepository } from '@user/core';

import { RegisterAuthService } from '@auth/core';
import { RegisterAuthController } from 'src/infrastruecture/controllers/auth/register-auth.controller';
import { USER_REPOSITORY } from '../shared/constants/repositories.constants';
import { CryptographyModule } from './cryptography.module';
import { DatabaseModule } from './database.module';
import { BcryptHashed } from 'src/infrastruecture/cryptography/bcrypt-hashed';

@Module({
  imports: [DatabaseModule, CryptographyModule], // Importando o DatabaseModule para ter acesso ao USER_REPOSITORY
  controllers: [RegisterAuthController],
  providers: [
    {
      provide: RegisterAuthService,
      useFactory: (userRepository: UserRepository, hashed: BcryptHashed) => {
        return new RegisterAuthService(userRepository, hashed);
      },
      inject: [USER_REPOSITORY, Hashed], // Usando o token USER_REPOSITORY
    },
  ],
})
export class AuthModule {}
