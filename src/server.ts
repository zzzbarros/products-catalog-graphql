import 'reflect-metadata'
require('dotenv/config')
import path from 'node:path'
import './db/connect'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { ProductsResolver } from './resolvers'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [ProductsResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    validate: false,
  })

  const server = new ApolloServer({ schema })

  const { url } = await server.listen()

  console.log(`HTTP server running on ${url}`)
}

bootstrap()
