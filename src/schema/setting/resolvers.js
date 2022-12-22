import { Prisma } from '../../prismaClient.js'
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
    updateSetting: async (_, args)=>{
      return prismaClient.setting.upsert({
        where: { name: args.name },
        update: { value: args.value},
        create: { name: args.name, value: args.value }
      });
    },
    deleteSetting: (_, args)=>{
      return prismaClient.setting.delete({
        where: { name: args.name }
      });
    }
  }
};

export default resolvers;
