import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

const MONGODB_URI = "mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/Mydb?retryWrites=true&w=majority";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(MONGODB_URI),
    UsersModule,
  ],
})
export class RootModule {
  constructor() {
    console.log('-: Root Module :-');
  }
}
