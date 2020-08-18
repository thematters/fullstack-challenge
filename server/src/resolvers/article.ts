/* eslint-disable no-unused-vars */
import { IFieldResolver } from 'apollo-server';

import { Context } from '../context';

import {
  MutationAddArticleArgs,
  Mutation,
  Query,
  QueryArticleArgs,
  QueryArticlesArgs,
} from '../types';

export const articles: IFieldResolver<
  null,
  Context,
  QueryArticlesArgs
> = async (
  _,
  {
    first = -1,
    last = -1,
    after,
    before,
  },
  { dataSources: { articleStore } },
): Promise<Query['articles']> => {
  const nodes = await articleStore.find({ limit: first! || last!, lt: after!, gt: before! });
  const hasPrev = !!(await articleStore.find({ gt: nodes[0]?.id })).length;
  const hasNext = !!(await articleStore.find({ lt: nodes[nodes.length - 1]?.id })).length;
  const total = await articleStore.count();

  return {
    nodes,
    pageInfo: {
      hasPrev,
      hasNext,
      total,
    },
  };
};

export const article: IFieldResolver<
  null,
  Context,
  QueryArticleArgs
> = async (
  _,
  { id },
  { dataSources: { articleStore } },
): Promise<Query['article']> => articleStore.findById(id);

export const addArticle: IFieldResolver<
  null,
  Context,
  MutationAddArticleArgs
> = async (
  _,
  { input },
  { dataSources: { articleStore } },
): Promise<Mutation['addArticle']> => {
  const hash = await articleStore.create(input);

  return {
    id: hash,
    ...input,
  };
};
