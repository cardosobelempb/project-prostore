import { IPagination } from '@shared/core';
import { User, UserRepository } from '@user/core';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { UserPrismaMapper } from './mappers/user-prisma.mapper';

export class UserPrismaRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      return null;
    }

    return UserPrismaMapper.toDomain(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    console.log('findById => ', user);
    if (!user) return null;

    return UserPrismaMapper.toDomain(user);
  }

  async findMany({ page }: IPagination): Promise<User[]> {
    const users = await this.prismaService.user.findMany({
      take: 20,
      skip: (page - 1) * 20,
      orderBy: {
        name: 'asc',
      },
    });

    return users.map(UserPrismaMapper.toDomain);
  }

  async create(entity: User): Promise<User> {
    const data = UserPrismaMapper.toPrisma(entity);
    const result = await this.prismaService.user.create({ data });
    return UserPrismaMapper.toDomain(result);
  }

  async update(entity: User): Promise<void> {
    const user = UserPrismaMapper.toPrisma(entity);
    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }

  async delete(entity: User): Promise<void> {
    await this.prismaService.user.delete({
      where: {
        id: entity.id.toString(),
      },
    });
  }
}
