import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().locale.createMany({
    data: [
      { id: 'en-US', currency_symbol: '$', date_format: 'MM-DD-YYYY' },
      { id: 'ar-SY', currency_symbol: 'ل.س.', date_format: 'DD/MM/YYYY'}
    ]
  });
  console.log(result);
};
