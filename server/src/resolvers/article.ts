/* eslint-disable no-unused-vars */
import { IFieldResolver } from 'apollo-server';

import { articleStore } from '../stores';

import {
  MutationAddArticleArgs,
  Mutation,
  Query,
} from '../types';

export const articles: IFieldResolver<
  null,
  null
> = async (): Promise<Query['articles']> => articleStore.find();

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
