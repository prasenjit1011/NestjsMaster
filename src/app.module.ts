import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Mobile } from './mobile/schema/mobile.schema';
import { MobileModule } from './mobile/mobile.module';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      //typePaths: ['./**/*.graphql']
      autoSchemaFile: join(process.cwd(), "src/schema.graphql"),
      definitions:{
        path:join(process.cwd(), "src/graphql.ts"),
      }
    }),
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
    }),
    BookModule,
    MobileModule
    //,
    //AuthGuard
  ],
  controllers: [AppController],
  providers: [AppService],
})

//ENDPOINT_ID='ep-withered-frost-a5etb539-pooler'
// DATABASE_URL="postgresql://neondb_owner:ysY6GO7HKcBl@ep-withered-frost-a5etb539-pooler.us-east-2.aws.neon.tech/nestcrud?sslmode=require"

export class AppModule {}
