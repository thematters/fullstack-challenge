/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 *
 */

require('dotenv').config()

import { ApolloServer, gql } from 'apollo-server'

// init server
const server = new ApolloServer({
  cors: {
    origin: [],
  },
  dataSources: () => ({ }),
  debug: true,
  resolvers: {
    Query: {},
    Mutation: {},
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
})

// run server up
server
  .listen({ port: '' })
  .then(({ url }) => console.log(`Server is ready at ${url}`))
