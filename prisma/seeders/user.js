import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().user.createMany({
    data: [
      {"user_login":"guest","user_name":"","email":"","password":"d41d8cd98f00b204e9800998ecf8427e"},
      {"user_login":"admin","user_name":"","email":"khkonyna@gmail.com","password":"f65c98cbdc8c1e07c3957d6edcc34954"},
      {"user_login":"ahyafi","user_name":"د.أ.هيثم اليافي","email":"ahelyafi@gmail.com","password":"cbc84e2e7ddb2d599fe11a065833b4fd"},
      {"user_login":"AK","user_name":"عبدالله القوتلي","email":"afei.sygmail.com","password":"bdc8eba2c5bc342509708ae2eb8c847d"},
      {"user_login":"administrator","user_name":"مدير لوحة التحكم","email":"khkonyna@gmail.com","password":"c6c1bd27b173c1ed6fc3a11f0585ee9b"},
      {"user_login":"afei.sy","user_name":"مدير مكتب دمشق","email":"afei.sy@gmail.com","password":"c7a44fae944e6f71061ac22851634117"},
      {"user_login":"afei.eg","user_name":"مدير مكتب القاهرة","email":"sohahassankiki@yahoo.com","password":"03a4880b2f54bfc6313ec8e35de2f6d6"},
      {"user_login":"khk","user_name":"خولة كنينة","email":"khkonyna@gmail.com","password":"649b3b01f4a7ca6f3becf3994377e8be"}
  ]
  });

  console.log(result);
}
