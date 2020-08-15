// eslint-disable-next-line no-unused-vars
import { IResolvers } from 'apollo-server';

import { articles, addArticle } from './article';

export const resolvers: IResolvers = {
  Query: {
    articles,
  },

  Mutation: {
    addArticle,
  },
};

export default resolvers;
