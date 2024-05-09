import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TradeModule } from './trade/trade.module';

@Module({
  imports: [
    TradeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-withered-frost-a5etb539.us-east-2.aws.neon.tech',
      ssl: true,
      port: 5432,
      database:'nestcrud',
      username: 'neondb_owner',
      password: 'ysY6GO7HKcBl',
      entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('-: Root Module :-');
  }
}
