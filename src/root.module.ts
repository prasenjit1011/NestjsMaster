import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log('-: Root Module :-');
  }
}
