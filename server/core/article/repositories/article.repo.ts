import { Injectable } from '@nestjs/common';
import { DataSource, QueryRunner } from 'typeorm';
import { ArticleDb } from '@@database/entities/article';
import { Article } from '../models/article';
import { InjectDataSource } from '@nestjs/typeorm';

interface FindOptions {
  offset: number;
  limit: number;
}

@Injectable()
export class ArticleRepo {
  @InjectDataSource()
  private dataSource: DataSource;

  private articleSearchForIdsQuery() {
    return this.dataSource
      .createQueryBuilder()
      .select('DISTINCT article.id', 'id')
      .from(ArticleDb, 'article');
  }

  private articleBaseQuery(queryRunner?: QueryRunner) {
    return this.dataSource
      .createQueryBuilder(ArticleDb, 'article', queryRunner)
      .withDeleted();
  }

  async count() {
    return this.articleSearchForIdsQuery().getCount();
  }

  async find(options: FindOptions) {
    const { offset, limit } = options;
    const ids = await this.articleSearchForIdsQuery()
      .offset(offset)
      .limit(limit)
      .getRawMany()
      .then((result) => result.map((row) => row.id));

    return this.findByIds(ids) as Promise<Article[]>;
  }

  async findByIds(
    ids: readonly number[],
    queryRunner?: QueryRunner,
  ): Promise<(Article | undefined)[]> {
    const articles = await this.articleBaseQuery(queryRunner)
      .andWhereInIds(ids)
      .getMany();

    return articles;
  }

  async findById(id: number, queryRunner?: QueryRunner) {
    const [article] = await this.findByIds([id], queryRunner);

    return article;
  }
}
