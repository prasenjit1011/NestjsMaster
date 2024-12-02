import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StoreModule } from './store/store.module';
import { ProductModule } from './product/product.module';
import { ProductdetailModule } from './productdetail/productdetail.module';
import { CustomerModule } from './customer/customer.module';
import { MerchantModule } from './merchant/merchant.module';

import { Store } from './store/entities/store.entity';
import { Product } from './product/entities/product.entity';
import { Productdetail } from './productdetail/entities/productdetail.entity';
import { Customer } from './customer/entities/customer.entity';
import { Merchant } from './merchant/entities/merchant.entity';

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
      entities: [Merchant, Store, Product, Customer, Productdetail ],
      //entities: [__dirname+'/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MerchantModule,
  ],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('-: Root Module :-');
  }
}
