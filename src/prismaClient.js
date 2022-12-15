import { PrismaClient } from '@prisma/client'

class Prisma {
    constructor() {
        if(!Prisma.client)
            Prisma.client=new PrismaClient();
    }

    getPrismaClient() {
        return Prisma.client;
    }
}

export { Prisma };
