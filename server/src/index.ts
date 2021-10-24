/**
 * This is an incomplete script of apollo server. Please
 * make it live with features we requested. :)
 *
 */
import * as path from 'path';
import * as fs from 'fs';
const models = require('../models');
// const IpfsClient = require('ipfs-http-client')
// const OrbitDB = require('orbit-db')

require('dotenv').config()

import { ApolloServer } from 'apollo-server'
import { resolvers } from './resolvers/resolvers'
const allowedOrigins = ['http://localhost:8000', "http://localhost:5001"];
// const ipfs = IpfsClient({
//   host: 'localhost',
//   port: 5001,
//   protocol: 'http',
// })

// init server
// let db: any;
const server = new ApolloServer({
  cors: {
    origin: allowedOrigins,
  },
  context: { models },
  // context: async () => {
  //   if (db == null) {
  //     try {
  //       const orbitdb = await OrbitDB.createInstance(ipfs)
  //       db = await orbitdb.docstore("articleDB")
  //       // db = await orbitdb.create('CodeChallenge', 'keyvalue')
  //       console.log(db)
  //       // console.log(db)
  //     } catch (e: any) {
  //       console.log(e.message)
  //     }
  //   }
  //   return { db }
  // },
  debug: true,
  resolvers,
  typeDefs: fs.readFileSync(
    path.join(__dirname, './schema/schema.graphql'),
    'utf8'
  ),
})

// run server up
server
  .listen({ port: '5000' })
  .then(({ url }) => console.log(`Server is ready at ${url}`))
