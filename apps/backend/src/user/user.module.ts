import { Module } from '@nestjs/common';
import { RegisterUserController } from './register-user.controller';

@Module({
  imports: [],
  controllers: [RegisterUserController],
  providers: [],
})
export class UserModule {}
