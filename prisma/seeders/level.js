import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().level.create({
    data: {
      locale_level: {
        create: [
          {
            name: "national",
            locale_id: 'en-US'
          },
          {
            name: "قطري",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().level.create({
    data: {
      locale_level: {
        create: [
          {
            name: "arab",
            locale_id: 'en-US'
          },
          {
            name: "عربي",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().level.create({
    data: {
      locale_level: {
        create: [
          {
            name: "national development",
            locale_id: 'en-US'
          },
          {
            name: "قطري تنموي",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().level.create({
    data: {
      locale_level: {
        create: [
          {
            name: "regional",
            locale_id: 'en-US'
          },
          {
            name: "اقليمي",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().level.create({
    data: {
      locale_level: {
        create: [
          {
            name: "regional development",
            locale_id: 'en-US'
          },
          {
            name: "اقليمي تنموي",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().level.create({
    data: {
      locale_level: {
        create: [
          {
            name: "international",
            locale_id: 'en-US'
          },
          {
            name: "دولي",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().level.create({
    data: {
      locale_level: {
        create: [
          {
            name: "international development",
            locale_id: 'en-US'
          },
          {
            name: "دولي تنموي",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);
};
   
