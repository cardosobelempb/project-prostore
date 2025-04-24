import { Module } from '@nestjs/common';
import { UserPrismaRepository } from 'src/application/repositories/prisma/user.respository';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
    {
      provide: 'UserRepository',
      useFactory: (prismaService: PrismaService) => {
        return new UserPrismaRepository(prismaService);
      },
      inject: ['PrismaService'],
    },
  ],
  exports: [
    PrismaService,
    {
      provide: 'PrismaService',
      useClass: PrismaService,
    },
    {
      provide: 'UserRepository',
      useClass: UserPrismaRepository,
    },
    {
      provide: 'UserRepository',
      useFactory: (prismaService: PrismaService) => {
        return new UserPrismaRepository(prismaService);
      },
      inject: ['PrismaService'],
    },
  ],
})
export class DatabaseModule {}
