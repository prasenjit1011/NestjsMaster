import { Module } from '@nestjs/common';
import { MyproductService } from './myproduct.service';
import { MyproductController } from './myproduct.controller';

@Module({
  controllers: [MyproductController],
  providers: [MyproductService],
})
export class MyproductModule {}
