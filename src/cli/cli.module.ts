import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { User, UserSchema } from '../users/schemas/user.schema';
import { UsersSeeder } from '../users/seeders/users.seeder';
import { SeedUsersCommand } from '../users/commands/seed.command';

const MONGODB_URI = "mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/Mydb?retryWrites=true&w=majority";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGODB_URI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersSeeder, SeedUsersCommand],
})
export class CliModule {} 