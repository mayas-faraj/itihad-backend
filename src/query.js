import { Prisma } from './prismaClient.js';
//new Prisma().getPrismaClient().section.findMany({}).then(data=>console.dir(data, {depth: null}));

let result = await new Prisma().getPrismaClient().country.update({
  where: {
    id: 16
  },
  data: {
    locale_country: {
      include: {
        locale: {
          update: {
            where: {
              name: "en-US"
            },
            data: {
              locale_country: {
                name: "xxx"
              }
            }
          }
        }
      }
    }
  }
});

console.log(result);
