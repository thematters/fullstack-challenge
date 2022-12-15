import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { OrbitDbModule } from './orbit-db.module';
import { ArticleModule } from '@@core/article/article.module';
import { AccountModule } from '@@core/account/account.module';
import { GlobalModule } from '@@common/misc/global-module';
import { docStores } from '../docstore/all-store';

@Module({
  imports: [
    // TypeOrmModule.forRoot(ormConfig),
    GlobalModule.forRoot(docStores),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    OrbitDbModule,
    ArticleModule,
    AccountModule,
  ],
})
export class AppModule {}
