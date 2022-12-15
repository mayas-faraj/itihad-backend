import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
let result;

// locale table
/*
result = await prismaClient.locale.createMany({
  data: [
    { name: 'en-US' },
    { name: 'ar-SY' }
  ]
});
console.log(result);

// category table
result = await prismaClient.category.create({
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

result = await prismaClient.category.create({
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

result = await prismaClient.category.create({
  data: {
    slug: 'highlight', 
    locale_category: {
      create: [
        {
          name: 'highlight',
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: 'اعلان',
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

result = await prismaClient.category.create({
  data: {
    slug: 'meeting', 
    locale_category: {
      create: [
        {
          name: 'meeting',
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: 'اجتماع',
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

result = await prismaClient.type.createMany({
  data: [
    { name: 'normal' },
    { name: 'slider' },
    { name: 'gallery' },
  ]
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Syria",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "سورية",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Egypt",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "مصر",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Kuwait",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "الكويت",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Bahrain",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "البحرين",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Soudi Arabia",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "السعودية",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Iraq",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "العراق",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Tunisia",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "تونس",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Sudan",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "السودان",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Algeria",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "الجزائر",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Lebanon",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "لبنان",
          locale: {
            connect: {
              name: 'ar-SY'
            }
          }
        }
      ],
    }
  }
});
console.log(result);

result = await prismaClient.country.create({
  data: {
    locale_country: {
      create: [
        {
          name: "Jordan",
          locale: {
            connect: {
              name: 'en-US'
            }
          }
        },
        {
          name: "الأردن",
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

// level table
result = await prismaClient.level.create({
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

result = await prismaClient.level.create({
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

result = await prismaClient.level.create({
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

result = await prismaClient.level.create({
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

result = await prismaClient.level.create({
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

result = await prismaClient.level.create({
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

result = await prismaClient.level.create({
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

// user table
result = await prismaClient.user.createMany({
  data: [
    {
      user_login: "admin",
      user_name: "administrator",
      email: "info@arabindustries.com",
      password: "123",
      is_admin: 1
    },
    {
      user_login: "mayas",
      user_name: "Mayas Faraj",
      email: "uniqueprogrammer@hotmail.com",
      password: "123"
    },
  ]
});
console.log(result);

// contact table
result = await prismaClient.contact.createMany({
  data: [
    { name: 'linkedin', icon: 'LinkedIn', is_social: 1, link: 'https://linkedin.com' },
    { name: 'twitter', icon: 'Twitter', is_social: 1, link: 'https://twitter.com' },
    { name: 'facebook', icon: 'Facebook', is_social: 1, link: 'https://facebook.com' },
    { name: 'email', icon: 'Email', is_social: 0, link: 'mailto:info@arabengineeringindustries.org ' }
  ]
});
console.log(result);

// contact table
result = await prismaClient.setting.createMany({
  data: [
    { name: 'logo', value: '/assets/imgs/logo.png'},
    { name: 'slider-interval', value: '5000'}
  ]
});
console.log(result);
*/

// company table
result = await prismaClient.company.create({
  data: {
    
  }
});
