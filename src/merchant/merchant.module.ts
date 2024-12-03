import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { Merchant } from './entities/merchant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Merchant])],
  controllers: [MerchantController],
  providers: [MerchantService],
  exports: [TypeOrmModule.forFeature([Merchant])]
})
export class MerchantModule {}
