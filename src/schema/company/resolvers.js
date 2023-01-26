import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
    companies: async (_, args, context)=>{
      const result = await prismaClient.company.findMany({
        skip: args.skip,
        take: args.take,
        orderBy: {
          display_order: "asc",
        },
        include: {
          locale_company: {
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
      const localeProps=["name", "excerpt", "representer"];
      return result.map(item=>{
        localeProps.forEach(prop=>item[prop]=(item.locale_company && item.locale_company.length>0)?item.locale_company[0][prop]:"no_translation");
        item.country=(item.country.locale_country && item.country.locale_country.length>0)?item.country.locale_country[0].name:"no-country";
        delete item.locale_company;
        delete item.country.locale_country;
        return item;
      });
    },
    companiesEnabled: async (_, args, context)=>{
      const result = await prismaClient.company.findMany({
        skip: args.skip,
        take: args.take,
        orderBy: {
          display_order: "asc",
        },
        where: {
          is_disabled: 0
        },
        include: {
          locale_company: {
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
      const localeProps=["name", "excerpt", "representer"];
      return result.map(item=>{
        localeProps.forEach(prop=>item[prop]=(item.locale_company && item.locale_company.length>0)?item.locale_company[0][prop]:"no_translation");
        item.country=(item.country.locale_country && item.country.locale_country.length>0)?item.country.locale_country[0].name:"no-country";
        delete item.locale_company;
        delete item.country.locale_country;
        return item;
      });
    },
  },
  Mutation: {
    createCompany: async (_, args) => {
      const result = await prismaClient.company.create({
        data: {
          tel: args.input.tel,
          fax: args.input.fax,
          email: args.input.email,
          website: args.input.website,
          address: args.input.address,
          display_order: args.input.display_order,
          logo_src: args.input.logo_src,
          country_id: args.input.country_id,
          locale_company: {
            create: args.input.locales?.map(item=>({
              name: item.name,
              excerpt: item.excerpt,
              representer: item.representer,
              locale_id: item.locale
            }))
          }
        }
      });
      return result;
    },
    updateCompany: async (_, args) => {
      const result = await prismaClient.company.update({
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
          logo_src: args.input.logo_src,
          country_id: args.input.country_id,
          locale_company: {
            upsert: args.input.locales?.map(item=>({
              where: {
                locale_id_company_id: {
                  locale_id: item.locale,
                  company_id: args.id
                }
              },
              update: {
                name: item.name,
                excerpt: item.excerpt,
                representer: item.representer,
              },
              create: {
                name: item.name,
                excerpt: item.excerpt,
                representer: item.representer,
                locale_id: item.locale
              }
            }))
          }
        }
      });

      return result;
    },
    deleteCompany: async (_, args) => {
      const result = await prismaClient.company.delete({
        where: {
          id: args.id
        }
      });
      return result;
    }
  }
};

export default resolvers;
