import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 1,
      locale_country: {
        create: [
          {
            name: "Syria",
            locale_id: 'en-US'
          },
          {
            name: "سورية",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 2,
      locale_country: {
        create: [
          {
            name: "Egypt",
            locale_id: 'en-US'
          },
          {
            name: "مصر",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 3,
      locale_country: {
        create: [
          {
            name: "Kuwait",
            locale_id: 'en-US'
          },
          {
            name: "الكويت",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 4,
      locale_country: {
        create: [
          {
            name: "Bahrain",
            locale_id: 'en-US'
          },
          {
            name: "البحرين",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 5,
      locale_country: {
        create: [
          {
            name: "Saudia Arabia",
            locale_id: 'en-US'
          },
          {
            name: "السعودية",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 6,
      locale_country: {
        create: [
          {
            name: "Iraq",
            locale_id: 'en-US'
          },
          {
            name: "العراق",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 7,
      locale_country: {
        create: [
          {
            name: "Tunisia",
            locale_id: 'en-US'
          },
          {
            name: "تونس",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 8,
      locale_country: {
        create: [
          {
            name: "Sudan",
            locale_id: 'en-US'
          },
          {
            name: "السودان",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 9,
      locale_country: {
        create: [
          {
            name: "Algeria",
            locale_id: 'en-US'
          },
          {
            name: "الجزائر",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 10,
      locale_country: {
        create: [
          {
            name: "Lebanon",
            locale_id: 'en-US'
          },
          {
            name: "لبنان",
            locale_id: 'ar-SY'
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 11,
      locale_country: {
        create: [
          {
            name: "Jordan",
            locale_id: 'en-US'
          },
          {
            name: "الأردن",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);
};
