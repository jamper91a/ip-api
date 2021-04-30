import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import compression from 'fastify-compress';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const configService = app.get(ConfigService);
  //Implementing class validation
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.register(compression, { encodings: ['gzip', 'deflate'] });
  await app.listen(configService.get('http.port'));
}
bootstrap();
