import { Injectable } from '@nestjs/common';
import { CreateMyproductDto } from './dto/create-myproduct.dto';
import { UpdateMyproductDto } from './dto/update-myproduct.dto';

@Injectable()
export class MyproductService {
  create(createMyproductDto: CreateMyproductDto) {
    return 'This action adds a new myproduct';
  }

  findAll() {
    return `This action returns all myproduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myproduct`;
  }

  update(id: number, updateMyproductDto: UpdateMyproductDto) {
    return `This action updates a #${id} myproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} myproduct`;
  }
}
