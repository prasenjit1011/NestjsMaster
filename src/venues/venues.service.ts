import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venue } from './entities/venue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VenuesService {
  
  constructor(@InjectRepository(Venue) private readonly venueRepository:Repository<Venue>){}



  create(createVenueDto: CreateVenueDto) {

    console.log(createVenueDto);
    let venue:Venue = new Venue();
    venue.name = createVenueDto.name;
    venue.status = createVenueDto.status;

    this.venueRepository.save(venue);
    return 'This action adds a new venue';
  }

  findAll() {
    return `This action returns all venues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} venue`;
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return `This action updates a #${id} venue`;
  }

  remove(id: number) {
    return `This action removes a #${id} venue`;
  }
}
