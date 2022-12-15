import { Injectable } from '@nestjs/common';
import { plainToModel } from '@@common/misc/plain-to-instance';
import { AccountDb } from '@@docstore/entities/account';
import { Account } from '../models/account';
import { Article } from '@@core/article/models/article';

@Injectable()
export class AccountFactory {
  createAccount(accountDb: AccountDb) {
    const article = plainToModel(Account, {
      address: accountDb.address,
      articles: (accountDb.articles ?? []).map((articleDb) =>
        plainToModel(Article, {
          id: articleDb._id,
          title: articleDb.title,
          description: articleDb.description,
          content: articleDb.content,
          createdBy: articleDb.createdBy,
        }),
      ),
    });

    return article;
  }
}
