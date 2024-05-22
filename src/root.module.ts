import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('\n-: Root Module Started :-\n\n');
  }
}
