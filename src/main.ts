import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for your front-end domain
  app.enableCors({
    origin: 'http://localhost:5173',  // Front-end URL (the domain where the client is hosted)
    methods: 'GET,POST',  // Allow these HTTP methods
    allowedHeaders: 'Content-Type, Authorization',  // Specify headers if needed (e.g., Authorization for tokens)
    credentials: true,  // Allow credentials like cookies (if necessary)
  });

  await app.listen(3000);
}
bootstrap();
