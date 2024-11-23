import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './player/player.module';
import { AuthModule } from './auth/auth.module';
import { Player } from './player/entity/player.entity';

@Module({
  imports: [
    PlayerModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [Player],//[__dirname+'/**/*.entity{.ts,.js}']
      synchronize: true,
    }),
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
