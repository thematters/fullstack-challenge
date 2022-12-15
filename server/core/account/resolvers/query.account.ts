import { Inject } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-express';
import { AccountDto } from '../dto/account';
import { AccountRepo } from '../repositories/account.repo';

@Resolver()
export class AccountResolver {
  @Inject(AccountRepo)
  private accountRepo: AccountRepo;

  @Query(() => AccountDto)
  async account(@Args('address') address: string) {
    const account = await this.accountRepo.findByAddress(address);

    if (!account) {
      throw new ApolloError('Account not found');
    }

    return account;
  }
}
