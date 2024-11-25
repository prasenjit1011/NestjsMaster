import { Controller, Get, Post, Body, ValidationPipe, Param, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create.player.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path'

@Controller('player')
//@UseGuards(AuthGuard)
export class PlayerController {

    constructor(private readonly playerService:PlayerService){}

    @Post()
    @UseGuards(AuthGuard)
    create(@Body(new ValidationPipe()) createPlayerDto: CreatePlayerDto) {
        return this.playerService.create(createPlayerDto);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads'
          , filename: (req, file, cb) => {
            // Generating a 32 random chars long string
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            //Calling the callback passing the random name generated with the original extension name
            cb(null, `${randomName}${extname(file.originalname)}`)
          }
        })
      }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log('Uploaded File Successfully!', file);

        return {"originalname":file.originalname};
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
