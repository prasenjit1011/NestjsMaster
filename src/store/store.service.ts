import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
import { Merchant } from 'src/merchant/entities/merchant.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private readonly storeRepository:Repository<Store>,
    @InjectRepository(Merchant) private readonly merchantRepository:Repository<Merchant>
  ){}


  async create(createStoreDto: CreateStoreDto) {
    let merchantId  = createStoreDto?.merchantId;
    const merchant = await this.merchantRepository.findBy({id:merchantId});        
    if (!merchant) {
        throw new HttpException('Merchant not found', 404); // Handle case if category is not found
    }
    
    let store:Store = new Store();
    store.name = createStoreDto.name;
    store.contactus = createStoreDto.contactus;
    store.merchant  = merchant[0];
    let data = await this.storeRepository.save(store);

    return {msg:'This action adds a new store', data};
  }

  async findAll() {
    let cond = {relations:['merchant']};
    let data = await this.storeRepository.find(cond);
    return {msg:`This action returns all store`, data};
  }

  findOne(id: number) {
    return `This action returns a #${id} store`;
  }

  update(id: number, updateStoreDto: UpdateStoreDto) {
    return `This action updates a #${id} store`;
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
