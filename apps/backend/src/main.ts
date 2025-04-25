import { NestFactory } from '@nestjs/core';

import { ErrorFilter } from './shared/errors/error.filter';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 4000);

  app.setGlobalPrefix('api');
  app.useGlobalFilters(new ErrorFilter());
}
bootstrap();
