import { Prisma } from '../../prismaClient.js'
const prismaClient = new Prisma().getPrismaClient();

const resolvers = {
  Query: {
   classifications: async (_, __, context)=>{
      const result = await prismaClient.classification.findMany({
        include: {
          locale_classification: {
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
        item.name=(item.locale_classification && item.locale_classification.length>0)?item.locale_classification[0].name:"no_translation";
        delete item.locale_classification;
        return item;
      });
    },
  },
  Mutation: {
    createClassification: async (_, args)=>{
      const result = await prismaClient.classification.create({
        data: { 
          locale_classification: {
            create: args.input.map(item=>({
              name: item.name,
              locale_id: item.locale
            }))
          }
        }
      });
      return result;
    },
    updateClassification: async (_, args, __, ___)=>{
      const result = await prismaClient.classification.update({
        where: {
          id: args.id
        },
        data: { 
          locale_classification: {
            upsert: args.input.map(item=>({
                where: {
                  locale_id_classification_id: {
                    locale_id: item.locale,
                    classification_id: args.id
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
    deleteClassification: async (_, args)=>{
      const result = await prismaClient.classification.delete({
        where: {
          id: args.id
        }
      });
      return result;
    }
  }
};

export default resolvers;
