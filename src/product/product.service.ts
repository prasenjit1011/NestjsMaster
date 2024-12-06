import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

import { CreateProductdetailDto } from 'src/productdetail/dto/create-productdetail.dto';
import { Productdetail } from 'src/productdetail/entities/productdetail.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product) private readonly productRepository:Repository<Product>,
    @InjectRepository(Productdetail) private readonly productdetailRepository:Repository<Productdetail>
  ){}

  async create(
    createProductDto: CreateProductDto, 
    createProductdetailDto:CreateProductdetailDto
  ) 
  {
    let product:Product = new Product();
    product.name = createProductDto.name;

    let prod = await this.productRepository.save(product);

    let productdetail:Productdetail = new Productdetail();
    productdetail.description = createProductdetailDto.description;
    productdetail.product     = prod;
    let proddetails = await this.productdetailRepository.save(productdetail);

    
    let cond = {where:{id: prod?.id},relations:['details']};
    let data = await this.productRepository.find(cond);
    
    return {msg:'This action adds a new product', data};
  }

  async findAll() {
    let cond = {relations:['details', 'customers']};
    let data = await this.productRepository.find(cond);
    return {msg:`This action returns all product`, data};
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
