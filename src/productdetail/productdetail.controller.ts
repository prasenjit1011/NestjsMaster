import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductdetailService } from './productdetail.service';
import { CreateProductdetailDto } from './dto/create-productdetail.dto';
import { UpdateProductdetailDto } from './dto/update-productdetail.dto';

@Controller('productdetail')
export class ProductdetailController {
  constructor(private readonly productdetailService: ProductdetailService) {}

  @Post()
  create(@Body() createProductdetailDto: CreateProductdetailDto) {
    return this.productdetailService.create(createProductdetailDto);
  }

  @Get()
  findAll() {
    return this.productdetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productdetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductdetailDto: UpdateProductdetailDto) {
    return this.productdetailService.update(+id, updateProductdetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productdetailService.remove(+id);
  }
}
