// eslint-disable-next-line no-unused-vars
import { Resolvers } from '../generated/graphql';

import { article, articles, addArticle } from './article';

export const resolvers: Resolvers = {
  Query: {
    article,
    articles,
  },

  Mutation: {
    addArticle,
  },
};

export default resolvers;
