import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { FaqModule } from './faq/faq.module';
import databaseConfig from './config/database.config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        ...databaseConfig(),
      }),
    }),
    AuthModule,
    FaqModule,
  ],
})
export class RootModule {
  constructor() {
    console.log('-: Root Module :-');
  }
}
