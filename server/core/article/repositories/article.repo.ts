import { Inject, Injectable } from '@nestjs/common';
import { DocumentStore } from 'orbit-db-docstore';
import { ArticleDb } from '@@docstore/entities/article';
import { ArticleFactory } from './article.factory';
import { plainToDb } from '@@common/misc/plain-to-instance';
import { v4 as uuid } from 'uuid';

export const ARTICLE_STORE_TOKEN = Symbol('articleStore');
interface FindOptions {
  offset: number;
  limit: number;
}

interface insertArticleInput {
  title: string;
  description?: string;
  content: string;
  createdBy: string;
}

@Injectable()
export class ArticleRepo {
  @Inject(ARTICLE_STORE_TOKEN)
  articleStore: DocumentStore<ArticleDb>;

  @Inject(ArticleFactory)
  articleFactory: ArticleFactory;

  findById = async (articleId: string) => {
    const [articleDb] = await this.articleStore.get(articleId);

    return this.articleFactory.createArticle(articleDb);
  };

  insert = async (input: insertArticleInput) => {
    const _id = uuid();

    const articleDb = plainToDb(ArticleDb, {
      _id,
      title: input.title,
      description: input.description,
      content: input.content,
      createdBy: input.createdBy,
    });

    await this.articleStore.put(articleDb);

    return this.articleFactory.createArticle(articleDb);
  };

  removeById = async (articleId: string) => {
    await this.articleStore.del(articleId);
    return true;
  };

  async count() {
    const articleDbs = await this.articleStore.get('');

    return articleDbs.length;
  }

  async find(options: FindOptions) {
    const { offset, limit } = options;

    /**
     * pagination issue: https://github.com/orbitdb/orbit-db/issues/819#issuecomment-702846960
     * seems like don't have a solution
     */

    const articleDbs = await this.articleStore.get('');

    return articleDbs
      .map((articleDb) => this.articleFactory.createArticle(articleDb))
      .slice(offset, limit);
  }
}
