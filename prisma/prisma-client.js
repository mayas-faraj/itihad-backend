import { PrismaClient } from '@prisma/client';

export default class PClient {
  constructor() {
    if(!PClient.instance) {
      PClient.instance = new PrismaClient();
    }
  }

  getInstance() {
    return PClient.instance;
  }
}
