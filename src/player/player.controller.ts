import { Controller, Get, Post, Request, Body, ValidationPipe, Param, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
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
    //@UseGuards(AuthGuard)
    create(@Request() req: any, @Body(new ValidationPipe()) createPlayerDto: CreatePlayerDto) {
        
        console.log('========>>> Logged User >>', req.user);
        return this.playerService.create(createPlayerDto);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads', 
          filename: (req, file, cb) => {
            const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
            cb(null, `${randomName}${extname(file.originalname)}`)
          }
        })
      }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log('Uploaded File Successfully!', file);

        return {"originalname":file.originalname};
    }
    
    @Get()
    findAll(@Request() req: any){
        var str = Math.round(100*Math.random());
        console.log('-: Player List :- '+str+'\n')
        console.log('==>>>>>', req.user);

        return this.playerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log('-: Player Details ', id, typeof(+id));
        return this.playerService.findOne(+id);
    }
}
