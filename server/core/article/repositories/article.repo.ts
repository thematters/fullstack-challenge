import { Inject, Injectable } from '@nestjs/common';
import { ArticleDto } from '../dto/article';
import { DocumentStore } from 'orbit-db-docstore';
import { ArticleDb } from '@@database/entities/article';
import { ArticleFactory } from './article.factory';

export const ARTICLE_STORE_TOKEN = Symbol('articleStore');
interface FindOptions {
  offset: number;
  limit: number;
}

@Injectable()
export class ArticleRepo {
  @Inject(ARTICLE_STORE_TOKEN)
  docStore: DocumentStore<ArticleDb>;

  @Inject(ArticleFactory)
  articleFactory: ArticleFactory;

  findById = async (articleId: string) => {
    const articleDb = await this.docStore.get(articleId);

    return this.articleFactory.createArticle(articleDb);
  };

  updateById = async (article: ArticleDto) => {
    await this.docStore.put(article.id, article);
    return true;
  };

  removeById = async (articleId: string) => {
    await this.docStore.del(articleId);
    return true;
  };

  async count() {
    return Object.values(this.docStore.all).length;
  }

  async find(options: FindOptions) {
    const { offset, limit } = options;

    /**
     * pagination issue: https://github.com/orbitdb/orbit-db/issues/819#issuecomment-702846960
     * seems like don't have a solution
     */

    return Object.values(this.docStore.all).slice(offset, limit);
  }
}
