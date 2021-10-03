
require('dotenv').config()

import { ApolloServer } from 'apollo-server'
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers'
import typeDefs from './schemas'

// init server
const server = new ApolloServer({
  cors: {
    origin: "*",
  },
  debug: true,
  dataSources: () => ({ }),
  schema: makeExecutableSchema({
    typeDefs,
    resolvers,
  }),
  // formatResponse: (resp) => {
  //   if (Math.floor(Math.random() * 2))
  //     throw 'mock error';
    
  //   return resp  
  // }
})

// run server up
server
  .listen({ port: process.env.SERVER_PORT })
  .then(({ url }) => console.log(`Server is ready at ${url}`))
