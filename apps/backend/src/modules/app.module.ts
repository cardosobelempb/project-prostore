import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AppController } from 'src/infrastruecture/controllers/app/app.controller';
import { EnvModule } from './env.module';
import { UserModule } from './user.module';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    EnvModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
