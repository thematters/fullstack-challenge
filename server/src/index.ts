
require('dotenv').config()

import * as fs from 'fs'
import * as path from 'path'

import { ApolloServer} from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import  { resolvers } from './resolvers/resolvers'
import database from './service/dbService'
import express from "express"
import http from 'http'


let start = async () => {
  const app = express()

  const httpServer = http.createServer(app)
  const typeDefs = fs.readFileSync(path.join(__dirname, './schema/schema.graphql')
  , 'utf-8')

  const server = new ApolloServer({
    debug: true,
    resolvers,
    typeDefs,
    plugins:[ApolloServerPluginDrainHttpServer( { httpServer }  )]
  })

  await server.start()
  server.applyMiddleware({app, path: '/'})
  await database.startDB()

  await new Promise<void>(resolve => httpServer.listen({ port: process.env.SERVER_PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

start()


