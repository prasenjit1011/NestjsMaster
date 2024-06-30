import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PlayerService } from 'src/player/player.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private playerService: PlayerService) {
        console.log('---AuthController---');
    }

    @HttpCode(HttpStatus.OK)
    @Post()
    getAll(@Body() signInDto: Record<string, any>){
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
    
}
