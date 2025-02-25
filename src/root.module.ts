import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './player/player.module';
import { AuthModule } from './auth/auth.module';
import { Player } from './player/entity/player.entity';
import { TeamsModule } from './teams/teams.module';
import { Team } from './teams/entities/team.entity';
import { TournamentsModule } from './tournaments/tournaments.module';
import { Tournament } from './tournaments/entities/tournament.entity';
import { OrganizersModule } from './organizers/organizers.module';
import { Organizer } from './organizers/entities/organizer.entity';
import { Student } from './teams/entities/student.entity';
import { Course } from './teams/entities/student.entity';
//import { StudentCourse } from './teams/entities/student.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { MyteamsModule } from './admin/myteams/myteams.module';
import { MyproductModule } from './admin/myproduct/myproduct.module';

@Module({
  imports: [
    // PlayerModule,
    // AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'lnsel',
      database: 'test',
      entities: [ ],
      //entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // TeamsModule,
    // TournamentsModule,
    // OrganizersModule,
    // CategoryModule,
    // MyteamsModule,
    // MyproductModule,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'ep-withered-frost-a5etb539.us-east-2.aws.neon.tech',
    //   ssl: true,
    //   port: 5432,
    //   database:'nestcrud',
    //   username: 'neondb_owner',
    //   password: 'ysY6GO7HKcBl',
    //   entities: [__dirname+'/**/*.entity{.ts,.js}'],
    //   synchronize: true
    // })
  ],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('\n-: Root Module Started :-\n\n\n');
  }
}
