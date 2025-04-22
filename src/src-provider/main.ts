import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Trigger sendMessage (e.g., on startup)
  // const appService = app.get(AppService);
  // const res = await appService.sendMessage();
  console.log('Message sent. Response:');

  await app.listen(3001);
  console.log('🚀 App is listening on port 3001');
}
bootstrap();

