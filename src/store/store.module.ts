import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { Store } from './entities/store.entity';
import { MerchantModule } from 'src/merchant/merchant.module';

@Module({
  imports: [TypeOrmModule.forFeature([Store]), MerchantModule],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
