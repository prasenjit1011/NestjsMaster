import { Controller, Get, Post, Body, ValidationPipe, Param } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create.player.dto';

@Controller('player')
export class PlayerController {

    constructor(private readonly playerService:PlayerService){}

    @Post()
    create(@Body(new ValidationPipe()) createPlayerDto: CreatePlayerDto) {
        return this.playerService.create(createPlayerDto);
    }

    @Get()
    findAll(){
        return this.playerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log('++++', id, typeof(+id));
        return this.playerService.findOne(+id);
    }
}
