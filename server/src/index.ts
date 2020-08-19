/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 */

// eslint-disable-next-line no-unused-vars
import { ApolloServer } from 'apollo-server';

import * as types from './schema';
import { resolvers } from './resolvers';
import * as stores from './stores';

require('dotenv').config();

// init server
const server = new ApolloServer({
  debug: true,
  typeDefs: Object.values(types),
  // @ts-ignore
  resolvers,
  dataSources: () => stores,
});

const port = process.env.SERVER_PORT || 4000;

// run server up
server
  .listen({ port })
  .then(({ url }) => console.log(`Server is ready at ${url}`));
