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

  findAll() {
    let cond = {};
    return this.organizerRepository.findBy(cond);
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
