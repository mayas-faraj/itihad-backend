import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers, typeDefs } from './schema/index.js'

const server = new ApolloServer({ 
  typeDefs, 
  resolvers
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
    language: req.headers["accept-language"]
  }),
  listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);
