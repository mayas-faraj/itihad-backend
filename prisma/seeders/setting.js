import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().setting.createMany({
    data: [
      { name: 'logo', value: '/assets/imgs/logo.png'},
      { name: 'slider-interval', value: '5000'}
    ]
  });
  console.log(result);
};

 
