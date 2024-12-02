import { Module } from '@nestjs/common';
import { MyteamsService } from './myteams.service';
import { MyteamsController } from './myteams.controller';

@Module({
  controllers: [MyteamsController],
  providers: [MyteamsService],
})
export class MyteamsModule {}
