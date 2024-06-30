import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PlayerService } from 'src/player/player.service';

@Injectable()
export class AuthService {
    constructor(private playersService: PlayerService, private jwtService: JwtService) {//
        console.log('===============');
    }

    async signIn(username: string, pass: string): Promise<any> {
        
        const user = await this.playersService.findOneByUsername(username);
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        // TODO: Generate a JWT and return it here
        // instead of the user object

        const payload = { sub: user.id, username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };

        console.log('------------------',result.id, payload);
        return result;
    }
}
