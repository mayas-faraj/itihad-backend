import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().type.createMany({
    data: [
      { name: 'normal' },
      { name: 'slider' },
      { name: 'gallery' },
    ]
  });
  console.log(result);
};
 
