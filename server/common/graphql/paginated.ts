import { Abstract, Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export function Paginated<T>(classRef: Type<T> | Abstract<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class PageType {
    @Field(() => Int)
    total: number;

    @Field(() => [classRef])
    list: T[];
  }

  return PageType;
}
