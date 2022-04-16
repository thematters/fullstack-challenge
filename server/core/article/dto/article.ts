import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Article')
export class ArticleDto {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Date)
  createdAt: Date;
}
