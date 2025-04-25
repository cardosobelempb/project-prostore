import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { BadRequestError, ConflictError, NotFoundError } from '@shared/core';
import { RegisterUserService, IUser } from '@user/core';
import { Response, Request } from 'express';

@Controller('/register')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async handle(
    @Body() request: IUser.Request,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const { name, email, password } = request;
    console.log('RegisterUserController');
    const response = await this.registerUserService.execute({
      email,
      name,
      password,
    });

    const uri = `${req.protocol}://${req.get('host')}${req.originalUrl}/${response.value}`;
    console.log('Response =>', response, uri);

    // if (response.isLeft()) {
    //   const error = response.value;

    //   switch (error.constructor) {
    //     case NotFoundError:
    //       throw new ConflictError(error.message);
    //     default:
    //       throw new BadRequestError(error.message);
    //   }
    // }
  }
}
