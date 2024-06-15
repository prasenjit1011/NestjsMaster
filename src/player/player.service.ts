import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Player } from './entity/player.entity';

@Injectable()
export class PlayerService {
    constructor(@InjectRepository(Player) private readonly tradeRepository:Repository<Player>){}

    findAll(){
        let cond = {};
        return this.tradeRepository.findBy(cond);
    }
}
