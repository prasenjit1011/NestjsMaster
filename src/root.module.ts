import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        ...databaseConfig(),
      }),
    }),
    AuthModule,
  ],
})
export class RootModule {
  constructor() {
    console.log('-: Root Module :-');
  }
}
