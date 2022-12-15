import { Prisma } from '../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
   setting: (parent, args)=>{
      return prismaClient.setting.findUnique({
        where: {
          name: args.name
        },
        select: {
          value: true
        }
      })
    },

  },
  Mutation: {
    updateSetting: async (parent, args)=>{
      return prismaClient.setting.upsert({
        where: { name: args.name },
        update: { value: args.value},
        create: { name: args.name, value: args.value }
      });
    },
    deleteSetting: (parent, args)=>{
      return prismaClient.setting.delete({
        where: { name: args.name }
      });
    }
  }
};

const typeDefs=`#graphql
  type Setting {
    name: String
    value: String
  }

  type Query {
    setting(name: String!): Setting
  }

  type Mutation {
    updateSetting(name: String!, value: String!): Setting
    deleteSetting(name: String!): Setting
  }
`;

export { typeDefs, resolvers };
