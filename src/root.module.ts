import { Module } from '@nestjs/common';
import { StoreModule } from './store/store.module';
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';
import { ProductdetailModule } from './productdetail/productdetail.module';

@Module({
  imports: [StoreModule, ProductModule, CustomerModule, ProductdetailModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('-: Root Module :-');
  }
}
