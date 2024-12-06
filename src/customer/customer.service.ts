import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { LikeDataDto } from './dto/likedata.dto';

import { Customer } from './entities/customer.entity';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer) private readonly customerRepository:Repository<Customer>,
    @InjectRepository(Product) private readonly productRepository:Repository<Product>
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

  async createCustomerProduct(likeDataDto:LikeDataDto){
    let condProd  = {where:{id:likeDataDto?.productId}, relations:['likedByCustomer']};
    let productData  = await this.productRepository.findOne(condProd);
    
    let condUser  = {where:{id:likeDataDto?.customerId}, relations:['likedProduct']};
    let customerData  = await this.customerRepository.findOne(condUser);
    
    if (!customerData || !productData) {
      //throw new Error('User or Property not found');
      return {status: false, msg: 'User or Property not found'};
    }

    if (productData instanceof Product && customerData instanceof Customer) {
      if (!customerData.likedProduct) {
        customerData.likedProduct = [];
      }

      customerData.likedProduct = [...customerData.likedProduct, productData];
      let result = await this.customerRepository.save(customerData);
      let customerDetails  = await this.customerRepository.findOne(condUser);

      return {status:true, customerDetails};
    } 
    else {
      throw new Error('The provided data is not a valid Property.');
    }
  }
}
