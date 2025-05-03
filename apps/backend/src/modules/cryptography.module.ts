import { Module } from '@nestjs/common';
import { Hashed } from '@shared/core';
import { BcryptHashed } from 'src/infrastruecture/cryptography/bcrypt-hashed';

@Module({
  providers: [{ provide: Hashed, useClass: BcryptHashed }],
  exports: [Hashed],
})
export class CryptographyModule {}
