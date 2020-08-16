/* eslint-disable no-unused-vars */
import { IFieldResolver } from 'apollo-server';

import { articleStore } from '../stores';

import {
  MutationAddArticleArgs,
  Mutation,
  Query,
  QueryArticleArgs,
  QueryArticlesArgs,
} from '../types';

export const articles: IFieldResolver<
  null,
  null,
  QueryArticlesArgs
> = async (_, { first = -1, after }): Promise<Query['articles']> => {
  const nodes = await articleStore.find({ limit: first!, lt: after! });
  const hasNext = !!(await articleStore.find({
    limit: -1,
    lt: nodes[nodes.length - 1]?.id,
  })).length;
  const total = await articleStore.count();

  return {
    nodes,
    pageInfo: {
      hasNext,
      total,
    },
  };
};

export const article: IFieldResolver<
  null,
  null,
  QueryArticleArgs
> = async (_, { id }): Promise<Query['article']> => articleStore.findById(id);

export const addArticle: IFieldResolver<
  null,
  null,
  MutationAddArticleArgs
> = async (_, { input }): Promise<Mutation['addArticle']> => {
  const hash = await articleStore.create(input);

  return {
    id: hash,
    ...input,
  };
};
