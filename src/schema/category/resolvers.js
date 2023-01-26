import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
   categories: async (_, __, context)=>{
      const result = await prismaClient.category.findMany({
        include: {
          locale_category: {
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
        item.name=(item.locale_category && item.locale_category.length>0)?item.locale_category[0].name:"no_translation";
        delete item.locale_category;
        return item;
      });
    },
  }
};

export default resolvers;
