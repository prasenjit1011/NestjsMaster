import { Controller, Get, Post, Body, ValidationPipe, Param, UseGuards } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create.player.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('player')
export class PlayerController {

    constructor(private readonly playerService:PlayerService){}

    @Post()
    @UseGuards(AuthGuard)
    create(@Body(new ValidationPipe()) createPlayerDto: CreatePlayerDto) {
        return this.playerService.create(createPlayerDto);
    }

    @Get()
    findAll(){
        var str = Math.round(100*Math.random());
        console.log('-: Player List :- '+str+'\n')
        return this.playerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log('-: Player Details ', id, typeof(+id));
        return this.playerService.findOne(+id);
    }
}
