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
  },
  Mutation: {
    createCategory: async (_, args)=>{
      const result = await prismaClient.category.create({
        data: { 
          slug: args.input.slug,
          img_src: args.input.img_src,
          img_alt: args.input.img_alt,
          locale_category: {
            create: args.input.locales.map(
              locale => ({
                name: locale.name,
                locale: locale.locale
              })
            )
          }
        }
      });
      return result;
    },
    updateCategory: async (_, args, __, ___)=>{
      const result = await prismaClient.category.update({
        where: {
          id: args.id
        },
        data: { 
          locale_category: {
            upsert: args.input.map(item=>({
                where: {
                  locale_id_category_id: {
                    locale_id: item.locale,
                    category_id: args.id
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
    deleteCategory: async (_, args)=>{
      const result = await prismaClient.category.delete({
        where: {
          id: args.id
        }
      });
      return result;
    }
  }
};

export default resolvers;
