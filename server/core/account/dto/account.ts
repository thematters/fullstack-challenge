import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ArticleDto } from '@@core/article/dto/article';
import { Article } from '@@core/article/models/article';

@ObjectType('Account')
export class AccountDto {
  @Field(() => ID)
  address: string;

  @Field(() => [ArticleDto])
  articles: Article[];
}
