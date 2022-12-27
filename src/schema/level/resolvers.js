import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
   levels: async (_, __, context)=>{
      const result = await prismaClient.level.findMany({
        include: {
          locale_level: {
            select: {
              name: true
            },
            where: {
              locale_id: context.language 
            }
          }
        }
      });
      return result.map(item=>{
        item.name=(item.locale_level && item.locale_level.length>0)?item.locale_level[0].name:"no_translation";
        delete item.locale_level;
        return item;
      });
    },
  },
  Mutation: {
    createLevel: async (_, args)=>{
      const result = await prismaClient.level.create({
        data: { 
          locale_level: {
            create: args.input.map(item=>({
              name: item.name,
              locale_id: item.locale
            }))
          }
        }
      });
      return result;
    },
    updateLevel: async (_, args, __, ___)=>{
      const result = await prismaClient.level.update({
        where: {
          id: args.id
        },
        data: { 
          locale_level: {
            upsert: args.input.map(item=>({
                where: {
                  locale_id_level_id: {
                    locale_id: item.locale,
                    level_id: args.id
                  }
                },
                update: {
                  name: item.name
                },
                create: {
                  name: item.name,
                  locale_id: item.locale
                }
            }))
          }
        }
      });
      console.log(result);
      return result;
    },
    deleteLevel: async (_, args)=>{
      const result = await prismaClient.level.delete({
        where: {
          id: args.id
        }
      });
      return result;
    }
  }
};

export default resolvers;
