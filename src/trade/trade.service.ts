import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateTradeDto } from './dto/create-trade.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';
import { Trade } from './entities/trade.entity';


@Injectable()
export class TradeService {
  constructor(@InjectRepository(Trade) private readonly tradeRepository:Repository<Trade>){}

  create(createTradeDto: CreateTradeDto): Promise<Trade> {
    
    let trade:Trade = new Trade();
    trade.type      = createTradeDto.type;
    trade.user_id   = createTradeDto.user_id;
    trade.symbol    = createTradeDto.symbol;
    trade.shares    = createTradeDto.shares;
    trade.price     = createTradeDto.price;
    trade.timestamp = createTradeDto.timestamp;

    return this.tradeRepository.save(trade);
  }

  findAll() : Promise<Trade[]>{
    return this.tradeRepository.find();
  }

  async findOne(id: number) : Promise<any>{
    console.log('****', id, typeof(id));
    let trade =  await this.tradeRepository.findBy({id:id});

    
    if(trade && trade[0]){
      return trade[0];
    }
    else{
      return {"msg":"Trade data not found"};
    }
  }

  update(id: number, updateTradeDto: UpdateTradeDto) {
    
    let trade:Trade = new Trade();
    trade.id        = id;
    trade.type      = updateTradeDto.type;
    trade.user_id   = updateTradeDto.user_id;
    trade.symbol    = updateTradeDto.symbol;
    trade.shares    = updateTradeDto.shares;
    trade.price     = updateTradeDto.price;
    trade.timestamp = updateTradeDto.timestamp;

    return this.tradeRepository.save(trade);
  }

  remove(id: number) {
    return this.tradeRepository.delete(id);;
  }
}
