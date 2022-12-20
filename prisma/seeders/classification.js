import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().classification.create({
    data: {
      locale_classification: {
        create: [
          {
            name: "Organized by AFEI",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "من تنظيم الاتحاد",
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

  result = await (new PClient()).getInstance().classification.create({
    data: {
      locale_classification: {
        create: [
          {
            name: "BOD & GA",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "مجلس الإدارة والجمعية العمومية",
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

  result = await (new PClient()).getInstance().classification.create({
    data: {
      locale_classification: {
        create: [
          {
            name: "Participations",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "مشاركات",
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

  result = await (new PClient()).getInstance().classification.create({
    data: {
      locale_classification: {
        create: [
          {
            name: "Trans-Arab activities",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "أنشطة الهيئات العربية",
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
   
