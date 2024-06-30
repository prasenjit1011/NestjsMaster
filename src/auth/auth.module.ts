import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PlayerModule } from 'src/player/player.module';
import { PlayerService } from 'src/player/player.service';

@Module({
  imports: [PlayerModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
