import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MyteamsService } from './myteams.service';
import { CreateMyteamDto } from './dto/create-myteam.dto';
import { UpdateMyteamDto } from './dto/update-myteam.dto';

@Controller('myteams')
export class MyteamsController {
  constructor(private readonly myteamsService: MyteamsService) {}

  @Post()
  create(@Body() createMyteamDto: CreateMyteamDto) {
    return this.myteamsService.create(createMyteamDto);
  }

  @Get()
  findAll() {
    return this.myteamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.myteamsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMyteamDto: UpdateMyteamDto) {
    return this.myteamsService.update(+id, updateMyteamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.myteamsService.remove(+id);
  }
}
