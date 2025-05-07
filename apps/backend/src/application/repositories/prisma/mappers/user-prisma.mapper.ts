import { Prisma, User as UserMapper } from '@prisma/client';
import { EmailVO, NameVO, PasswordVO, UUIDVO } from '@shared/core';
import { IUser, User } from '@user/core';

export class UserPrismaMapper {
  static toDomain(raw: UserMapper): User {
    return User.create(
      {
        id: raw.id,
        name: raw.name,
        email: raw.email,
        password: raw.password,
        image: raw.image,
        paymentMethod: raw.paymentMethod,
        role: raw.role as IUser.IRoles,
        emailVerified: raw.emailVerified,
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UUIDVO(raw.id),
    );
  }

  static toPrisma(entity: User): Prisma.UserUncheckedCreateInput {
    return {
      id: entity.id.getValue(),
      name: entity.name.getValue(),
      email: entity.email.getValue(),
      password: entity.password.getValue(),
      image: entity.image(),
      paymentMethod: entity.paymentMethod(),
      emailVerified: entity.emailVerified(),
      createdAt: entity.createdAt(),
      updatedAt: entity.updatedAt(),
    };
  }
}
