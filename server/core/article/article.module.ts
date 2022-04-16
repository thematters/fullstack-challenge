import { Module } from '@nestjs/common';
import { ArticleRepo } from './repositories/article.repo';
import { ArticleResolver } from './resolvers/query/article';

@Module({
  providers: [ArticleRepo, ArticleResolver],
  exports: [ArticleRepo],
})
export class ArticleModule {}
