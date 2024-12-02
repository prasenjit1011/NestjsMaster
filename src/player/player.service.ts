import { HttpException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Player } from './entity/player.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Category } from 'src/category/entities/category.entity';
import { CreatePlayerDto } from './dto/create.player.dto';

@Injectable()
export class PlayerService {
    constructor(
      @InjectRepository(Player) private readonly playerRepository: Repository<Player>,
      @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
      @InjectRepository(Team) private readonly teamRepository: Repository<Team>,
  ) {}



    async create(createPlayerDto: CreatePlayerDto): Promise<Player> {

      let teamid  = createPlayerDto?.teamId;
      const team = await this.teamRepository.findBy({id:teamid});        
      if (!team?.length) {
          throw new HttpException('Team not found', 404); // Handle case if category is not found
      }



      let catid   = createPlayerDto?.categoryId;

      const category = await this.categoryRepository.findBy({id:catid});        
      if (!category?.length) {
          throw new HttpException('Category not found', 404); // Handle case if category is not found
      }

      console.log('== HERE 02ABC ==', category[0]?.id)


        let player:Player = new Player();
        player.username       = createPlayerDto.username;
        player.password       = createPlayerDto.password;
        player.profilepic     = createPlayerDto.profilepic;
        player.team           = team[0];
        player.category       = category[0];//?.id;

        return this.playerRepository.save(player);
      }

    findAll(){
        let cond = {relations: ['category']};
        return this.playerRepository.find(cond);
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
