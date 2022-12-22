import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
   types: ()=>{
      return prismaClient.type.findMany({
        select: {
          "name": true
        }
      })
    },
  },
  Mutation: {
    createType: async (_, args)=>prismaClient.type.create({data: {name: args.name}}),
    updateType: async (_, args)=>prismaClient.type.update({data: {name: args.new_name}, where: {name: args.name}}),
    deleteType: async (_, args)=>prismaClient.type.delete({where: {name: args.name}})
  }
};

export default resolvers;
