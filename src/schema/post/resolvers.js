import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
    postsByCategory: async (_, args, context)=>{
      const result = await prismaClient.post.findMany({
        skip: args.skip,
        take: args.take,
        where: {
          category: {
            locale_category: {
              some: {
                name: args.category
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
            }
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
    postsByCategoryEnabled: async (_, args, context)=>{
      const result = await prismaClient.post.findMany({
        skip: args.skip,
        take: args.take,
        where: {
          AND: [
            {
              category: {
                locale_category: {
                  some: {
                    name: args.category
                  }
                }
              }
            },
            {
              is_disabled: 0
            }
          ]
        },
        orderBy: {
          display_order: "asc",
        },
        include: {
          locale_post: {
            where: {
              locale_id: context.language 
            }
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
    postBySlug: async (_, args, context)=>{
      const result = await prismaClient.post.findUnique({
        where: {
          slug: args.slug
        },
        include: {
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
          category: {
            include: {
              locale_category: {
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
      if(result.category!=undefined && result.category.locale_category!=undefined && result.category.locale_category.length>0) {
          result.category=result.category.locale_category[0].name;
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
    createPost: async (_, args) => {
      const result = await prismaClient.post.create({
        data: {
          category: {
            connect: {
              slug: args.input.category
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
          }
        }
      });
      return result;
    },
    updatePost: async (_, args) => {
      const result = await prismaClient.post.update({
        where: {
          id: args.id
        },
        data: {
          category: args.input.category?{
            connect: {
              slug: args.input.category
            }
          }:undefined,
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
          }
        }
      });

      return result;
    },
    deletePost: async (_, args) => {
      const result = await prismaClient.post.delete({
        where: {
          id: args.id
        }
      });
      return result;
    },
    createPostImage: async (_, args) => {
      const result = await prismaClient.post_image.create({
        data: {
          post: {
            connect: {
              id: args.postId
            }
          },
          image_src: args.input.image_src,
          image_alt: args.input.image_alt,
          locale_post_image: {
            create: args.input.locales?.map(item=>({
              title: item.title,
              locale_id: item.locale
            }))
          }
        }
      });

      return result;
    },
    updatePostImage: async (_, args) => {
      const result = await prismaClient.post_image.update({
        where: {
          id: args.id
        },
        data: {
          image_src: args.input.image_src,
          image_alt: args.input.image_alt,
          locale_post_image: {
            upsert: args.input.locales?.map(item=>({
              where: {
                locale_id_post_image_id: {
                  locale_id: item.locale,
                  post_image_id: args.id
                }
              },
              create: {
                title: item.title,
                locale_id: item.locale
              },
              update: {
                title: item.title
              }
            }))
          }
        }
      });
      return result;
    },
    deletePostImage: async (_, args) => {
      const result = await prismaClient.post_image.delete({
        where: {
          id: args.id
        }
      });
      return result;
    }
  }
};

export default resolvers;
