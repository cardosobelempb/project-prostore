import { Module } from '@nestjs/common';
import { ProductPrismaRepository } from 'src/application/repositories/prisma/product.respository';
import { UserPrismaRepository } from 'src/application/repositories/prisma/user.respository';
import {
  PRODUCT_REPOSITORY,
  USER_REPOSITORY,
} from 'src/shared/constants/repositories.constants';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: USER_REPOSITORY, // O token constante para o UserRepository
      useFactory: (prismaService: PrismaService) => {
        return new UserPrismaRepository(prismaService);
      },
      inject: [PrismaService], // Injetando o PrismaService
    },
    {
      provide: PRODUCT_REPOSITORY,
      useFactory: (prismaService: PrismaService) => {
        return new ProductPrismaRepository(prismaService);
      },
      inject: [PrismaService],
    },
  ],
  exports: [USER_REPOSITORY, PRODUCT_REPOSITORY], // Apenas exporta o token do repositório, não a implementação duplicada
})
export class DatabaseModule {}
