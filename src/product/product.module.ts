import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { Product } from './entities/product.entity';
import { ProductdetailModule } from 'src/productdetail/productdetail.module';
import { CreateProductdetailDto } from 'src/productdetail/dto/create-productdetail.dto';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), ProductdetailModule, CreateProductdetailDto],
  controllers: [ProductController],
  providers: [ProductService, CreateProductdetailDto],
})
export class ProductModule {}
