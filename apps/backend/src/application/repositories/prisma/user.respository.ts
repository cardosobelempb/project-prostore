import { IPagination } from '@shared/core';
import { User, UserRepository } from '@user/core';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { UserPrismaMapper } from './mappers/user-prisma.mapper';

export class UserPrismaRepository extends UserRepository {
  constructor(private readonly prismaservice: PrismaService) {
    super();
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prismaservice.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return UserPrismaMapper.toDomain(user);
  }

  async findById(id: string): Promise<User> {
    throw new Error('Method not implemented.');
  }

  async findMany(params: IPagination): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  async create(entity: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async update(entity: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async delete(entity: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
