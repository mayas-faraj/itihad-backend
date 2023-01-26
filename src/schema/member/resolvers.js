import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
    members: async (_, args, context)=>{
      const result = await prismaClient.member.findMany({
        skip: args.skip,
        take: args.take,
        orderBy: {
          display_order: "asc",
        },
        include: {
          locale_member: {
            where: {
              locale_id: context.language 
            }
          },
          country: {
            include: {
              locale_country: {
                where: {
                  locale_id: context.language 
                }
              }
            },
          }
        }
      });
      const localeProps=["name", "excerpt", "company", "position"];
      return result.map(item=>{
        localeProps.forEach(prop=>item[prop]=(item.locale_member && item.locale_member.length>0)?item.locale_member[0][prop]:"no_translation");
        item.country=(item.country.locale_country && item.country.locale_country.length>0)?item.country.locale_country[0].name:"no-country";
        delete item.locale_member;
        delete item.country.locale_country;
        return item;
      });
    },
    membersEnabled: async (_, args, context)=>{
      const result = await prismaClient.member.findMany({
        skip: args.skip,
        take: args.take,
        orderBy: {
          display_order: "asc",
        },
        where: {
          is_disabled: 0
        },
        include: {
          locale_member: {
            where: {
              locale_id: context.language 
            }
          },
          country: {
            include: {
              locale_country: {
                where: {
                  locale_id: context.language 
                }
              }
            },
          }
        }
      });
      const localeProps=["name", "excerpt", "company", "position"];
      return result.map(item=>{
        localeProps.forEach(prop=>item[prop]=(item.locale_member && item.locale_member.length>0)?item.locale_member[0][prop]:"no_translation");
        item.country=(item.country.locale_country && item.country.locale_country.length>0)?item.country.locale_country[0].name:"no-country";
        delete item.locale_member;
        delete item.country.locale_country;
        return item;
      });
    },
  },
  Mutation: {
    createMember: async (_, args) => {
      const result = await prismaClient.member.create({
        data: {
          tel: args.input.tel,
          fax: args.input.fax,
          email: args.input.email,
          website: args.input.website,
          address: args.input.address,
          display_order: args.input.display_order,
          image_src: args.input.image_src,
          country_id: args.input.country_id,
          locale_member: {
            create: args.input.locales?.map(item=>({
              name: item.name,
              excerpt: item.excerpt,
              company: item.company,
              position: item.position,
              locale_id: item.locale
            }))
          }
        }
      });
      return result;
    },
    updateMember: async (_, args) => {
      const result = await prismaClient.member.update({
        where: {
          id: args.id
        },
        data: {
          tel: args.input.tel,
          fax: args.input.fax,
          email: args.input.email,
          website: args.input.website,
          address: args.input.address,
          display_order: args.input.display_order,
          image_src: args.input.image_src,
          country_id: args.input.country_id,
          locale_member: {
            upsert: args.input.locales?.map(item=>({
              where: {
                locale_id_member_id: {
                  locale_id: item.locale,
                  member_id: args.id
                }
              },
              update: {
                name: item.name,
                excerpt: item.excerpt,
                company: item.company,
                position: item.position,
              },
              create: {
                name: item.name,
                excerpt: item.excerpt,
                company: item.company,
                position: item.position,
                locale_id: item.locale
              }
            }))
          }
        }
      });
      return result;
    },
    deleteMember: async (_, args) => {
      const result = await prismaClient.member.delete({
        where: {
          id: args.id
        }
      });
      return result;
    }
  }
};

export default resolvers;
