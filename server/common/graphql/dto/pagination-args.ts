import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import { Min } from 'class-validator';
import { isNil } from 'lodash';

@ArgsType()
export class PaginationArgs {
  @Field(() => Int, { nullable: true, defaultValue: 0 })
  @Min(0)
  @Transform((x) => (isNil(x.value) ? 0 : x.value))
  offset: number;

  @Field(() => Int, { nullable: true, defaultValue: 1000 })
  @Min(1)
  @Transform((x) => (isNil(x.value) ? 1000 : x.value))
  limit: number;
}
