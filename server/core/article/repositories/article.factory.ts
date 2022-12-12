import { Injectable } from '@nestjs/common';
import { ArticleDb } from '@@database/entities/article';
import { plainToModel } from '@@common/misc/plain-to-instance';
import { Article } from '../models/article';

@Injectable()
export class ArticleFactory {
  createArticle(articleDb: ArticleDb) {
    const article = plainToModel(Article, {
      id: articleDb.id,
      title: articleDb.title,
      description: articleDb.description,
      createdAt: articleDb.createdAt,
      createdBy: articleDb.createdBy,
      deletedAt: articleDb.deletedAt,
    });

    return article;
  }
}
