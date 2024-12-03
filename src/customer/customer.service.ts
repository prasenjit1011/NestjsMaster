import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CreateCustomerProductDto } from './dto/create-customer-product.dto';

import { Customer } from './entities/customer.entity';
//import { CustomerP}

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) private readonly customerRepository:Repository<Customer>,
    //@InjectRepository(Customer) private readonly customerRepository:Repository<Customer>
  ){}
  
  async create(createCustomerDto: CreateCustomerDto) {
    let customer:Customer = new Customer();
    customer.name = createCustomerDto.name;
    customer.mobile = createCustomerDto.mobile;

    let data = await this.customerRepository.save(customer);

    return {msg:'This action adds a new customer', data};
  }

  async findAll() {
    let cond = {};
    let data = await this.customerRepository.find(cond);
    return {msg:`This action returns all customer`, data};
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }

  async createCustomerProduct(createCustomerProductDto:CreateCustomerProductDto){
    //let customerProduct:
    
    let data;
    return {msg:`This action adds product to customer wishlist`, data};
  }
}
