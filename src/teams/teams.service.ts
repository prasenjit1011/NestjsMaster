import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(@InjectRepository(Team) private readonly teamRepository:Repository<Team>){}

  create(createTeamDto: CreateTeamDto): Promise<Team> {

    let team:Team = new Team();
    team.name      = createTeamDto.name;
    team.rank      = createTeamDto.rank;

    return this.teamRepository.save(team);  
  }

  findAll() {
    return `This action returns all teams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
