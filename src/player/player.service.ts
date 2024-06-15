import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Player } from './entity/player.entity';
import { CreatePlayerDto } from './dto/create.player.dto';

@Injectable()
export class PlayerService {
    constructor(@InjectRepository(Player) private readonly playerRepository:Repository<Player>){}

    create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    
        let player:Player = new Player();
        player.username      = createPlayerDto.username;
        player.password      = createPlayerDto.password;
    
        return this.playerRepository.save(player);
      }

    findAll(){
        let cond = {};
        return this.playerRepository.findBy(cond);
    }
}
