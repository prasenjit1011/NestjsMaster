import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentsService {
  constructor(@InjectRepository(Tournament) private readonly tournamentRepository:Repository<Tournament>){}

  create(createTournamentDto: CreateTournamentDto): Promise<Tournament> {
    
    let tournament:Tournament = new Tournament();
    tournament.name = createTournamentDto.name;
    tournament.startDate = createTournamentDto.startDate;
    tournament.endDate = createTournamentDto.endDate;
    tournament.status = createTournamentDto.status;

    return this.tournamentRepository.save(tournament);
  }

  async findAlla() {
    let cond = {where:{id:1}};
    let data = [];//await this.tournamentRepository.findBy(cond);
    return {msg:"Tournament List Data", data:data};
  }

  async findAll(): Promise<Tournament | null> {
    let id = 1;
    //const condition = { where: { id } };
    // const condition = { 
    //   where: { id }, 
    //   relations: ['organizer'],
    // };

    const condition = { 
      where: { id }, 
      relations: ['teams'],
    };

    return await this.tournamentRepository.findOne(condition);
  }



  findOne(id: number) {
    return `This action returns a #${id} tournament`;
  }

  update(id: number, updateTournamentDto: UpdateTournamentDto) {
    return `This action updates a #${id} tournament`;
  }

  remove(id: number) {
    return `This action removes a #${id} tournament`;
  }
}
