import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().level.create({
    data: {
      locale_level: {
        create: [
          {
            name: "national",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "قطري",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
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
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "عربي",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
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
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "قطري تنموي",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
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
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "اقليمي",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
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
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "اقليمي تنموي",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
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
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "دولي",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
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
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "دولي تنموي",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);
};
   
