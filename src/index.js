import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers, typeDefs } from './schema/index.js'
import dotenv from 'dotenv'

// setup apollo server
const server = new ApolloServer({ 
  typeDefs, 
  resolvers
});


// server listner
dotenv.config();
const port = process.env.PORT ?? 4000;
const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
    language: req.headers["accept-language"]
  }),
  listen: { port }
});

console.log(`🚀  Server ready at: ${url}`);
