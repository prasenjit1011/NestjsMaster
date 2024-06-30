import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PlayerModule } from 'src/player/player.module';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PlayerModule,
    JwtModule.register({
      global:true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
