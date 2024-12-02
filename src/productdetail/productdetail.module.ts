import { Module } from '@nestjs/common';
import { ProductdetailService } from './productdetail.service';
import { ProductdetailController } from './productdetail.controller';

@Module({
  controllers: [ProductdetailController],
  providers: [ProductdetailService],
})
export class ProductdetailModule {}
