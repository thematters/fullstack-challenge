import { Module } from '@nestjs/common';
import { ArticleDb } from '../../database/entities/article';
import { DbService } from '../../src/orbit-db.service';
import { ArticleRepo, ARTICLE_STORE_TOKEN } from './repositories/article.repo';
import { ArticleResolver } from './resolvers/query/article';

@Module({
  providers: [
    ArticleRepo,
    ArticleResolver,
    {
      provide: ARTICLE_STORE_TOKEN,
      useFactory: async (db: DbService) =>
        db.createDocStore<ArticleDb>('articleStore'),
      inject: [DbService],
    },
  ],
  exports: [ArticleRepo],
})
export class ArticleModule {}
