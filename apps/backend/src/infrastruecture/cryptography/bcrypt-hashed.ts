import { Injectable } from '@nestjs/common';
import { Hashed } from '@shared/core';
import * as bcrypt from 'bcryptjs';
// Caminho conforme seu projeto

@Injectable()
export class BcryptHashed implements Hashed {
  private static readonly HASH_SALT_ROUNDS = 10;

  async hash(plain: string): Promise<string> {
    return await bcrypt.hash(plain, BcryptHashed.HASH_SALT_ROUNDS);
  }

  async compare(plain: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(plain, hash);
  }
}
