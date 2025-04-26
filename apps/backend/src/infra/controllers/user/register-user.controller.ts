import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import {
  BadRequestError,
  ConflictError,
  Email,
  HashPassword,
  NotFoundError,
  PersonName,
} from '@shared/core';
import { RegisterUserService, IUser, CreateUserSchema } from '@user/core';
import { Response, Request } from 'express';
import { ZodValidationPipe } from 'src/shared/validations/zod-validation.pipe';
import { z } from 'zod';

@Controller('/register')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async handle(
    @Body(new ZodValidationPipe({ schema: CreateUserSchema }))
    request: z.infer<typeof CreateUserSchema>,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const { name, email, password } = request;
    console.log(email);
    const response = await this.registerUserService.execute({
      email,
      name,
      password,
    });

    const uri = `${req.protocol}://${req.get('host')}${req.originalUrl}/${response.value}`;
    console.log('Response =>', response, uri);

    if (response.isLeft()) {
      const error = response.value;
      console.log('Error =>', error);

      switch (error.constructor) {
        case NotFoundError:
          throw new ConflictError(error.message);
        default:
          throw new BadRequestError(error.message);
      }
    }

    res.location(uri).send();
  }
}
