/* eslint-disable no-unused-vars */
import FeedStore from 'orbit-db-feedstore';
import { getDB } from '../../db';

import { Article, AddArticleInput } from '../types';

class ArticleStore {
  store: FeedStore<Article>;

  async loadStore() {
    if (this.store) return;

    const db = await getDB();
    this.store = await db.feed('article');
  }

  async find() {
    await this.loadStore();

    return this.store.iterator({ limit: -1 })
      .collect()
      .map(({ payload, hash }) => ({
        ...payload.value,
        id: hash,
      }));
  }

  async create(article: AddArticleInput) {
    await this.loadStore();

    return this.store.add(article);
  }
}

export const articleStore = new ArticleStore();
export default articleStore;
