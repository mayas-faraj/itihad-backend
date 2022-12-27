import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().classification.create({
    data: {
      locale_classification: {
        create: [
          {
            name: "Organized by AFEI",
            locale_id: 'en-US'
          },
          {
            name: "من تنظيم الاتحاد",
            locale_id: 'ar-SY'
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
            locale_id: 'en-US'
          },
          {
            name: "مجلس الإدارة والجمعية العمومية",
            locale_id: 'ar-SY'
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
            locale_id: 'en-US'
          },
          {
            name: "مشاركات",
            locale_id: 'ar-SY'
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
            locale_id: 'en-US'
          },
          {
            name: "أنشطة الهيئات العربية",
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);
};
   
