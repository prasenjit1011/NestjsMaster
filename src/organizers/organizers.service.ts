import { Injectable } from '@nestjs/common';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { UpdateOrganizerDto } from './dto/update-organizer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Organizer } from './entities/organizer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizersService {
  
  constructor(@InjectRepository(Organizer) private readonly organizerRepository:Repository<Organizer>){}

  create(createOrganizerDto: CreateOrganizerDto): Promise<Organizer> {

    let organizer:Organizer = new Organizer();
    organizer.name = createOrganizerDto.name;
    organizer.status = createOrganizerDto.status;

    return this.organizerRepository.save(organizer);
  }

  async findAll() {
    let id = 1;
    //let cond = {};
    let cond = { 
      where: { id:1 }, 
      relations: ['tournaments', 'tournaments.teams'],
    };
    //let data = await this.organizerRepository.findBy({});//findOne(cond);
    //let data = await this.organizerRepository.findOne(cond);
    let data = await this.organizerRepository.find(cond);
    return {msg:"Organization List", data:data};
  }

  findOne(id: number) {
    return `This action returns a #${id} organizer`;
  }

  update(id: number, updateOrganizerDto: UpdateOrganizerDto) {
    return `This action updates a #${id} organizer`;
  }

  remove(id: number) {
    return `This action removes a #${id} organizer`;
  }
}
