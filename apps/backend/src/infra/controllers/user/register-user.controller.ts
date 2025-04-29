import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';

import { right } from '@shared/core';
import { IUser, RegisterUserService } from '@user/core';
import { Request, Response } from 'express';

@Controller('/register')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async handle(
    @Body()
    request: IUser.ICreateRequest,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const { name, email, password } = request;

    const user = await this.registerUserService.execute({
      email,
      name,
      password,
    });

    const uri = `${req.protocol}://${req.get('host')}${req.originalUrl}/${user.value}`;
    console.log('RegisterUserController  =>', user.value, uri);

    // if (response.isLeft()) {
    //   const error = response.value;
    //   switch (error.constructor) {
    //     case NotFoundError:
    //       throw new ConflictError(error.message);
    //     default:
    //       throw new BadRequestError(error.message);
    //   }
    // }

    // res.location(uri).send();

    return right({ user });
  }
}
