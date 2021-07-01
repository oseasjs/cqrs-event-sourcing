import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const logger = new Logger('main');
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  app.setGlobalPrefix('api');

  initSwagger(app);

  const port = process.env.PORT ? +process.env.PORT : 8080;
  logger.log(`Application listerner on port '${port}'`);
  
  await app.listen(port);

}

function initSwagger(app: INestApplication) {

  const documetBuilder = new DocumentBuilder()
    .setTitle('CQRS ES APP')
    .setDescription('CQRS and Event Sourcing application')
    .setVersion('1.0')
    .build();
  const swaggerModule = SwaggerModule.createDocument(app, documetBuilder);
  SwaggerModule.setup('api', app, swaggerModule, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

}

bootstrap();
