import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().category.create({
    data: {
      slug: 'page', 
      locale_category: {
        create: [
          {
            name: 'page',
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: 'صفحة',
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

  result = await (new PClient()).getInstance().category.create({
    data: {
      slug: 'news', 
      locale_category: {
        create: [
          {
            name: 'news',
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: 'خبر',
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

  result = await (new PClient()).getInstance().category.create({
    data: {
      slug: 'committee', 
      locale_category: {
        create: [
          {
            name: 'committee',
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: 'لجنة',
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

  result = await (new PClient()).getInstance().category.create({
    data: {
      slug: 'event', 
      locale_category: {
        create: [
          {
            name: 'event',
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: 'حدث',
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

  result = await (new PClient()).getInstance().category.create({
    data: {
      slug: 'activity', 
      locale_category: {
        create: [
          {
            name: 'activity',
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: 'نشاط',
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
