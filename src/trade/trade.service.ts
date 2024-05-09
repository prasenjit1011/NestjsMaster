import { HttpException, Injectable } from '@nestjs/common';
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

  findAll(type: string, user_id: number) : Promise<Trade[]>{
    let cond = {};
    if(type){
      cond['type'] = type;
    }

    if(user_id){
      cond['user_id'] = +user_id;
    }

    console.log('-- cond --',cond);

    return this.tradeRepository.findBy(cond);
  }

  async findOne(id: number) : Promise<any>{

    let trade =  await this.tradeRepository.findBy({id:id});
    if(!trade || !trade[0]){
      throw new HttpException('ID not found!', 404);
    }
    return trade[0];

  }

  async update(id: number, updateTradeDto: UpdateTradeDto) {
    
    let tradedata = await this.findOne(id);
    if(!tradedata || !tradedata[0]){
      throw new HttpException('ID not found!', 405);
    }

    let trade:Trade = new Trade();
    trade.id        = id;
    trade.type      = updateTradeDto.type;
    trade.user_id   = updateTradeDto.user_id;
    trade.symbol    = updateTradeDto.symbol;
    trade.shares    = updateTradeDto.shares;
    trade.price     = updateTradeDto.price;
    trade.timestamp = updateTradeDto.timestamp;

    let result  = this.tradeRepository.save(trade);

    //console.log(result);
    return result;
  }

  async remove(id: number) {
    let result = await this.tradeRepository.delete(id);
    if(!result['affected']){
      throw new HttpException('ID not found!', 405);
    }

    return result;
  }
}
