// eslint-disable-next-line no-unused-vars
import { IResolvers } from 'apollo-server';

import { articles } from './article';

export const resolvers: IResolvers = {
  Query: {
    articles,
  },

  // Mutation: {},
};

export default resolvers;
