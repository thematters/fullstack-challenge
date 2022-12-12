import { configLocalEnvFile } from './config-local-env-file';
configLocalEnvFile();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { exceptionFactory } from '@@common/misc/exception-factory';
import { AppModule } from './app.module';
import { NODE_ENV } from './configs/node-env';
import { PORT } from './configs/port';
import { devCorsOptions } from './configs/cors-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory,
    }),
  );

  // cors should also be enabled within apollo config
  if (NODE_ENV === 'development') {
    app.enableCors(devCorsOptions);
  }

  // app.enableShutdownHooks();

  await app.listen(PORT).then(() => console.log('servers run on ' + PORT));
}
bootstrap();
