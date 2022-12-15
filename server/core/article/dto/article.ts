import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Article')
export class ArticleDto {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  content: string;

  @Field(() => String)
  createdBy: string;
}
