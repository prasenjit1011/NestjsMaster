import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductdetailService } from './productdetail.service';
import { ProductdetailController } from './productdetail.controller';
import { Productdetail } from './entities/productdetail.entity';
import { CreateProductdetailDto } from './dto/create-productdetail.dto';
//CreateProductdetailDto
@Module({
  imports: [TypeOrmModule.forFeature([Productdetail]), CreateProductdetailDto],
  controllers: [ProductdetailController],
  providers: [ProductdetailService],
  exports: [TypeOrmModule.forFeature([Productdetail]), CreateProductdetailDto]
})
export class ProductdetailModule {}
