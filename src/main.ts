import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

  console.log(`App is running on: ${process.env.PORT ?? 3002}`);

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('TC Store API')
    .setDescription('The TC Store API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT || 3002);
}
bootstrap();
