/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 */

import { ApolloServer, gql } from 'apollo-server';

require('dotenv').config();

// init server
const server = new ApolloServer({
  cors: {
    origin: [],
  },
  dataSources: () => ({ }),
  debug: true,
  resolvers: {
    Query: {},
    // Mutation: {},
  },
  typeDefs: gql`
    type Article {
      title: String
      content: String
    }

    type Query {
      articles: [Article]
    }
  `,
});

const port = process.env.SERVER_PORT || 4000;

// run server up
server
  .listen({ port })
  .then(({ url }) => console.log(`Server is ready at ${url}`));
