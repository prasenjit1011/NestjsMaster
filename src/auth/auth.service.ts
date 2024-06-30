import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PlayerService } from 'src/player/player.service';

@Injectable()
export class AuthService {
    constructor(private playersService: PlayerService) {
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
        return result;
    }
}
