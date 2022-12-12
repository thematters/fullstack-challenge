import { Inject, ParseIntPipe } from '@nestjs/common';
import { Args, ID, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';
import { Paginated } from '@@common/graphql/paginated';
import { PaginationArgs } from '@@common/graphql/dto/pagination-args';
import { ArticleDto } from '../../dto/article';
import { ArticleRepo } from '../../repositories/article.repo';

@ObjectType()
class ArticlePage extends Paginated(ArticleDto) {}

@Resolver()
export class ArticleResolver {
  @Inject(ArticleRepo)
  private articleRepo: ArticleRepo;

  @Query(() => ArticlePage)
  async articles(@Args() { offset, limit }: PaginationArgs) {
    const [total, list] = await Promise.all([
      this.articleRepo.count(),
      this.articleRepo.find({ offset, limit }),
    ]);

    return { total, list };
  }

  @Query(() => ArticleDto)
  async article(@Args('id', { type: () => ID }, ParseIntPipe) id: string) {
    const article = await this.articleRepo.findById(id);

    if (!article) {
      throw new ApolloError('Article Not Found.');
    }

    return article;
  }
}
