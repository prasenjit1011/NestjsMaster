import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Query } from '@nestjs/common';
import { TradeService } from './trade.service';
import { CreateTradeDto } from './dto/create-trade.dto';
import { UpdateTradeDto } from './dto/update-trade.dto';

@Controller('trade')
export class TradeController {
  constructor(private readonly tradeService: TradeService) {}

  @Post()
  create(@Body(new ValidationPipe()) createTradeDto: CreateTradeDto) {
    return this.tradeService.create(createTradeDto);
  }

  @Get()
  findAll(@Query('type') type?: string, @Query('user_id') user_id?: number) {

    console.log('-- Type : ',type, typeof(type));
    console.log(' -- User Id : ', user_id, typeof(user_id));
    return this.tradeService.findAll(type, user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('++++', id, typeof(+id));
    return this.tradeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) updateTradeDto: UpdateTradeDto) {
    return this.tradeService.update(+id, updateTradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tradeService.remove(+id);
  }
}
