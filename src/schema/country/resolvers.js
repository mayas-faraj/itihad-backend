import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
   countries: async (_, __, context)=>{
      const result = await prismaClient.country.findMany({
        include: {
          locale_country: {
            select: {
              name: true
            },
            where: {
              locale: {
                name: context.language
              }
            }
          }
        }
      });
      return result.map(item=>{
        item.name=(item.locale_country && item.locale_country.length>0)?item.locale_country[0].name:"no_translation";
        delete item.locale_country;
        return item;
      });
    },
  },
  Mutation: {
    createCountry: async (_, args)=>{
      const result = await prismaClient.country.create({
        data: {
          locale_country: {
            create: {
              name: args.name,
              locale: {
                connect: {
                  name: args.locale
                }
              }
            }
          }
        }
      });
      
      return result.id!=null;
    }
  }
};

export default resolvers;
