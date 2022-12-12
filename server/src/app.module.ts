import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ormConfig } from './configs/ormconfig';
import { ArticleModule } from '../core/article/article.module';
import { OrbitDbModule } from './orbit-db.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    OrbitDbModule,
    ArticleModule,
  ],
})
export class AppModule {}
