import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

import { TradeService } from './trade.service';
import { TradeController } from './trade.controller';
import { Trade } from './entities/trade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trade])],
  controllers: [TradeController],
  providers: [TradeService],
})
export class TradeModule {}
