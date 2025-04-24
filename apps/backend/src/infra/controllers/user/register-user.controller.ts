import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserService, IUser } from '@user/core';

@Controller('register')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  async handle(@Body() request: IUser.Request) {
    const { name, email, password } = request;
    const result = await this.registerUserService.execute({
      email,
      name,
      password,
    });
    console.log(result);
  }
}
