import { Inject, Injectable } from '@nestjs/common';
import { DocumentStore } from 'orbit-db-docstore';
import { AccountDb } from 'docstore/entities/account';
import { AccountFactory } from './account.factory';
import { Account } from '../models/account';

export const ACCOUNT_STORE_TOKEN = Symbol('accountStore');
interface FindOptions {
  offset: number;
  limit: number;
}

@Injectable()
export class AccountRepo {
  @Inject(ACCOUNT_STORE_TOKEN)
  accountStore: DocumentStore<AccountDb>;

  @Inject(AccountFactory)
  accountFactory: AccountFactory;

  findByAddress = async (address: string) => {
    const [accountDb] = await this.accountStore.get(address);

    return this.accountFactory.createAccount(accountDb);
  };

  updateByAddress = async (account: Account) => {
    await this.accountStore.put(account);
    return true;
  };

  async count() {
    const accountDbs = await this.accountStore.get('');

    return accountDbs.length;
  }

  async find(options: FindOptions) {
    const { offset, limit } = options;

    /**
     * pagination issue: https://github.com/orbitdb/orbit-db/issues/819#issuecomment-702846960
     * seems like don't have a solution
     */

    const accountDbs = await this.accountStore.get('');

    return accountDbs
      .map((account) => this.accountFactory.createAccount(account))
      .slice(offset, limit);
  }
}
