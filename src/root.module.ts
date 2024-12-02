import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StoreModule } from './store/store.module';
import { ProductModule } from './product/product.module';
import { ProductdetailModule } from './productdetail/productdetail.module';
import { CustomerModule } from './customer/customer.module';

import { Store } from './store/entities/store.entity';
import { Product } from './product/entities/product.entity';
import { Productdetail } from './productdetail/entities/productdetail.entity';
import { Customer } from './customer/entities/customer.entity';

@Module({
  imports: [
    StoreModule, ProductModule, CustomerModule, ProductdetailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjscompany',
      entities: [Store, Product, Customer, Productdetail ],
      //entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('-: Root Module :-');
  }
}
