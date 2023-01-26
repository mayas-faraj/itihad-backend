import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
    contacts: ()=> prismaClient.contact.findMany({})
  },
  Mutation: {
    createContact: async (_, args)=> await prismaClient.contact.create({
      data: {
        name: args.input.name,
        icon: args.input.icon,
        link: args.input.link,
        is_social: args.input.is_social
      }
    }),
    updateContact: async (_, args)=> await prismaClient.contact.update({
      where: {
        name: args.name
      },
      data: {
        name: args.input.name,
        icon: args.input.icon,
        link: args.input.link,
        is_social: args.input.is_social
      }
    }),
    deleteContact: async (_, args)=> await prismaClient.contact.delete({
      where: {
        name: args.name
      }
    })
  }
};

export default resolvers;
