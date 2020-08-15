/* eslint-disable no-unused-vars */
import { IFieldResolver } from 'apollo-server';

import {
  MutationAddArticleArgs,
  Mutation,
  Query,
} from '../types';

export const articles: IFieldResolver<
  null,
  null
> = async (): Promise<Query['articles']> => ([{
  id: '1',
  title: 'Hi',
  content: 'content',
}]);

export const addArticle: IFieldResolver<
  null,
  null,
  MutationAddArticleArgs
> = async (_, { input }): Promise<Mutation['addArticle']> => ({
  id: '1',
  title: 'Hi',
  content: 'content',
});
