import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import lodash from 'lodash'; 
import { resolvers as pageResolvers, typeDefs as pageTypeDefs } from './schema/page.js'
import { resolvers as settingResolvers, typeDefs as settingTypeDefs } from './schema/setting.js'
import { resolvers as contactResolvers, typeDefs as contactTypeDefs } from './schema/contact.js'
import { resolvers as messageResolvers, typeDefs as messageTypeDefs } from './schema/message.js'
import { resolvers as menuResolvers, typeDefs as menuTypeDefs } from './schema/menu.js'

const server = new ApolloServer({
  typeDefs: [pageTypeDefs, settingTypeDefs, contactTypeDefs, messageTypeDefs, menuTypeDefs],
  resolvers: lodash.merge(pageResolvers, settingResolvers, contactResolvers, messageResolvers, menuResolvers)
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({
    locale: req.headers["accept-language"]
  }),
  listen: { port: 4000 }
});
console.log(`🚀  Server ready at: ${url}`);
