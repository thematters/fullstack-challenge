import { Provider } from '@nestjs/common';
import { ACCOUNT_STORE_TOKEN } from '@@core/account/repositories/account.repo';
import { ARTICLE_STORE_TOKEN } from '@@core/article/repositories/article.repo';
import { AccountDb } from './entities/account';
import { ArticleDb } from './entities/article';
import { DbService } from '../src/orbit-db.service';

export const docStores: Provider[] = [
  {
    provide: ARTICLE_STORE_TOKEN,
    useFactory: async (db: DbService) =>
      db.createDocStore<ArticleDb>({
        storeName: 'articleStore',
        indexBy: 'createdBy',
      }),
    inject: [DbService],
  },
  {
    provide: ACCOUNT_STORE_TOKEN,
    useFactory: async (db: DbService) =>
      db.createDocStore<AccountDb>({ storeName: 'accountStore' }),
    inject: [DbService],
  },
];
