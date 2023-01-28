import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
    events: async (_, args, context)=>{
      const result = await prismaClient.post.findMany({
        skip: args.skip,
        take: args.take,
        where: {
          category: {
            locale_category: {
              some: {
                name: "event"
              }
            }
          }
        },
        orderBy: {
          display_order: "asc",
        },
        include: {
          locale_post: {
            where: {
              locale_id: context.language 
            },
          }
        }
      });
      const localeProps=["title", "excerpt", "content", "button_text"];

      return result.map(item=>{
        localeProps.forEach(prop=>{
          if(item.locale_post!=undefined && item.locale_post.length>0) {
            item[prop]=item.locale_post[0][prop];
            delete item.locale_post[0][prop];
          }
        })
        
        return item;
      });
    },
    eventBySlug: async (_, args, context)=>{
      const result = await prismaClient.post.findUnique({
        where: {
          slug: args.slug
        },
        include: {
          event: {
            select: {
              started_on: true,
              end_on: true
            }
          },
          locale_post: {
            where: {
              locale_id: context.language 
            }
          },
          post_image: {
            include: {
              locale_post_image: {
                where: {
                  locale_id: context.language 
                }
              }
            }
          },
          type: {
            select: {
              name: true
            }
          }
        }
      });

      const localeProps=["title", "excerpt", "content", "button_text"];
      result.type=result.type?.name;
      if(result.event!=undefined) {
        result.started_on=result.event.started_on;
        result.end_on=result.event.end_on;
      }

      if(result.post_image!=undefined)
        for(let i=0; i<result.post_image.length; i++)
          if(result.post_image[i].locale_post_image!=undefined && result.post_image[i].locale_post_image.length>0) {
          result.post_image[i].title=result.post_image[i].locale_post_image[0].title;
      }
      result.images=result.post_image;
      delete result.post_image;

      localeProps.forEach(prop=>{
        if(result.locale_post!=undefined && result.locale_post.length>0) {
          result[prop]=result.locale_post[0][prop];
          delete result.locale_post[0][prop];
        }
      })
      
      return result;
    }
  },
  Mutation: {
    createEvent: async (_, args) => {
      const result = await prismaClient.post.create({
        data: {
          category: {
            connect: {
              slug: "event"
            }
          },
          type: {
            connect: {
              name: args.input.type
            }
          },
          slug: args.input.slug,
          description: args.input.description,
          button_link: args.input.button_link,
          feature_image_src: args.input.feature_image_src,
          feature_image_alt: args.input.feature_image_alt,
          og_image_src: args.input.og_image_src,
          user_post_created_byTouser: {
            connect: {
              user_login: args.input.created_by
            }
          },
          locale_post: {
            create: args.input.locales?.map(item=>({
              title: item.title,
              excerpt: item.excerpt,
              content: item.content,
              button_text: item.button_text,
              locale_id: item.locale
            }))
          },
          event: {
            create: {
              started_on: new Date(args.input.started_on),
              end_on: new Date(args.input.end_on)
            }
          }
        }
      });
      return result;
    },
    updateEvent: async (_, args) => {
      const result = await prismaClient.post.update({
        where: {
          id: args.id
        },
        data: {
          type: args.input.type?{
            connect: {
              name: args.input.type
            }
          }:undefined,
          slug: args.input.slug,
          description: args.input.description,
          button_link: args.input.button_link,
          feature_image_src: args.input.feature_image_src,
          feature_image_alt: args.input.feature_image_alt,
          og_image_src: args.input.og_image_src,
          locale_post: {
            upsert: args.input.locales?.map(item=>({
              where: {
                locale_id_post_id: {
                  locale_id: item.locale,
                  post_id: args.id
                }
              },
              create: {
                title: item.title,
                excerpt: item.excerpt,
                content: item.content,
                button_text: item.button_text,
                locale_id: item.locale
              },
              update: {
                title: item.title,
                excerpt: item.excerpt,
                content: item.content,
                button_text: item.button_text
              }
            }))
          },
          event: {
            update: {
                started_on: args.input.started_on ? new Date(args.input.started_on) : undefined,
                end_on: args.input.end_on ? new Date(args.input.end_on) : undefined
              }
           }
        }
      });

      return result;
    },
    deleteEvent: async (_, args) => {
      const result = await prismaClient.post.delete({
        where: {
          id: args.id
        }
      });
      return result;
    },
  }
};

export default resolvers;
