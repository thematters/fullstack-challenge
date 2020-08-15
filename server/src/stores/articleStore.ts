/* eslint-disable no-unused-vars */
import FeedStore from 'orbit-db-feedstore';
import { getDB } from '../../db';

import { Article } from '../types';

class ArticleStore {
  store: FeedStore<Article[]>;

  async loadStore() {
    const db = await getDB();
    this.store = await db.feed('article');
  }

  async create(article: Article) {
    await this.loadStore();

    return this.store.add(article);
  }
}

export const store = new ArticleStore();
export default store;
