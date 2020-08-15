/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 */

import { ApolloServer } from 'apollo-server';

import * as types from './types';
import { resolvers } from './resolvers';

require('dotenv').config();

// init server
const server = new ApolloServer({
  cors: {
    origin: [],
  },
  debug: true,
  resolvers,
  typeDefs: Object.values(types),
});

const port = process.env.SERVER_PORT || 4000;

// run server up
server
  .listen({ port })
  .then(({ url }) => console.log(`Server is ready at ${url}`));
