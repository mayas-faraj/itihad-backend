import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().locale.createMany({
    data: [
      { name: 'en-US' },
      { name: 'ar-SY' }
    ]
  });
  console.log(result);
};
