// eslint-disable-next-line no-unused-vars
import { IResolvers } from 'apollo-server';

import { article, articles, addArticle } from './article';

export const resolvers: IResolvers = {
  Query: {
    article,
    articles,
  },

  Mutation: {
    addArticle,
  },
};

export default resolvers;
