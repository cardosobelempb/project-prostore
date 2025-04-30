import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';

import { right, UUIDVO } from '@shared/core';
import { DeleteUserService, IUser } from '@user/core';

@Controller('users')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(
    @Param('userId') userId: string,
  ): Promise<IUser.IDeleteResponse> {
    console.log('DeleteUserController =>', userId);

    await this.deleteUserService.execute({ userId });

    return right({});
  }
}
