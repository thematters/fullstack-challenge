import { Inject } from '@nestjs/common';
import { Args, Field, InputType, Mutation, Resolver } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';
import { AccountRepo } from '@@core/account/repositories/account.repo';
import { ArticleDto } from '../dto/article';
import { ArticleRepo } from '../repositories/article.repo';

@InputType('CreateArticleInput')
class CreateArticleInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  createdBy: string;
}

@Resolver()
export class CreateArticleResolver {
  @Inject(AccountRepo)
  private accountRepo: AccountRepo;

  @Inject(ArticleRepo)
  private articleRepo: ArticleRepo;

  @Mutation(() => ArticleDto)
  async createArticle(
    @Args('input', { type: () => CreateArticleInput })
    input: CreateArticleInput,
  ) {
    const user = this.accountRepo.findByAddress(input.createdBy);

    if (!user) throw new ApolloError('User not found');

    const result = await this.articleRepo.insert({
      title: input.title,
      description: input.description,
      content: input.content,
      createdBy: input.createdBy,
    });

    return result;
  }
}
