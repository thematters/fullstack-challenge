import { Module } from '@nestjs/common';
import { AccountDb } from 'docstore/entities/account';
import { DbService } from '../../src/orbit-db.service';
import { AccountRepo } from './repositories/account.repo';
import { AccountResolver } from './resolvers/query.account';
import { AccountFactory } from './repositories/account.factory';

@Module({
  providers: [AccountFactory, AccountRepo, AccountResolver],
  exports: [AccountRepo],
})
export class AccountModule {}
