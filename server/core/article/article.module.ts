import { Module } from '@nestjs/common';
import { ArticleFactory } from './repositories/article.factory';
import { ArticleRepo } from './repositories/article.repo';
import { ArticleResolver } from './resolvers/query/article';
import { CreateArticleResolver } from './resolvers/mutation.create-article';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [AccountModule],
  providers: [
    ArticleFactory,
    ArticleRepo,
    ArticleResolver,
    CreateArticleResolver,
  ],
  exports: [ArticleRepo],
})
export class ArticleModule {}
