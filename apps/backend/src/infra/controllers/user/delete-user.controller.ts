import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';

import { right } from '@shared/core';
import { DeleteUserService, IUser } from '@user/core';

@Controller('/users')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete('/:userId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async handle(
    @Param('userId')
    request: IUser.IDeleteRequest,
  ): Promise<IUser.IDeleteResponse> {
    const { userId } = request;
    await this.deleteUserService.execute({ userId });
    return right({});
  }
}
