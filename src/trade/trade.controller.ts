import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
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
  findAll() {
    return this.tradeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('++++', id, typeof(+id));
    return this.tradeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTradeDto: UpdateTradeDto) {
    return this.tradeService.update(+id, updateTradeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tradeService.remove(+id);
  }
}
