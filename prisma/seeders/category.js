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
            locale_id: 'en-US'
          },
          {
            name: 'صفحة',
            locale_id: 'ar-SY'
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
            locale_id: 'en-US'
          },
          {
            name: 'خبر',
            locale_id: 'ar-SY'
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
            locale_id: 'en-US'
          },
          {
            name: 'لجنة',
            locale_id: 'ar-SY'
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
            locale_id: 'en-US'
          },
          {
            name: 'حدث',
            locale_id: 'ar-SY'
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
            locale_id: 'en-US'
          },
          {
            name: 'نشاط',
            locale_id: 'ar-SY'
          }
        ]
      }
    }
  });
  console.log(result);
};
