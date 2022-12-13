import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Account')
export class AccountDto {
  @Field()
  id: string;

  @Field()
  address: string;

  @Field()
  createdBy: string;
}
