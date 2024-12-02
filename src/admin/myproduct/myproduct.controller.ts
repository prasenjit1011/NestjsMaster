import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyproductService } from './myproduct.service';
import { CreateMyproductDto } from './dto/create-myproduct.dto';
import { UpdateMyproductDto } from './dto/update-myproduct.dto';

@Controller('myproduct')
export class MyproductController {
  constructor(private readonly myproductService: MyproductService) {}

  @Post()
  create(@Body() createMyproductDto: CreateMyproductDto) {
    return this.myproductService.create(createMyproductDto);
  }

  @Get()
  findAll() {
    return this.myproductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myproductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyproductDto: UpdateMyproductDto) {
    return this.myproductService.update(+id, updateMyproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myproductService.remove(+id);
  }
}
