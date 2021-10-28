/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 *
 */
import * as path from 'path';
import * as fs from 'fs';
import database from './utils/database'

require('dotenv').config()

import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers/resolvers'
const allowedOrigins = [process.env.FRONTEND_URL as string];

const server = new ApolloServer({
  cors: {
    origin: allowedOrigins,
  },
  debug: true,
  resolvers,
  typeDefs: fs.readFileSync(
    path.join(__dirname, './schema/schema.graphql'),
    'utf8'
  ),
})

const startsServer = async () => {
  await database.startDB()
  server
    .listen({ port: process.env.PORT })
    .then(({ url }) => console.log(`Server is ready at ${url}`))
}

startsServer()