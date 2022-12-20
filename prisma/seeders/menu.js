import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().menu.createMany({
    data: [
      { name: 'main-menu' },
      { name: 'speed-menu' }
    ]
  });
  console.log(result);
};
