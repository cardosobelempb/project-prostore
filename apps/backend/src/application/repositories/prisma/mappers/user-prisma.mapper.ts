import { Email, HashPassword, PersonName, UniqueUUID } from '@shared/core';
import { User } from '@user/core';
import { Prisma, User as UserMapper } from '@prisma/client';

export class UserPrismaMapper {
  static toDomain(raw: UserMapper): User {
    return User.create(
      {
        name: new PersonName(raw.name),
        email: new Email(raw.email),
        password: new HashPassword(raw.password),
      },
      new UniqueUUID(raw.id),
    );
  }

  static toPrisma(entity: User): Prisma.UserUncheckedCreateInput {
    return {
      id: entity.id.toString(),
      name: entity.name.value,
      email: entity.email.value,
      password: entity.password.value,
    };
  }
}
