import { Injectable } from '@nestjs/common';
import { CreateProductdetailDto } from './dto/create-productdetail.dto';
import { UpdateProductdetailDto } from './dto/update-productdetail.dto';

@Injectable()
export class ProductdetailService {
  create(createProductdetailDto: CreateProductdetailDto) {
    return 'This action adds a new productdetail';
  }

  findAll() {
    return `This action returns all productdetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productdetail`;
  }

  update(id: number, updateProductdetailDto: UpdateProductdetailDto) {
    return `This action updates a #${id} productdetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} productdetail`;
  }
}
