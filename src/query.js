import { Prisma } from './prismaClient.js';
new Prisma().getPrismaClient().section.findMany({}).then(data=>console.dir(data, {depth: null}));
