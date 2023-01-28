import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
   menu: async (_, args, context)=>{
      const result = await prismaClient.menu.findUnique({
        where: {
          name: args.name
        },
        include: {
          menu_item: {
            include: {
              locale_menu_item: {
                select: {
                  title: true
                },
                where: {
                  locale_id: context.language
                }
              },
              post: {
                select: {
                  slug: true
                }
              }
            },
            orderBy: {
              item_order: 'asc'
            }
          },
        }
      });

      return result.menu_item.map(item=>{
        item.title=(item.locale_menu_item && item.locale_menu_item.length>0)?item.locale_menu_item[0].title:"no_translation";
        delete item.locale_category;

        item.slug=item.post?item.post.slug:"#!";
        delete item.post;

        return item;
      });
    },
  }
};

export default resolvers;
