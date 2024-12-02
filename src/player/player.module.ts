import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { Player } from './entity/player.entity';
import { CategoryModule } from '../category/category.module'; 
import { TeamsModule } from 'src/teams/teams.module';
@Module({
  imports: [TypeOrmModule.forFeature([Player]), CategoryModule, TeamsModule],
  controllers: [PlayerController],
  providers: [PlayerService],
  exports: [PlayerService],
})
export class PlayerModule {}
