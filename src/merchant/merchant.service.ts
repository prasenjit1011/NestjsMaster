import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { Merchant } from './entities/merchant.entity';

@Injectable()
export class MerchantService {
  constructor(@InjectRepository(Merchant) private readonly merchantRepository:Repository<Merchant>){}

  async create(createMerchantDto: CreateMerchantDto) {
    let merchant:Merchant = new Merchant();
    merchant.name = createMerchantDto.name;

    let data = await this.merchantRepository.save(merchant);
    return {msg:'This action adds a new merchant', data};
  }

  async findAll() {
    let cond = {};
    cond = {relations:['stores']};
    let data = await this.merchantRepository.find(cond);
    return {msg: `This action returns all merchant`, data};
  }

  findOne(id: number) {
    return `This action returns a #${id} merchant`;
  }

  update(id: number, updateMerchantDto: UpdateMerchantDto) {
    return `This action updates a #${id} merchant`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchant`;
  }
}
