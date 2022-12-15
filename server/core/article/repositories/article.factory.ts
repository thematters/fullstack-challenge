import { Injectable } from '@nestjs/common';
import { ArticleDb } from '@@docstore/entities/article';
import { plainToModel } from '@@common/misc/plain-to-instance';
import { Article } from '../models/article';

@Injectable()
export class ArticleFactory {
  createArticle(articleDb: ArticleDb) {
    const article = plainToModel(Article, {
      id: articleDb._id,
      title: articleDb.title,
      description: articleDb.description,
      content: articleDb.content,
      createdBy: articleDb.createdBy,
    });

    return article;
  }
}
