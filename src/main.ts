import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose'],
    bufferLogs: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Nest test')
    .setDescription('User module API endpoints')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document);
  app.useLogger(app.get(Logger));
  await app.listen(3000);
}

bootstrap();
