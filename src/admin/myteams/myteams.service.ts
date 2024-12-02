import { Injectable } from '@nestjs/common';
import { CreateMyteamDto } from './dto/create-myteam.dto';
import { UpdateMyteamDto } from './dto/update-myteam.dto';

@Injectable()
export class MyteamsService {
  create(createMyteamDto: CreateMyteamDto) {
    return 'This action adds a new myteam';
  }

  findAll() {
    return `This action returns all myteams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myteam`;
  }

  update(id: number, updateMyteamDto: UpdateMyteamDto) {
    return `This action updates a #${id} myteam`;
  }

  remove(id: number) {
    return `This action removes a #${id} myteam`;
  }
}
