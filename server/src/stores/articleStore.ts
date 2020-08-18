/* eslint-disable no-unused-vars */
import { Config } from 'apollo-server';
import FeedStore from 'orbit-db-feedstore';
import { DataSource } from 'apollo-datasource';

import { getDB } from '../../db';
import { Article, AddArticleInput } from '../types';

interface FindFilter {
  gt?: string;
  gte?: string;
  lt?: string;
  lte?: string;
  limit?: number;
  reverse?: boolean;
}

class ArticleStore extends DataSource {
  context: Config['context'];

  store: FeedStore<Article>;

  initialize({ context }: Config) {
    this.context = context;
  }

  async loadStore() {
    if (this.store) return;

    const db = await getDB();
    this.store = await db.feed('article');
  }

  async findById(id: string) {
    await this.loadStore();

    const { hash, payload } = this.store.get(id);

    return {
      ...payload.value,
      id: hash,
    };
  }

  async find(findFilter: FindFilter) {
    await this.loadStore();

    return this.store
      .iterator({
        limit: -1,
        reverse: true,
        ...findFilter,
      })
      .collect()
      .map(({ payload, hash }) => ({
        ...payload.value,
        id: hash,
      }));
  }

  async count() {
    await this.loadStore();

    return this.store
      .iterator({ limit: -1 })
      .collect()
      .length;
  }

  async create(input: AddArticleInput) {
    await this.loadStore();

    return this.store.add({
      ...input,
      createdAt: new Date().toISOString(),
    });
  }
}

export const articleStore = new ArticleStore();
export default articleStore;
