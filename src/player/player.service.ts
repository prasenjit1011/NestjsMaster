import { HttpException, Injectable } from '@nestjs/common';
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

    async findOne(id: number) : Promise<any>{

        let player =  await this.playerRepository.findBy({id:id});
        if(!player || !player[0]){
          throw new HttpException('ID not found!', 404);
        }
        return player[0];
    }

    async findOneByUsername(username: string) : Promise<any>{

      let player =  await this.playerRepository.findBy({username:username});
      if(!player || !player[0]){
        throw new HttpException('ID not found!', 404);
      }

      console.log(player);
      return player[0];
  }
    
}
