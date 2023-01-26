import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
    users: ()=> prismaClient.user.findMany({
      where: {
        is_admin: 0
      }
    }),
    adminUsers: ()=> prismaClient.user.findMany({
      where: {
        is_admin: 1
      }
    })
  },
  Mutation: {
    createUser: async (_, args)=> await prismaClient.user.create({
      data: {
        user_login: args.input.user_login,
        user_name: args.input.user_name,
        email: args.input.email,
        password: args.input.password,
        is_admin: 0
      }
    }),
    createAdminUser: async (_, args)=> await prismaClient.user.create({
      data: {
        user_login: args.input.user_login,
        user_name: args.input.user_name,
        email: args.input.email,
        password: args.input.password,
        is_admin: 1
      }
    }),
    updateUser: async (_, args)=> await prismaClient.user.update({
      where: {
        user_login: args.userLogin
      },
      data: {
        user_login: args.input.user_login,
        user_name: args.input.user_name,
        email: args.input.email,
        password: args.input.password,
        is_disabled: args.input.is_disabled
      }
    }),
    deleteUser: async (_, args)=> await prismaClient.user.delete({
      where: {
        user_login: args.userLogin
      }
    })
  }
};

export default resolvers;
