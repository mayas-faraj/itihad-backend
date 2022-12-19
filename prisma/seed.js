import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();
let result;
// locale table
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

result = await prismaClient.category.create({
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

result = await prismaClient.category.create({
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

// type table
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
    locale_country: {
      create: [
        {
          name: "Saudia Arabia",
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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

// company table
result = await prismaClient.company.create({
  data: {
    tel: "+963(11)8217533 / +963(11)8217531",
    fax: "+963(11)8217532",
    email: "barada@tarassul.sy",
    website: "",
    address: "P.O.Box 2477, Damascus, Syria",
    logo_src: "",
    is_disabled: 0,
    display_order: 1,
    locale_company: {
      create: [
        {
          name: "General Co. For Metallic Industries",
          excerpt: "Public-sector company specialized in manufacturing household  appliances (refrigerators, ovens, ..)",
          representer: "Eng. Mouaffak Atik",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة العامة للصناعات المعدنية (بردى)",
          excerpt: "شركة لتصنيع الأدوات المنزلية وخاصة البرادات والأفران وطناجر الضغط",
          representer: "م. موفق عتيق",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 1
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)3339077 / +963(11)3310544",
    fax: "+963(11)3316000",
    email: "nouri.office@gmail.com",
    website: "www.nouritrading.com",
    address: "P.O.Box 2942, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/01_NT.jpg",
    is_disabled: 0,
    display_order: 2,
    locale_company: {
      create: [
        {
          name: "Nouri For Trading",
          excerpt: "Nouri for Trading was established in 1989 as a limited partnership company for trade and import/export of raw materials, stainless steel bars, galvanized  pipes, as well as agricultural and electrical pumps",
          representer: "Bashar Nouri",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة نوري للتجارة",
          excerpt: "تأسست شركة نوري للتجارة عام 1989 كشركة توصية بسيطة هدفها التجارة العامة واستيراد وتصدير المواد الأولية للصناعة وقضبان الستانلس ستيل والأنابيب الحديدية السوداء والمغلفنة والمضخات الزراعية والكهربائية",
          representer: "بشار نوري",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)2123438",
    fax: "+963(11)2123375",
    email: "g.o.eng.ind@net.sy",
    website: "www.handasieh.com",
    address: "Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/02_GOEI.jpg",
    is_disabled: 0,
    display_order: 3,
    locale_company: {
      create: [
        {
          name: "General Organization of Engineering Industries",
          excerpt: "The General Organization for Engineering Industries supervises all public establishments for engineering industries, namely, 13 public companies manufacturing: Cables, Batteries, Electronics, Household appliances, Motors, Aluminum, and Tractors.",
          representer: "Dr. Nidal Fallouh",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "المؤسسة العامة للصناعات الهندسية",
          excerpt: "تشرف المؤسسة الهندسية على كافة الصناعات الهندسية المتعلقة بالقطاع العام ويتبع لها /13/  شركة صناعية لإنتاج الكابلات- البطاريات السائلة- الحديد-الإنشاءات-الصناعات الالكترونية - الصناعات المنزلية- الصناعات التحويلية-الجرارات الزراعية- المحركات- الأخشاب- الألمنيوم- الكبريت.",
          representer: "د. نضال فلوح",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)6712311 / +963(11)6712312",
    fax: "+963(11)6712319 / +963(11)6710711",
    email: "info@madarco.com",
    website: "www.madarco.com",
    address: "P.O.Box 14429, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/03_MD.jpg",
    is_disabled: 0,
    display_order: 4,
    locale_company: {
      create: [
        {
          name: "Madar for Aluminum Extrusion",
          excerpt: "Madar for Aluminum Extrusion is specialized in producing aluminum profiles since 1993. Its sister companies are specialized in construction and building material.",
          representer: "Mohammad Daaboul",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مدار لبثق الألمنيوم",
          excerpt: "أنشأت شركة مدار لبثق الألمنيوم عام 1992 وهي متخصصة بإنتاج مقاطع الألمنيوم. ولها شركات شقيقة متخصصة بإنتاج مواد الإنشاءات والبناء.",
          representer: "محمد دعبول",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)8221001 ",
    fax: "+963(11)8221006 ",
    email: "reem@alreemplastics.com",
    website: "www.urri-company.com",
    address: "P.O.Box 33130, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/04_URRI.jpg",
    is_disabled: 0,
    display_order: 5,
    locale_company: {
      create: [
        {
          name: "United Reem & Rasheed for Industry",
          excerpt: "\"United Reem & Rasheed for Industry\" is a result of merger between \"Al-Rasheed for computer & Industry\" and \"Al-Reem for plastics\" on 28/12/2011. \"Al Rasheed for computers and Industry\" was established in 1992 under the investment law No.10 stated 1991, and it is specialized in Moulds production, Mould's raw material Import and trading, and Industrial & Commercial Software Development. \"Al Reem for plastics\" was established in 1997, under the Investment Law No.10 stated 1991, and is specialized in the production of various household plastic products.",
          representer: "Imad Yafi",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الريم والرشيد المتحدة للصناعة",
          excerpt: "شركة الريم والرشيد المتحدة للصناعة هي اندماج لشركتي \"الرشيد للحواسب والصناعة\" و\"الريم للمنتجات البلاستيكية\" بموجب قرار وزارة الاقتصاد رقم /3394/ تاريخ 28/12/2011. تأسست شركة الرشيد للحواسب والصناعة عام 1992 بموجب قانون الاستثمار رقم 10 لعام 1991 وهي مختصة بإنتاج القوالب واستيراد وتجارة القوالب وموادها الأولية اللازمة، وبرامج الحاسوب الصناعية والتجارية. تأسست شركة الريم للمنتجات البلاستيكية عام 1997 بموجب قانون الاستثمار رقم 10 لعام 1991 وهي مختصة بإنتاج مختلف المنتجات والأدوات والأثاث المنزلي البلاستيكي.",
          representer: "عماد اليافي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)3324760",
    fax: "+963(11)3324762",
    email: "dr.awadammora@yahoo.com",
    website: "",
    address: "P.O.Box 16183, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/12_Ammora.JPG",
    is_disabled: 0,
    display_order: 6,
    locale_company: {
      create: [
        {
          name: "Awad Ammora Co.",
          excerpt: "Ammora Group started in 1975, and its factories produce the following:\n- In Syria: Lubricating oil, Aluminum profiles, Metallic Drums, Plastic contrainers.\n- In Sudan: Lubricating oil, Aluminum profiles, Plastic containers.",
          representer: "Dr. Awad Ammora",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "عوض عمورة الصناعية",
          excerpt: "مجموعة شركات عوض عمورة تأسست عام 1975 وتضم الآن مجموعة الشركات التالية:\n- في سورية: تصنيع زيوت السيارات- تصنيع بروفيلات الألمنيوم- تصنيع البراميل المعدنية- تصنيع العبوات البلاستيكية.\n- في السودان: تصنيع زيوت السيارات- سحب بروفيلات الألمنيوم- تصنيع العبوات البلاستيكية.",
          representer: "د. عوض عمورة",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+961(1)486311 / +961(1)486312",
    fax: "+961(1)486314",
    email: "info@di.debbas.com.lb",
    website: "www.debbas.com",
    address: "P.O.Box 11-0125, Beirut, Lebanon",
    logo_src: "Damascus_Office/GA_Members/05_Debbas.jpg",
    is_disabled: 1,
    display_order: 7,
    locale_company: {
      create: [
        {
          name: "Debbas Industries sal",
          excerpt: "Member of the Debbas group of companies, we, at Debbas Industries focus on quality of both products and services. The company manufactures a wide range of fixtures, panel boards, suspended ceiling to meet most expectation.\nCustomization is a must in our business, and our engineering department is constantly developing and improving designs. We never say \"no\" to special requirements of architects and consultants.",
          representer: "Samir Tabbal ",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة دباس للصناعة ش.م.ل",
          excerpt: "إن شركة دباس للصناعة عضو في مجموعة شركات دباس، وهي تركز على جودة المنتجات والخدمات على حد سواء. تقوم شركة دباس للصناعة بإنتاج: شاسيهات الفلويسانت، أجهزة الإنارة وما يتفرع عنها من خزانات كهربائية، وتابلوهات ومحولات ومقويات كهربائية، واحتياطي الطاقة الكهربائية، وفواصل الطاقة الكهربائية، وشاحن كهربائي، والقطع الحديدية وسقوف مستعارة من المعادن.",
          representer: "سمير طبال",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 10
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+961(1)350040 / +961(9)448550",
    fax: "+961(1)350042",
    email: "info@libancables.com.lb",
    website: "www.libancables.com.lb",
    address: "P.O.Box 11/6008, Sanayeh, Justinies Str, Chamber of commerce Bldg, Beirut, Lebanon",
    logo_src: "Damascus_Office/GA_Members/06_Liban_cables_En.jpg",
    is_disabled: 0,
    display_order: 8,
    locale_company: {
      create: [
        {
          name: "Liban Cables sal",
          excerpt: "Liban Cables has a 45 years history of producing a comprehensive range of electrical & telephone cables. Serving the utility, industrial, construction and Oil & Gas sectors, Liban Cables is known \nthroughout the Middle East and Africa for its high quality, reliability, on time delivery, and customer services. \nLiban Cables operates under ISO:9001 and  ISO 14001 standards.",
          representer: "Eng. Ghassan Boulbol",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة كابلات لبنان ش.م.ل",
          excerpt: "لدى شركة كابلات لبنان 45 عاما من الخبرة في إنتاج مجموعة كاملة من الكابلات الكهربائية والهاتفية في خدمة المرافق العامة، الصناعية، وفي قطاعات البناء والنفط والغاز. كابلات لبنان لديها شهرة في منطقة الشرق الأوسط وأفريقيا لأنها عالية الجودة وتعتمد الدقة في التسليم في الوقت المحدد وفي خدمة الزبائن. تعمل الشركة وفق مواصفات الجودة العالمية ISO:9001  و ISO:14001",
          representer: "م. غسان بلبل",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 10
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)6711907",
    fax: "+963(11)6714810",
    email: "h@madarglass.bz",
    website: "www.madarglass.bz",
    address: "Ashrafiet sahnaya, Daraa Hwy, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/07_Glass_En.jpg",
    is_disabled: 0,
    display_order: 16,
    locale_company: {
      create: [
        {
          name: "Madar Glass  L.L.C",
          excerpt: "We produce all types of architectural glass, glass for industrial applications, glass for appliances as well as decorative artistic glass.",
          representer: "Hassan Daaboul",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة مدار زجاج (المحدودة المسؤولية)",
          excerpt: "تصنع شركة مدار زجاج جميع أنواع الزجاج المعماري والزجاج المستخدم في المجالات الصناعية والصناعات الهندسية، إضافة إلى الزجاج الفني.",
          representer: "حسان دعبول",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+216(71)860244",
    fax: "+216(71)860571",
    email: "info@tunisie-cables.com",
    website: "www.tunisie-cables.com.tn",
    address: "Les Berges du lac - Cité El khalij -Rue Loch Ness- Immeubles les arcades Tour A-BP 41-1080 Tunis Cedex Tunisie ",
    logo_src: "Cairo_Office/GA_Members/13_TunisieCables.jpg",
    is_disabled: 0,
    display_order: 54,
    locale_company: {
      create: [
        {
          name: "Tunisie Cables",
          excerpt: "Founded in 1978, Tunisie Cables is a leader in the production of cables in Tunisia.\nTunisie Cables employs a workforce of 525 people including engineers and highly skilled technicians and has a turnover of more than 160 million Dinars including nearly 65% for export.\nLeader in the cable industry, Tunisie Cables has combined production capacity with technological expertise to meet the growing demand of markets, being as essential as industry and infrastructure.\nTo be a leading enterprise, Tunisie Cables has established a quality assurance system, certified ISO 9001 version 2008.\nThe range of products of Tunisie Cables, focusing on diversity, all fully in accordance with the international standards IEC, including European standards, French NF, German VDE and British BS.",
          representer: "Moncef Al Sellami",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الأسلاك التونسية ",
          excerpt: "تأسست عام 1978، وتعتبر شركة تونس للكابلات الشركة الرائدة في إنتاج الكابلات في تونس.\nتوظف شركة تونس للكابلات 525 من العاملين من بينهم مهندسين وفنيين ذوي المهارات العالية، ويزيد رقم مبيعاتها عن 160 مليون دينار منها 65% من التصدير.\nكونها الشركة الرائدة في صناعة الكابلات، فإن تونس للكابلات دمجت الطاقة الإنتاجية مع الخبرة التكنولوجية لتلبية الطلب المتزايد في الأسواق.\nكي تكون الرائدة في السوق، فقد أسست تونس للكابلات نظام ضمان الجودة وحصلت على شهادة 9001 ISO نسخة 2009.\nإن مجال منتجات شركة تونس للكابلات الذي يحقق التنوع يتوافق تماماً مع المواصفات الدولية IEC بما فيها المواصفات الأوربية والفرنسية والألمانية والبريطانية.",
          representer: "منصف السلامي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 7
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+964(1)8182158",
    fax: "+964(1)8866997",
    email: "thabitalbaldawi@ymail.com",
    website: "www.aluminum-albaldawi.com",
    address: "Iraq, Baghdad, Alnasir Sq. - Thabit Al-baldawi & Sons Bld",
    logo_src: "Cairo_Office/GA_Members/04_AlThabit.jpg",
    is_disabled: 0,
    display_order: 45,
    locale_company: {
      create: [
        {
          name: "Al Thabit Company for Aluminum Ltd",
          excerpt: "Al Thabit Company for Aluminum is a sister company of Thabet  Albaldawi & Sons Group. The company started in 1974 in Iraq, based  in the capital Baghdad. It mainly operates on the design and  implementation of all works of aluminum and glass according to the  international standards, trading of Alalkabond panels.",
          representer: "Karrar Thabit Al-Baldawi",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الثابت لصناعة الالمنيوم المحدودة",
          excerpt: "هي إحدى شركات مجموعة ثابت البلداوي وأولاده، حيث بدأت الشركة عملها منذ عام 1974 في جمهورية العراق ومقرها العاصمة بغداد. تهتم الشركة بشكل رئيسي بتصميم وتنفيذ كافة أعمال الألمنيوم والزجاج وفق المواصفات العالمية الحديثة و المتجددة وتجارة الألواح الالكابوند لتغليف الواجهات والسلالم العملاقة.",
          representer: "كرار ثابت البلداوي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 6
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)6150088 / +963(11)6150087",
    fax: "+963(11)6714792",
    email: "info@madarcc.com",
    website: "www.madarcc.com",
    address: "P.O.Box 14429, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/08_Madarcc_en.jpg",
    is_disabled: 0,
    display_order: 9,
    locale_company: {
      create: [
        {
          name: "Madar Coil Coating",
          excerpt: "Founded in 2004, MADAR Coil Coating is specialized in the production of high quality pre-painted aluminium and galvanized steel coils.  The investment in equipment included a continuous high speed multi-layer coating line, a coil slitting and embossing line, a cut-to-length line, a paint production plant and an automated paint colour mixing system.",
          representer: "Eng. Mhd Mumtaz Daaboul",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مدار لطلاء الصفائح ",
          excerpt: "أحدثت شركة مدار لطلاء الصفائح في نهاية عام 2004 لإنتاج صفائح الألمنيوم والحديد المغلفن المطلية. ويتضمن المعمل خط الإنتاج الرئيسي، ومعمل لإنتاج الدهانات ووحدة لخلط ومزج الألوان باستخدام أحدث التقنيات المتاحة في هذا المجال . بالإضافة إلى وحدة لشرح وزخرفة اللفائف المطلية لإنتاجها بالقياسات المطلوبة، ووحدة لقص اللفائف وتحويلها إلى ألواح.",
          representer: "م. محمد ممتاز دعبول",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)6712219 /+963(11)6712081",
    fax: "+963(11)6712082",
    email: "almasrigaz@net.sy",
    website: "http://www.almasrigas.com",
    address: "P.O.Box 53, Sahnaya, Damascus,  Syria ",
    logo_src: "",
    is_disabled: 0,
    display_order: 10,
    locale_company: {
      create: [
        {
          name: "Al-Masri Household Appliances",
          excerpt: "The first company to manufacture gas ovens and pressure cookers in Syria.",
          representer: "Omar Al-Masri",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مؤسسة المصري للصناعات المنزلية",
          excerpt: "أول منشأة قامت بتصنيع أفران غاز و طناجر الضغط في سورية",
          representer: "عمر المصري",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)8223400 / +963(9)53683052",
    fax: "+963(11)8229770",
    email: "mahjoub@mahjoub.com",
    website: "www.mahjoub.com",
    address: "P.O.Box 6385, Sbenah Bridge, Hosh Blas, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/09_Mahjoub_En.jpg",
    is_disabled: 0,
    display_order: 11,
    locale_company: {
      create: [
        {
          name: "Mahjoub Industrial Group",
          excerpt: "Established in 1958, Mahjoub has become well renowned for its U-PVC extrusion and window & door final products, meeting and exceeding German and US standards. With another extrusion and window & door manufacturing plant (Peak Profiles) in Salt Lake city, Utah, USA, Mahjoub products have proven their flexibility and met the needs of various different markets, yet maintaining the highest German and global Standards. Our success is a result of our unique patents, our tropically engineered compound, and our vertical integration allowing our product to withstand severe weather conditions such as those in the UAE, Arizona, Florida, and Kentucky.\nMahjoub has over 400 Employees in the Damascus plant and 100 in Peak Profiles. The Damascus Plant is divided into two separate factories, one for profile extrusion and the other for the manufacturing of finished products of windows, doors and the U-PVC accessories such as false ceilings. All machinery, extrusion, cutting lists, pricing, accounting and other systems run on an in-house designed system by Khaled Mahjoub himself. This comprehensive and connected system was created specifically to meet the needs of the company and to ensure smooth operations.\nWith over 50 years of experience in the industry field- a track record since 1958, Mahjoub has gathered a large amount of clients ranging from large projects- like the recent Kalamoun University Hospital, Emaar 8th Gate project in Yafour, Damascus to the Mountain Breeze Resort in the mountains of Latakia- to numerous high profile clients among many others in the UAE and the USA.",
          representer: "Mhd.Khaled Mahjoub",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مجموعة محجوب الصناعية ",
          excerpt: "تأسست مجموعة محجوب الصناعية في عام 1958 وأصبحت واحدة من الشركات العالمية المتميزة بامتدادها الشاقولي في تصميم وتصنيع المواد الأولية والقوالب ومعدات سحب وتصنيع مقاطع الـ U-PVC بخلائط هندسية خاصة للمناخ القاسي مع تصميم وتصنيع أنظمة للنوافذ والأبواب تلائم أسواق منطقة الشرق الأوسط والخليج العربي والولايات المتحدة الأمريكية بتنافسية تعتمد حلول تكاملية اقتصادية وفنية وجمالية.\nولقد أثبتت تقنياتنا المتمثلة بمجموعة من براءات الاختراع المسجلة في الولايات المتحدة الأمريكية وسورية تنافسيتها وتميزها العالميين من خلال نجاح معملنا Peak Profile في ولاية يوتاه &ndash; مدينة سولت ليك في الولايات المتحدة علماً أن جميع حلول أنظمة محجوب للنوافذ والأبواب مصنعة ومختبرة وفقاً للمواصفات القياسية الألمانية والأمريكية والسورية. \nوتنفرد مجموعة محجوب الصناعية بكفالة على حلولها لمدة 25 عام في تحمل كافة العوامل الجوية القاسية في بلدان الخليج العربي وولايات (نيفادا - أريزونا - فلوريدا - كنتاكي) الأمريكية والموثقة بفحوصات الجهات المعتمدة.\n(ويعد معملنا في أمريكا من المعامل الوحيدة الذي كان رابحاً أثناء الأزمة المالية أعوام 2008 - 2009 - 2010 بسبب استخدامه لميزات محجوب الفنية والتنافسية ذات المواصفة الأعلى بالسعر الأدنى)",
          representer: "محمد خالد محجوب",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)5730700 / +963(11)5730701",
    fax: "+963(11)5743536",
    email: "mailing@aldassouki.com",
    website: "www.aldassouki.com",
    address: "B.O.Box 51, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/10_dassouki.jpg",
    is_disabled: 0,
    display_order: 12,
    locale_company: {
      create: [
        {
          name: "AL DASSOUKI GROUP-Moulinex - AL MANARA",
          excerpt: "Created since 1967, owned by Mr. Abdul Aziz Al Dassouki. AL DASSOUKI GROUP is producing AL MANARA ventilating fans, MOULINEX household appliances, AL DASSOUKI fans, and heating resistors used in ovens and electric kettles.",
          representer: "Abdul Aziz Al-Dassouki",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مجموعة الدسوقي – مولينكس – المنارة",
          excerpt: "تأسست مجموعة الدسوقي لصاحبها عبد العزيز الدسوقي عام 1967، ويشمل الإنتاج: ساحبات هواء المنارة&ndash; مولينكس للأدوات الكهربائية المنزلية&ndash; مراوح الدسوقي المتعددة الاستعمال&ndash; المقاومات الحرارية المستعملة بالأفران والغلايات.",
          representer: "عبد العزيز الدسوقي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)4473911 / +963(11)4473912",
    fax: "+963(11)4473915 / +963(11)4433247",
    email: "jamal-a@abdulkarimgroup.com",
    website: "http://abdulkarimgroup.com",
    address: "P.O.Box 5797, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/11_Abdulkarim.jpg",
    is_disabled: 0,
    display_order: 13,
    locale_company: {
      create: [
        {
          name: "Abdulkarim Group",
          excerpt: "Established in 1986 and producing since 1987, the group produces Lubricants, Greases, Metallic Drums, and produced Chemicals productions used in oil fields. \nThe following companies are in the group: Alakeim for Trade & Industry LLC, Meta Drum, Alkarim for Chemicals LLC, & Alkarim for Lubricants LLC.",
          representer: "Jamal Abdulkarim",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مجموعة عبدالكريم",
          excerpt: "تأسست في عام 1986 وبدأت الإنتاج في عام 1987. نشاطها الصناعي يغطي: الزيوت والشحوم المعدنية، والبراميل المعدنية، والمواد الكيماوية المستخدمة في حقول النفط، ومصفاة للزيوت المعدنية المستعملة.\nتضم مجموعة من الشركات هي: الكريم للتجارة والصناعة ش.م.م- ميتا درم لصناعة البراميل المعدنية- الكريم للكيماويات ش.م.م- الكريم للزيوت المعدنية ش.م.م",
          representer: "جمال عبدالكريم",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)6714800",
    fax: "+963(11)6714607",
    email: "alhafez@alhafez.com",
    website: "www.alhafez.com",
    address: "P.O.Box 958, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/13_Alhafez_En.jpg",
    is_disabled: 0,
    display_order: 14,
    locale_company: {
      create: [
        {
          name: "Al-Hafez",
          excerpt: "Al Hafez Co. new stage for production of household appliances began in the mid of 1970s, and it has made great efforts in developing and improving its performance, products, and techniques. Its equipment match with all what is modern in this field of industry. Al Hafez Co. is considered one of the deep-rooted engineering companies that has produced designs for different refrigerators and household appliances.",
          representer: "Abdulmo'en Al-Hafez",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الحافظ لصناعة  البرادات والأدوات المنزلية",
          excerpt: "بدأت المرحلة الجديدة لشركة الحافظ في منتصف السبعينيات، وقد بذلت الشركة جهوداً كبيرةً تهدف إلى تطوير وتحسين أدائها ومنتجاتها وتقنيات ومعدات التصنيع فيها بما يتلاءم مع كل ما هو عصريّ في هذا المجال من الصناعة. تعتبر شركة الحافظ من الشركات الهندسية العريقة التي تنتج التصاميم للبرادات والأدوات المنزلية المختلفة، وتقوم ورشات خاصة في الشركة بتصنيع العديد من الآلات والتجهيزات وقوالب البرادات لتغذية المشاريع المستحدثة كما تقوم بإجراء عمليات الصيانة اللازمة عليها.",
          representer: "عبد المعين الحافظ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+961(1)620920",
    fax: "+961(1)620934",
    email: "lcc@inco.com.lb",
    website: "",
    address: "P.O.Box 11/1113, Beirut, Lebanon",
    logo_src: "",
    is_disabled: 1,
    display_order: 15,
    locale_company: {
      create: [
        {
          name: "Matelec",
          excerpt: "",
          representer: "Mr. Elias Doumit",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة التجهيزات الكهربائية اللبنانية – ماتليك",
          excerpt: "",
          representer: "الأستاذ الياس ضومط",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 10
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)5810718 / +963(11)5810719",
    fax: "+963(11)5810721",
    email: "info@metallic-sy.com",
    website: "www.metallic-sy.com",
    address: "P.O.Box 1149 Adra, Damascus, Syria",
    logo_src: "",
    is_disabled: 0,
    display_order: 17,
    locale_company: {
      create: [
        {
          name: "Mattock Construct",
          excerpt: "The Company opened its factories in Adra (near Damascus) in 1976 and started producing steam boilers with capacities ranging between 1 to 10 tons per hour, and solar thermal heating systems, various metal construction parts (fuel tanks, towers, trucks) as well as oxygen gas",
          representer: "Eng. Adnan Rustom",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الإنشاءات المعدنية والصناعات الميكانيكية ",
          excerpt: "افتتحت الشركة معاملها في عدرا قرب دمشق عام 1978 وبدأت بإنتاج المراجل البخارية وبسعات تتراوح بين 1 طن و10 طن/ سا وكذلك إنتاج أنظمة التسخين بالطاقة الشمسية ومنتجات الإنشاءات المعدنية (خزانات الوقود- الأبراج- القاطرات) إضافة إلى إنتاج غاز الأوكسجين.",
          representer: "م. عدنان رستم",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)225011591 / +20(2)25011624",
    fax: "+20(2)25011608 /  +20(2)25012373",
    email: "eisc@egironsteel.com; chairman@egironstel.com",
    website: "www.egironsteel.com",
    address: "El-Tebbin, Helwan, Cairo, Egypt. Telegraph: (HADISOLB)",
    logo_src: "Cairo_Office/GA_Members/01_egironsteel_En.jpg",
    is_disabled: 0,
    display_order: 18,
    locale_company: {
      create: [
        {
          name: "Egyptian Iron & Steel Co",
          excerpt: "We are exporting the iron mines and all work related to iron and steel industry.\nThe company is using the Egyptian iron ore, limestone and dolomite in an integrated process to produce steel for local and export markets with capacity to produce 1.2 million tons annually according to international and local standards.\nThe company is located in 35 km south of Cairo, on an area of 500 acres and employs ~12,000 workers.\nWe undertake the confidence in our ability for the customers to receive consistently the ordered product or service.\nWe develop an environment in which we mobilize all resources to make continuous improvements.",
          representer: "Eng. Mohamed Saad Negeada Youssif",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الحديد والصلب المصرية",
          excerpt: "تقوم الشركة باستغلال مناجم الحديد وكافة الأعمال المتعلقة بصناعة الحديد والصلب والإتجار فيها كمجمع متكامل لإنتاج الحديد والصلب للاستهلاك المحلي والتصدير بطاقة 1.2 مليون طن صلب خام سنوياً مطابق للمواصفات العالمية والمحلية. تقع الشركة في مدينة التبيين 35 كم جنوب القاهرة على مساحة 1700 فدان ويعمل بها حوالي 12000 عامل.",
          representer: "م. محمد سعد نجيدة",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)23921834 / +20(2)23921877",
    fax: "+20(2)23921877 ",
    email: "mohammadesdawy@yahoo.com",
    website: "www.efaco.net",
    address: "33 Kasr El-Nil St., Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/02_efaco.jpg",
    is_disabled: 0,
    display_order: 19,
    locale_company: {
      create: [
        {
          name: "Egyptian ferrosilicon Co.",
          excerpt: "The Egyptian Ferro Alloys Co. manufactures ferro silicon and exports 75% of its products. The ferrosilicon production facility -EFACO- with its capacity to produce /50/ thousand tons a year is considered the largest production center for ferro silicon in the Middle east. \nThe company has a marketing team with high level of competence and experience, as well as it has long term contracts with its clients in Eurpoe, Japan, and the US.\nA fully equiped training center was established inside the EDFO production site, where specialized training programs are conducted for employees in the company.\nThe company obtained an ISO 9002 certificate, and with the objective to cope with challenges of globalization, an integrated information system was recently introduced to link the production site at EDFO-Aswan with the company branches in Cairo and Alexandria.",
          representer: "Eng. Mohammed El-Saadawi",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة المصرية للسبائك الحديدية (الفيروسيليكون)",
          excerpt: "تقوم الشركة المصرية للسبائك الحديدية بتصنيع سبيكة الفيروسيليكون حيث تصدر 75% من إنتاجها للأسواق العالمية. ويعتبر مصنع الفيروسيليكون &ndash;ايفاكو &ndash; بطاقته الإنتاجية  /50/ ألف طن سنوياً أكبر مركز صناعي متكامل لإنتاج سبائك الفيروسيليكون في الشرق الأوسط. ويستخدم إنتاجه في صناعات الحديد والصلب.\nلدي الشركة فريق عمل تسويقي ذو مستوى عال من الخبرة والكفاءة بالإضافة إلى التعاقدات الطويلة مع عملائها في أوروبا واليابان والولايات المتحدة الأمريكية.\nتم إنشاء مركز تدريب بالمركز الرئيسي للشركة بادفو و تزويده بجميع الأجهزة العلمية اللازمة و إعداد الدورات التدريبية للعاملين بمعرفة المراكز المتخصصة داخل الشركة.\nحصلت الشركة على شهادة المواصفة العالمية ISO 9002 اللازمة لتصدير منتجاتها للخارج. و قد أدخلت الشركة مؤخرا نظام المعلومات المتكامل عن طريق شركة ا.ب.م العالمية لربط المصانع بإدفو بفروعها بالقاهرة و الإسكندرية ليتسنى التعامل مع تحديات العولمة عن شبكات الإنترنت و تبادل المعلومات عن طريق التقنيات الحديثة.",
          representer: "م. محمد السعداوي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)24301817",
    fax: "+20(2)24301535",
    email: "hassan@allweilerfarid.com",
    website: "www.allweilerfarid.com",
    address: " P.O.Box 11241, Agha-Khan Towers, 1373 Kornish El-Nile, Shoubra, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/18_Allweier_Farid.jpg",
    is_disabled: 0,
    display_order: 20,
    locale_company: {
      create: [
        {
          name: "Allweiler Farid Pumps Co.",
          excerpt: "Allweiler-Farid Pumps is a joint-venture between the German &ldquo;Allweiler GmbH&rdquo; and the Egyptian &ldquo;Farid Pumps Co.&rdquo;. Allweiler-Farid Pumps was established in 1982 and is producing- since 1984- pumps for agriculture, irrigation, industry, and housing purposes. It is located at the 10th of Ramadan city, industrial zone B2.",
          representer: "Eng. Hassan Farid Hassanein",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الوايلر فريد – للطلمبات",
          excerpt: "الوايلرفريد هي شراكة مصرية ألمانية بين شركة Allweiler AG الألمانية وشركة الوايلر فريد المصرية وقد تأسست عام 1982 وتقوم بتصنيع كافة أنواع المضخات للأغراض (الزراعية- الري- الصناعية- المنازل) ويقع مصنع شركة الوايلر فريد بمدينة العاشر من رمضان، المنطقة الصناعية ب 2.",
          representer: "م. حسن فريد حسنين",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)25256441",
    fax: "+20(2)25256054",
    email: "info@zmcegypt.com",
    website: "www.zmcegypt.com",
    address: "P.O.Box 1001 Sharkia governorate, 10th of Ramadan city, industrial zone-A2",
    logo_src: "Cairo_Office/GA_Members/21_ZMCegypt.jpg",
    is_disabled: 0,
    display_order: 21,
    locale_company: {
      create: [
        {
          name: "Misr Compressor Manufacturing Co. ",
          excerpt: "- Misr Compressor Manufacturing Co. is an Egyptian joint stock company, Shareholders are:\n&bull; Group of banks (Industrial Development Bank, Arab Investment Bank, European Investment Bank,  Suez Canal Bank, Misr Iran Bank, Egyptian Gulf Bank)\n&bull; Dallah Al Baraka Group\n&bull; International  Finance Corporation  IFC\n&bull; Individuals\n- MCMC is the sole factory in Middle East and Africa producing refrigeration compressors.\n- Issued and paid in capital 118,580,200 EGP about 20 million USD.\n- Total manpower 720\n- The company holds (ISO 9001:2000, VDE, GOST and ROHS) certificates.\nCompany activities:\n- MCMC is manufacturing hermetic compressors  for domestic and commercial refrigerators.\n- Production maximum capacity is 2 millions compressors per year covering both domestic  market and export to most  of Arab, African and European countries.\n- Main Export Markets: Algeria, Sudan, Tunisia, Morocco, Saudi Arabia, Syria, Jordan, Lebanon, Iraq, Ethiopia, Nigeria, Portugal, Italy, Spain, Turkey, Russia, Hungary, Poland, Czech Republic, England, Greece, Germany, Bulgaria.\n- MCMC products has an excellent reputation due to the top quality and high performance level under severe operating condition such  as low voltage and high ambient temperature in addition to low level of noise.\n- MCMC compressors are covering the various clients' needs regarding compressor capacity and type of refrigerant.\n- MCMC is able to produce environment friendly compressors, which are not harmful to the Earth ozone layer and do not contribute to the atmosphere \"greenhouse effect\".",
          representer: "Eng. Jamal Hassan Afifi",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة مصر لصناعة الكباسات ",
          excerpt: "- شركة مصر لصناعة الكباسات شركة مساهمة مصرية ومساهميها:\n&bull; مجموعة من البنوك ( بنك التنمية الصناعية، بنك الاستثمار العربي، بنك الاستثمار الأوروبي، بنك قناة السويس، بنك مصر إيران، البنك المصري الخليجي)\n&bull; مؤسسة التمويل الدولية\n&bull; مجموعة دله البركة البحرين، الشركة المصرية السعودية.\n&bull; مجموعة من الأفراد.\n- المصنع هو المصنع الوحيد في الشرق الأوسط وأفريقيا لإنتاج كباسات التبريد. رأس مال الشركة المصدر والمدفوع  118,580,200 جنيها مصريا حوالى  20مليون دولار أمريكي.\n- مجموع العاملين بالشركة 720 عامل.\n- الشركة حاصلة على شهادات الجودة : (ISO 9001:2000, VDE, GOST, ROHS)\nنشاط الشركة:\n- يتمثل نشاط الشركة فى إنتاج كباسات التبريد اللازمة لصناعة الثلاجات المنزلية.\n- تصل الطـاقة الإنتاجية القصوى للمشروع حوالي 2 مليون وحـدة كبـاس سنوياً لتغطيـة احتياجات السـوق المحلـى بالاضافة إلي تصدير منتج الشركة للعديد من الدول العربية والأفريقية وكذلك الدول الأوروبية.\n- أهم أسواق التصدير: الجزائر، السودان، تونس، المغرب، السعودية، سوريا، الأردن، لبنان، العراق، إثيوبيا، نيجيريا، البرتغال، إيطاليا، إسبانيا، تركيا، روسيا، المجر، بولندا، التشيك، إنجلترا، اليونان، ألمانيا، بلغاريا.\n- إن إنتاج الشركة يتميز بمستوى جودة عالي مما اكسب الشركة سمعة ممتازة في أسواق التصدير بما يتمتع به المنتج من قدرة أداء تشغيلي فائقة على مواجهة ظروف التشغيل الشاقة مثل ارتفاع درجات الحرارة وتذبذب الجهد الكهربائى مما يعطيها ميزة التشغيل الآمن طوال عمر الكباس إضافة إلى انخفاض مستوى الضوضاء الصادر عنه.\n- يغطي إنتاج الشركة مختلف احتياجات العملاء سواء من حيث الأحجام المختلفة أو مختلف غازات التبريد.\n- تنتج الشركة كباسات صديقة بيئة لا تشكل خطرا على طبقة الأوزون ، ولا تسهم في ظاهرة \"الاحتباس الحراري\".\n\n",
          representer: "م. جمال حسن عفيفى",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)23054967 / +20(2)44696555",
    fax: "+20(2)23054471 / +20(2)44698212",
    email: "info@multimgroup.com",
    website: "www.multimgroup.com",
    address: "6 Ramo Gardens Buildings, Nasr City, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/03_MultiMGroup.JPG",
    is_disabled: 0,
    display_order: 22,
    locale_company: {
      create: [
        {
          name: "Multi-M Group",
          excerpt: "The company mainly produces office furniture (metal and wooden) school and hotel furniture, expanded Metal, and building products.",
          representer: "Eng. Eslam Abdelhady Elsayed",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة مالتي إم جروب",
          excerpt: "تصنع الشركة الأثاث المكتبي (معدني وخشبي) والأثاث المدرسي والفندقي كما تصنع  الشبك الممدد ومستلزمات البناء.",
          representer: "م. إسلام عبد الهادي عبد المنعم السيد",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)25014091 / +20(2)25014093",
    fax: "+20(2)25014108",
    email: "Matrokati@yahoo.com",
    website: "http://alnasrforging.com/",
    address: "P.O.Box 15, Al-Tabbin, Helwan, Egypt",
    logo_src: "",
    is_disabled: 0,
    display_order: 23,
    locale_company: {
      create: [
        {
          name: "Naser Forging Industry Co.",
          excerpt: "Naser forging co. is considered the largest forging plant in Egypt and in the Middle East. It was established in 1960 as a production site for steel forging that supplies Automotive, and steel railway industries.",
          representer: "Eng. Hamdy Abbas Ibrahim ",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة النصر لصناعة المطروقات",
          excerpt: "تعتبر شركة النصر لصناعة المطروقات أكبر منشأة للمطروقات في مصر وفي الشرق الأوسط. أنشئت الشركة عام 1960 وهي تنتج الصفائح الحديدية المطروقة التي تغذي صناعة السيارات والسكك الحديدية.",
          representer: "م. حمدي عباس إبراهيم السيد",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(4)82603051",
    fax: "+20(4)82603057",
    email: "arcos@intouch.com",
    website: "www.arco-steel.com.eg",
    address: "P.O.Box 11, 4th and 5th Industrial Zones, Sadat Industrial City, Menufia, Egypt",
    logo_src: "Cairo_Office/GA_Members/25_Arcosteel.jpg",
    is_disabled: 0,
    display_order: 24,
    locale_company: {
      create: [
        {
          name: "The Arab Company for Steel (ARCOSTEEL)",
          excerpt: "- The Arab company for special steel \"ARCOSTEEL\" is established and located at the 4th and 5th industrial zones, Sadat City, Menufia, Egypt as an Egyptian joint-stock company.\n- The company is equipped with state-of-the-art technologies and machinery for producing, rolling, and tempering steel.\n- We produce stainless steel, steel for quenching and tempering, case hardening steels, free cutting steels, and spring steel according to the international standards and clients specifications.",
          representer: "Eng. Osama Helmy Elsaid",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة العربية للصلب المخصوص (اركوستيل)",
          excerpt: "- الشركة العربية للصلب المخصوص \"أركوستيل\" شركة مساهمة مصرية تقع في المنطقة الصناعية الرابعة والخامسة بمدينة السادات- محافظة المنوفية بجمهورية مصر العربية\n- تقوم \"أركوستيل\" بإنتاج وتسويق الصلب عالي الجودة على هيئة عروق صلب ومسبوكات ومدرفلات طويلة ولفائف.\n- الشركة مجهزة بأحدث التكنولوجيا والمعدات في مجال إنتاج ودرفلة وتشطيب ومعالجة الصلب المخصوص.\n- تنتج الشركة الصلب المقاوم للصدأ والصلب سهل القطع وصلب اليايات وصلب المعالجة السطحية وصلب التقسية طبقاً للمواصفات العالمية والمواصفات الفنية للعملاء.",
          representer: "م. أسامة حلمي السعيد",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)24024319 / +20(2)24024324",
    fax: "+20(2)22608718 / +20(2)24020986",
    email: "kfactory@link.net",
    website: "www.aoi.com.eg",
    address: "P.O.Box 278, Misr El-Gadeeda, Egypt",
    logo_src: "Cairo_Office/GA_Members/24_AOI.jpg",
    is_disabled: 0,
    display_order: 25,
    locale_company: {
      create: [
        {
          name: "Kader Factory for Development Industries",
          excerpt: "- Kader factory (affiliated to the Arab Organization for Industrialization) was established in 1949 for producing the \"Jomhoaria\" training airplane, and other civil products with high quality.\n- In the early sixties, the factory added the technology of forming and manufacturing armored steel to produce the A.P.C \"Walid\". The factory produced 2000 vehicles that were exported to many Arab and African countries.\n- In 1957, the factory became affiliated with the Arab Organization for Industrialization.\n- In 1982, the factory started producing the \"Fahd\" armored vehicles; and a manufacturing facility for plastic products was established.\n- In 1990, light armored vehicles were manufactured.\n- In 1994, heavy and medium fire fighting vehicles were also produced.\n- In 2003, Kader factory joined the national plan for modernizing the Railways and produced coaches' interiors (Metal parts and Fiber parts), bogies, wheels, Body of the normal coaches, and brakes.\n- The total labor force is approximately 2000 workers.",
          representer: "Eng. Abdelsadek Ahmed Abdelrehim",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مصنع قادر للصناعات المتطورة",
          excerpt: "- أنشئ مصنع قادر (أحد مصانع الهيئة العربية للتصنيع) عام 1949 بغرض إنتاج طائرة التدريب (الجمهورية) وغيرها من المنتجات المدنية ذات الجودة العالية.\n- قام المصنع في بداية الستينات بإدخال تكنولوجيا تشكيل وتشغيل الصلب المدرع لإنتاج العربات المدرعة بمصر وقد أنتج المصنع العربية المدرعة (الوليد) وأنتج منها حوالي 2000 عربة وتم تسويقها بعدة دول عربية وأفريقية.\n- في سنة 1975 انضم مصنع قادر للهيئة العربية للتصنيع.\n- في سنة 1982 بدأ المصنع في إنتاج عائلة المركبة المدرعة (فهد) وفي نفس العام أنشئ بالمصنع مركز لتصنيع منتجات البلاستيك للأغراض المدنية والعسكرية.\n- في سنة 1990 بدأ المصنع بإنتاج العربات المدرعة الخفيفة وكذا العربات المصفحة.\n- في سنة 1994 تم إنتاج العديد من عربات الإطفاء المتوسطة والثقيلة.\n- في سنة 2003 بدأ مصنع قادر بالمشاركة في الخطة القومية لتطوير الخدمة بالسكك الحديدية المصرية وذلك من خلال تصنيع التجهيزات الداخلية للعربات بأنواعها وكذلك البواجي والعجلات وأجسام العربات والفرامل.\n- يبلغ عدد العاملين حوالي 2000 عامل.",
          representer: "م. عبد الصادق أحمد عبدالرحيم",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)27599711 / +20(2)27599700",
    fax: "+20(2)27599710",
    email: "info@elsewedy.com ",
    website: "www.elsewedy.com ",
    address: "P.O.Box 11835, Plot 27, Distriet, New Cairo, Cairo, Egypt ",
    logo_src: "Cairo_Office/GA_Members/05_Swedish_Electric.jpg",
    is_disabled: 0,
    display_order: 26,
    locale_company: {
      create: [
        {
          name: "Elsewedy Electric S.A.E",
          excerpt: "- Electrical products (Wires & Cables, Transformers, Cable accessories)\n- Wind energy (rotor blades, wind towers, and wind turbines)\n- Electric Transmission & Distribution Projects",
          representer: "Eng. Ahmed El-Sewedy",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة السويدي إليكتريك ",
          excerpt: "- تصنيع المهمات الكهربائية (كابلات حتى جهد 400 ك.ف،محولات القوى حتى جهد 220 ك.ف، محولات التوزيع العدادات، توربينات الرياح، أعمدة الإنارة، عوازل خزفية وصلات ونهايات كابلات، أسلاك ومواصلات) \n- المشروعات والمقاولات الكهربائية: مشروعات توليد الكهربائية بنظام EPC أو IPP- مشروعات نقل وتوزيع الكهرباء.",
          representer: "م. احمد السويدي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(1)5413213 / +20(1)15412613",
    fax: "+20(2)15413215",
    email: "m.faw3y@maktraxx.com",
    website: "www.maktraxx.com   ",
    address: "",
    logo_src: "",
    is_disabled: 0,
    display_order: 27,
    locale_company: {
      create: [
        {
          name: "MAC for the manufacture of brake Thiel",
          excerpt: "",
          representer: "Eng. Ibrahim Al Sayed Ibrahim Saleh",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة ماك لتصنيع تيل الفرامل (إيماك لنظم الفرامل)",
          excerpt: "-    شركة ماك لتصنيع تيل الفرامل (إنتاج وصنيع جميع أنواع تيل الفرامل النقل والملاكي وتصنيع التيل الصناعي).\n-    شركة إيماك لنظم الفرامل (إنتاج وتشطيب جميع أنواع تيل الفرامل النقل والملاكي).",
          representer: "م. إبراهيم السيد إبراهيم صالح",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(1)5410031 / +20(1)5410406",
    fax: "+20(1)5411160",
    email: "Mamdouh.kastour@man-kastour.com.eg",
    website: "http://man-kastour.com.eg",
    address: "",
    logo_src: "",
    is_disabled: 0,
    display_order: 28,
    locale_company: {
      create: [
        {
          name: "Gorika Egypt Group",
          excerpt: "",
          representer: "Eng. Mamdouh Qastour Gabriel",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة جوريكا مصر جروب للصناعة",
          excerpt: "تأسست عام 1984 تقوم بإنتاج المقطورات والنصف مقطورات والأوتوبيسات والميني باصات ولواري MAN حيث أننا الوكلاء الوحيدون لشركة MZN Germany في مصر \n\n",
          representer: "م. ممدوح قسطور غبريال",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)25885788 / +20(2)25899332",
    fax: "+20(2)25937288",
    email: "kemeconet@yahoo.com ",
    website: "",
    address: "13 st. Bostan eldek, Emad Eldin, Azpakia, Cairo, Egypt ",
    logo_src: "",
    is_disabled: 0,
    display_order: 29,
    locale_company: {
      create: [
        {
          name: "KIMCO",
          excerpt: "Fabricated Steel for:\n- Electrecity Works.\n- Cable Tray.\n- Cable ladder.\n- Accessories.",
          representer: "Eng. Khaled Abdul-Majid Saif",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة كيمكو للأعمال الكهربائية والتوريدات",
          excerpt: "تصنيع معادن للأعمال الكهربائية وحوامل كابلات وسلالم كابلات وملحقاتها.",
          representer: "م. خالد عبد المجيد سيف ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)24151485 / +20(2)22910851",
    fax: "+20(2)22910702 / +20(2)49871396",
    email: "info@trust-seats.com",
    website: "www.trust-seats.com",
    address: "Head Office: 6 Ramo Gardens Buildings, Nasr City, Cairo, Egypt / Plant: Industrial Zone, El Khanka, Kaliobia, Egypt",
    logo_src: "Cairo_Office/GA_Members/11_Trust.jpg",
    is_disabled: 0,
    display_order: 30,
    locale_company: {
      create: [
        {
          name: "TRUST",
          excerpt: "Manufacturing all types of car seats (cars, microbuses, and buses)",
          representer: "Tamer Mohammed Majid Shafi",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة تراست للتصنيع الهندسي",
          excerpt: "تصنيع جميع أنواع كراسي السيارات (ملاكي - نصف نقل - اتوبيسات - ميكروباص)",
          representer: "تامر محمد ماجد شافعي  ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)26323124 / +20(2)26327981",
    fax: "+20(2)26399783",
    email: "elmawred4@yahoo.com",
    website: "",
    address: "4 Amin El Shams, Heliopolis, Cairo, Egypt",
    logo_src: "",
    is_disabled: 0,
    display_order: 31,
    locale_company: {
      create: [
        {
          name: "El-Mawred for Import & Export",
          excerpt: "- Importing aghicultural tractor.\n- Agent of Sonalika tractors in Egypt.\n- Have good connections locally and internationally, as well as distinguished trade relations.",
          representer: "Soliman Ebada",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة المورد للإستيراد والتصدير والاستثمار ",
          excerpt: "- استيراد وتسويق جرارات زراعية ومعدات هندسية.\n- وكيلة جرارات سوناليكا بمصر.\n- شركة تتمتع بالإتصالات الدولية والمحلية ولها علاقات تجارية مميزة.",
          representer: "سليمان عبادة",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)24026472 /+20(1)5411983",
    fax: "+20(2)24026472 / +20(2)015411984",
    email: "Ictd_dief-alla@hotmail.com",
    website: "",
    address: "",
    logo_src: "",
    is_disabled: 0,
    display_order: 32,
    locale_company: {
      create: [
        {
          name: "Universal Company for Minerals Technology",
          excerpt: "",
          representer: "Eng. Breiqa'a Dief-alla",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة العالمية لتكنولوجيا المعادن",
          excerpt: "-    إنتاج سبائك الألمونيوم المختلفة في شكل قوالب.\n-    إجراء المعالجة الحرارية لأجزاء الألمنيوم.\n-    مصنع الشركة في مدينة العاشر من رمضان الصناعية.",
          representer: "م. بريقع توفيق محمد ضيف الله ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)22907870 / +20(2)49871160",
    fax: "+20(2)22910702 / +20(2)44679899",
    email: "info@multimgroup.com",
    website: "www.hadymeiser.com ",
    address: "6 Ramo Gardens Buildings, Nasr City, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/22_Hady_M.jpg",
    is_disabled: 0,
    display_order: 33,
    locale_company: {
      create: [
        {
          name: "Hady Meiser Egypt",
          excerpt: "MEISER grating is acknowledged by trade specialists to be one of the best products of its kind in Europe. It is a fair assessment, we feel. And this is undoubtedly due partly to the commitment of our planning department and our reliable delivery dates. We produce grating metal of all types and sizes, and spiral stairs.",
          representer: "Eng. Shereef AbdelHady Elsayed",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة هادي مايزر",
          excerpt: "تعتبر المشايات المعدنية التي تنتجها مايزر إحدى أفضل المنتجات من نوعها في أوربة. ونشعر بأن هذا يفي الشركة حقها. ولاشك بأن أحد العوامل في هذا النجاح هو التزام قسم التخطيط بالعمل وبمواعيد التسليم. نحن ننتج المشايات المعدنية بجميع أنواعها ومقاساتها والسلالم الحلزونية.",
          representer: "م. شريف عبد الهادي عبد المنعم ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)6352200",
    fax: "+963(11)6714605",
    email: "",
    website: "",
    address: "P.O.Box 12240, Damascus, Syria",
    logo_src: "",
    is_disabled: 0,
    display_order: 34,
    locale_company: {
      create: [
        {
          name: "Al-Ehsan ",
          excerpt: "",
          representer: "Ehsan Al-Hafez",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الإحسان",
          excerpt: "",
          representer: "إحسان الحافظ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)6352702",
    fax: "+963(11)6352703",
    email: "",
    website: "",
    address: "P.O.Box 958, Free zone, Arda, Damascus, Syria",
    logo_src: "",
    is_disabled: 0,
    display_order: 35,
    locale_company: {
      create: [
        {
          name: "Al-Ameen",
          excerpt: "",
          representer: "Ameen Al-Hafez",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الأمين",
          excerpt: "",
          representer: "أمين الحافظ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+961(1)789400 / +961(1)789401",
    fax: "+961(1)789407 / +961(1)789408",
    email: "lematic@lematicltd.com",
    website: "http://www.lematicltd.com",
    address: "P.O.Box 2815,Verdun-Rasheed Karameh Street , Honda Bldg. Beirut, Lebanon",
    logo_src: "",
    is_disabled: 0,
    display_order: 36,
    locale_company: {
      create: [
        {
          name: "Lematic ",
          excerpt: "Lematic is an international company that is specialized in the production of household appliances and appliance industries. Lematic is now one of the major producers of appliances and equipment as a result of steady international growth over the last 50 years.\nLematic products are world leader in design and among the most competitive in the market. The company offers both quality and value. It has several factories located in Lebanon, Saudi Arabia and Syria. It employed over 1800 employees.",
          representer: "Eng. Said Al-Hafez",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة اللبنانية للتجارة والصناعة الحديثة - ليماتيك ",
          excerpt: "شركة ليماتيك هي شركة دولية متخصصة في صناعة الأجهزة المنزلية ومتمماتها. وهي حالياً واحدة من أهم الشركات المنتجة للأجهزة والمعدات المنزلية  لما حققته من نمو مطرد عالمياً خلال السنوات الخمسين الماضية. إن منتجات ليماتيك تتفوق بتصاميمها على مستوى العالم وهي من الأكثر تنافسية في الأسواق. لدى شركة ليماتيك مصانع في لبنان والسعودية وسورية، وهي تشغل أكثر من 1800 عامل.",
          representer: "م. محمد سعيد الحافظ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 10
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+961(1)869518 / +961(1)789403",
    fax: "+961(1)865219 / +961(1)789416",
    email: "apaco@dm.net.lb",
    website: "",
    address: "P.O.Box 32218, Beirut, Lebanon",
    logo_src: "",
    is_disabled: 0,
    display_order: 37,
    locale_company: {
      create: [
        {
          name: "Apaco",
          excerpt: "",
          representer: "Ghassan Al-Hafez",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة اوباكو / لبنان",
          excerpt: "",
          representer: "غسان الحافظ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 10
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)5510293",
    fax: "+963(11)5510294",
    email: "",
    website: "",
    address: "Al-Qasimiyah, Damascus, Syria",
    logo_src: "",
    is_disabled: 0,
    display_order: 38,
    locale_company: {
      create: [
        {
          name: "Emaar National Co.",
          excerpt: "",
          representer: "Eng. Iyad Ammora",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة إعمار الوطنية",
          excerpt: "",
          representer: "م. إياد عمورة",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)2129980",
    fax: "+963(11)8821491",
    email: "g.o.eng.ind@net.sy",
    website: "www.damacable.com.sy",
    address: "P.O.Box 827, Damascus, Syria",
    logo_src: "",
    is_disabled: 0,
    display_order: 39,
    locale_company: {
      create: [
        {
          name: "General Company for Cable Industry Damascus",
          excerpt: "The company is of the state owned of the General Organization for Engineering industries which belongs in its turn to the Ministry of Industry.\nThe company produce and market all kinds of low voltage cable up to (1) K.V.\nThe company apply the following standards SNS - IEC - VDE - in addition to the possibility of producing according to any other International Standards and company for sore items.\nHigh quality of products good reputation in local and neighboring markets.\nEngineers and technicians have distinguished technical experience.\nthe tow company use modern high technology machines and always aims at developing the production lines to follow - up the International development of this Industry.\nUses the best raw materials conforming with the International Standards.\nThe company are equipped with modern laboratory Instruments for testing the raw materials, semi and final products.",
          representer: "",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة العامة لصناعة الكابلات بدمشق",
          excerpt: "هي إحدى الشركات العامة التابعة للمؤسسة العامة للصناعات الهندسية والتي تتبع بدورها وزارة الصناعة.\nتقوم الشركة بإنتاج وتسويق كافة أنواع كابلات التوتر المنخفض وحتى (1) كيلو فولت ، تعتمد الشركة المواصفات العالمية التالية : ( السورية SNS &ndash; الألمانية VDE &ndash; الكهرباء الدولية IEC ) ويمكن التصنيع وفق أية مواصفة عالمية أخرى.\nتتمتع كافة منتجات الشركة بجودة عالية وسمعة جيدة في الأسواق المحلية والمجاورة و يتمتع المهندسون والفنيون في الشركة بخبرات فنية متميزة و الشركة حائزة على شهادة الجودة : ISO 9001 لعام 2000 من شركة DNV.\nتستخدم الشركة في صناعة منتجاتها آلات متطورة حديثة وتسعى الشركة دائما\" لتطوير خطوط الإنتاج وتحديثها لمواكبة التطورات العالمية لهذه الصناعة.\nتستخدم الشركة أجود أنواع المواد الأولية المطابقة للمواصفات العالمية كما أن الشركة مجهزة بأحدث الأجهزة المخبرية اللازمة لفحص المواد الأولية ولإجراء الاختبارات على المنتجات النهائية والنصف مصنعة.",
          representer: "",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)5119526",
    fax: "+963(11)5120263",
    email: "syronics@mail.sy",
    website: "www.syronics.com.sy",
    address: "P.O.Box 951, Damascus Syria",
    logo_src: "Damascus_Office/GA_Members/14_syronics.jpg",
    is_disabled: 0,
    display_order: 40,
    locale_company: {
      create: [
        {
          name: "Syrian Arab Co. For Electronic Industry",
          excerpt: "\"Syronics Co.\" is considered one of the leading companies in electronic Industries. It was established in 1960. It is belonging  to General Organization of Engineering Industries at the Ministry of Industry.\nThe company is using  the best technology and development in fabricating the electronic products. ",
          representer: "Dr. Nawar Al-Awa",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة العربية السورية للصناعات الإلكترونية سيرونيكس",
          excerpt: " تعد الشركة العربية السورية للصناعات الالكترونية من الشركات الرائدة في مجال الصناعات الإلكترونية و يتجلى هذا التطور بمواكبتها احدث التقانات في الإلكترونيات الرقمية و التماثلية و التقدم الواضح من خلال القفزة النوعية التي أحرزتها في فترة وجيزة و هي تستمر في متابعة كل ما هو جديد.",
          representer: "د. نوار العوا",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(21)6830073",
    fax: "+963(21)6830067",
    email: "alpcable@scs-net.org",
    website: "http://www.alepcable.com",
    address: "P.O.Box 6671, Sfeera Way, Aleppo, Syria",
    logo_src: "Damascus_Office/GA_Members/15_ACCI.jpg",
    is_disabled: 0,
    display_order: 41,
    locale_company: {
      create: [
        {
          name: "Aleppo Cables Company",
          excerpt: "Aleppo Company for Cable Industry is one of the state owned companies of the General Organization for Engineering Industries which belongs in turn to the Ministry of Industry. Its different products are used in transmission of low/medium/high voltage power and in transmission of audio/video signals.",
          representer: "Eng. Mustafa Jwayyed",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة حلب لصناعة الكابلات",
          excerpt: "إحدى الشركات العامة التابعة للمؤسسة العامة للصناعات الهندسية والتي تتبع بدورها لوزارة الصناعة ، إنتاج الشركة من الكابلات بمختلف أنواعها يستخدم لنقل التوترات المنخفضة والمتوسطة والعالية ونقل الإشارات الصوتية والتلفزيونية.",
          representer: "م. مصطفى جويد ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)6119935",
    fax: "+963(11)6120416",
    email: "info@ibc-power.com",
    website: "http://www.ibc-power.com",
    address: "P.O.Box 4908, Damascus, Syria",
    logo_src: "Damascus_Office/GA_Members/16_IBC.jpg",
    is_disabled: 0,
    display_order: 42,
    locale_company: {
      create: [
        {
          name: "Inernational Business Center Co.Ltd",
          excerpt: "IBC is a telecom and Power solutions company specializing in Telecom services and complete power solutions.\nIBC has a rich portfolio of products and services combined with skilled project management and engineering staff and many years of experience executing large and medium scale projects.\nIn the telecom field, IBC services portfolio covers network deployment, network integration, operation & maintenance, call center services, network audits, RF optimization and technical staff augmentation.\nIn the field of power solutions IBC provides complete solutions from generators, batteries and uninterruptible power supplies including design and implementation customer needs",
          representer: "Eng. Wael Jandali",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مركز الأعمال الدولي",
          excerpt: "يعتبر مركز الأعمال الدولي من أوائل الشركات المتخصصة في سوريا التي  تعنى بمجالات حلول الطاقة المتكاملة  وهندسة الاتصالات وتقديمالاستشارات الفنية والهندسية المتراكمة لديها نتيجة الخبرة الواسعة التي اكتسبتها منذ انطلاقتها المبكرة.\n&bull; تأسس مركز الأعمال الدولي IBC من قبل المهندس هيثم الجندلي عام 1955 كمكتب هندسي متخصص في دراسة وتنفيذ المشاريع الهندسية والكهربائية.\n&bull; تطور مركز الأعمال الدولي خلال العقود الستة الماضية بحيث أصبح من أكبر الشركات الوطنية الرائدة في مجالات حلول الطاقة وهندسة الإنارة والاتصالات وحازعلى ثقة كبرى الشركات العالمية المعروفة في هذه المجالات وقام بتمثيلها في سوريا.\n&bull; يسعى مركز الأعمال الدولي لتطوير خدماته وتحسينها باستمرار وتوسيع فروعه ليشمل كافة  أنحاء القطر كما يسعى لإيصال خدماته إلى بلدان  أخرى كما تم مؤخراً بافتتاح IBC Africa  مركز الأعمال الدولي في السودان، الخرطوم.\n&bull; قام مركز الأعمال الدولي بتنفيذ ودراسة العديد من المشاريـع الهامة والرائدة نذكر منها:\n- تركيب  وحدات التغذية EMERSON لمشروع المليون خط مع المؤسسة العامة للاتصالات.\n- تطوير وتركيب  تجهيزات الطاقة الاحتياطية في مطارات سوريا\n- تركيب أكبر مجموعة وحدة تغذية احتياطية في سورية UPS في هيئة الطاقة الذرية\n- مؤخراً تم التعاقد مع شركة MTN سوريا لتنفيذ أعمال الصيانة الطارئة والوقائية لأبراج البث الخلوية.\n&bull; يولي مركز الأعمال الدولي بالغ الأهمية للصيانة وخدمة ما بعد البيع حيث يسعى من خلال كوادره من مهندسين وفنيين لتقديم الدعم الفني على مدار الساعة لكافة عملاءه وبالسرعة الممكنة.",
          representer: "م. وائل جندلي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)5313178",
    fax: "+963(11)2762432",
    email: "",
    website: "",
    address: "Damascus, Syria",
    logo_src: "",
    is_disabled: 0,
    display_order: 43,
    locale_company: {
      create: [
        {
          name: "El-Quseir For insulators",
          excerpt: "",
          representer: "Mohammed Haitham El-Quseir",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة القصير للعوازل",
          excerpt: "",
          representer: "محمد هيثم قصير",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(11)5744677 / +963(9)44250073",
    fax: "",
    email: "kh-mr@mail.sy",
    website: "",
    address: "Damascus, Syria",
    logo_src: "",
    is_disabled: 0,
    display_order: 44,
    locale_company: {
      create: [
        {
          name: "Al-Rayes Foundation for Electrical Appliances",
          excerpt: "",
          representer: "Khalil Al-Rayes",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مؤسسة الريس للأجهزة الكهربائية المنزلية",
          excerpt: "",
          representer: "خليل الريس",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "",
    fax: "",
    email: "scmi_iskandaryah@yahoo.com",
    website: "",
    address: "P.O.Box 5763, Babil province, Alexandria, the eastern section, Iraq",
    logo_src: "",
    is_disabled: 0,
    display_order: 46,
    locale_company: {
      create: [
        {
          name: "General Company for Mechanical Industries",
          excerpt: "General Company for Mechanical Industries is a public-owned company under the umbrella of the Ministry of Industry and Minerals in Iraq. It operates in manufacturing pumps and agricultural machinery, irrigation sprinklers and equipment, screws and other accessories for tractors and agricultural machinery, metal and wood furniture, industry panels, and conditioned warehouses.",
          representer: "Eng. Sabah Al-Khafaji",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة العامة للصناعات الميكانيكية",
          excerpt: "الشركة العامة للصناعات الميكانيكية هي إحدى شركات وزارة الصناعة والمعادن العراقية وهي شركة عامة عاملة في تصنيع المضخات والآلات الزراعية أجهزة الري بالرش تصنيع البراغي وبقية أجزاء الربط إنتاج الجرارات والحاصدات والآلات الزراعية والمضخات الإروائية والصناعية إنتاج الأثاث المعدني والخشبي صناعة ألواح البناء الجاهز، والمستودعات والمخازن المبردة.",
          representer: "م. صباح الخفاجي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 6
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+965(2)3985210 / +965(2)3985208",
    fax: "+965(2)3985300 / +965(2)3984925",
    email: "kic@kuwaitindustries.com",
    website: "www.kuwaitindustries.com",
    address: "P.O. Box 2230 Safat, 13023 Kuwait ",
    logo_src: "Cairo_Office/GA_Members/08_KIC.jpg",
    is_disabled: 0,
    display_order: 47,
    locale_company: {
      create: [
        {
          name: "Kuwait Industries Co.",
          excerpt: "Kuwait Industries Company Holding was established in the year 1993 as a holding company, the first of its kind permitted in the state of Kuwait. The primary objective of the company is to provide management services to its subsidiary companies and to promote new projects and investment in the different industrial sectors locally and overseas in line with organization&rsquo;s interests. The activities of the subsidiary companies are diversified and are integrated in executing architectural aluminum works. This concept provides the customer the advantage of meeting all their architectural requirements from one source as a package unit, from aluminum extrusion, fabrication, glass works, grills, roll forming to installation and maintenance.  ",
          representer: "Mohammad Al-Naki",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة العربية للمعادن الخفيفة",
          excerpt: "تأسست شركة الصناعات الكويتية عام 1993 كشركة قابضة، وتعتبر الشركة الأولى من نوعها في دولة الكويت. الهدف الرئيسي للشركة هو تقديم خدمات في مجال الإدارة للشركات التابعة لها، وتشجيع المشاريع الجديدة والاستثمار في القطاعات الصناعية المختلفة محلياً وعالمياً وفق اهتماماتها. إن نشاط الشركات التابعة متنوع ويتكامل لتنفيذ أعمال الألمنيوم المعماري. ميزة هذا المفهوم للعميل هو تلبية جميع متطلباته المعمارية من مصدر واحد سواءً كان سحب الألمنيوم، تصنيع، أعمال الزجاج، تشكيل اللفائف وصولاً للتركيب والصيانة.",
          representer: "محمد النقي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 3
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+965(4)734000/ +965(4)734800",
    fax: "+965(4)710475",
    email: "ka@kuwaitindustries.com",
    website: "www.kuwaitaluminium.com",
    address: "P.O. Box 5355 Safat, 13054 Kuwait ",
    logo_src: "Cairo_Office/GA_Members/09_KA.jpg",
    is_disabled: 0,
    display_order: 48,
    locale_company: {
      create: [
        {
          name: "Kuwait Aluminium",
          excerpt: "The company was established in 1968,  and specialized in the design, fabrication, installation and maintenance of architectural aluminum products for construction and decoration uses. Products include all types of Doors, Windows, Internal Partitions, Wall Cladding, Curtain Walls, Security and Decorative Grills. Louvers, Handrails, Skylights, and various other Architectural aluminum products.\nThe company has executed numerous government housing and prestigious commercial projects in Kuwait. One of the notable is Kuwait Towers an architectural land mark of Kuwait. The company is regularly introducing new products and technology to satisfy customer&rsquo;s requirements and tastes which other competing companies in the Gulf region have not dare to do. The company has won a number of awards and trophies in its field of activities. In May 1999 the company was awarded the prestigious ISO-9001 Quality Management System Certification.",
          representer: "Naser Ali Al-Naki",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة ألمنيوم الكويت",
          excerpt: "أنشئت الشركة في عام 1968 وهي متخصصة في تصميم وتصنيع وتركيب وصيانة منتجات الألمنيوم للإنشاءات والديكورات. تنتج الشركة جميع أنواع الأبواب والنوافذ والفواصل الداخلية والدرابزين وغيرها من منتجات الألمنيوم الإنشائية المختلفة.\nنفذت الشركة العديد من مشاريع الإسكان الحكومية والمشاريع التجارية المرموقة في دولة الكويت ومن بينها أبراج الكويت كمعلم سياحي في الكويت. تقدم الشركة بانتظام منتجات وتكنولوجيا جديدة لإرضاء متطلبات العملاء وأذواقهم وهو ما لم تقدمه الشركات المنافسة في منطقة الخليج، وقد فازت الشركة بعدد من الجوائز والكؤوس في مجال أنشطتها، ومنحت الشركة عام 1999 شهادة نظام إدارة الجودة الأيزو 9001.",
          representer: "ناصر علي النقي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 3
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+966(2)6087666",
    fax: "+966(2)6355916",
    email: "scc@saudicable.com",
    website: "www.saudicable.com",
    address: "P.O. Box 4403, Jeddah 21491, Kingdom Of Saudi Arabia",
    logo_src: "Cairo_Office/GA_Members/06_scc.gif",
    is_disabled: 0,
    display_order: 49,
    locale_company: {
      create: [
        {
          name: "Saudi Cable Company",
          excerpt: "Established in 1975, a market leader in providing world-class cable solutions for the power and telecom sectors. Its technical excellence is reflected in the fact that it was the first manufacturer in the Middle East to produce Medium and High Voltage XLPE power cables, as well as in the production of optical fiber telecommunications cables. SCC continues to innovate, offering flame-retardant and low smoke halogen free cables.   ISO 9001 certified international quality design, manufacturing and services has provided them with satisfied customers in over 60 countries worldwide.",
          representer: "Faisal Dabbagh",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الكابلات السعودية",
          excerpt: "هي شركة رائدة في سوق تزويد الكابلات ذات المستوى العالمي لقطاعي الطاقة والاتصالات تأسست عام 1975.\n وينعكس تميزها التقني في حقيقة أنها أول مصنع في الشرق الأوسط لإنتاج الكابلات للجهد المتوسط والعالي وكذلك الألياف الضوئية للاتصالات. وتواصل شركة الكابلات السعودية الابتكار، وتوفير مثبطات اللهب والكابلات الخالية من الهالوجين. وبفضل شهادة الجودة العالمية ISO 9001 للتصميم والتصنيع والخدمات وصلت الشركة إلى تحقيق رضى العملاء في أكثر من 60 بلداً في جميع أنحاء العالم.",
          representer: "فيصل الدباغ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 5
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+966(2)6048000",
    fax: "+966(2)6436344",
    email: "communications@xenel.com",
    website: "www.xenel.com",
    address: "P.O. Box 2824, Jeddah 21461, Saudi Arabia",
    logo_src: "Cairo_Office/GA_Members/07_XENEL.jpg",
    is_disabled: 0,
    display_order: 50,
    locale_company: {
      create: [
        {
          name: "XENEL INDUSTRIES",
          excerpt: "Xenel was founded in 1973 by the descendants of one of the oldest trading houses in the Middle East . It is positioned at the center of a group of companies created with a shared vision of achieving economic growth by bridging know how to different parts of the world. Over its 35 year history Xenel, through its internal skills, joint venture partnerships and associations with global companies throughout the world, has built expertise in energy, diversified industries, petrochemicals, construction, infrastructure development, healthcare, industrial services, IT, logistics, real estate and global investing.\nThrough its ability to identify opportunities Xenel is an acknowledged innovator and leader in building projects and companies in infrastructure, diversified industries and contracting, regionally and internationally. From its creation of the first electrical cable production facility in the Middle East to developing the first green-field site BOO power plant in South Asia, and from the first commercially operated desalination plant in Saudi Arabia to the expansion of its downstream private-sector petrochemical industries, Xenel has joint ventured and built alliances with global companies and institutions of international renown and created companies with global reach.",
          representer: "",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الحدادة المحدودة",
          excerpt: "تأسست شركة أكسينل عام 1973 من خلف أحد أقدم منازل التجارة في الشرق الأوسط، وهي تنتمي لمجموعة شركات تم إنشاؤها وفق رؤية مشتركة لتحقيق النمو الاقتصادي من خلال الترابط المعرفي مع أطراف مختلفة في العالم. عبر مايزيد عن 35 عاماً في تاريخ إكسينل، ومن خلال المهارات الداخلية والشراكات والمشاريع مع الشركات العالمية في أنحاء الأرض، اكتسبت خبرة في مجالات الطاقة والصناعات المتنوعة، والبتروكيماويات، والإنشاءات وتطوير البنية التحتية، والرعاية الصحية، والخدمات الصناعية، وتكنولوجيا المعلومات، والخدمات اللوجستية، والعقارات والاستثمارات العالمية.\nمن خلال قدرتها على تحديد الفرص، فإن إكسينل مبدعة وسباقة في بناء مشاريع وشركات البنية التحتية، والصناعات المتنوعة والمقاولات معترف بها إقليمياً ودولياً. من إنشائها أول مصنع لإنتاج الكابلات الكهربائية في الشرق الأوسط، إلى بناء أول محطة طاقة خضراء في جنوب آسيا، ومن أول تطبيق عملي لمنشأة تحلية المياه  في السعودية إلى الاستثمار الخاص في صناعة البتروكيماويات، فقد شاركت اكسينل برأسمال استثماري وبنت تحالفات مع شركات عالمية ومؤسسات دولية معترف بها في إنشاء شركات ذات ارتباطات عالمية.",
          representer: "",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 5
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+973(17)832832 / +973(17)832833",
    fax: "+973(17)832832 / +973(17)832833",
    email: "midalcbl@midalcable.com",
    website: "www.midalcable.com",
    address: "P.O. Box 5939, Kingdom of Bahrain",
    logo_src: "Cairo_Office/GA_Members/10_Midalcable.jpg",
    is_disabled: 0,
    display_order: 51,
    locale_company: {
      create: [
        {
          name: "Midal Cables Ltd.",
          excerpt: "Midal cables Ltd is a success story born in 1977, conceived between Intersteel-Bahrain and Olex Cables-Australia.\nIts aim was to evolve a degree of industrial self sufficiency in the Middle East by leading the way in manufacturing Aluminum rod and electrical conductors.\nOur mission is to establish and invest in manufacturing facilities & related services to adopt state of the art technology in the manufacturing processes of Aluminum & Aluminum Alloy Rod, Wire.",
          representer: "Hamid R. Al-Zayani",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الشرق الاوسط للكابلات – ميدال كبيلز ",
          excerpt: "شركة ميدال للكابلات هي قصة نجاح ولدت عام 1977، كشراكة بين إنترستيل- البحرين و أوليكس للكابلات-استراليا.\nوكان هدفها أن تشق الطريق في مجال تصنيع قضبان الألمنيوم والموصلات الكهربائية للوصول إلى درجة من الاكتفاء الذاتي الصناعي في منطقة الشرق الأوسط.\nرسالتنا هي أن نؤسس ونستثمر في منشآت تصنيع سبائك وقضبان الألمنيوم وخدماتها وتبني أحدث ماتوصلت له التكنولوجيا في عمليات التصنيع.",
          representer: "حامد راشد الزياني",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 4
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+249(183)528984 / +249(183)528985",
    fax: "+249(183)528983",
    email: "ammoragroup-sudan@yahoo.com ",
    website: "",
    address: "",
    logo_src: "",
    is_disabled: 0,
    display_order: 52,
    locale_company: {
      create: [
        {
          name: "Ammora Co. For Petroleum Industries ",
          excerpt: "Lubricating oil, Aluminum profiles, & Plastic containers",
          representer: "Dr. Awad Ammoura",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة عمورة للبترول",
          excerpt: "تصنيع زيوت السيارات، سحب بروفيلات ألمنيوم، تصنيع العبوات البلاستيكية",
          representer: "د. عوض عمورة",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 8
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+249(185)339987",
    fax: "+249(185)33987",
    email: "giadinfo@giad.com",
    website: "www.giad.sd",
    address: "P.O.Box 13179, Khartoum, Sudan",
    logo_src: "Cairo_Office/GA_Members/12_Giad.jpg",
    is_disabled: 0,
    display_order: 53,
    locale_company: {
      create: [
        {
          name: "Giad Industrial Group",
          excerpt: "The Group was founded in 1993 with the vision to make it the largest industrial group in the region. Its mission is set towards developing competences and exploiting potentials in order to boost growth and implement the national strategy which aimes at developing a unified, secured, and modernized Sudanese nation. Activities of the group covers wide area of industrial production, and it is specialized in the localization of industries and modern technologies focusing on the engineering industries (heavy machinery, vehicles, aviation, mining, metallurgical and electronic industries).",
          representer: "Eng.Ahmed Abdulrahman Osman",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مجموعة جياد الصناعية",
          excerpt: "تأسست المجموعة في عام 1993م وفق رؤية تجعل منها كبرى المجموعات الصناعية في الإقليم، رسالتها العمل والمبادرة لتطوير المقدرات والاستغلال الأمثل للإمكانيات دفعاً لمسيرة التنمية وتحقيق إستراتيجية الدولة الهادفة لاستكمال بناء أمة سودانية موحدة آمنة ومتطورة. يغطي نشاط المجموعة معظم مجالات الإنتاج الصناعي وتتخصص في توطين الصناعات والتقانات الحديثة بالتركيز علي الصناعات الهندسية من الآليات الثقيلة والمركبات والطيران والتعدين والصناعات المعدنية والصناعات الإلكترونية.",
          representer: "م. أحمد عبد الرحمن عثمان",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 8
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)25553845",
    fax: "+20(2)25554236 ",
    email: "helwan_diesel@yahoo.com",
    website: "http://fact909.momp.gov.eg",
    address: "P.O.Box 11726 Ein helwan, Cairo, Egypt  ",
    logo_src: "Cairo_Office/GA_Members/20_Helwan_Diesel.jpg",
    is_disabled: 0,
    display_order: 55,
    locale_company: {
      create: [
        {
          name: "Helwan Diesel Engines Co.",
          excerpt: "Products:\n1. Helwan Diesel Engines Power (22 Up to 125 hp).\n2. Diesel Engines FL 511 Power (7.5 up to 30 hp).\n3. Diesel Engines H series power (40 up to 268 hp).\n4. Generating sets powered by Deutz FL912 power (up to 57) K.V.A\n5. Generating sets powered by HDEC  power (up to 150 K.V.A\n6. Are Welding Generating sets (400 - 500) a m p\n7. Generating sets powered by HDES power (up to 2500) K.V.A\n8. Water pumping sets powerd by HDEC (45 up to 240) m3 /hr.\n9. Water pumping sets powerd by FL511 (110 up to 415) m3 /hr\n10. Bushes & Bearing Shells\n11. Building & construction Equipments",
          representer: "Eng. Mohamed Kamal Abdelhamed",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة حلوان لمحركات الديزل",
          excerpt: "منتجاتها:\n1. عائلة محركات ديزل حلوان من (22 حتى 125) حصان.\n2. عائلة محركات ديزل دويتس (FL511) من (7.7 حتى 30) حصان.\n3. عائلة محركات ديزل حلوان طراز H من (40 - 268) حصان.\n4. وحدات توليد الكهرباء بمحركات ديزل دويتس (FL912) حتى 57 ك.ف.أ\n5. وحدات توليد الكهرباء بمحركات ديزل حلوان حتى 150 ك.ف.أ \n6. وحدات لحام بالقوس الكهربائي تعمل بالديزل من (400 حتى 500) أمبير.\n7. وحدات توليد الكهرباء بمحركات ديزل عالمية حتى 2500  ك.ف.أ\n8. وحدات ضخ ورفع المياه من (45 حتى 240)متر مكعب.\n9. وحدات ضخ ورفع المياه من (110 حتى 415) متر مكعب.\n10. جلب وسبائك كراسي المحاور.\n11. معدات التشييد والبناء.",
          representer: "م. محمد كمال عبد الحميد",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(15)410410 ",
    fax: "+20(15)410308",
    email: "management@ahramsg.com",
    website: "www.ahramsg.com",
    address: "P.O.Box 1562, Industrial area A1, 10th of Ramadan City, Sharkeya, Egypt",
    logo_src: "Cairo_Office/GA_Members/14_ASG.jpg",
    is_disabled: 0,
    display_order: 56,
    locale_company: {
      create: [
        {
          name: "Ahram Security Group",
          excerpt: "Manufacturing all Kinds of door locks & cylinders.",
          representer: "Eng. Samir Aref",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مجموعة الأهرام لنظم الأمان",
          excerpt: "إنتاج وتصنيع جميع أنواع الكوالين والسلندرات للأبواب والشبابيك.",
          representer: "م. سمير عارف",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+202(2)5903220",
    fax: "",
    email: "bavaria@link.net",
    website: "",
    address: "",
    logo_src: "",
    is_disabled: 0,
    display_order: 57,
    locale_company: {
      create: [
        {
          name: "Delta Automotive Co.",
          excerpt: "",
          representer: "Dr. Nader Riad",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الدلتا لوسائل النقل - دلتا اوتوموتيف",
          excerpt: "",
          representer: "د. نادر رياض",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)25910050",
    fax: "+20(2)25913762",
    email: "info@bavaria-firefighting.com",
    website: "www.bavariafirefighting.com",
    address: "P.O. Box 2016, Cairo 11111, Egypt",
    logo_src: "Cairo_Office/GA_Members/15_Bavaria_En.jpg",
    is_disabled: 0,
    display_order: 58,
    locale_company: {
      create: [
        {
          name: "Bavaria ",
          excerpt: "The roots of Bavaria go back to 1923, when Bavaria Feuerl&ouml;scher-Apparatebau was &lrm;first &lrm;established &lrm;in &lrm;&lrm;Falkenstein, &lrm;Germany.\nThe objective of the company was to manufacture &lrm;quality &lrm;&lrm;firefighting &rlm;&lrm;equipment and &lrm;supply safety at a time &lrm;&lrm;of great need. &rlm;\nBavaria with its old &lrm;heritage is the &lrm;second oldest fire extinguisher manufacturer in Germany.&lrm;\nBavaria Egypt was founded as a partnership, and began its successful activities with a small team of two workers and one engineer. The objective is to satisfy the domestic market needs of fire-fighting devices and equipment which contribute to protecting the individuals as well as the society.",
          representer: "Dr. Nader Riad",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة بافاريا مصر",
          excerpt: "تأسست شركة بافاريا مصر عام  1972 بهدف توفير احتياجات السوق المحلي من أجهزة ومعدات مكافحة الحرائق لتعمل بدورها علي تقديم الحماية للأفراد والمجتمع من مؤسساته العامة والخاصة لتكون شركتنا عامل داعم للمجتمع الذي نعمل فيه.\nبافاريا مصر من أولى الشركات التي تأسست في ظل قانون الاستثمار كشركة توصية بسيطة مستقلة، وبدأت نشاطها الناجح بفريق عمل صغير مكون من عاملين ومهندس واحد.",
          representer: "د. نادر رياض",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)3697902",
    fax: "+20(2)23697555",
    email: "export@egyptiantelephone.com",
    website: "www.quicktel.net",
    address: "Corniche El Nile, El Maasara, Helwan, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/16_Quicktel.jpg",
    is_disabled: 0,
    display_order: 59,
    locale_company: {
      create: [
        {
          name: "The Egyptian Telephone Co. (QuickTel)",
          excerpt: "The The Egyptian Telephone Company (QuickTel) was established in the early sixties as an Egyptian joint-stock company under the Law No.157/1981.\ncIt works in the field of manufacturing public switches and telephone sets in cooperation with Ericsson of Sweden. As the company expands into new markets promoting sound solutions, manufacturing the latest telecom equipment and reliable products, it is rapidly becoming the brand of choice for telecom equipment.",
          representer: "Eng. Ayman Hicham Hejjawi",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة المصرية لصناعة المعدات التلفونية",
          excerpt: " تأسست الشركة المصرية لصناعة المعدات التليفونية كشركة مساهمة مصرية تعمل وفقاً لاحكام القانون رقم 159 لسنة 1981. و تعمل الشركة في تصنيع و تجميع و تسويق و تركيب المعدات التليفونية.",
          representer: "م. أيمن هشام حجاوي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)25774400",
    fax: "+20(2)25750113",
    email: "elhaggar@intouch.com",
    website: "www.elhaggarmisr.com",
    address: "83 El-Sabtya Street, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/17_El-Haggar_En.png",
    is_disabled: 0,
    display_order: 60,
    locale_company: {
      create: [
        {
          name: "El-Haggar Misr",
          excerpt: "El Haggar Misr is the leading company in air compressors business, it has been established in 1977, and since then we are the number one choice in air compressors.\n\nEl Haggar Misr has large variety of air compressors products and solutions:\n\n- Reciprocating compressors supporting small, medium and large businesses. We are the manufacturer of reciprocating compressors in cooperation with Rami company in Italy which is supporting our factory with all the needs and technology for producing air compressors.\n\n- Screw compressors: we are the sole agent for Kaeser compressors. The leading German screw compressors (screw compressors, dryers, filters, portable compressors,...etc) and we support compressed air solutions by highly trained engineers. We guarantee all Kaeser products by our authorized service center.\n\n- Pneumatic systems: we are the sole agent for Camozzi company, established in Italy and supporting the Egyptian market through El Haggar Misr with all the needs of compressed air control (valves, cylinders and vacuum).\n\nThat&rsquo;s not all about El Haggar Misr. We keep expanding the range of our products to satisfy our customers' needs when it comes to AIR. That&rsquo;s why we have new line of products, namely, (Nitrogen Generators) high quality Italian generators, to supply up to 99.9% pure Nitrogen.",
          representer: "Eng. Omar Mustafa El-Haggar",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الحجار للصناعة",
          excerpt: " شركة تكنولوجيا الهواء المضغوط هي الوكيل الوحيد والمستورد لضواغط الهواء كيزر Kaeser الألمانية.\nتنتج شركة كيزر ضواغط الهواء الحلزونية، والترددية ذات الضغط العالي والمنخفض والبلاور وضواغط الديزل النقالي والمجففات. نحن نتعاون مع شركة RAMI الإيطالية وهي التي تمدنا بالضواغط الترددية، والمجففات الصناعية والفلاتر وجميع إكسسوارات الضواغط الترددية وكذلك تمد مصنعنا بمدينة 6 أكتوبر بالمعونة الفنية اللازمة لإنتاج ضواغط الهواء في مصر. كذلك فإن شركتنا هي الوكيل الوحدي لشركة CAMOZZI الإيطالية وهي متخصصة في نظم التحكم بالهواء المضغوط.\nإستكمالاً لمسيرة شركتنا فى تغطية أكبر مايمكن فى الهواء المضغوط تم إستحداث توكيل جديد ينتج مولدات النتروجين وهى شركة  N2R الإيطالية.\nوفي مجال الصناعة فلدينا شركة الحجار للصناعة بمدينة 6 أكتوبر وهى تنتج ضواغط هواء ترددية من 1 حتى 25 حصان بمعونه فنية من شركة  RAMI الإيطالية وقد تأسست سنة 1992 وتنتج هذا النوع من الضواغط بتقنيات فنية عالية ومناسبة للإجواء المصرية.\n\n",
          representer: "م. عمر مصطفى الحجار",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(4)2207205",
    fax: "+20(4)4724500",
    email: "ece@soficom.com.eg",
    website: "www.ece.com.eg",
    address: "P.O.Box 208, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/19_ECE.jpg",
    is_disabled: 0,
    display_order: 61,
    locale_company: {
      create: [
        {
          name: "Electro Cable Egypt",
          excerpt: "The company was founded in 1954 as the first cables manufacturing company in the Middle East. We produce cables and wires, telephone cables, and cables accessories.",
          representer: "Eng. Ahmad El-Hosseiny",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الكابلات الكهربائية المصرية",
          excerpt: "تأسست الشركة عام 1954 وهي أول شركة يتم إنشاؤها بغرض صناعة الكابلات الكهربائية في الشرق الأوسط. وتقوم الشركة حالياً بإنتاج الأسلاك والكابلات الكهربائية حتى 66 ك.ف وكذلك موصلات الألمنيوم بنوعيها والكابلات التليفونية.",
          representer: "م. أحمد محمد عبدالله الحسيني",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)23712273",
    fax: "+20(2)23701467",
    email: "info@eamco-eg.com",
    website: "www.eamco-eg.com",
    address: "Postal Code 11733, Wadi Hof, Helwan, Egypt",
    logo_src: "Cairo_Office/GA_Members/23_EAMCO.jpg",
    is_disabled: 0,
    display_order: 62,
    locale_company: {
      create: [
        {
          name: "Engineering Automotive Manufacturing Company ",
          excerpt: "The Engineering Automotive Manufacturing Company \"EAMCO\" was established in 2000 as a spin-off company (privatization policy) of El Nasr Automotive Manufacturing Company (NASCO). It is specialized in trucks and buses.\n\"EAMCO\" is currently an independent joint-stock company, operating under law 203/1991, regulating public sector companies.\n\"NASCO\" (and EAMCO) is a pioneer company in the field of buses and trucks manufacturing in Egypt. It was established in 1960 with know-how furnished by IVECO, IRIS BUS, MAN, SCANIA, RENAULT, DAEWOO, ASHOK-LYLAND, CUMMINS, MWM, DEUTZ, ZF, ALLISON & VOITH. It takes credit for helping to establish feeder industries for vehicle manufacture.\nNASCO transferred to EAMCO all its rights and obligations versus all suppliers licensors and customers' contracts.",
          representer: "Eng. Raafat Taha Aly Masrouga",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة الهندسية لصناعة السيارات",
          excerpt: "تأسست الشركة الهندسية لصناعة السيارات عام 2000 وهي متخصصة بإنتاج اللواري والأتوبيسات ومحركات الديزل والجرارات الزراعية كشركة منبثقة عن لشركة النصر لصناعة السيارات بنتيجة تطبيق سياسة الخصخصة والتحول الى الاقتصاد الحر.\n أنشئت الشركة الهندسية لصناعة السيارات لتكون رائدة إنتاج المركبات التجارية في مصر، وهي مستقلة تماماً عن الشركة الأم وكشركة تابعة مساهمة مصرية خاضعة لقانون 203 لسنة 1991 قانون شركات قطاع الأعمال العام.\nتعمل الشركة الهندسية لصناعة السيارات بالمشاركة مع أكثر الشركات العالمية المتخصصة مثل:  IVECO و IRIS BUS وMAN وSCANIA وRENAULT وDAEWOO وASHOK-LYLAND وCUMMINS وMWM وDEUTZ وZF وALLISON وVOITH.\nدور الشركة الهندسية لصناعة السيارات هو تزويد السوق المصرية بجميع أنواع المركبات التجارية والجرارات الزراعية المناسبة للطرق والبيئة في مصر وبسعر معقول ، وهي أول شركة في مصر تنتج الاتوبيسات التى تعمل بمحركات الغاز الطبيعي المضغوط،  وأول شركة في إنتاج الجرارات الزراعية،  وأول شركة في إنتاج محركات الديزل تبريد هواء، وأول شركة في إنتاج الميدى باصات، وهذا ماجعلها الرائدة.",
          representer: "م. رأفت طه علي مسروجه",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)22909269 / +20(2)24157224",
    fax: "+20(2)24157660",
    email: "mahmoud.sultan@ejswco.net",
    website: "www.ejswco.net",
    address: "2 Al Saudia Bldg., El Nozha St., El Golf area, Heliopolis, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/26_EJSW.jpg",
    is_disabled: 0,
    display_order: 63,
    locale_company: {
      create: [
        {
          name: "Egypt Japan Steel Works",
          excerpt: "EJSW was established in 1985 and started production in 1988 as an industrial facility for producing steel forged spare parts and components of industrial machines as well as equipments for various industrial sectors.",
          representer: "Eng. Mahmoud Sultan",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الشركة المصرية اليابانية لأعمال الصلب",
          excerpt: "تأسست الشركة عام 1985 وبدأت نشاطها الصناعي عام 1988 لإنتاج قطع الغيار ومكونات الآلات الصناعية والمعدات لجميع القطاعات الصناعية",
          representer: "م. محمود سلطان",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)25552264 / +20(2)25552265",
    fax: "+20(2)25552260 / +20(2)25552263",
    email: "fact9_chairman@momp.gov.eg",
    website: "http://fact9.momp.gov.eg",
    address: "P.O.Box 11726 Ain Helwan, Helwan, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/30_HIF_Logo.jpg",
    is_disabled: 0,
    display_order: 64,
    locale_company: {
      create: [
        {
          name: "Helwan Iron Foundries",
          excerpt: "Helwan iron foundries (HIF) is the biggest integrated complex of ferrous foundries for iron and steel casting in Egypt.\nMainly this complex produces high quality of engineering casting required for vaious, industries.",
          representer: "Eng. Mohamad Mostafa Abdelhamed abo Elnaga",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة حلوان للمسبوكات",
          excerpt: "حلوان للمسبوكات أكبر مجمع للمسابك المتخصصة في مصر لصناعة المسبوكات الهندسية عالية التقنية من الزهر والصلب بمختلف أنواعها وهي الركيزة الأساسية لتلبية متطلبات الصناعة الحربية والمدنية والمصدر الرئيسي لمعظم الصناعات والمرافق الكبرى من هذه المسبوكات.",
          representer: "م. محمد مصطفى عبدالحميد أبو النجا ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)38305881 / +20(2)38305882",
    fax: "+20(2)38305880",
    email: "info@styleteam.com.eg",
    website: "www.styleteam.com.eg",
    address: "Plot No. 142, Third Industrial Zone, 6th of October City, Egypt",
    logo_src: "Cairo_Office/GA_Members/27_styleteam.jpg",
    is_disabled: 0,
    display_order: 65,
    locale_company: {
      create: [
        {
          name: "Style team Co.",
          excerpt: "Decorative lighting for Home, Hotels & Tourist Projects.",
          representer: "Dr. Magdy Abdel Monem Ibrahim",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة ستايل تيم للصناعة",
          excerpt: "وحدات إضاءة داخلية للمنازل والفنادق والمشروعات السياحية.",
          representer: "د. مجدي عبد المنعم إبراهيم",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)24044998 / +20(2)24044997",
    fax: "+20(2)24044667",
    email: "info@manzalawigroup.com; Tiba.sales@link.net",
    website: "www.tibagroup.me",
    address: "B.O.Box 11371, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/28_Tiba.jpg",
    is_disabled: 0,
    display_order: 66,
    locale_company: {
      create: [
        {
          name: "Tiba Manzalawi Group",
          excerpt: "Tiba Engineering Group is a leading manufacturer and supplier of air conditioning systems in Egypt and the Middle East. With over 25 years of knowledge and experience, the group has earned a reputation for excellence and innovation in the field.Tiba is one of the first air conditioning manufacturers to receive the ISO 9001:2000 and ISO 14001 and ISO 18001 certifications for its quality, environmental and health and safety management systems.",
          representer: "Eng. Magdy Eldin Elmanzalawi",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة طيبة للصناعات الهندسية",
          excerpt: "مجموعة طيبة للصناعات الهندسية تعتبر الشركة الرائدة والموردة لأنظمة تكييف الهواء في مصر والشرق الأوسط مع أكثر من 25 سنة من الخبرة و الثقة و أكثر من 3000 مشروع بمصر والعالم ومنتجاتها المصنعة بمصانع العاشر من رمضان بتكنولوجيا متطورة وجودة عالمية أكسبت الشركة السمعة الطيبة والدور الرائد. وتعتبر شركة طيبة من أولى الشركات المصنعة لأنظمة الهواء التى تحصل على شهاده ISO 9001:2000 & ISO 14001 & ISO 18001 للجودة.",
          representer: "م. مجد الدين فاروق المنزلاوي ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)38335210",
    fax: "+20(2)38334504",
    email: "drkhamis@amigenset.com; ami-ceo@amigenset.com",
    website: "www.amigenset.com",
    address: "P.O.Box 48, Sixth of October City, Egypt",
    logo_src: "Cairo_Office/GA_Members/30_AMI.jpg",
    is_disabled: 0,
    display_order: 67,
    locale_company: {
      create: [
        {
          name: "Al Mohandes International co.",
          excerpt: "The company produced generator sets from 5KVA to 3000 KVA , water pumping units, air compressors unit , low voltage distribution switchgears, power factors correction units, trailers (1 axe & 2 axe) up to 16 ton , canopies (sound proof & weather proof).",
          representer: "Dr. Mohamed Khamis",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة المهندس الدولية",
          excerpt: "تنتج الشركة وحدات توليد كهرباء من 5 إلى  3000 ك.ف.أ، وحدات ضخ مياه، وحدات ضواغط هواء، لوحات توزيع كهرباء ضغط منخفض، لوحات تحسين معامل القدرة، مقطورات 1، 2 أكس، وكبائن عازلة للصوت وعازلة للمناخ.",
          representer: "د. محمد خميس",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+20(2)33355555 / +20(2)33366666",
    fax: "+20(2)33372222",
    email: "mgenedy@gmceg.net",
    website: "www.gmceg.com",
    address: "3 Shehab st., Al mohandseen, Cairo, Egypt",
    logo_src: "Cairo_Office/GA_Members/29_GMC.jpg",
    is_disabled: 0,
    display_order: 68,
    locale_company: {
      create: [
        {
          name: "GMC for Engineering industries and Nutritious",
          excerpt: "GMC is a leading manufacturer of electrical household appliances in Egypt that was established in 1980. Our export activities cover many Arab, African, Asian and European markets. The company is accredited with the following certificates: ISO 9001, ISO 14000, CE, SASO, and ETL.",
          representer: "Mohammed H. Genedy",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "مجموعة جي إم سي للصناعات الهندسية والمغذية",
          excerpt: " تعد شركة جي ام سي الشركة الرلئدة فى مجال صناعة الأجهزة المنزلية فى مصر وقد تأسست مطلع عام 1980 حيث تغطى أنشطة الشركة التصديرية العديد من الأسواق العربية والأفريقية والأسيوية والأوروبية. حصلت الشركة على العديد من الشهادات المعتمدة مثل: ISO 9001, ISO 1400 , CE , SASO, ETL",
          representer: "محمد حسين جنيدي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+973 (1) 7738333",
    fax: "+973 (1) 7731529",
    email: "agmco@batelco.com.bh; adel@awalgulf.com.bh; duaas@awalgulf.com",
    website: "www.awalgulf.com ",
    address: "P. O. Box 15919, Manama, Kingdom of Bahrain ",
    logo_src: "",
    is_disabled: 0,
    display_order: 69,
    locale_company: {
      create: [
        {
          name: "Awal Gulf Manufacturing Company B.S.C. (C)",
          excerpt: "Awal Gulf is a refrigeration and air conditioning equipment manufacturer, unique in its class and industry size in Bahrain. It has three manufacturing plants in the Sitra Industrial Area and Bahrain International Investment Park in Hidd with a work force well over 1500. \nAwal Gulf caters to the refrigeration and air conditioning requirements of sizeable customers in the Middle Eastern region and beyond Corporate including some world leaders as their OEM, commercial and individuals included. \nProducts include Window Air Conditioners, Mini- Split Systems, Roof Top Water Coolers, Chest Freezers and Central Air Conditioners. It is our strategy to keep widening our products base within this industrial sector as well as taking a more environmentally friendly approach.",
          representer: "Mr. Adel M. Mattar",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة أوال الخليج للتصنيع",
          excerpt: "",
          representer: "الأستاذ عادل مطر",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 4
      }
    }
  }
});
console.log(result);

result = await prismaClient.company.create({
  data: {
    tel: "+963(21)4210401",
    fax: "+963(21)4210403",
    email: "info@tufenkji.com",
    website: "http://www.tufenkji.com",
    address: "P.O.Box 3647, Aleppo, Syria",
    logo_src: "Damascus_Office/GA_Members/17_Orient_En.jpg",
    is_disabled: 0,
    display_order: 70,
    locale_company: {
      create: [
        {
          name: "Orient Co. Hot Steel Rolling Mill",
          excerpt: "&ldquo;ORIENT &trade; Co.&rdquo; originated its industrial activities in 1994, under the supervision of a pioneer group of talented engineers and technicians, with a high expertise in hot rolling mill production.\nOur activities basically started in the home market, extending to the international markets, reaching a volume of export 60% of its total production.\nDuring the last few years, ORIENT &trade; Company has upgraded his expertise in hot rolling mill by producing high quality steel, establishing confident relationship with the customers & being the best business partner for them.\nORIENT &trade; is already holding the lead of the Syrian market and shores in the neighborhood countries markets as a producer of deformed bars, flat bars, square & equal angles.\nORIENT &trade; has a vision to increase its competitive edge, by meeting & exceeding our customers&rsquo; requirements and gaining the trust of the possible future clients.\nOur production capacity reached up to &ldquo;330,000&rdquo; tons per year. OUR VISION is to produce steel in various shapes & types, to meet the increasing demands for construction and suit all kind of requirements for other steel productions for the Syrian & the Middle East markets.",
          representer: "Eng. George Tufenkji",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "شركة الشرق لإنتاج الحديد الصناعي والإنشائي المدرفل على الساخن",
          excerpt: "تأسست شركة الشرق لانتاج القضبان الحديدية في عام 1993 وفق قانون الاستثمار رقم(10) لعام 1990، حيث أنها الشركة الأولى في سوريا من القطاع الخاص تعمل في مجال انتاج القضبان الحديدية على الحامي.\nوقد بدأت الشركة بانتاجها الفعلي في عام 1994 باشراف نخبة من المهندسين والفنيين المختصين في مجال سحب ودرفلة المعادن على الحامي. وفي بداية عمل الشركة قامت الشركة بتغذية السوق المحلية بالمنتجات الحديدية، وبحكم موقعها الجغرافي في مدينة حلب (شمال سوريا) فانها تقوم بتغطية السوق المحلية بشكل كبير بالمنتجات الحديدية الصناعية. وتتمتع شركة الشرق بمركز قوي بانتاج القضبان الحديدية مثل المبروم المحلزن (الانشائي) وحديد المبسط والتربيع الصناعي، بالاضافة الى أنها قامت أخيرا بانتاج الزوايا الحديدية.\nومنذ البداية أحرزت شركة الشرق خبرات استثناثية بجودة عالية في درفلة وسحب المعادن على الحامي وبما يتناسب مع المواصفات القياسية العالمية والسورية. وتتمتع شركة الشرق بمركز قوي في السوق السورية بكونها الشركة الأولى في تأمين النقص الذي يحصل في بعض الأحيان في الأسواق المحلية.\nوفي عام 2002 قامت شركة الشرق بتغطية الأسواق المجاورة بالمنتجات الحديدية مثل (لبنان  الاردن و العراق) وصدرت بمعدل 60% من انتاجها الكلي, وفق المواصفات العالمية ووفق أفضل الأنواع لطرق التحزيم. وهذا وقد وضعت الشركة في خططها المستقبلية الى تصدير كميات اكبر الى البلدان المجاورة.\nان انتاج شركة الشرق السنوي يبلغ 330,000 طن سنويا و أن رؤية الشركة المستقبلية هي ان تكون من الشركات المصنعة الاولى للحديد في سورية و الشرق الأوسط لكافة انواع المقاطع الحديدية (الانشائي و الصناعي).",
          representer: "الأستاذ م.جورج تفنكجي",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    country: {
      connect: {
        id: 2
      }
    }
  }
});

result = prismaClient.member.create({
  data: {
    tel: "+963(11)3324760",
    fax: "+963(11)3324762",
    email: "dr.awadammora@yahoo.com",
    website: "",
    address: "P.O.Box 16183, Damascus, Syria",
    country: {
      connect: {
        id: 1
      }
    },
    img_src: "01_Ammoura.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Dr. Awad Ammoura",
          excerpt: "Chairman of Amoura Industrial Group that has factories in: London, Sudan, and Syria.",
          company: "Awad Amoura Co.",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ د. عوض عمورة",
          excerpt: "رئيس مجموعة عوض عمورة الصناعية التي لديها شركات إنتاجية في لندن، والسوادن، وسورية.",
          company: "شركة عوض عمورة الصناعية",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+963(11)4473911",
    fax: "+963(11)4473915",
    email: "Jamal‐a@abdulkarimgroup.com",
    website: "http://www.abdulkarimgroup.com",
    address: "P.O.Box : 5797, Damascus, Syria",
    country: {
      connect: {
        id: 1
      }
    },
    img_src: "02_Akarim.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Jamal Abdulkarim",
          excerpt: "Born in Haifa in 1943, holding a BA in History from Damascus University, and started the business of trading and industry in 1975.",
          company: "Al Karim For Trade & Industry L.L.C",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ جمال عبدالكريم",
          excerpt: "من مواليد حيفا ١٩٤٣، يحمل إجازة جامعية باختصاص \"التاريخ\" من جامعة دمشق، بدأ عمله في التجارة والصناعة في عام 1975",
          company: "الكريم للتجارة والصناعة ش.م.م",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+963(11)6712311",
    fax: "+963(11)6712319",
    email: "md@madarco.com",
    website: "www.madarco.com",
    address: "P.O.Box 14429, Damascus, Syria",
    country: {
      connect: {
        id: 1
      }
    },
    img_src: "03_MHDaaoul.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Mohammad Daaboul",
          excerpt: "Mr. Mohamed Daaboul is the founder and CEO of Daaboul Industrial Group (DIG) which started in 1976 by a small company manufacturing aluminum rolling shutters depending on importing most of its requirements and now became a group of leading manufacturing companies in the field of aluminum profiles, rolling shutters, glass, steel and aluminum coils, their paintings, and in aluminum manufacturing.\nThe production capacity of aluminum profiles is currently 24,000 tons per annum.\nThe Group was able to assume a distinct competitive position locally and on the Arab level through conforming to international standards of safety & environment conservation, and through offering diverse products with quality at an affordable price.\nDIG did not stop to be the best partner to its customers; to make its slogan \"Quality worth trust\" a source of pride to its administrative staff, employees and those dealing with it, so that sincerity at work, honest dealing and offering the best possible will be the landmarks of the path and the lights on the road of development.",
          company: "Madar for Aluminum Extrusion",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ محمد دعبول",
          excerpt: "مؤسس ورئيس مجلس إدارة مجموعة دعبول الصناعية التي بدأت نشاطها الصناعي عام 1976 من خلال شركة صغيرة لتصنيع سدائل (أبجورات) الألمنيوم باستخدام المواد والمستلزمات المستوردة حتى غدت اليوم مجموعة من الشركات الرائدة في مجال تصنيع مقاطع (بروفيلات) وسدائل الألمنيوم، والزجاج، وإنتاج لفائف الألمنيوم والحديد وطلائها، وتصنيع منجور الألمنيوم. وتبلغ الطاقة الإنتاجية في مجال إنتاج بروفيلات الألمنيوم قرابة 24000 طن سنوياً.\nتمكنت المجموعة من تبوُّء مركز تنافسي متميز محلياً وعربياً بتحقيقها لمعايير الأمان، والمحافظة على البيئة، عن طريق طرحها منتجات متنوعة ذات جودة عالية وبسعر مناسب.\nلقد عملت مجموعة دعبول الصناعية، ولا تزال، لتكون أفضل شريك لزبائنها، ولتجعل من شعارها \"جودة تستحق الثقة\" مصدر فخر لإدارتها وللعاملين فيها وللمتعاملين معها، وليكون الإخلاص في العمل والصدق في التعامل وتقديم أفضل ما يمكن هي محددات المسار و الإضاءات على طريق التطور.",
          company: "شركة مدار لبثق الألمنيوم",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+961(1)742357",
    fax: "+961(1)742358",
    email: "ghassanboulbol@gmail.com",
    website: "www.libancables.com.lb",
    address: "Hamra St, Estral Bldg, 2nd floor, Beirut, Lebanon ",
    country: {
      connect: {
        id: 10
      }
    },
    img_src: "04_Boulbol.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Ghassan Boulbol",
          excerpt: "Born in Chouf/Lebanon in 1942. Obtained a Post Graduate Degree as Electrical Engineer from Ecole Sup&eacute;rieur d&rsquo;Electricit&eacute;/Paris University in 1966.\nChairman and President of Liban Cables Holding Sal. since 1992.\nVice Chairman of International Cable Co./Egypt since 1993.\nPresident of &ldquo;Syndicate of Electric Equipment Manufacturers in Lebanon&rdquo;.\nChairman of the SME & Training Committee in Chamber of Commerce, Industry & Agriculture.",
          company: "Liban Cables Holding Sal ",
          position: "Vice-Chairman of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. غسان بلبل",
          excerpt: "من مواليد قضاء الشوف/لبنان في 1942، يحمل دبلوم التخصص في الهندسة العليا للكهرباء من جامعة باريس/كلية الكهرباء العليا.\nرئيس مجلس الادارة والمدير العام لشركة كابلات لبنان هولدنغ منذ 1992.\nنائب رئيس مجلس الادارة للشركة العالمية للكابلات &ndash; مصر منذ 1993.\nرئيس نقابة صناعيي التجهيزات الكهربائية في لبنان.\nرئيس لجنة المؤسسات الصغيرة والمتوسطة والتدريب في غرفة التجارة والصناعة والزراعة في بيروت وجبل لبنان.",
          company: "شركة كابلات لبنان هولدنغ ش.م.ل",
          position: "نائب رئيس مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+963(11)2123438",
    fax: "+963(11)2123375",
    email: "g.o.eng.ind@net.sy",
    website: "www.handasieh.com",
    address: "Damascus, Syria",
    country: {
      connect: {
        id: 1
      }
    },
    img_src: "05_Fallouh.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Dr. Nidal Fallouh",
          excerpt: "Holds a Diploma in Electronic Engineering, and a Ph.D. in Technical Sciences.\nGeneral Manager of the General Establishment of Engineering Industries, and Chairman the Board of Directors for the Syrian-Iranian automotive manufacturing company (SIAMCO).\nVice Chairman for the Arab Iron and Steel Union.",
          company: "General organization of Engineering Industries ",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ د. نضال فلوح",
          excerpt: "يحمل دبلوم  في الهندسة الإلكترونية ودكتوراه دولة في العلوم التقنية.\nمدير عام المؤسسة العامة للصناعات الهندسية، ورئيس مجلس إدارة الشركة السورية الإيرانية لتصنيع السيارات (سيامكو).\nنائب رئيس مجلس إدارة الاتحاد العربي للحديد والصلب.",
          company: "المؤسسة العامة للصناعات الهندسية",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+963(11)5730700",
    fax: "+963(11)5743536",
    email: "mailing@aldassouki.com",
    website: "www.aldassouki.com",
    address: "B.O.Box 51, Damascus, Syria",
    country: {
      connect: {
        id: 1
      }
    },
    img_src: "06_Dassouki.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Abdul Aziz Al-Dassouki",
          excerpt: "NA",
          company: "AL DASSOUKI GROUP-Moulinex - AL MANARA",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ عبد العزيز الدسوقي",
          excerpt: "NA",
          company: "مجموعة الدسوقي – مولينكس – المنارة",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+961(1)789400",
    fax: "+961(1)789407",
    email: "lematic@lematicltd.com",
    website: "http://www.lematicltd.com",
    address: "P.O.Box 11-2915 Beirut, Lebanon ",
    country: {
      connect: {
        id: 10
      }
    },
    img_src: "07_Slhafez.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Mohammad Said Alhafez",
          excerpt: "",
          company: "Lematic",
          position: "Chairman of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. محمد سعيد الحافظ",
          excerpt: "",
          company: "الشركة اللبنانية للتجارة والصناعة الحديثة - ليماتيك",
          position: "رئيس مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+973(17)530808",
    fax: "+973(17)530818",
    email: "hrz@alzayani.com",
    website: "www.alzayani.com",
    address: "P.O.Box 5553, Manama, Kingdom of Bahrain",
    country: {
      connect: {
        id: 4
      }
    },
    img_src: "01_alzayani.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Hamid R. Al-Zayani",
          excerpt: "Married with three sons and one daughter.\nHonorary Consular of the Republic of Albania.\nHolding a Bachelor degree in public administration from the American University in Beirut in 1971.\nPresident of the American Chamber of Commerce in Bahrain (AmCham), and the Arab Cable Manufacturers Association.\nChairman of the board at: Al Zayani Investments, Zayani Motors, Euro Motors, Zayani Properties, Zayani Leasing, Bahrain Welding Wire Products Manufacturing Co.\nVice-Chairman of the board at: Rashid Alzayani Foundation, & Madem Gulf Industries.\nBoard Member at: Gulf Closures, Al Jazeera Tourism Company (Dana Hotel), Gulf Glass Fiber Technological Industries Co. (Fibertech, Saudi Arabia), Child Care Home, International Cable Federation (Vienna).\nManaging Director of Midal Cables., Aluwheel, Intersteel, and Metalform.",
          company: "Midal Cables Ltd",
          position: "Vice-Chairman of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ حامد راشد الزياني",
          excerpt: "متزوج وله ثلاثة أولاد وبنت واحدة\nالقنصل الفخري لجمهورية البانيا\nيحمل شهادة بكالوريوس في الإدارة العامة من الجامعة الأمريكية في بيروت لعام 1971\nمن رجال الأعمــال المعروفين في مملكة البحرين ويساهم ويشارك في ادارة مجموعة شركات استثمارات الزياني وشركات مشتركة مع شركاء آخرين.\nرئيس غرفة تجارة أمريكا في البحرين، وتجمع مصنعي الكابلات العرب.\nرئيس مجلس إدارة في: استثمارات الزياني ذ م م- الزياني للسيارات ذ م م- السيارات الأوروبية (يورو موتورس) ذ م م- عقارات الزياني ذ م م- الزياني للتأجير ذ م م- شركة البحرين لانتاج وتصنيع اسلاك اللحام ذ م م\nنائب رئيس مجلس الإدارة في: فرست موتورز ذ م م- انترستيل ذ م م- ميدال للكابلات المحدودة- ميتل فورم ذ م م- عجلات الألمنيوم (الوويل) ذ م م- أغطية الخليج ذ م م- مؤسسة مبرة راشد عبد الرحمن الزياني الخيرية- صندوق الشفاء الخيري (مستشفى البحرين التخصصي)- مدام الخليج للصناعات ذ م م.\nالعضو المنتدب في: شركة ميدال للكابلات المحدودة- شركة عجلات الألمنيوم ذ م م (الوويل)- متل فورم- انترستيل\nعضو مجلس الإدارة في: شركة أغطية الخليج ذ م م- شركة الجزيرة للسياحة (فندق الدانة)- شركة صناعات الخليج التقنية للألياف الزجاجية \"فايبرتك\" (المملكة العربية السعودية)- دار رعاية الطفولة- الاتحاد الدولي للكابلات (فيينا)\nنائب رئيس مجلس الإدارة والعضو المنتدب لمستشفى البحرين التخصصي\nمؤسس وعضو مجلس إدارة دار رعاية الطفولة (منذ عام 1984 حتى يومنا هذا)",
          company: "ميدال للكابلات المحدودة",
          position: "نائب رئيس مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+20(2)22907870",
    fax: "+20(2)22910702",
    email: "info@multimgroup.com ",
    website: "www.mohmfurniture.com",
    address: "6 Ramo Gardens Buildings, Nasr City, Cairo, Egypt",
    country: {
      connect: {
        id: 2
      }
    },
    img_src: "02_Eabdelhady.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Eslam Abdelhady Elsayed",
          excerpt: "Mechanical Engineer, chairman of Multi M Group for Metallic and Wooden Industries",
          company: "Multi M Group for Metallic and Wooden Industries",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. إسلام عبد الهادي السيد",
          excerpt: "مهندس ميكانيك، رئيس مجلس إدارة شركة مالتي إم جروب للصناعات المعدنية والخشبية",
          company: "مالتي إم جروب للصناعات المعدنية والخشبية",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+966(2)6087666 ",
    fax: "+966(2)6354026",
    email: "wlinjawi@saudicable.com",
    website: "www.saudicable.com",
    address: "P.O.Box 4403, Jeddah 21491, Kingdom of Saudi Arabia",
    country: {
      connect: {
        id: 5
      }
    },
    img_src: "03_WLinjawi.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Dr. Waheeb Abdullah Linjawi",
          excerpt: "Holding a PHD degree in urban planning from Clearmont University, California, USA. Joined the company in 1988, he is President and Managing  Director of Saudi Cable company.",
          company: "Saudi Cable Company",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ د. وهيب عبدالله لنجاوي",
          excerpt: "حاصل على الدكتوراه في تخطيط المدن من جامعة كليرمونت &ndash; كاليفورنيا &ndash; الولايات المتحدة الأمريكية. إلتحق بالشركة عام 1988، هو عضو مجلس الإدارة المنتدب والرئيس التنفيذي لشركة الكابلات السعودية.",
          company: "شركة الكابلات السعودية",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+20(2)25256441",
    fax: "+20(2)25256054",
    email: "jamalafifi@hotmail.com",
    website: "",
    address: "P.O.Box 1257, Code 1172, Cairo, Egypt",
    country: {
      connect: {
        id: 2
      }
    },
    img_src: "04_Afifi.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Jamal H. Afifi",
          excerpt: "Chairman of MCMC Board of Directors, Board Member of both Halwani Brothers Co. and Arab Engineering Industries Co.\nHe is a member of selected trade unions, associations and bodies like (not limited to) Engineers Association, Egyptian Businessmen Association(EBA), British Egyptian Business Association (BEBA), Egyptian & Arab Business Executive Forum, Group of Senior Management, and the Egyptian Society for the health & environment legislations.\nHolding a Bachelor degree of Mechanical Engineering from Cairo University, a High Diploma in Industrial Business Administration from Ain Shams University,  and a High Diploma in Planning from the National Planning Institute.",
          company: "MCMC",
          position: "Vice-Chairman of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. جمال حسن عفيفي",
          excerpt: "رئيس مجلس إدارة شركة مصر لصناعة الكباسات، وعضو مجلس إدارة كل من شركة حلواني إخوان والشركة العربية للصناعات الهندسية.\nهو عضو في  مجموعة من النقابات المهنية والجمعيات والهيئات منها (على سبيل المثال لا الحصر): نقابة المهندسين، جمعية رجال الأعمال المصريين، الجمعية المصرية البريطانية للأعمال، منتدى رجال الأعمال العرب، جماعة الإدارة العليا، والجمعية المصرية للتشريعات الصحية والبيئية؛ وهو عضو بالنادي الأهلي للألعاب البدنية.\nحاصل على بكالوريوس الهندسة الميكانيكية من جامعة القاهرة، ودبلوم إدارة الأعمال الصناعية من جامعة عين شمس، ودبلوم التخطيط من معهد التخطيط القومي.",
          company: "مصر لصناعة الكباسات",
          position: "نائب رئيس مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+965(2)3985210",
    fax: "+965(2)3985300",
    email: "alnaki@kuwaitindustries.com",
    website: "www.kuwaitindustries.com",
    address: "P.O.Box 93 DasmaN- 15451, Kuwait",
    country: {
      connect: {
        id: 3
      }
    },
    img_src: "05_AlNaki.JPG",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Mohammad Al-Naki",
          excerpt: "&bull; A graduate of the Royal School of military engineering, United Kingdom\n&bull; Member of the Board of Directors, Arab Businessmen Federation\n&bull; Member of the Arab Thought Forum\n&bull; Board Member, Union of Arab Investors\n&bull; A standing member of the Global Forum of Wildlife Protection\n&bull; Holding a Decoration of the Rank of Lion from the Republic of Finland in 1996",
          company: "Kuwait Industries Co.",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ محمد علي النقي",
          excerpt: "&bull; خريج الأكاديمية العسكرية - المملكة المتحدة\n&bull; المدرسة الملكية للهندسة العسكرية - المملكة المتحدة\n&bull; عضو مجلس إدارة &ndash; اتحاد رجال الأعمال العرب\n&bull; عضو منتدى الفكر العربي\n&bull; عضو مجلس إدارة &ndash; اتحاد المستثمرين العرب\n&bull; عضو دائم المنتدى العالمي للحماية البرية\n&bull; حائز على وسام الأسد من جمهورية فنلندا عام 1996م",
          company: " شركة الصناعات الكويتية",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+249(183)202733 ",
    fax: "+249(183)201300",
    email: "ahmed.osman1958@giad.com",
    website: "www.giad.sd",
    address: "P.O.Box 13474, Postal code 11111, Khartoum, Sudan",
    country: {
      connect: {
        id: 8
      }
    },
    img_src: "06_Osman.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Ahmed Abdulrahman Osman",
          excerpt: "Holding a B.Sc. Degree in Civil Engineering from the University of Khartoum, Faculty of Engineering and Architecture.\nExecutive Engineer, Consultant Engineer.\nGeneral affairs admininstrator, and General Manager in Giad Industrial Group.",
          company: "Giad Industrial Group",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. أحمد عبد الرحمن عثمان",
          excerpt: "يحمل شهادة جامعية في الهندسة المدنية من جامعة الخرطوم- كلية الهندسة والمعمار.\nمهندس تنفيذي / مهندس مستشار.\nمدير دائرة الشئون العامة ومدير عام مجموعة جياد الصناعية.",
          company: "مجموعة جياد الصناعية",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "",
    fax: "",
    email: "helwan_diesel@yahoo.com",
    website: "",
    address: "Ain Helwan, Cairo, Egypt",
    country: {
      connect: {
        id: 2
      }
    },
    img_src: "07_Mursi.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Mamdouh Hamouda Mursi Al-Sayid",
          excerpt: "NA",
          company: "Helwan Diesel Engines",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. ممدوح مرسي",
          excerpt: "NA",
          company: "شركة حلوان لمحركات الديزل",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "",
    fax: "",
    email: "scmi_iskandaryah@yahoo.com",
    website: "",
    address: "P.O.Box 5763, Babil province, Alexandria, the eastern section, Iraq",
    country: {
      connect: {
        id: 6
      }
    },
    img_src: "08_Khafaji.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Sabah Al-Khafaji",
          excerpt: "NA",
          company: "General Company for Mechanical Industries",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. صباح الخفاجي ",
          excerpt: "NA",
          company: "الشركة العامة للصناعات الميكانيكية ",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+20(2)22909269 ",
    fax: "+20(2)24157660",
    email: "mahmoud.sultan@ejswco.com",
    website: "www.ejswco.net",
    address: "2 Saudi Buildings Company, El Nozha street, golf land, Heliopolis, Cairo, Egypt",
    country: {
      connect: {
        id: 2
      }
    },
    img_src: "09_Sultan.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Mahmoud Sultan",
          excerpt: "Founder, delegated member, and General Manager of the Egyptian-Japanese Steel Co.\nHolding a Bachelor degree in Engineering, specialized in production mechanics, from Ein Shams University.\nSupplementary training seminars on: Management of Industrial  Projects, Total Quality, Industrial Costing, Budgeting, Marketing, and Strategic Planning.",
          company: "Egyptian-Japanese Steel Co.",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. محمود سلطان",
          excerpt: "مؤسس والعضو المنتدب ومدير عام الشركة المصرية-اليابانية لأعمال الصلب.\nيحمل شهادة بكالوريوس في الهندسة  باختصاص ميكانيك إنتاج من جامعة عين شمس عام 1979.\nإضافة إلى  دراسات ودورات تدريبية في: إدارة المشروعات الصناعية- الجودة الشاملة- التكاليف الصناعية- الموازانات المالية- التسويق- التخطيط الاستراتيجي.",
          company: "شركة المصرية اليابانية لأعمال الصلب",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+964(1)8182158",
    fax: "+964(1)8866997",
    email: "thabitalbaldawi@yamail.com",
    website: "www.aluminum-albaldawi.com",
    address: "Iraq, Baghdad, Alnasir Sq. - Thabit Al-baldawi & Sons Bld",
    country: {
      connect: {
        id: 6
      }
    },
    img_src: "10_Baldawi.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Thabit Al-Baldawi",
          excerpt: "",
          company: "Al Thabit Company for Aluminum Ltd",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ ثابت البلداوي  ",
          excerpt: "",
          company: "شركة الثابت لصناعة الالمنيوم المحدودة",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+216(71)860244",
    fax: "+216(71)860571",
    email: "m.sellami@onetech-group.com",
    website: "http://www.onetech-group.com",
    address: "1 Rue Abou Bakr Souli Alblder - Tunisia",
    country: {
      connect: {
        id: 7
      }
    },
    img_src: "11_Sellemi.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Moncef Al Sellami",
          excerpt: "",
          company: "Tunisie Cables",
          position: "Vice-Chairman of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ منصف السلامي",
          excerpt: "",
          company: "شركة الأسلاك التونسية ",
          position: "نائب رئيس مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+20(2)44692100",
    fax: "+20(2)44698212",
    email: "info@multimgroup.com",
    website: "www.multimgroup.com",
    address: "6 Ramo Gardens Buildings, Nasr City, Cairo, Egypt",
    country: {
      connect: {
        id: 2
      }
    },
    img_src: "12_Abd_Alhady.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. Abd Alhady Abd Almoneam",
          excerpt: "",
          company: "Multi-M Group for metal and wood industries",
          position: " Chairman of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م. عبد الهادي عبد المنعم",
          excerpt: "",
          company: "شركة مالتى إم جروب للصناعات المعدنية والخشبية",
          position: "رئيس مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+213(2)774595",
    fax: "+213(2)233681",
    email: "abendrise@yahoo.com",
    website: "",
    address: "P.O.Box 104, Tripoli, Algeria",
    country: {
      connect: {
        id: 9
      }
    },
    img_src: "",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Ibrahim Abendrise",
          excerpt: "",
          company: "Rakta Industrial Co.",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ إبراهيم بن إدريس",
          excerpt: "",
          company: "شركة راكتا الصناعية",
          position: "عضو مجلس الإدارة ",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+249(18)3253999",
    fax: "+249(18)3253799",
    email: "shawgim@yahoo.com",
    website: "http://www.afro-arabin.com",
    address: "P.O.Box 6144, Khartoum, Sudan",
    country: {
      connect: {
        id: 8
      }
    },
    img_src: "",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Shawgi Hassan Maraie",
          excerpt: "",
          company: "Afro-arabin Trading Center",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ شوقي مرعي",
          excerpt: "",
          company: "المركز التجاري الأفروعربي",
          position: "عضو مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "",
    fax: "",
    email: "ishtar_lico@yahoo.com",
    website: "",
    address: "ص.ب 164، بغداد، العراق",
    country: {
      connect: {
        id: 6
      }
    },
    img_src: "",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Hatef Younes Taher",
          excerpt: "",
          company: "Soft Industries Company",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ هاتف يونس محمد طاهر",
          excerpt: "",
          company: "شركة الصناعات الخفيفة",
          position: "عضو مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+20(15)410410",
    fax: "+20(15)410308",
    email: "management@ahramsg.com",
    website: "http://www.ahramsg.com",
    address: "Industrial Area A1, 10th of Ramadan City, Sharkiya, Postal code: 1562",
    country: {
      connect: {
        id: 2
      }
    },
    img_src: "13_Samir_Aref.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Mr. Samir Ezzat Aref",
          excerpt: "The Ahram Security Group (ASG) is one of Egypt's leading private investment groups.\nASG possesses a solid foundation in the lock industry and has capitalized on Egypt's investment-rich economic climate to aggressively expand into end-users, contractors, projects and export sectors. \nASG was first established in 1945, by the pioneering industrial businessman, Late Eng. Ezzat Aref , who has established a small factory formed of three stories covering an area of 5000m2 in which he started the production of security locks called Al-Ahram Locks. \nLater on, in 1990, this factory was relocated in the 10th of Ramadan City, covering an area of about 20000 m2 and was operated by nearly 600 professionally well-trained engineers and technicians. After the taking over of this business by his son Mr. Samir Aref he secured affiliations with foreign manufacturers in the lock industry to become their brand representative in Egypt. \nAs the Egyptian economy opened its doors for foreign investment, business was carefully expanded. within his business in the security sector by adding other businesses to the group which played a major role in increasing the corporate image i.e. Access Control Locking Systems, (Magnetic Door Locks), in addition he consolidated his network of lock dealerships all over the country. ASG has now emerged as a market leader in the lock industry as it possesses commanding name recognition within the Egyptian market with more than 55% market share. \nToday, Ahram Security Group, deliver succeeded to the most reputable brand names in the security business whether mechanical or electronic and the main brands are: Ahram - IZO - AFM - Schl&uuml;ssel - DOM and Weiser. \nIn possession of these attributes, the Ahram Security Group is and will continue to be at the forefront of growth and development, fuelling change within Egypt and striding into the global marketplace.",
          company: "Ahram Security Group",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ سمير عزت عارف",
          excerpt: "لقد تأسست مجموعة الأهرام سنة 1945 وهي الشركة الرائدة في مصر وأفريقيا والشرق الأوسط  في مجال تصنيع وإنتاج جميع أنظمة الأمان. \nوتضم حالياً ثلاث مصانع وهي: مصنع الأهرام للمعادن ومصنع هاي تك ومصنع نيو هاي تك وذلك تحت اسم مجموعة الأهرام لنظم الامان والمتخصصة في إنتاج أنظمة الأمان.\nويشمل إنتاج مجموعة الأهرام لنظم الأمان: كوالين اسطاما خارجى- كوالين حجرة وحمام- كوالين الومنيوم- كوالين لطش- كوالين درج- سلندرات- كوالين فندقية-  سباليونة حيث أن الأمان هو الشاغل الرئيس لشركات الأهرام لنظم الأمان. \nكما أن منتجات مجموعة الأهرام حاصلة على شهادات  آيزو - المواصفات الأوربية - وعلامة الجودة CE ومطابقة للمواصفات والمعايير الدولية.",
          company: "مجموعة الأهرام لنظم الأمان",
          position: "عضو مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = prismaClient.member.create({
  data: {
    tel: "+963(21)4210401",
    fax: "+963(21)4210403",
    email: "george-s@tufenkji.com",
    website: "http://www.tufenkji.com",
    address: "P.O.Box 3647, Aleppo, Syria",
    country: {
      connect: {
        id: 1
      }
    },
    img_src: "08_tufenkji.jpg",
    is_disabled: 0,
    locale_member: {
      create: [
        {
          name: "Eng. George Tufenkji",
          excerpt: "",
          company: "Orient Co. Hot Steel Rolling Mill",
          position: "Member of the Board",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          name: "الأستاذ م.جورج تفنكجي",
          excerpt: "",
          company: "شركة الشرق لإنتاج الحديد الصناعي والإنشائي المدرفل على الساخن",
          position: "عضو مجلس الإدارة",
          locale: {
            name: "ar-SY"
          }
        }
      ]
    }
  }
});
console.log(result);

result = await prismaClient.user.createMany({
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
result = await prismaClient.post.create({
  data: {
    slug: "afei-new-website",
    description: "AFEI launched its dynamic version of the website on the internet to serve members and surfers",
    created_on: new Date("2012-05-17"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "AFEI New website ",
          excerpt: "AFEI launched its dynamic version of the website on the internet to serve members and surfers",
          content: "AFEI launched its dynamic version of the website on the Internet with new functions to serve members and surfers.\nPromoting members, all recent activities and contributions, is one key feature of the new website. Also, all files related to the activities are downloadable from the website.\nAnother key feature is the filtering and search by keywords which faciliatates the visitors' attempts to locate a specific piece of information.",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "الموقع الجديد للاتحاد على الإنترنت",
          excerpt: "الاتحاد يطلق موقعه الإلكتروني الديناميكي على الإنترنت لخدمة أعضائه والقراء",
          content: "الاتحاد يطلق موقعه الإلكتروني الديناميكي على الإنترنت بوظائف جديدة لخدمة أعضائه والقراء.\nإن الترويج للأعضاء (جميع النشاطات والمساهمات) هي ميزة للموقع الجديد، إضافة إلى أن الملفات الخاصة بالنشاط متاحة للتنزيل من الموقع.\nالميزة الثانية هي الفلترة والبحث عن الكلمات المفتاحية وهي تسهل محاولات الزائر للوصول إلى معلومة معينة على الموقع.",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "general-assembly-and-bod-meetings---postponed",
    description: "AFEI postponed the BOD semi-annual meeting and the General Assembly annual meeting which were scheduled on 6-7/6/2012 in Lebanon due to the exceptional circumstances and for the sake of safety.",
    created_on: new Date("2012-05-31"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "General Assembly and BOD meetings - postponed",
          excerpt: "AFEI postponed the BOD semi-annual meeting and the General Assembly annual meeting which were scheduled on 6-7/6/2012 in Lebanon due to the exceptional circumstances and for the sake of safety.",
          content: "AFEI postponed the BOD semi-annual meeting and the General Assembly annual meeting which were scheduled on 6-7/6/2012 in Lebanon due to the exceptional circumstances and for the sake of safety.",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "تأجيل اجتماعات الجمعية العمومية ومجلس الإدارة",
          excerpt: "تم الاتفاق على تأجيل اجتماعات مجلس الإدارة والجمعية العمومية التي كان من المقرر عقدها خلال الفترة 6-7 / 6 / 2012 في لبنان وذلك بسبب الظروف الاستثنائية وضمان سلامة المشاركين. ",
          content: "تم الاتفاق على تأجيل اجتماعات مجلس الإدارة والجمعية العمومية التي كان من المقرر عقدها خلال الفترة 6-7 / 6 / 2012 في لبنان وذلك بسبب الظروف الاستثنائية وضمان سلامة المشاركين.",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "caeu-following-up-on-the-establishment-of-an-arab-body-for-marketing",
    description: "A letter from the General Secretariat of CAEU was circulated to the Arab Sectoral Federations with the request to give opinions about the contribution of the federations or their member companies in establishing an Arab body for Marketing.",
    created_on: new Date("2012-06-28"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "CAEU following up on the establishment of an Arab body for Marketing",
          excerpt: "A letter from the General Secretariat of CAEU was circulated to the Arab Sectoral Federations with the request to give opinions about the contribution of the federations or their member companies in establishing an Arab body for Marketing.",
          content: "A letter from the General Secretariat of CAEU was circulated to the Arab Sectoral Federations with the request to give opinions about the contribution of the federations or their member companies in establishing an Arab body for Marketing.",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "مجلس الوحدة الاقتصادية العربية يتابع مشروع إنشاء هيئة عربية للتسويق",
          excerpt: "وجه مجلس الوحدة الاقتصادية رسالة إلى الاتحادات العربية النوعية التخصصية العاملة في نطاقه لإبداء آرائها بخصوص مساهمتها ومساهمة الشركات من أعضائها في مشروع إنشاء هيئة عربية للتسويق ",
          content: "ورد كتاب موجه من الأمانة العامة لمجلس الوحدة الاقتصادية العربية إلى الاتحادات العربية النوعية التخصصية متضمناً طلب إبداء الرأي بخصوص مشاركة الاتحادات أو أعضائها من الشركات في إنشاء \"جهاز عربي للتسويق\".\nمنذ السبعينات انتهج مجلس الوحدة الاقتصادية العربية منهج إقامة المشروعات العربية المشتركة باعتباره وسيلة لتشجيع رؤوس الأموال العربية للاستثمار في مشروعات عربية مشتركة مما يؤدي بالتالي إلى تنمية التجارة العربية البينية.\nقامت الأمانة العامة للمجلس باتخاذ الإجراءات لتأسيس عدد من الشركات العربية المشتركة تختلف عن جيل الشركات التي أنشئت في السبعينات حيث يتم المساهمة فيها من القطاع الخاص والمستثمرين العرب وذلك واتساقاً مع قرارات القمم العربية التي تدعو إلى تعظيم دور القطاع الخاص العربي في التنمية العربية الشاملة.",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "administrator"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "\"electronic-management-of-personnel\"-workshop",
    description: "UHRDA is organizing the workshop (accredited by Ein Shams University) in Sharm Elsheikh on 1-5/7/2012. The objective of the workshop is to provide participants with concepts and basic skills for Electronic Management and using modern technologies in the administration of Personnel and using information systems. For details, please visit www.uhrda.org",
    created_on: new Date("2012-05-25"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "\"Electronic Management of Personnel\" workshop",
          excerpt: "UHRDA is organizing the workshop (accredited by Ein Shams University) in Sharm Elsheikh on 1-5/7/2012. The objective of the workshop is to provide participants with concepts and basic skills for Electronic Management and using modern technologies in the administration of Personnel and using information systems. For details, please visit www.uhrda.org",
          content: "AFEI received the announcement from UHRDA which is organizing the workshop (accredited by Ein Shams University) in Sharm Elsheikh on 1-5/7/2012.\nThe objective of the workshop is to provide participants with concepts and basic skills for Electronic Management and using modern technologies in the administration of Personnel and using information systems.\nFor details, please visit www.uhrda.org",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "ورشة عمل \"الإدارة الإلكترونية لشؤون الموظفين\"",
          excerpt: "ينظم الاتحاد العربي لتنمية الموارد البشرية هذه الورشة (باعتماد جامعة عين شمس) في شرم الشيخ خلال الفترة 1-5 يوليو 2012. وتهدف الورشة إلى تزويد المشاركين بالمفاهيم والمهارات الأساسية للإدارة الإلكترونية واستخدام التقنيات الحديثة في إدارة شئون الموظفين من خلال نظم المعلومات المتطورة. للمزيد، يمكنكم زيارة الموقع www.uhrda.org",
          content: "ورد الإعلان عن الورشة إلينا من الاتحاد العربي لتنمية الموارد البشرية الذي ينظم هذه الورشة (باعتماد جامعة عين شمس) في شرم الشيخ خلال الفترة 1-5 يوليو 2012.\nوتهدف الورشة إلى تزويد المشاركين بالمفاهيم والمهارات الأساسية للإدارة الإلكترونية واستخدام التقنيات الحديثة في إدارة شئون الموظفين من خلال نظم المعلومات المتطورة.\nللمهتمين، يمكنكم زيارة الموقع www.uhrda.org",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "ramadan-mubarak",
    description: "Mubarak the holy month of Ramadan. We extend to you the warmest wishes and the highest blessings. May Allah return it to you, your families, your loved ones, and your countries in blessing, peace, and prosperity.",
    created_on: new Date("2012-07-20"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "Ramadan Mubarak",
          excerpt: "Mubarak the holy month of Ramadan. We extend to you the warmest wishes and the highest blessings. May Allah return it to you, your families, your loved ones, and your countries in blessing, peace, and prosperity.",
          content: "Mubarak the holy month of Ramadan. \nWe extend to you the warmest wishes and the highest blessings. \nMay Allah return it to you, your families, your loved ones, and your countries in blessing, peace, and prosperity.",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "تهنئة بقدوم شهر رمضان",
          excerpt: "مبارك علينا وعليكم الشهر الفضيل.\nنتقدم لكم بأحلى وأصدق الأماني الطيبة وأجل آيات التبريك.\nأعاده الله عليكم وعلى أهلكم وأحبابكم والوطن بالخير والبركة وقد عمها الأمن والسلام والازدهار.",
          content: "مبارك علينا وعليكم الشهر الفضيل.\nنتقدم لكم بأحلى وأصدق الأماني الطيبة وأجل آيات التبريك.\nأعاده الله عليكم وعلى أهلكم وأحبابكم والوطن بالخير والبركة وقد عمها الأمن والسلام والازدهار.",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "administrator"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {

    slug: "eid-al-fitr-2012",
    description: "Greetings from AFEI: May Allah accept your fasting and prayers, bless your Eid, and return it with the blessings of safety & security. Eid Mubarak.",
    created_on: new Date("2012-08-18"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "Eid Al Fitr 2012",
          excerpt: "Greetings from AFEI: May Allah accept your fasting and prayers, bless your Eid, and return it with the blessings of safety & security. Eid Mubarak.",
          content: "Greetings from AFEI: May Allah accept your fasting and prayers, bless your Eid, and return it with the blessings of safety & security. Eid Mubarak.",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "عيد الفطر 2012",
          excerpt: "تهنئة من أسرة الاتحاد العربي للصناعات الهندسية: تقبل الله صيامكم وقيامكم وكافة أعمالكم، وبارك لكم بعيدكم، وأعاده عليكم وعلى الأمة وقد أزال الغمة وأنعم علينا بالأمن والأمان والاطمئنان. وكل عام وأنتم بخير",
          content: ".تهنئة من أسرة الاتحاد العربي للصناعات الهندسية: تقبل الله صيامكم وقيامكم وكافة أعمالكم، وبارك لكم بعيدكم، وأعاده عليكم وعلى الأمة وقد أزال الغمة وأنعم علينا بالأمن والأمان والاطمئنان. وكل عام وأنتم بخير",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "china-import-and-export-fair",
    description: "On 15-19/10/2012, the International Pavilion for the 112th Session of China Import and Export Fair is organized at China Import and Export Fair Complex, No.380 Yuejiangzhong Road, Guangzhou, China. Phase one is dedicated for: Electronics & Household Electrical Appliances, Building Materials & Hardware, Machinery Equipments, and Industrial Raw Materials. For details, please visit http://www.cantonfair.org.cn/en/import/detail.aspx?oid=390",
    created_on: new Date("2012-09-06"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "China Import and Export Fair",
          excerpt: "On 15-19/10/2012, the International Pavilion for the 112th Session of China Import and Export Fair is organized at China Import and Export Fair Complex, No.380 Yuejiangzhong Road, Guangzhou, China. Phase one is dedicated for: Electronics & Household Electrical Appliances, Building Materials & Hardware, Machinery Equipments, and Industrial Raw Materials. For details, please visit http://www.cantonfair.org.cn/en/import/detail.aspx?oid=390",
          content: "On 15-19/10/2012, the International Pavilion for the 112th Session of China Import and Export Fair is organized at China Import and Export Fair Complex, No.380 Yuejiangzhong Road, Guangzhou, China. Phase one is dedicated for: Electronics & Household Electrical Appliances, Building Materials & Hardware, Machinery Equipments, and Industrial Raw Materials.\nLEMATIC S.A.L announced its participation in the fair (Hall: 10.3, Booth No. L 37-40).\nFor details, please visit the website of the fair http://www.cantonfair.org.cn/en/import/detail.aspx?oid=390",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "معرض الاستيراد والتصدير في الصين",
          excerpt: "سيقام معرض الصين للاستيراد والتصدير خلال الفترة 15-19/10/2012 في مجمع المعرض بمدينة غوانغ زهاو في الصين، حيث خصصت المرحلة الأولى للأجهزة الإلكترونية والأجهزة المنزلية الكهربائية ومواد وعتاد البناء والآلات والمواد الأولية الصناعية. للمزيد، يمكنكم زيارة الموقع http://www.cantonfair.org.cn/en/import/detail.aspx?oid=390",
          content: "سيقام معرض الصين للاستيراد والتصدير خلال الفترة 15-19/10/2012 في مجمع المعرض بمدينة غوانغ زهاو في الصين، حيث خصصت المرحلة الأولى للأجهزة الإلكترونية والأجهزة المنزلية الكهربائية ومواد وعتاد البناء والآلات والمواد الأولية الصناعية.\nأعلنت شركة ليماتيك (عضو الاتحاد من لبنان) مشاركتها في المعرض (Hall: 10.3, Booth No. L 37-40)\nللمزيد، يمكنكم زيارة موقع المعرض على الإنترنت http://www.cantonfair.org.cn/en/import/detail.aspx?oid=390",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "professional-diploma-in-human-resources-management",
    description: "UHRDA is organizing a 10-days training on Human Resources Management in Rabbat, Morocco on 18-27/11/2012. The training program is accredited by ACAC, and successful participants are awarded a professional diploma. For details, please visit www.uhrda.org",
    created_on: new Date("2012-09-17"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "Professional Diploma in Human Resources Management",
          excerpt: "UHRDA is organizing a 10-days training on Human Resources Management in Rabbat, Morocco on 18-27/11/2012. The training program is accredited by ACAC, and successful participants are awarded a professional diploma. For details, please visit www.uhrda.org",
          content: "AFEI received the announcement from UHRDA which is organizing the training seminar on \"Human Resources Management\" in Rabbat, Morocco on 18-27/11/2012.\nThe program aims at consolidating the concept that HR is an asset of any organization, and presenting the latest concepts and knowledge in the field of human resources management.\nThe training program is accredited by ACAC, and successful participants are awarded a professional diploma.\nFor details, please visit www.uhrda.org",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "الدبلوم المهني في تنمية الموارد البشرية",
          excerpt: "ينظم الاتحاد العربي لتنمية الموارد البشرية برنامجاً تدريبياً لمدة عشرة أيام بعنوان (إدارة الموارد البشرية) خلال الفترة 18-27/11/2012 في الرباط، المغرب. هذا البرنامج معتمد من المجلس الأمريكي لاعتماد الشهادات المهنية ACAC وسيحصل الناجحون على دبلوم مهني. للمزيد، يمكنكم زيارة الموقع www.uhrda.org",
          content: "ورد الإعلان إلينا من الاتحاد العربي لتنمية الموارد البشرية الذي ينظم البرنامج التدريبي بعنوان (إدارة الموارد البشرية) في الرباط، المغرب خلال الفترة 18-27/11/2012.\nيهدف البرنامج إلى ترسيخ مفهوم أن الموارد البشرية أصل من أصول المؤسسة وعرض المفاهيم والمعارف الحديثة في مجال إدارة الموارد البشرية.\nهذا البرنامج معتمد من المجلس الأمريكي لاعتماد الشهادات المهنية ACAC ، ويمنح الناجحين دبلوماً مهنياً.\nللمهتمين، يمكنكم زيارة الموقع www.uhrda.org",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "administrator"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "legal-and-finance-training-workshops",
    description: "UHRDA is organizing two training workshops titled (New techniques in preparing financial reports) and (Legal departments qualification) in Istanbul, Turkey on 9-18/12/2012. The training program is accredited by ACAC. For details, please visit www.uhrda.org",
    created_on: new Date("2012-11-14"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "Legal and Finance training workshops",
          excerpt: "UHRDA is organizing two training workshops titled (New techniques in preparing financial reports) and (Legal departments qualification) in Istanbul, Turkey on 9-18/12/2012. The training program is accredited by ACAC. For details, please visit www.uhrda.org",
          content: "AFEI received the announcement from UHRDA which is organizing two training workshops on (New techniques in preparing financial reports) and (Legal departments qualification) in Istanbul, Turkey on 9-18/12/2012.\nThe workshops are accredited by ACAC. For details, please visit http://www.uhrda.org.\nDownloadable files:\nAnnouncements of the (New techniques in preparing financial reports) and (Legal departments qualification) workshops\nScheduled activities of UHRDA on Nov. & Dec.",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "ورش عمل تأهيل قانونية ومالية",
          excerpt: "ينظم الاتحاد العربي لتنمية الموارد البشرية ورشتي عمل بعنوان (التقنيات الحديثة في إعداد التقارير المالية والتحليل المالي والمحاسبي) و (تأهيــل الإدارات القانونيـــة) خلال الفترة 9-18/12/2012 في اسطنبول/تركيا. هذا البرنامج معتمد من المجلس الأمريكي لاعتماد الشهادات المهنية ACAC. للتفاصيل  يمكنكم زيارة الموقع www.uhrda.org",
          content: "ورد الإعلان إلينا من الاتحاد العربي لتنمية الموارد البشرية الذي ينظم ورشتي عمل بعنوان (التقنيات الحديثة في إعداد التقارير المالية والتحليل المالي والمحاسبي) و (تأهيــل الإدارات القانونيـــة) في اسطنبول/تركيا خلال الفترة 9-18/12/2012 برسوم اشتراك مقدارها 2000 دولار أمريكي لكل ورشة.\nهذه الأنشطة معتمدة من المجلس الأمريكي لاعتماد الشهادات المهنية ACAC. للمهتمين، يمكنكم زيارة الموقع http://www.uhrda.org.\nملفات للتنزيل:\nإعلان ورشة (التقنيات الحديثة في إعداد التقارير المالية والتحليل المالي المحاسب)\nإعلان ورشة (تأهيل الإدارات القانونية)\nفعاليات الاتحاد العربي لتنمية الموارد البشرية خلال شهري نوفمبر وديسمبر",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "afei.sy"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "caeu-proposal-for-joint-projects-to-the-member-companies-of-the-arab-sectoral-federations",
    description: "As suggested by the advisory body of its Council of Elders, the Council of Arab Economic Unity circulated a list of proposed joint Arab projects which will be discussed with member companies in the Arab Sectoral Federations that are interested during a special meeting on 28/11/2012.",
    created_on: new Date("2012-11-26"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "CAEU Proposal for joint projects to the member companies of the Arab Sectoral Federations",
          excerpt: "As suggested by the advisory body of its Council of Elders, the Council of Arab Economic Unity circulated a list of proposed joint Arab projects which will be discussed with member companies in the Arab Sectoral Federations that are interested during a special meeting on 28/11/2012.",
          content: "AFEI General Secretariat received the email dated 25/11/2012 from the Council of Arab Economic Unity containing request to circulate a list of joint Arab projects -as suggested by the advisory body of Council of Elders- to member companies of the Arab Federations so that the views of interested companies will be discussed during the meeting on 28/11/2012 in Cairo.\nMember companies of AFEI are invited to study the proposal, and communicate directly with Dr. Alsayed Abdulfattah (Head of the Technical Office, CAEU General Secretariat) with regard to their participation in the projects.\nDownloadable files:\nElectronic letter from CAEU\nProposed projects",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "مشروعات مشتركة مقترحة من مجلس الوحدة الاقتصادية للشركات أعضاء الاتحادات العربية النوعية",
          excerpt: "وفق اقتراح أعضاء الهيئة الاستشارية لمجلس الحكماء، طرح مجلس الوحدة الاقتصادية لائحة من المشروعات العربية المشتركة لاستمزاج آراء رؤساء الشركات الأعضاء في الاتحادات النوعية العربية ومناقشة وجهات نظرهم خلال اجتماع خاص لذلك بتاريخ 28/11/2012.",
          content: "وردت الرسالة الإلكترونية المؤرخة 25/11/2012 إلى الأمانة العامة للاتحاد من مجلس الوحدة الاقتصادية العربية والتي تتضمن طلب تعميم لائحة من المشروعات العربية المشتركة وفق اقتراح أعضاء الهيئة الاستشارية لمجلس الحكماء في المجلس واستمزاج آراء رؤساء الشركات الأعضاء في الاتحادات النوعية العربية حيث سيصار إلى مناقشة وجهات نظر الشركات المهتمة خلال اجتماع بتاريخ 28/11/2012 في القاهرة.\nيمكن للشركات الأعضاء في الاتحاد الاطلاع على المقترحات والتواصل مباشرة مع الدكتور/السيد عبد الفتاح مدير المكتب الفني بالأمانة العامة للمجلس بخصوص رغبتها بالمشاركة في هذه المشروعات وفق ماتراه مناسباً.\nملفات للتنزيل:\nالرسالة الإلكترونية من المجلس\nلائحة المشروعات المقترحة",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {

    slug: "afei-general-assembly-and-board-of-directors-meetings",
    description: "Egypt is hosting the general assembly and board of directors meetings of the Arab Federation for Engineering Industries on 16-17/1/2013 in Cairo. Agenda of the meetings highlight: approving the new vision for AFEI, the new structure of regional offices, and AFEI bylaw updated accordingly.",
    created_on: new Date("2013-01-10"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "AFEI General Assembly and Board of Directors Meetings",
          excerpt: "Egypt is hosting the general assembly and board of directors meetings of the Arab Federation for Engineering Industries on 16-17/1/2013 in Cairo. Agenda of the meetings highlight: approving the new vision for AFEI, the new structure of regional offices, and AFEI bylaw updated accordingly.",
          content: "Egypt is hosting the general assembly and board of directors meetings of the Arab Federation for Engineering Industries on 16-17/1/2013 in Cairo. Agenda of the meetings highlight: approving the new vision for AFEI, the new structure of regional offices, and AFEI bylaw updated accordingly.\nThe meetings were scheduled to take place on June 2012 in Beirut, but were postponed under the circumstances.",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "اجتماعات الجمعية العمومية ومجلس إدارة الاتحاد العربي للصناعات الهندسية",
          excerpt: "تستضيف جمهورية مصر العربية اجتماعات مجلس الإدارة والجمعية العمومية العادية وغير العادية للاتحاد العربي للصناعات الهندسية خلال الفترة 16-17/1/2013 في القاهرة لإقرار الرؤية الجديدة للاتحاد وهيكلية عمل مكاتبه الإقليمية واللائحة الداخلية المعدلة وفق ذلك.",
          content: "تستضيف جمهورية مصر العربية اجتماعات مجلس الإدارة والجمعية العمومية العادية وغير العادية للاتحاد العربي للصناعات الهندسية خلال الفترة 16-17/1/2013 في القاهرة. من أبرز البنود على الأجندة: إقرار الرؤية الجديدة للاتحاد وهيكلية عمل مكاتبه الإقليمية واللائحة الداخلية المعدلة.\nكانت الاجتماعات مقررة في حزيران/يونيه 2012 في بيروت وتأجلت لأسباب طارئة.",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "a-taskforce-meeting-to-work-on-the-concept-of-establishing-an-arab-marketing-commission",
    description: "The general secretary of the Council of Arab Economic Unity invites the marketing specialists working for member companies of the Arab Federations and the representatives of these Federation as well as all interested in the establishment of an Arab Marketing Commission to participate in the first meeting of the designated taskforce which will be held in its premises in Cairo on 24/2/2013.",
    created_on: new Date("2013-01-02"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "A taskforce meeting to work on the concept of establishing an Arab Marketing Commission",
          excerpt: "The general secretary of the Council of Arab Economic Unity invites the marketing specialists working for member companies of the Arab Federations and the representatives of these Federation as well as all interested in the establishment of an Arab Marketing Commission to participate in the first meeting of the designated taskforce which will be held in its premises in Cairo on 24/2/2013.",
          content: "The general secretary of the Council of Arab Economic Unity invites the marketing specialists working for member companies of the Arab Federations and the representatives of these Federation as well as all interested in the establishment of an Arab Marketing Commission to participate in the first meeting of the designated taskforce which will be held in its premises in Cairo on 24/2/2013.\nDownloadable files:\nAgenda and papers",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "اجتماع فريق عمل لإنجاز التصور الخاص بوضع الجهاز العربي للتسويق",
          excerpt: "تدعو الأمانة العامة لمجلس الوحدة الاقتصادية العربية خبراء التسويق بالشركات العربية التابعة للاتحادات العربية النوعية وممثلي هذه الاتحادات والمهتمين بمقترح تأسيس \"الجهاز العربي للتسويق\" للمشاركة في الاجتماع الأول لفريق العمل المقرر عقده في 24/2/2013 بمقر المجلس في القاهرة.",
          content: "تدعو الأمانة العامة لمجلس الوحدة الاقتصادية العربية خبراء التسويق بالشركات العربية التابعة للاتحادات العربية النوعية وممثلي هذه الاتحادات والمهتمين بمقترح تأسيس \"الجهاز العربي للتسويق\" موضع التنفيذ للمشاركة في الاجتماع الأول لفريق العمل المشكل بالتعاون مع المؤسسة الدولية الإسلامية لتمويل التجارة والمقرر عقده في 24/2/2013 بمقر المجلس في القاهرة.\nملفات للتنزيل:\nبرنامج عمل ومذكرات الاجتماع",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "administrator"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "uhrda-activities-schedule-for-2013",
    description: "The Arab Union for HRD published its activities schedule for the year 2013. For detailes, you can visit http://www.uhrda.org.",
    created_on: new Date("2013-01-01"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "UHRDA Activities Schedule for 2013",
          excerpt: "The Arab Union for HRD published its activities schedule for the year 2013. For detailes, you can visit http://www.uhrda.org.",
          content: "The Arab Union for HRD published its activities schedule (Arabic) for the year 2013 covering different training and capacity building measures.\nFor details, please visit: http://www.uhrda.org\n ",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "خطة فعاليات الاتحاد العربي لتنمية الموارد البشرية لعام 2013",
          excerpt: "نشر الاتحاد العربي لتنمية الموارد البشرية خطة فعالياته خلال عام 2013 التي ستنفذها: وحدة البرامج التدريبية وورش العمل - وحدة البرامج النوعية - وحدة الشهادات المهنية - وحدة المؤتمرات.\n \nيمكنكم الاطلاع على التفاصيل بزيارة موقع الاتحاد: http://www.uhrda.org",
          content: "نشر الاتحاد العربي لتنمية الموارد البشرية خطة فعالياته خلال عام 2013 التي ستنفذها: وحدة البرامج التدريبية وورش العمل - وحدة البرامج النوعية - وحدة الشهادات المهنية - وحدة المؤتمرات.\nيمكنكم الاطلاع على التفاصيل بزيارة موقع الاتحاد: http://www.uhrda.org",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result)

result = await prismaClient.post.create({
  data: {
    slug: "role-of-entrepreneurs-in-introducing-dual-system-in-egypt-and-syria",
    description: "A summary presentation of the main features of the pilot Dual System models in Egypt and Syria, and a reflection on the common challenge. The author (AFEI consultant) presented this summary to students in the master level from Arab countries, and Germany.\nThe main challenge is to internalize the pilot. Reasons are varied, and research on specificity of the context is needed (cultural and societal).",
    created_on: new Date("2017-05-28"),
    category: {
      connect: {
        slug: "news"
      }
    },
    locale_post: {
      create: [
        {
          title: "Role of Entrepreneurs in introducing Dual System in Egypt and Syria",
          excerpt: "A summary presentation of the main features of the pilot Dual System models in Egypt and Syria, and a reflection on the common challenge. The author (AFEI consultant) presented this summary to students in the master level from Arab countries, and Germany.\nThe main challenge is to internalize the pilot. Reasons are varied, and research on specificity of the context is needed (cultural and societal).",
          content: "A summary presentation of the main features of the pilot Dual System models in Egypt and Syria, and a reflection on the common challenge. The author (AFEI consultant) presented this summary to students in the master level from Arab countries, and Germany.\nThe main challenge is to internalize the pilot. Reasons are varied, and research on specificity of the context is needed (cultural and societal).",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "دور أصحاب الأعمال في التجارب الرائدة للتعليم المزدوج في مصر وسوريا",
          excerpt: "عرض يلخص أهم ملامح التجربتين الرائدتين لنظام التعليم المزدوج في مصر وسوريا، والتحدي المشترك لهاتين التجربتين. قدم هذا العرض (من استشارية لدى الاتحاد) لمجموعة من طلبة الماجستير من الدول العربية وألمانيا.\nالتحدي الأساسي هو في تبني التجربة الرائدة وجعلها منظومة للبلد. والأسباب مختلفة وتحتاج إلى دراسات حول خصائص البيئة التي تنقل لها التجربة (المجتمع والثقافة). ",
          content: "عرض يلخص أهم ملامح التجربتين الرائدتين لنظام التعليم المزدوج في مصر وسوريا، والتحدي المشترك لهاتين التجربتين. قدم هذا العرض (من استشارية لدى الاتحاد) لمجموعة من طلبة الماجستير من الدول العربية وألمانيا.\nالتحدي الأساسي هو في تبني التجربة الرائدة وجعلها منظومة للبلد. والأسباب مختلفة وتحتاج إلى دراسات حول خصائص البيئة التي تنقل لها التجربة (المجتمع والثقافة). ",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

// post type - committee
result = await prismaClient.post.create({
  data: {
    slug: "strategic-vision-formulation-working-group",
    description: "In the BOD meeting on 9/12/2011, issues like priorities of work topics, mechanisms of coordination and cooperation between members, and the way to measure the impact of AFEI in economic and social development in the Arab countries were put on the discussion table. \nAttendees agreed on the need to formulate a new common vision, mission, goals, objectives and activities; and to review the AFEI objectives that are listed in the bylaw, as well as to clarify the methodology of the work in the federation.",
    created_on: new Date("2011-12-09"),
    category: {
      connect: {
        slug: "committee"
      }
    },
    locale_post: {
      create: [
        {
          title: "Strategic Vision Formulation Working Group",
          excerpt: "In the BOD meeting on 9/12/2011, issues like priorities of work topics, mechanisms of coordination and cooperation between members, and the way to measure the impact of AFEI in economic and social development in the Arab countries were put on the discussion table. \nAttendees agreed on the need to formulate a new common vision, mission, goals, objectives and activities; and to review the AFEI objectives that are listed in the bylaw, as well as to clarify the methodology of the work in the federation.",
          content: `During the periodic meetings of the BOD, discussions re-visited many times the content of the AFEI annual work plan and its report on activities; and it became obvious that there is a need to clarify the role of the federation which is an association of employers on the Arab level as a partner in implementing regional development programs, and to show the contribution of the federation in development through continuous dialogue with governments in the Arab countries and lobbying for opinions of its members with the advantage as an NGO on the Arab level that has regional offices which are seen as houses of expertise in fields of interest to the engineering industries. In the BOD meeting on 9/12/2011, the issues like priorities of work topics, mechanisms of coordination and cooperation between members, and the way to measure the impact of AFEI in economic and social development in the Arab countries were put on the discussion table. Members exchanged ideas about translating the nationalism feeling and into action, cooperating with the Young Industrialists Committee, and making use of IT & Internet in networking and spreading experiences, setting a policy for new members as a rejuvenating element for the federation, activating members through participation in AFEI committees and activities in order to create the sense of ownership, deepening the strategic cooperation with other associations on the business environment. "We became lobby groups in our societies, and this is an added value from associating together under the umbrella of the federation" Attendees agreed on the need to formulate a new common vision, mission, goals, objectives and activities; and to review the AFEI objectives that are listed in the bylaw, as well as to clarify the methodology of the work in the federation. Resolution: A working group consisting of Eng.Ahmad Othman, Eng.Jamal Afifi, Eng.Hamid Zayani, Eng.Sherif Abdelhadi, Mr.Hassan Daaboul, Dr.Haytham Yafi and chaired by Mr.Zayani is assigned the task of formulating a proposal for the federation's vision and the methodology of joint work according to the discussions. The proposal should be sent to the BOD within three months, and then the new vision is to be presented to the general assembly meeting mid 2012. The resolution is realized, and the working group finalized its task and presented its report to the BOD end of March. See also: WG meeting on 13/3/2012`,
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "مجموعة عمل صياغة الرؤية الاستراتيجية",
          excerpt: `في اجتماع مجلس الإدارة بتاريخ 9/12/2011 وضعت على طاولة النقاش مسألة أولويات مواضيع العمل وآلية التنسيق والتعاون بين أعضاء الاتحاد وكيفية قياس تأثير الاتحاد في التنمية الاقتصادية والاجتماعية في الدول العربية. \nاتفق الحضور على ضرورة تشكيل رؤية مشتركة جديدة وصياغة ماينبثق عنها من رسالة وغايات وأهداف محددة وأنشطة، وإعادة النظر في أهداف الاتحاد المذكورة في النظام الأساسي، وتوضيح منهجية عمل الاتحاد.`,
          content: `خلال اجتماعات مجلس الإدارة الدورية تكررت المناقشات بخصوص مايورده الاتحاد في خطة العمل السنوية وتقرير الأنشطة المنفذة، وتكشفت الحاجة إلى توضيح دور الاتحاد بصفته تجمعاً لأصحاب الاعمال على مستوى الوطن العربي كشريك في تنفيذ المشاريع التنموية الإقليمية، وتبيان مساهمة الاتحاد في التطوير من خلال ديمومة الحوار مع الحكومات في الدول العربية وتوحيد الرأي بين أعضائه خاصة وأنه يتميز بكونه منظمة غير حكومية على مستوى إقليمي لها مكاتب إقليمية ينظر إليها كبيوت خبرة في المواضيع التي تهم القطاع الصناعي الهندسي.
وفي اجتماع مجلس الإدارة بتاريخ 9/12/2011 وضعت على طاولة النقاش مسألة أولويات مواضيع العمل وآلية التنسيق والتعاون بين أعضاء الاتحاد وكيفية قياس تأثير الاتحاد في التنمية الاقتصادية والاجتماعية في الدول العربية. تبادل الحضور الأفكار حول اعتماد هدف غير العاطفة القومية العربية وتحويلها إلى فعل، والتعاون مع لجنة الشباب الصناعي والاستفادة من تقنيات المعلومات والإنترنت في التشبيك ونشر التجارب، وتحديد سياسة انضمام للأعضاء حيث أن استقطاب العضوية ضروري لتجديد الاتحاد، وجعل الأعضاء فاعلين من خلال مشاركتهم في لجان وأنشطة الاتحاد بحيث ينمو حس الانتماء لديهم، وتعميق التعاون الاستراتيجي مع الاتحادات الأخرى للعمل على البنية التحتية لقطاع الأعمال.
"لقد أصبحنا جماعات ضغط في مجتمعاتنا، وهذه قيمة مضافة للتجمع معاً تحت مظلة الاتحاد"
اتفق الحضور على ضرورة تشكيل رؤية مشتركة جديدة وصياغة ماينبثق عنها من رسالة وغايات وأهداف محددة وأنشطة، وإعادة النظر في أهداف الاتحاد المذكورة في النظام الأساسي، وتوضيح منهجية عمل الاتحاد.
القرار: تكلف مجموعة العمل المؤلفة من السادة م.أحمد عثمان- م.جمال عفيفي- م.حامد الزياني- م. شريف عبد الهادي- أ.حسان دعبول- د.هيثم اليافي وبرئاسة الأستاذ الزياني بصياغة مقترح رؤية لدور الاتحاد ومنهجية العمل المشترك وفق ماتمت مناقشته وترسل خلال ثلاثة أشهر إلى مجلس الإدارة للتداول، حيث سيصار إلى عرضها على الجمعية العمومية في اجتماعها القادم منتصف عام 2012.
تم تنفيذ القرار، وأنهت مجموعة العمل مهمتها، ورفعت تقريرها إلى مجلس الإدارة بنهاية شهر آذار/مارس.
انظر اجتماع مجموعة العمل بتاريخ 13 / 3 / 2012`,
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

result = await prismaClient.post.create({
  data: {
    slug: "young-industrialists-committee",
    description: `"Meeting of the Arab young industrialists" was organized for the second row in the member companies (future leaders) with the goal to create links between young industrialists and the AFEI founders in order to prepare them to hold the responsibilities of developing the federation. The meeting resulted in the formation of "a standing Committee for Young Industrialists" under the umbrella of AFEI.`,
    created_on: new Date("2009-10-25"),
    category: {
      connect: {
        slug: "committee"
      }
    },
    locale_post: {
      create: [
        {
          title: "Young Industrialists Committee",
          excerpt: `"Meeting of the Arab young industrialists" was organized for the second row in the member companies (future leaders) with the goal to create links between young industrialists and the AFEI founders in order to prepare them to hold the responsibilities of developing the federation. The meeting resulted in the formation of "a standing Committee for Young Industrialists" under the umbrella of AFEI.`,
          content: `Inviting young industrialists (2nd generation: sons or executives in member companies) to join the meetings became a habit since 2006 with the objective to provide them with an opportunity to get introduced to the mentality of the founders. The idea of involving the youth in the public work kept maturing until the late Eng.Abdulhadi Abdulmonem (served as Chairman of the board on June 2009 to August 2011) proposed to institutionalize the process within the frame of the federation with the aim to network between the young industrialists, and deepen the cooperation between themselves in order to train a generation that believes in the Arab collaboration and helps in transferring development and updates in the industrial sector, as well as to prepare them to take responsibilities in the federation.
In October 2009, a "Meeting of the Arab young industrialists" was organized where the second row in the member companies (future leaders) joined. The goal was to create links between young industrialists and the AFEI founders in order to prepare them to hold the responsibilities of developing the federation according to their ideas and the modern development.
The meeting resulted in the formation of "a standing Committee for Young Industrialists" with representatives of all Arab countries (if possible) which should prepare its suggestions about working and connecting with the Federation.
Read about the committee activities:\n-    Young Industrialists Committee meeting in Damascus, Syria on 6/3/2010\n-    Young Industrialists Committee meeting in Beirut, Lebanon on 2/7/2010`,
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "لجنة الشباب الصناعي",
          excerpt: `ضم "لقاء الشباب الصناعيين العرب" جيل الصف الثاني في الشركات الأعضاء الذين سيشغلون المناصب القيادية في المستقبل. كانت الغاية هي خلق صلات للشباب مع الجيل المؤسس في الاتحاد استعداداً لتحملهم مسؤوليات تطوير الاتحاد. بنتيجة اللقاء، تم تشكيل "لجنة دائمة للشباب الصناعيين" تحت مظلة الاتحاد.`,
          content: `تكررت دعوة الشباب الصناعي (الجيل الثاني من أبناء أصحاب الشركات الأعضاء في الإتحاد أو الصف الثاني من المديرين) إلى اجتماعات الاتحاد منذ عام 2006 بهدف إتاحة الفرصة لهم للتعرف على أفكار الجيل المؤسس، وكانت فكرة ضرورة إشراكهم في العمل العام تنضج إلى أن قدم المرحوم م.عبد الهادي عبد المنعم (رئيس مجلس الإدارة في الفترة 2009-2011) اقتراحه بتنظيم هذا العمل بشكل مؤسسي في إطار الاتحاد وذلك بهدف تشبيك جيل الشباب وتعميق التعاون فيما بينهم للمساعدة في إعداد جيل يؤمن بالتعاون العربي ويساعد الجيل الحالي في نقل التطور والمستجدات في العمل الصناعي واستعداداً لتحمل مسؤولية الاتحاد بمفاهيمه المستجدة.
وفي تشرين الأول/اكتوبر 2009 تم تنظيم "لقاء الشباب الصناعيين العرب" الذي شارك فيه جيل الصف الثاني في الشركات الأعضاء والذين سيشغلون المناصب القيادية في المستقبل. كانت الغاية هي خلق صلات للشباب مع الجيل المؤسس في الاتحاد استعداداً لتحملهم مسؤوليات تطوير الاتحاد بما يتلاءم مع أفكارهم ومستجدات عصرهم.
بنتيجة اللقاء، تم تشكيل "لجنة دائمة للشباب الصناعيين" يمثل فيها جميع الدول العربية (إن أمكن ذلك) على أن تقوم اللجنة بإعداد مقترحاتها بشأن آليات العمل والارتباط بالاتحاد.
يمكنكم الاطلاع على نشاطات اللجنة التالية:\n-    اجتماع لجنة الشباب الصناعي في دمشق/سورية بتاريخ 6/3/2010\n-    اجتماع لجنة الشباب الصناعي في بيروت/لبنان بتاريخ 2/7/2010`,
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

// page table
result = await prismaClient.post.create({
  data: {
    slug: "/",
    description: "The Federation is an association of employers from Arab countries who are operating in the sector of engineering industries that aims at contributing to defending the interests of member companies within the framework of society public interest in all forums.",
    category: {
      connect: {
        slug: "page"
      }
    },
    locale_post: {
      create: [
        {
          title: "Arab Federation for Engineering Industries",
          excerpt: "The Federation is an association of employers from Arab countries who are operating in the sector of engineering industries that aims at contributing to defending the interests of member companies within the framework of society public interest in all forums.",
          content: "[home]",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "الاتحاد العربي للصناعات الهندسية",
          excerpt: "الاتحاد هو تجمع لأصحاب أعمال من الوطن العربي في قطاع الصناعات الهندسية يهدف إلى المساهمة في رعاية مصالح الشركات الأعضاء فى إطار المصلحة العامة للمجتمع في كافة المحافل.",
          content: "[home]",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

result = await prismaClient.post.create({
  data: {
    slug: "about-us",
    description: "The Federation is an association of Arab countries' employers operating in the sector of engineering industries which aims at contributing to defending the interests of member companies within the framework of society public interest in all forums",
    category: {
      connect: {
        slug: "page"
      }
    },
    locale_post: {
      create: [
        {
          title: "About",
          excerpt: "The Federation is an association of Arab countries' employers operating in the sector of engineering industries which aims at contributing to defending the interests of member companies within the framework of society public interest in all forums",
          content: `The Federation is an association of Arab countries' employers operating in the sector of engineering industries which aims at contributing to defending the interests of member companies within the framework of society public interest in all forums and through: coordination and active participation in issues related to plans and programs of economic and professional developments in the Arab countries, capacity building to achieve impact and effectiveness in these fields, upgrading the industries to the international level of competitiveness, and strengthening the capacities of young industrialists.:`,
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "عن الاتحاد",
          excerpt: "الاتحاد هو تجمع لأصحاب أعمال من الوطن العربي في قطاع الصناعات الهندسية يهدف إلى المساهمة في رعاية مصالح الشركات الأعضاء فى إطار المصلحة العامة للمجتمع في كافة المحافل.",
          content: `تأسس الاتحاد العربي للصناعات الهندسية بموجب قرار مجلس الوحدة الاقتصادية رقم 703 دورة 25 في 24/6/1975.

عقدت الجمعية التأسيسية للاتحاد العربي للصناعات الهندسية اجتماعاتها في بغداد من 27 – 29 ديسمبر 1975وانتخب أول مجلس إدارة للاتحاد.

الدول المؤسسة للاتحاد العربي للصناعات الهندسية هي: الجمهورية الجزائرية الديمقراطية - جمهورية مصر العربية - دولة الكويت - جمهورية العراق  

عدد الدول المشاركة في الاتحاد العربي للصناعات الهندسية من عام 1975 حتى يونيو 2009 بلغت 14 دولة وهي:
جمهورية السودان - جمهورية مصر العربية  - الجمهورية العربية السورية - الإمارات العربية المتحدة - الجمهورية الجزائرية الديمقراطية - جمهورية العراق - المملكة الأردنية الهاشمية - مملكة البحرين - دولة الكويت - الجماهيرية العربية الليبية - المملكة المغربية - الجهورية اللبنانية - المملكة العربية السعودية - الجمهورية التونسية`,
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

result = await prismaClient.post.create({
  data: {
    slug: "contact-us",
    description: "Contact AFEI in Damascus and Cairo by email or directly by phone. ",
    category: {
      connect: {
        slug: "page"
      }
    },
    locale_post: {
      create: [
        {
          title: "Contact us",
          excerpt: "Contact AFEI in Damascus and Cairo by email or directly by phone. ",
          content: "[contact]",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "اتصل بنا",
          excerpt: `الأمانة العامة والمكتب الإقليمي بدمشق،عنوان مكتب الاتحاد العربي للصناعات الهندسية في دمشق،هاتف الاتحاد العربي للصناعات الهندسية في دمشق،بريد الكتروني afei.sy@gmail.com،المكتب الإقليمي في القاهرة،عنوان الاتحاد العربي للصناعات الهندسية في القاهرة، هاتف الاتحاد العربي للصناعات الهندسية في القاهرة،بريد إلكتروني afei@link.net،فاكس الاتحاد العربي للصناعات الهندسية في دمشق،فاكس الاتحاد العربي للصناعات الهندسية في القاهرة`,
          content: "[contact]",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

result = await prismaClient.post.create({
  data: {
    slug: "activities",
    description: "The AFEI Chairman of the BOD emphasized in his opening speeches the need for such platform that allows members to get involved in tackling pressing issues which affect their businesses, societies, and countries. He also stressed the need to continue the quest towards making AFEI a corner stone in the process of developing the economic regulations which would guarantee harmonization with the global developments and provide guidance to the economic development initiatives.",
    category: {
      connect: {
        slug: "page"
      }
    },
    locale_post: {
      create: [
        {
          title: "Activities",
          excerpt: "",
          content: "[activities]",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "النشاطات",
          excerpt: "",
          content: "[activities]",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

result = await prismaClient.post.create({
  data: {
    slug: "members",
    description: "Provision of specialized services for the members which falls within the Federation's priorities, at a high level of quality, and responding to the requirements of each country.",
    category: {
      connect: {
        slug: "page"
      }
    },
    locale_post: {
      create: [
        {
          title: "Members",
          excerpt: "Provision of specialized services for the members which falls within the Federation's priorities, at a high level of quality, and responding to the requirements of each country.",
          content: "[members]",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "الأعضاء",
          excerpt: "تقديم خدمات متخصصة ضمن أولويات الاتحاد للأعضاء بحيث تكون على مستوى عال من الجودة وتتجاوب مع متطلبات كل بلد من البلدان. ",
          content: "[members]",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

result = await prismaClient.post.create({
  data: {
    slug: "for-your-information",
    description: `Associations are recently seen as the forth model of society (beside the Community, the Market, and the State).
The German Federation of Industries has the knowledge, as well as the structures, procedures, and human capacities which make it a good example of a how mutual complementarities between the four models can be accomplished.`,
    category: {
      connect: {
        slug: "page"
      }
    },
    locale_post: {
      create: [
        {
          title: "FYI",
          excerpt: `Associations are recently seen as the forth model of society (beside the Community, the Market, and the State).
The German Federation of Industries has the knowledge, as well as the structures, procedures, and human capacities which make it a good example of a how mutual complementarities between the four models can be accomplished`,
          content: "[resourses]",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "لمعلوماتك",
          excerpt: `يقرّ الباحثون في علوم الاجتماع والسياسة حالياً بأن الجمعيات هي القطب الرابع في النظام الاجتماعي (إلى جانب: المجتمع، السوق، والدولة).
إن المعرفة المتوفرة في اتحاد الصناعات الألماني ومقوماتها من حيث الهيكلية والآليات والقدرات البشرية تمكننا من اعتبار الاتحاد مثالاً جيداً للدور الفريد الذي توفره الجمعيات لتتكامل مع النظام الاجتماعي في نموذجه الرباعي.`,
          content: "[resourses]",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

result = await prismaClient.post.create({
  data: {
    slug: "announcements",
    description: "",
    category: {
      connect: {
        slug: "page"
      }
    },
    locale_post: {
      create: [
        {
          title: "Announcements",
          excerpt: "",
          content: "[annoucements]",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "مستجدات",
          excerpt: "",
          content: "[annoucements]",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

result = await prismaClient.post.create({
  data: {
    slug: "media",
    description: "",
    category: {
      connect: {
        slug: "page"
      }
    },
    locale_post: {
      create: [
        {
          title: "media",
          excerpt: "",
          content: "[gallery]",
          locale: {
            connect: {
              name: "en-US"
            }
          }
        },
        {
          title: "ميديا",
          excerpt: "",
          content: "[gallery]",
          locale: {
            connect: {
              name: "ar-SY"
            }
          }
        }
      ]
    },
    user_post_created_byTouser: {
      connect: {
        user_login: "admin"
      }
    },
    type: {
      connect: {
        name: "normal"
      }
    }
  }
});
console.log(result);

// event table
result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-&-general-assembly-meetings',
    description: 'MEETINGS ARE POSTPONED',
    button_link: 'arabengineeringindustries.org/view/Anouncements/viewAnnounceDetails.php?id=30',
    locale_post: {
      create: [
        {
          title: 'AFEI BOD & General Assembly meetings',
          excerpt: 'MEETINGS ARE POSTPONED',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماعات مجلس الإدارة والجمعية العمومية',
          excerpt: 'تم تأجيل الاجتماعات',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2012-06-06')} },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'arab-iron-and-steel-union-meeting',
    description: 'AFEI as an observer to the AISU meeting of the BOD',
    button_link: '',
    locale_post: {
      create: [
        {
          title: 'Arab Iron and Steel Union meeting',
          excerpt: 'AFEI as an observer to the AISU meeting of the BOD',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب',
          excerpt: 'يشارك ممثل الاتحاد العربي للصناعات الهندسية كعضو مراقب في الاجتماع',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2012-05-15')} },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'arab-turkish-industrial-cooperation-conf.',
    description: 'AIDMO organizes the conference in Libya on 7-8/5/2012.',
    button_link: '',
    locale_post: {
      create: [
        {
          title: 'Arab-Turkish Industrial Cooperation Conf.',
          excerpt: 'AIDMO organizes the conference in Libya on 7-8/5/2012.',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مؤتمر التعاون الصناعي العربي التركي',
          excerpt: 'تعقد المنظمة العربية للتنمية الصناعية والتعدين المؤتمر في طرابلس/ليبيا خلال الفترة 7-8 / 5 / 2012',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2012-05-07')} },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'caeu-meeting-#94',
    description: 'The Council of Arab Economic Unity is holding its meeting #94 at Marriott hotel in Cairo, and organizing a conference "The economic impact of Arab spring on the stock markets" in cooperation with the Arab Federation of Financial Analysts.',
    button_link: '',
    locale_post: {
      create: [
        {
          title: 'CAEU meeting #94',
          excerpt: 'The Council of Arab Economic Unity is holding its meeting #94 at Marriott hotel in Cairo, and organizing a conference "The economic impact of Arab spring on the stock markets" in cooperation with the Arab Federation of Financial Analysts.',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس الوحدة الاقتصادية العربية رقم 94',
          excerpt: 'يعقد مجلس الوحدة الاقتصادية العربية الاجتماع الوزاري للدورة العادية #94 في فندق ماريوت بالقاهرة. كما ينظم بالتعاون مع الاتحاد العربي للمحللين الماليين مؤتمر "الأثر الاقتصادي لثورات الربيع العربي على أسواق المال".',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2012-06-07')} },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'istanbul-chamber-of-commerce-delegation',
    description: 'A meeting amongst a delegation of businessmen in Turkey with interested Egyptian businessmen at Hilton Hotel in Cairo',
    button_link: 'http://www.face2face-event.com',
    locale_post: {
      create: [
        {
          title: 'Istanbul Chamber of Commerce Delegation',
          excerpt: 'A meeting amongst a delegation of businessmen in Turkey with interested Egyptian businessmen at Hilton Hotel in Cairo',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'وفد غرفة تجارة اسطنبول',
          excerpt: 'لقاء وفد من رجال الأعمال في تركيا مع رجال الأعمال المصريين الراغبين بالتعاون مع تركيا في فندق هلتون رمسيس بالقاهرة',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2012-08-27'), end_on: new Date('2012-08-27') } },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'strategic-management-for-total-quality-workshop',
    description: 'A training workshop in Istanbul on 23-27/9/2012 organized by the Arab House for Administrative Development (AHAD)',
    button_link: 'http://www.arabhous.org/werash_details.php?program=133&arch=yes',
    locale_post: {
      create: [
        {
          title: 'Strategic Management for Total Quality Workshop',
          excerpt: 'A training workshop in Istanbul on 23-27/9/2012 organized by the Arab House for Administrative Development (AHAD)',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ورشة عمل الإدارة الاستراتيجية للجودة الشاملة',
          excerpt: 'ورشة عمل تدريبية في اسطنبول خلال الفترة 23-27/9/2012 تنظمها الدار العربية للتنمية الإدارية',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2012-09-23')} },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '1st-arab-forum-on-strategic-planning-for-the-development-of-organizational-performance',
    description: 'Arab House for Administrative Development organizes the forum in Sharm Elsheikh on 16-20/9/2012',
    button_link: 'http://www.arabhous.org/conference_details.php?werash=11&arch=yes',
    locale_post: {
      create: [
        {
          title: '1st Arab Forum on: Strategic Planning for the development of organizational performance',
          excerpt: 'Arab House for Administrative Development organizes the forum in Sharm Elsheikh on 16-20/9/2012',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الملتقى العربي الأول حول التخطيط الاستراتيجي لتطوير أداء المؤسسات',
          excerpt: 'تنظم الدار العربية للتنمية الإدارية الملتقى في شرم الشيخ خلال الفترة 16-20/9/2012',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2012-09-16'), end_on: new Date('2012-09-16') } },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: "int'l-exhibition-for-industries-and-production-supplement",
    description: 'The exhibition is organized in Tripoli, Libya on 1-4/10/2012 under the patronage of the Ministry of Industry in Libya',
    button_link: 'http://libyaindustries.com/en/',
    locale_post: {
      create: [
        {
          title: "Int'l Exhibition for Industries and Production Supplement",
          excerpt: 'The exhibition is organized in Tripoli, Libya on 1-4/10/2012 under the patronage of the Ministry of Industry in Libya',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'المعرض الدولي للصناعات ومستلزمات الإنتاج',
          excerpt: 'يقام المعرض في طرابلس، ليبيا خلال الفترة 1-4/10/2012 تحت رعاية وزارة الصناعة الليبية',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2012-10-01'), end_on: new Date('2012-10-01') } },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'annual-meeting-of-the-arab-sectoral-federations-no-6',
    description: 'The meeting presented studies and proposals that were submitted from the federations in the field of quality, maritime transportation, and technology innovation. The General Secretarial of the Arab Council for Economic Unity also presented a unified bylaw for the Arab sectoral federations',
    button_link: '',
    locale_post: {
      create: [
        {
          title: 'Annual meeting of the Arab Sectoral Federations no. 42',
          excerpt: 'The meeting presented studies and proposals that were submitted from the federations in the field of quality, maritime transportation, and technology innovation. The General Secretarial of the Arab Council for Economic Unity also presented a unified bylaw for the Arab sectoral federations',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الاجتماع الدوري /42/ للاتحادات العربية النوعية المتخصصة',
          excerpt: 'استعرض الاجتماع الدوري الثاني والأربعين للاتحادات العربية النوعية التخصصية الذي عقد بحضور رؤساء وأمناء الاتحادات العربية النوعية التخصصية ورجال وسيدات الأعمال دراسات ومقترحات واردة من الاتحادات في مجال الجودة والربط البحري والإبداع التكنولوجي كما قدمت الأمانة العامة للمجلس مذكرة حول النظام الأساسي للاتحادات العربية النوعية المتخصصة',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2014-11-11')} },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-ninth-meeting-first',
    description: 'AFEI BOD is conducting its meeting in Khartoum on 6 Dec. 2015 to get updates on the situation of different member companies and agree on the date and agenda for the General Assembly meeting.',
    button_link: '',
    locale_post: {
      create: [
        {
          title: 'AFEI BOD Meeting',
          excerpt: 'AFEI BOD is conducting its meeting in Khartoum on 6 Dec. 2015 to get updates on the situation of different member companies and agree on the date and agenda for the General Assembly meeting.',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد',
          excerpt: 'يعقد مجلس إدارة الاتحاد العربي للصناعات الهندسية اجتماعه في الخرطوم بتاريخ 6 كانون الأول/ديسمبر 2015 للاطلاع على أحوال الشركات الأعضاء والاتفاق على موعد وأجندة اجتماع هيأته العامة.',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2015-12-06'), end_on: new Date('2015-12-06') } },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'sectoral-arab-federations-meeting',
    description: 'The meeting is taking place in Khartoum on 7 Dec. 2015',
    button_link: '',
    locale_post: {
      create: [
        {
          title: 'Sectoral Arab Federations meeting',
          excerpt: 'The meeting is taking place in Khartoum on 7 Dec. 2015',
          button_text: 'read more',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع الاتحادات العربية النوعية المتخصصة',
          excerpt: 'يعقد الاجتماع في الخرطوم بتاريخ 7 كانون الأول/ديسمبر 2015',
          button_text: 'قراءة المزيد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    event: { create: { started_on: new Date('2015-12-07'), end_on: new Date('2015-12-07') } },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'event' } }
  }
}
);
console.log(result);

// activities table
result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-meeting-1',
    description: 'The BOD discussed amendments to the AFEI bylaw as well as a proposal for developing the financing of AFEI, and agreed to conduct the general assembly meeting on 11/5/2008.',
    locale_post: {
      create: [
        {
          title: 'AFEI BOD Meeting',
          excerpt: 'The BOD discussed amendments to the AFEI bylaw as well as a proposal for developing the financing of AFEI, and agreed to conduct the general assembly meeting on 11/5/2008.',
          content: 'AFEI BOD meeting #51 was conducted in Kuwait in response to the kind invitation from Mr.Mhd. Ali Naqi/board member.\n' +
            'Attendees approved the proposed amendments of some articles of the AFEI bylaw and decided to present them to the general assembly on 11/5/2008.\n' +
            'The BOD members discussed the memo forwarded from Member of the Board/Mr.Hamid Zayani concerning the development of the financing of AFEI, and the importance of the AFEI website and conveyed their thanks to all who participated in publishing it.\n' +
            'Attendees discussed the issue of involving the young generation &ndash;who will lead the federation in the future- in the activities and meetings.\n' +
            'The BOD awarded AFEI membership to Zarkaa Engineering Co, and Jiad Co. for Trucks (both Sudanese) as of 2008.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
          excerpt: 'تداول المجلس بخصوص التعديلات المقترحة لبعض مواد النظام الأساسي ومقترح لتنمية الموارد المالية للاتحاد، واتفق الحضور على عقد اجتماع الجمعية العمومية للاتحاد بتاريخ 11/5/2008.',
          content: 'عقد الاتحاد العربي للصناعات الهندسية اجتماع مجلس إدارته للدورة /51/ في دولة الكويت تلبية للدعوة الكريمة الموجهة من الأستاذ محمد علي النقي عضو مجلس الإدارة.\n' +
            'وافق المجتمعون على التعديلات المقترحة لبعض مواد النظام الأساسي للاتحاد وأقروا عرضها على الجمعية العمومية بتاريخ 11/5/2008.\n' +
            'ناقش أعضاء المجلس مذكرة السيد حامد راشد الزياني/عضو مجلس الإدارة حول تنمية الموارد المالية الاتحاد، وأهمية الموقع الإلكتروني على الإنترنت حيث قدموا الشكر لكل من ساهم في إنشائه.\n' +
            'كما تناول الحضور مسألة إدخال جيل الشباب إلى الاتحاد لأنه هو من سيقود الاتحاد في المستقبل.\n' +
            'وافق مجلس الإدارة على انضمام كل من شركة الزرقاء الهندسية &ndash; السودان وشركة جياد للشاحنات المحدودة اعتباراً من عام 2008.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2008-01-16'),
        end_on: new Date('2008-01-18'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-meeting-2',
    description: "The BOD held its meeting in the presence of young industrialists' representatives and the director of Federations Directorate at CAEU. The BOD met HE Minister of Industry in Lebanon and representatives of the Association of Lebanese Industrialists.",
    locale_post: {
      create: [
        {
          title: 'AFEI BOD meeting',
          excerpt: "The BOD held its meeting in the presence of young industrialists' representatives and the director of Federations Directorate at CAEU. The BOD met HE Minister of Industry in Lebanon and representatives of the Association of Lebanese Industrialists.",
          content: 'AFEI BOD held its meeting in Beirut on 21-22/1/2010 where the report on activities was reviewed and the minutes of the previous two meetings were approved. Members considered the suggestion to amend the bylaw, and decided to assign a committee headed by Mr.Mohamad Daaboul the task of assuring that the AFEI bylaw is in compliance with the bylaw of CAEU.\n' +
            "Mr.Hassan Daaboul -secretary of the Young Industrialists Committee at AFEI- talked about the impressions of his peers' involvement in activities, their wishful thinking for the next years, and their plan to support AFEI and achieve their vision.\n" +
            'On the sidelines, the BOD met representatives of ALI, HE Minister of Industry in Lebanon, and listened to a presentation on using the Arab Standard Classification of Occupations.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
          excerpt: 'عقد مجلس الإدارة اجتماعه بمشاركة الشباب الصناعي ومدير إدارة الاتحادات في الأمانة العامة لمجلس الوحدة الاقتصادية العربية. كما التقى معالي وزير الصناعة اللبناني، وممثلي جمعية الصناعيين اللبنانيين. ',
          content: 'عقد مجلس إدارة الاتحاد العربي للصناعات الهندسية اجتماعه في بيروت خلال الفترة 21-22/1/2010 حيث استعرض تقرير النشاطات وصادق على محضري الاجتماعين السابقين كما تداول بخصوص اقتراح تعديل النظام الأساسي وقرر تشكيل لجنة لمراجعة توافق النظام الأساسي مع اللائحة الداخلية لمجلس الوحدة الاقتصادية برئاسة الأستاذ محمد دعبول.\n' +
            'في نهاية الاجتماع تحدث الأستاذ حسان دعبول مقرر لجنة الشباب الصناعي في الاتحاد عن وجهة نظر الشباب فيما لمسوه من انخراطهم بعمل الاتحاد، وتمنياتهم في&nbsp; المرحلة القادمة، و ما ينوون فعله دعماً لعمل الإتحاد وتحقيقاً لرؤية جيلهم.\n' +
            'وعلى هامش الاجتماع التقى مجلس الإدارة جمعية الصناعيين اللبنانيين، ومعالي وزير الصناعة اللبناني. كما استمع إلى عرض حول استخدامات التصنيف العربي المعياري للمهن.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-01-21'),
        end_on: new Date('2010-01-22'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/0.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/1.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/2.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/3.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/4.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/5.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/6.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/7.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/8.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/9.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/10.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/11.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/12.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/13.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/14.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/15.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/16.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/17.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/18.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/19.jpg',
          img_alt: 'BOD Lebanon 2010',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة - لبنان 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-meeting-3',
    description: "The BOD recommended to document activities of members and to make them available through the general secretariat, and decided to circulate Mr.Sellami's paper on modern irrigation methods and making use of solar energy.",
    locale_post: {
      create: [
        {
          title: 'AFEI BOD meeting',
          excerpt: "The BOD recommended to document activities of members and to make them available through the general secretariat, and decided to circulate Mr.Sellami's paper on modern irrigation methods and making use of solar energy.",
          content: '&nbsp;The BOD meeting was chaired by Eng. Abdulhadi Abdulmonem/ Chairman of the board. The report on activities and the work plan were reviewed, and the BOD recommended to document activities of members each in his country and to make them available through the general secretariat. Having considered the paper of Mr.Sellami on modern irrigation methods and making use of solar energy, it was decided to circulate the paper to members and collect practical proposals of those who are interested.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
          excerpt: 'أوصى مجلس الإدارة بضرورة توثيق أنشطة الأعضاء وتعميم الاستفادة من هذه الأنشطة من خلال الأمانة العامة، وقرر تعميم ورقة الأستاذ منصف السلامي حول أساليب الري الحديثة والاستفادة من الطاقة الشمسية. ',
          content: 'عقد مجلس الإدارة اجتماعه برئاسة المهندس عبد الهادي عبد المنعم رئيس مجلس الإدارة حيث صادق على محضر الاجتماع السابق واستعرض تقرير النشاطات وخطة العمل وأوصى بضرورة توثيق أنشطة الأعضاء كل في بلده وتعميم الاستفادة من هذه الأنشطة من خلال الأمانة العامة. وبعد الاطلاع على ورقة مقترحة من الأستاذ منصف السلامي عن أساليب الري الحديثة والاستفادة من الطاقة الشمسية تقرر تعميم الورقة على الأعضاء وتجميع المقترحات العملية لمن يهمه الأمر منهم.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-05-17'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-meeting-4',
    description: 'Eng. Said Alhafez has been chosen as a successor to the late Eng.Abdulhadi Abdulmonem in chairing the BOD until a new board is elected mid 2012. A working group is assigned to formulate a proposal for the strategic vision of AFEI and the methodology of joint work. ',
    locale_post: {
      create: [
        {
          title: 'AFEI BOD meeting',
          excerpt: 'Eng. Said Alhafez has been chosen as a successor to the late Eng.Abdulhadi Abdulmonem in chairing the BOD until a new board is elected mid 2012. A working group is assigned to formulate a proposal for the strategic vision of AFEI and the methodology of joint work. ',
          content: 'The meeting - held under the chairmanship of Eng.Said Alhafez/ Vice Chairman of the Board with the participation of some members of the Young Industrialists Committee- started with a memorial words to the late Chairman Egn.Abdulhadi Abdulmonem.\n' +
            'The attendees agreed unanimously to delegate Eng. Alhafez with chairmanship of the Board temporarily until a new board is elected mid-year 2012.\n' +
            "The priorities of work topics and the mechanism of coordination and cooperation between members through a shared vision was discussed, and it was decided to form a working group headed by Mr. Hamid Al Zayani/ Vice Chairman of the Board to draft a proposed vision for the federation's role and methodology of working together and send its proposal within three months to the BOD which will deliberate and then present it to the general assembly.\n" +
            'At the end of the meeting, it was decided to hold meetings of the general assembly and the BOD during the first week of June 2012, in Beirut/Lebanon.\n' +
            'Related links:\n' +
            'Strategic Vision Formulation Working Group\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
          excerpt: 'تم اختيار المهندس سعيد الحافظ خلفاً للمرحوم م.عبد الهادي عبد المنعم رئيساً لمجلس الإدارة لحين انتخاب المجلس الجديد في منتصف العام، وتقرر تشكيل مجموعة عمل لصياغة مقترح رؤية استراتيجية لدور الاتحاد ومنهجية العمل المشترك.',
          content: 'استهل الاجتماع الذي عقد برئاسة المهندس سعيد الحافظ/ نائب رئيس مجلس الإدارة، وبمشاركة بعض أعضاء لجنة الشباب الصناعي بكلمة تأبين للمرحوم.\n' +
            'أجمع الحضور على تكليف المهندس سعيد الحافظ برئاسة مجلس الإدارة مؤقتاً لحين انتخاب المجلس الجديد في اجتماع الجمعية العمومية منتصف العام 2012.\n' +
            'تمت مناقشة أولويات مواضيع العمل وآلية التنسيق والتعاون بين أعضاء الاتحاد من خلال رؤية مشتركة وتقرر تشكيل مجموعة عمل برئاسة الأستاذ حامد الزياني/نائب رئيس مجلس الإدارة لصياغة مقترح رؤية لدور الاتحاد ومنهجية العمل المشترك وإرسالها خلال ثلاثة أشهر إلى مجلس الإدارة للتداول ومن ثم عرضها على الجمعية العمومية.\n' +
            'في نهاية الاجتماع تقرر عقد اجتماعات الجمعية العمومية ومجلس الإدارة خلال الأسبوع الأول من شهر حزيران (يونيه) 2012، في بيروت/لبنان.\n' +
            'روابط ذات صلة:\n' +
            'مجموعة عمل صياغة الرؤية الاستراتيجية\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-12-08'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-12-08_bod_lb/0.jpg',
          img_alt: 'BOD Lebanon 2011',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجلس الإدارة - لبنان 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-12-08_bod_lb/1.jpg',
          img_alt: 'BOD Lebanon 2011',
          locale_post_image: {
            create: [
              {
                title: 'BOD Lebanon 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجلس الإدارة - لبنان 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-the-arab-young-industrialists',
    description: 'The second row in the member companies met to create links with the founders and amongst themselves, and a Committee for Young Industrialists was formed under the AFEI umbrella.',
    locale_post: {
      create: [
        {
          title: 'Meeting of the Arab young industrialists',
          excerpt: 'The second row in the member companies met to create links with the founders and amongst themselves, and a Committee for Young Industrialists was formed under the AFEI umbrella.',
          content: 'Participants were the second row in the member companies (future leaders). The goal was to create links for young industrialists with the AFEI founders in preparation for the responsibilities of developing the federation according to their ideas and the context. The outcome of the meeting was the formation of "a standing Committee for Young Industrialists" which should prepare its suggestions for the processes of working with and linking to the Federation.\n' +
            'Related links:\n' +
            'Young Industrialists Committee\n' +
            'Downloadable files:\n' +
            'Agenda, News articles',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'لقاء الشباب الصناعيين العرب',
          excerpt: 'جيل الصف الثاني في الشركات الأعضاء يلتقي لخلق صلات مع المؤسسين وفيما بينهم، وتشكيل لجنة للشباب الصناعيين تحت مظلة الاتحاد.',
          content: 'المشاركون في اللقاء هم جيل الصف الثاني في الشركات الأعضاء والذين سيشغلون المناصب القيادية في المستقبل. كانت الغاية هي خلق صلات للشباب مع الجيل المؤسس في الاتحاد استعداداً لتحملهم مسؤوليات تطوير الاتحاد بما يتلاءم مع أفكارهم ومستجدات عصرهم. بنتيجة اللقاء، تم تشكيل "لجنة دائمة للشباب الصناعيين" على أن تقوم اللجنة بإعداد مقترحاتها بشأن آليات العمل والارتباط بالاتحاد.\n' +
            'روابط ذات صلة:\n' +
            'لجنة الشباب الصناعي\n' +
            'ملفات للتنزيل:\n' +
            'برنامج اللقاء، مقالات الصحف',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-10-25'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'young-industrialists-committee-meeting-1',
    description: 'After taking a tour in Daaboul Industrial Group premises, the young industrialists at AFEI formulated their common objectives, and listened to a presentation about the private sector support programs implemented by SEBC and funded by the EU. ',
    locale_post: {
      create: [
        {
          title: 'Young Industrialists Committee meeting',
          excerpt: 'After taking a tour in Daaboul Industrial Group premises, the young industrialists at AFEI formulated their common objectives, and listened to a presentation about the private sector support programs implemented by SEBC and funded by the EU. ',
          content: 'The Young Industrialists committee held its first meeting at Daaboul Industrial Group where it was agreed that the educational goal is "how to benefit from the accumulated experience and incorporate new ideas" which can be achieved through field visits to member companies in the host country on the sidelines of the meetings, and inviting an expert/member to present a useful real case. It was also agreed that the marketing goal will be achieved through enriching the website and continuous updating of content.\n' +
            'Attendees discussed the future vision of AFEI (as a common factor for all activities undertaken by the federation), namely, the willingness to work for the common good. They asserted the need to emphasize that the prerequisite for joining the federation is the will to contribute, give, and cooperate in working for the common good.\n' +
            'To establish good practice in the committee meetings, an invitation was sent to the project manager of SMEs Support Program at SEBC to join the meeting where he gave a presentation about the private sector support programs implemented by the centre and funded by the EU.\n' +
            'Related links:\n' +
            'Young Industrialists Committee\n' +
            'Downloadable files:\n' +
            'Agenda, Presentation of SEBC/SSP SMEs Support',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع لجنة الشباب الصناعي',
          excerpt: 'بعد جولة في مجموعة دعبول الصناعية، الشباب الصناعي في الاتحاد يصوغون أهدافهم المشتركة ويستمعون إلى عرض تقديمي حول برامج دعم القطاع الخاص التي ينفذها مركز الأعمال والمؤسسات السورية بتمويل من الاتحاد الأوربي.',
          content: 'عقدت لجنة الشباب الصناعي اجتماعها الأول في مجموعة دعبول الصناعية، حيث تم الاتفاق على الهدف التعليمي "الاستفادة من الخبرات المتراكمة ودمج الأفكار الجديدة" وكيفية تحقيقه من خلال زيارات ميدانية إلى الشركات الأعضاء في البلد المضيف على هامش الاجتماعات ودعوة أحد الخبراء/الأعضاء لتقديم عرض حول تجربة مفيدة. كما تم الاتفاق على تحقيق الهدف التسويقي من خلال إثراء موقع الاتحاد على الإنترنت وتحقيق مستوى معقول من التحديث المستمر.\n' +
            'تداول الحضور بخصوص الرؤية المستقبلية للاتحاد وهي الرغبة بالعمل للصالح العام كقاسم مشترك لجميع الأنشطة التي يقوم بها الاتحاد. وأكدوا على&nbsp; ضرورة إبراز أن الانضمام للاتحاد مشروط بالمساهمة والعطاء والتعاون في العمل للصالح العام.\n' +
            'تمت دعوة مدير مشروع دعم المنشآت الصغيرة والمتوسطة في مركز الأعمال والمؤسسات السوري إلى الاجتماع لإرساء ممارسة جيدة في اجتماعات اللجنة حيث قدم عرضاً حول برامج دعم القطاع الخاص التي ينفذها المركز بتمويل من الاتحاد الأوربي.\n' +
            'روابط ذات صلة:\n' +
            'لجنة الشباب الصناعي\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع، العرض التقديمي حول برنامج دعم المؤسسات الصغيرة والمتوسطة الذي ينفذه مركز الأعمال والمؤسسات السورية',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-03-06'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-03-06_yic_meeting_sy/0.jpg',
          img_alt: 'Young Industrialists ',
          locale_post_image: {
            create: [
              {
                title: 'Young Industrialists ',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'لجنة الشباب الصناعي ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-meeting-5',
    description: 'The members discussed a proposal for updating the website, support from Arab Cab to AFEI, and issues that will be presented to the next assembly meeting.',
    locale_post: {
      create: [
        {
          title: 'AFEI BOD meeting',
          excerpt: 'The members discussed a proposal for updating the website, support from Arab Cab to AFEI, and issues that will be presented to the next assembly meeting.',
          content: 'Mr.Nabil Hassanein -Chairman of the board- chaired the meeting which tackled the proposal for updating the AFEI website, the support from Arab Cab to AFEI, and internal issues that will be presented to the general assembly meeting.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
          excerpt: 'تدارس أعضاء المجلس بخصوص مقترح تحديث موقع الإنترنت والدعم المقدم من مؤتمر تجمع الكابلات للاتحاد، والمسائل المزمع عرضها في اجتماع الجمعية العمومية القادم.',
          content: 'ترأس الأستاذ نبيل حسنين/رئيس مجلس الإدارة/ الاجتماع الذي تطرق إلى مقترح تحديث موقع الاتحاد على الإنترنت، والدعم المقدم من مؤتمر تجمع الكابلات للاتحاد إضافة إلى الشؤون الداخلية تحضيراً لعرضها على اجتماع الجمعية العمومية القادم.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2008-05-10'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-meeting-6',
    description: 'The AFEI Board of Directors for the term 2005-2009 conducted its last meeting prior to the election of the new members for the next term. The young industrialists participated in the meeting, and Dr. A. H. Yafi was re-assigned as the Secretary General for a new period according to the bylaw.',
    locale_post: {
      create: [
        {
          title: 'AFEI BOD meeting',
          excerpt: 'The AFEI Board of Directors for the term 2005-2009 conducted its last meeting prior to the election of the new members for the next term. The young industrialists participated in the meeting, and Dr. A. H. Yafi was re-assigned as the Secretary General for a new period according to the bylaw.',
          content: 'The AFEI Board of Directors for the term 2005-2009 conducted its last meeting prior to the election of the new members for the next term. As approved, the 2nd generation of young industrialists participated in the meeting which was chaired by Mr.Naqi due to the health condition of the BOD Chairman. The members decided to re-assign Dr. A. H. Yafi as the AFEI Secretary General for a new period according to the bylaw.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
          excerpt: 'عقد مجلس إدارة الاتحاد للدورة 2005-2009 اجتماعه الأخير قبيل انتخاب المجلس الجديد للفترة التالية وبحضور الشباب الصناعي حيث تم إعادة تعيين د.أحمد هيثم اليافي أميناً عاماً للاتحاد لفترة جديدة وفقاً للنظام الأساسي.',
          content: 'عقد مجلس إدارة الاتحاد للدورة 2005-2009 اجتماعه الأخير قبيل انتخاب المجلس الجديد للفترة التالية. ووفقاً لما تم إقراره سابقاً فقد شارك الجيل الثاني من الشباب الصناعيين في هذا الاجتماع الذي عقد برئاسة الأستاذ محمد النقي نظراً للظروف الصحية التي حالت دون حضور رئيس مجلس الإدارة. قرر الأعضاء إعادة تعيين د.أحمد هيثم اليافي أميناً عاماً للاتحاد لفترة جديدة وفقاً للنظام الأساسي.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-06-07'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/0.jpg',
          img_alt: 'BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجلس الإدارة - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/1.jpg',
          img_alt: 'BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجلس الإدارة - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/2.jpg',
          img_alt: 'BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجلس الإدارة - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/3.jpg',
          img_alt: 'BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجلس الإدارة - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/4.jpg',
          img_alt: 'BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجلس الإدارة - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-bod-meeting-7',
    description: 'AFEI General Assembly elected the new BOD members, and Eng. Abdulhadi Abdulmonem became the Chairman.',
    locale_post: {
      create: [
        {
          title: 'AFEI BOD meeting',
          excerpt: 'AFEI General Assembly elected the new BOD members, and Eng. Abdulhadi Abdulmonem became the Chairman.',
          content: 'Following to the general assembly meeting and the election of new members of the BOD, the new BOD convened and agreed unanimously on the choice of Mr. Abdulhadi Abdulmonem as a Chairman for the period 2009-2012. The members also agreed on electing:\n' +
            '-&nbsp;&nbsp;&nbsp; Mr.Hamid Zayani vice-chairman for the Gulf region\n' +
            '-&nbsp;&nbsp;&nbsp; Mr.Monsef Sellami vice-chirman for the Maghreb region\n' +
            '-&nbsp;&nbsp;&nbsp; Mr.Said Alhafez vice-chairman for the Mashreq region\n' +
            'It was decided to conduct the next meeting of the BOD in Beirut on December 2009.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
          excerpt: 'الجمعية العمومية تنتخب أعضاء مجلس الإدارة، واختيار المهندس عبد الهادي عبد المنعم رئيساً. ',
          content: 'بعد انتهاء أعمال الجمعية العمومية العادية وانتخاب أعضاء مجلس إدارة الاتحاد اجتمع السادة أعضاء مجلس الإدارة المنتخبين وفتح باب الترشيح لرئاسة مجلس إدارة الاتحاد، وبعد المداولات قرر الأعضاء بالإجماع&nbsp; انتخاب الأستاذ عبد الهادي عبد المنعم لرئاسة المجلس خلال الفترة 2009-2012، كما اتفق الأعضاء فيما بينهم بالتشاور وتقرر بالإجماع:\n' +
            '-&nbsp;&nbsp;&nbsp; انتخاب الأستاذ حامد راشد الزياني نائباً للرئيس عن منطقة الخليج بالتزكية.\n' +
            '-&nbsp;&nbsp;&nbsp; انتخاب المهندس منصف السلامي نائباً للرئيس عن منطقة المغرب العربي بالتزكية.\n' +
            '-&nbsp;&nbsp;&nbsp; انتخاب السيد المهندس محمد سعيد الحافظ نائباً للرئيس عن منطقة المشرق العربي بالتزكية.\n' +
            'وتقرر أن يكون اجتماع مجلس الإدارة القادم في بيروت خلال شهر كانون الأول/ديسمبر 2009.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-06-08'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/0.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/1.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/2.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/3.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/4.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/5.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/6.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/7.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/8.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/9.jpg',
          img_alt: 'New BOD Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'New BOD Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: ' مجلس الإدارة الجديد - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'young-industrialists-committee-meeting-2',
    description: 'After a tour in "Liban Câble" premises, the young industrialists discussed their accomplishments in building a database for the Arab engineering industries and updating AFEI website, then listened to a presentation about the role of private sector in the technical cooperation projects. ',
    locale_post: {
      create: [
        {
          title: 'Young Industrialists Committee meeting',
          excerpt: 'After a tour in "Liban Câble" premises, the young industrialists discussed their accomplishments in building a database for the Arab engineering industries and updating AFEI website, then listened to a presentation about the role of private sector in the technical cooperation projects. ',
          content: 'After a tour in "Liban Cable" premises, the Young Industrialists Committee held its second meeting where it reviewed what was done about updating the AFEI website, and agreed to continue working on building a database of Arab companies registered in the engineering industries sector.\n' +
            'Following up the good practice of inviting experts to participate in Committee meetings, The gtz regional projects manager joined the meeting where she gave a presentation about the gtz and its projects in the region focusing on the regional aspect in projects and on the role of the private sector in them.\n' +
            'The attendees agreed to hold the next meeting of the Committee on the sideline of the regional conference "Social image of VET" that gtz regional project is organizing in Lebanon on October this year.\n' +
            'Related links:\n' +
            'Young Industrialists Committee\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع لجنة الشباب الصناعي',
          excerpt: 'بعد جولة في شركة كابلات لبنان، الشباب الصناعي في الاتحاد يناقشون إنجازاتهم بخصوص بناء قاعدة بيانات للصناعات الهندسية العربية وتحديث موقع الاتحاد على الانترنت، ويستمعون إلى عرض تقديمي حول دور القطاع الخاص في مشاريع التعاون الفني.',
          content: 'بعد جولة في شركة كابلات لبنان، عقدت لجنة الشباب الصناعي اجتماعها الثاني حيث تم استعراض ماتم إنجازه بخصوص تحديث موقع الاتحاد على الإنترنت، والاتفاق على متابعة العمل على بناء قاعدة بيانات للشركات العربية المسجلة في قطاع الصناعات الهندسية.\n' +
            'شاركت مديرة المشاريع الإقليمية للوكالة الألمانية للتعاون الفني gtz في الاجتماع (متابعة لقرار الشباب الصناعي بالاستفادة من الخبراء) حيث قدمت عرضاً حول آلية عمل الوكالة الألمانية للتعاون الفني وأهم المشاريع في المنطقة وركزت على الجانب الإقليمي في المشاريع وعلى دور القطاع الخاص فيها.\n' +
            'اتفق الحضور على عقد الاجتماع القادم للجنة شباب الصناعيين على هامش المؤتمر الإقليمي حول "النظرة الاجتماعية للتعليم والتدريب المهني والتقني" الذي يخطط مشروع GTZ الإقليمي لعقده في لبنان في تشرين الأول/أكتوبر القادم.\n' +
            'روابط ذات صلة:\n' +
            'لجنة الشباب الصناعي\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-07-02'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-the-afei-strategic-vision-formulation-working-group',
    description: 'A proposal for the vision was developed through electronic communications and smaller meetings in the working group. Then, the meeting was held to agree on the final formulation of the vision and send results to the BOD.\n' +
      'In a context of free expression of opinions, the focus of the meeting was to define the vision and mission of AFEI as a base for attracting distinguished companies to become members.',
    locale_post: {
      create: [
        {
          title: 'Meeting of the AFEI strategic vision formulation working group',
          excerpt: 'A proposal for the vision was developed through electronic communications and smaller meetings in the working group. Then, the meeting was held to agree on the final formulation of the vision and send results to the BOD.\n' +
            'In a context of free expression of opinions, the focus of the meeting was to define the vision and mission of AFEI as a base for attracting distinguished companies to become members.',
          content: 'A proposal for the vision was developed through electronic communications and smaller meetings in the working group. Then, the meeting was held to agree on the final formulation of the vision and send results to the BOD.\n' +
            'In a context of free expression of opinions, the focus of the meeting was to define the vision and mission of AFEI as a base for attracting distinguished companies to become members.\n' +
            'The presentation showed that the starting point in formulating the vision is that AFEI is an organization that represents companies and provides a structure/mechanism for lobbying in order to enable them to have an impact on policies, legislations, systems, standards and programs that tackles the business environment, and to participate in planning, implementing, and monitoring economic development plans in the respective countries.\n' +
            'According to the attendees, the starting point of the vision is that AFEI is one of the organizations that represent interests of companies; but AFEI will be among the effective ones in order to have a voice and impact in economic &amp; social development.\n' +
            'Finally, some ideas on how to interpret the strategic vision (organizational structure) were discussed, and the necessary activities after approving the vision were identified.\n' +
            'Related links:\n' +
            'Strategic Vision Formulation Working Group',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد ',
          excerpt: 'تم تطوير مقترح للرؤية عبر المراسلات الإلكترونية واللقاءات المصغرة في مجموعة العمل ثم عقد الاجتماع للاتفاق على الصياغة النهائية للرؤية ورفع النتائح إلى مجلس الإدارة.\n' +
            'ساد جو من حرية الرأي في النقاش بين الحضور جميعاً، وتم التركيز على تعريف الاتحاد في الرؤية والرسالة كحجر أساس لاجتذاب أعضاء متميزين.',
          content: 'تم تطوير مقترح للرؤية عبر المراسلات الإلكترونية واللقاءات المصغرة في مجموعة العمل ثم عقد الاجتماع للاتفاق على الصياغة النهائية للرؤية ورفع النتائح إلى مجلس الإدارة.\n' +
            'ساد جو من حرية الرأي في النقاش بين الحضور جميعاً، وتم التركيز على تعريف الاتحاد في الرؤية والرسالة كحجر أساس لاجتذاب أعضاء متميزين.\n' +
            'وبين العرض التقديمي بأن نقطة البداية في صياغة الرؤية هي أن الاتحاد منظمة تمثل الشركات وتوفر هيكلية/آلية للاتفاق بينهم بحيث يتمكنون من التأثير في السياسات والتشريعات والمنظومات والمعايير والبرامج التي تطال بيئة الأعمال كما يشاركون في وضع وتنفيذ ومراقبة خطط التنمية الاقتصادية في بلدانهم.\n' +
            'وبكلمات الحضور فإن منطلق رؤية الاتحاد هي أن هناك منظمات عديدة تمثل مصالح تجمعات للشركات- والاتحاد أحدها- ولكن الاتحاد سيكون من المنظمات الكفؤة كي يكون صوته مسموعاً وله تأثير في التنمية الاقتصادية والاجتماعية.\n' +
            'انتهى الاجتماع إلى وضع تصورات لكيفية ترجمة الرؤية الاستراتيجية (هيكل تنظيمي) وتحديد الأنشطة اللازم استكمالها بعد الاتفاق على صياغة الرؤية.\n' +
            'روابط ذات صلة:\n' +
            'مجموعة عمل صياغة الرؤية الاستراتيجية',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-03-13'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/0.jpg',
          img_alt: 'AVX Meeting Lebanon 2012',
          locale_post_image: {
            create: [
              {
                title: 'AVX Meeting Lebanon 2012',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/1.jpg',
          img_alt: 'AVX Meeting Lebanon 2012',
          locale_post_image: {
            create: [
              {
                title: 'AVX Meeting Lebanon 2012',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/2.jpg',
          img_alt: 'AVX Meeting Lebanon 2012',
          locale_post_image: {
            create: [
              {
                title: 'AVX Meeting Lebanon 2012',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/3.jpg',
          img_alt: 'AVX Meeting Lebanon 2012',
          locale_post_image: {
            create: [
              {
                title: 'AVX Meeting Lebanon 2012',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/4.jpg',
          img_alt: 'AVX Meeting Lebanon 2012',
          locale_post_image: {
            create: [
              {
                title: 'AVX Meeting Lebanon 2012',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/5.jpg',
          img_alt: 'AVX Meeting Lebanon 2012',
          locale_post_image: {
            create: [
              {
                title: 'AVX Meeting Lebanon 2012',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/6.jpg',
          img_alt: 'AVX Meeting Lebanon 2012',
          locale_post_image: {
            create: [
              {
                title: 'AVX Meeting Lebanon 2012',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'wrap-up-regional-seminar-on-approaches-to-innovation-policy-design-for-smes',
    description: 'The seminar was the final event of the regional project "Promotion of Innovation and Technologies for SMEs in the Near East" funded by the German government and implemented by giz in partnership with the concerned institutions in Egypt, Jordan, and Syria. Discussions recommended using the "step-by-step approach" (i.e. policies with tangible measures), and asserted the need to involve the active players of the business sector in promoting innovation, as well as the need to implement what was agreed to build the experiences (success stories).',
    locale_post: {
      create: [
        {
          title: 'Wrap-up Regional Seminar on "Approaches to Innovation Policy Design for SMEs"',
          excerpt: 'The seminar was the final event of the regional project "Promotion of Innovation and Technologies for SMEs in the Near East" funded by the German government and implemented by giz in partnership with the concerned institutions in Egypt, Jordan, and Syria. Discussions recommended using the "step-by-step approach" (i.e. policies with tangible measures), and asserted the need to involve the active players of the business sector in promoting innovation, as well as the need to implement what was agreed to build the experiences (success stories).',
          content: 'This seminar is the final activity of the project "Promotion of Innovation and Technology for SMEs in the Near East" funded by the German government and implemented by giz in partnership with the concerned institutions in Egypt, Jordan, and Syria. The General Secretary of AFEI participated in various activities of the project as a representative of the private sector.\n' +
            'The project was based on the fact that all three countries are facing a common problem; therefore, working on the regional level is useful to take advantage of the strengths of each country. Discussions showed that the challenge is not in the capacity for inventing and innovating in the region, rather it lies in the step that comes after that because what matters at the end is the success in the market (innovation). Presentations put emphasis on the idea that policies (which are guidelines) are inducing the implementation of measures; thus, tow principles should be taken into account in designing policies: (1) to be implementable, and (2) to promote inter-disciplinary activities.\n' +
            'The outcome of discussions and exchange is the following:-&nbsp;&nbsp;&nbsp; Involving more active players and addressing the issue of communications.-&nbsp;&nbsp;&nbsp; Linking policies with tangible activities (step-by-step approach): start from where we are, and learn-by-doing.-&nbsp;&nbsp;&nbsp; Adopting the system perspective: working on all levels, promote linkages, and define interdependencies.&nbsp;\n' +
            'Related links:\n' +
            'Project description on the GIZ website\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الندوة الإقليمية الختامية حول "مقاربات تصميم سياسة الإبداع للمنشآت الصغيرة والمتوسطة"',
          excerpt: 'اختتمت الندوة نشاطات المشروع الإقليمي "الترويج للإبداع والتقانة في المنشآت الصغيرة والمتوسطة" الممول من الحكومة الألمانية الذي تنفذه الوكالة الألمانية للتعاون الدولي بشراكة مع الجهات المعنية من الدول العربية الثلاثة (مصر- الأردن- سورية). وقد خلصت المناقشات إلى ضرورة إشراك الفاعلين من قطاع الأعمال في الترويج للإبداع، ومن ثم تنفيذ ماتم الاتفاق عليه لبناء خبرة عملية (قصص نجاح) ومعالجة مسألة التواصل؛ ونصحت باستخدام مقاربة خطوة بخطوة أي ربط نشاطات السياسات بتدابير محسوسة.',
          content: 'هذه الندوة هي النشاط الختامي للمشروع الإقليمي الممول من الحكومة الألمانية الذي تنفذه الوكالة الألمانية للتعاون الدولي بالتعاون مع الجهات المعنية من الدول العربية الثلاثة (مصر- الأردن- سورية). شارك الأمين العام للاتحاد كممثل عن القطاع الخاص في أنشطة المشروع المختلفة.\n' +
            'انطلق المشروع من حقيقة أن الدول الثلاثة الشريكة تواجه المشكلة ذاتها، ومن المفيد أن تعمل معاً على مستوى إقليمي لاستغلال نقاط القوة في كل منها. وبينت المناقشات بأن التحدي لا يكمن في قدرة الاختراع والابتكار في المنطقة وإنما في ما يأتي بعد ذلك لأن المهم في النهاية هو النجاح في السوق (وهذا هو الإبداع). كما ركزت العروض على أن رسم السياسات (وهي خطوط إرشادية) يتبعه مرحلة تنفيذ للمبادرات، لذلك يؤخذ بالاعتبار في وضع السياسات (1) إمكانية تنفيذها، (2) تنمية التعاون بين القطاعات.\n' +
            'حصيلة المناقشات وتبادل الخبرات تتلخص بما يلي:-&nbsp;&nbsp;&nbsp; إشراك فاعلين أكثر ومعالجة مسألة التواصل-&nbsp;&nbsp;&nbsp; ربط نشاطات السياسات بتدابير محسوسة (مقاربة خطوة بخطوة): نبدأ من حيث نحن ونتعلم من خلال العمل learn-by-doing.-&nbsp;&nbsp;&nbsp; اعتماد المنظور النظامي system perspective: العمل على جميع المستويات، تشجيع بناء الصلات وتحديد العلاقات البينية interdependency.\n' +
            'الروابط ذات الصلة:\n' +
            'وصف المشروع على موقع الوكالة الألمانية للتعاون الدولي\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الندوة',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-06-01'),
        end_on: new Date('2011-06-02'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/0.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/1.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/2.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/3.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/4.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/5.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/6.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/7.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/8.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/9.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/10.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/11.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/12.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/13.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/14.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/15.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/16.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/17.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/18.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/19.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/20.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/21.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/22.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/23.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/24.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/25.jpg',
          img_alt: 'GIZ Wrap-up Seminar 2011',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Wrap-up Seminar 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الندوة الختامية لمشروع GIZ في 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-general-assembly-meeting-4',
    description: 'AFEI held the meeting #23 of its general assembly in Damascus that was attended by HE Vice Prime Minister, HE Minister of Industry, HE Minister of State for Investments Affairs.',
    locale_post: {
      create: [
        {
          title: 'AFEI General Assembly meeting',
          excerpt: 'AFEI held the meeting #23 of its general assembly in Damascus that was attended by HE Vice Prime Minister, HE Minister of Industry, HE Minister of State for Investments Affairs.',
          content: 'AFEI held meeting #23 of its general assembly in Damascus which was attended by HE Vice Prime Minister, HE Minister of Industry, HE Minister of State for Investments Affairs/ representative of the Prime Minister, and Chairman of the Syrian Chambers of Commerce.\n' +
            'The General assembly approved the BOD report for the year 2006, endorsed the action plan for the year 2007, and discussed the report of the designated committee on the future vision of AFEI.\n' +
            'Downloadable files:\n' +
            'News articles',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع الجمعية العمومية العادية للاتحاد العربي للصناعات الهندسية',
          excerpt: 'بحضور السيد نائب رئيس مجلس الوزراء للشؤون الاقتصادية والسيد وزير الصناعة والسيد وزير الدولة لشؤون الاستثمار، عقد الاتحاد العربي للصناعات الهندسية اجتماع الجمعية العمومية للدورة /23/ في دمشق.',
          content: 'عقد الاتحاد العربي للصناعات الهندسية اجتماع الجمعية العمومية العادية للدورة /23/ في دمشق وذلك بحضور السيد نائب رئيس مجلس الوزراء للشؤون الاقتصادية والسيد وزير الصناعة والسيد وزير الدولة لشؤون الاستثمار ممثل رئيس مجلس الوزراء ورئيس اتحاد غرف التجارة السورية.\n' +
            'حيث صادقت الجمعية العمومية على تقرير مجلس الإدارة لعام 2006 كما أقرت خطة عمل الاتحاد لعام 2007 وناقشت تقرير لجنة تحديد الرؤيا المستقبلية للاتحاد.\n' +
            'ملفات للتنزيل:\n' +
            'أخبار الصحف',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2007-04-07'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-general-assembly-meeting-1',
    description: 'AFEI held the regular meeting #24 of its general assembly in Cairo followed by the exceptional general assembly meeting to discuss amendments of the AFEI bylaw.',
    locale_post: {
      create: [
        {
          title: 'AFEI General Assembly meeting',
          excerpt: 'AFEI held the regular meeting #24 of its general assembly in Cairo followed by the exceptional general assembly meeting to discuss amendments of the AFEI bylaw.',
          content: 'AFEI regular and exceptional meetings of the general assembly were held in Cairo on 10-11/5/2008 and chaired by Mr.Nabil Farid Hassanein/AFEI Chairman of the BOD.\n' +
            "The opening session of the regular meeting of the general assembly talked about the conception of how rival companies can work together under the federation's umbrella towards harmonizing and enhancing the business environment in the region as well as encouraging the intra-regional trade, the idea of conducting an annual conference on a topic of common interest, and the role of AFEI in coordinating the industrial activity in the Arab countries.\n" +
            'The exceptional meeting of the general assembly was dedicated to discuss and agree on amendments to the AFEI bylaw which were formulated by a designated committee based on suggestions of some members.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع الجمعية العمومية العادية للاتحاد العربي للصناعات الهندسية',
          excerpt: 'عقد الاتحاد العربي للصناعات الهندسية اجتماع الجمعية العمومية العادية للدورة /24/ في القاهرة، وأعقبه اجتماع الهيئة العمومية غير العادية المخصص لمناقشة تعديلات النظام الأساسي للاتحاد.',
          content: 'عقدت الاجتماعات العادية وغير العادية للجمعية العمومية للاتحاد في القاهرة خلال الفترة 10-11/5/2008 برئاسة السيد الأستاذ نبيل فريد حسنين/رئيس مجلس الإدارة.\n' +
            'تناولت جلسة الافتتاح للدورة العادية للجمعية العمومية مفهوم عمل الشركات المتنافسة معاً تحت مظلة الاتحاد نحو مواءمة وتحسين بيئة الأعمال في المنطقة وتشجيع التجارة البينية، وفكرة عقد مؤتمر سنوي حول مسألة ذات اهتمام مشترك، ودور الاتحاد في تنسيق النشاط الصناعي في الدول العربية.\n' +
            'خصص اجتماع الجمعية العمومية غير العادية للاتفاق على تعديل بعض مواد النظام الأساسي للاتحاد التي صيغت من قبل اللجنة المشكلة بناءً على مقترحات بعض الأعضاء.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماعات',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2008-05-10'),
        end_on: new Date('2008-05-12'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-general-assembly-meeting-2',
    description: 'AFEI held meeting #25 of its general assembly in Damascus and elected the BOD members for the term 2009-2012.',
    locale_post: {
      create: [
        {
          title: 'AFEI General Assembly meeting',
          excerpt: 'AFEI held meeting #25 of its general assembly in Damascus and elected the BOD members for the term 2009-2012.',
          content: 'Meeting #25 of AFEI general assembly was held in Damascus on 8/6/2009 and chaired by Eng.Said Alhafez on behalf of Mr.Hassanein/Chairman of the BOD who could not join the meeting due to his illness.\n' +
            'The following topics were discussed in the meeting:\n' +
            '-&nbsp;&nbsp;&nbsp; Annual report for the year 2008\n' +
            '-&nbsp;&nbsp;&nbsp; Balance sheet for 2008 and budget for 2009\n' +
            '-&nbsp;&nbsp;&nbsp; Electing the BOD members for the term 2009-2012\n' +
            '-&nbsp;&nbsp;&nbsp; Delegating the new BOD with the task to prepare a strategy for the federation\n' +
            '-&nbsp;&nbsp;&nbsp; Honoring Mr.Nabil Hassanein who has acted as Chairman of AFEI BOD for the terms 2002-2005 &amp; 2005-2009\n' +
            '-&nbsp;&nbsp;&nbsp; Honoring Mr. Rashid Alio on the occasion of his retirement from his position as Director of Arab Federations Division at CAEU.\n' +
            'Related links:\n' +
            "Conference on &ldquo;Impact of the economic crisis on industry and the role of national/regional employers' organizations&rdquo; which is organized by AFEI on the occasion of the General Assembly meeting",
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع الجمعية العمومية للاتحاد العربي للصناعات الهندسية',
          excerpt: 'عقد اجتماع الجمعية العمومية للاتحاد العربي للصناعات الهندسية للدورة /25/ في دمشق حيث انتخبت أعضاء مجلس الإدارة للفترة 2009-2012.',
          content: 'عقدت الدورة /25/ للجمعية العمومية للاتحاد في دمشق بتاريخ 8/6/2009 برئاسة المهندس سعيد الحافظ نيابة عن الأستاذ نبيل فريد حسنين/رئيس مجلس الإدارة الذي حالت ظروفه الصحية دون الحضور.\n' +
            'وقد ناقش المجتمعون القضايا التالية:\n' +
            '-&nbsp;&nbsp;&nbsp; التقرير السنوي لعام 2008\n' +
            '-&nbsp;&nbsp;&nbsp; الحسابات الختامية لعام 2008 والموازنة لعام 2009\n' +
            '-&nbsp;&nbsp;&nbsp; انتخاب أعضاء مجلس إدارة للدورة 2009-2012\n' +
            '-&nbsp;&nbsp;&nbsp; تفويض مجلس الإدارة المنتخب بمهمة وضع استراتيجية لعمل الاتحاد\n' +
            '-&nbsp;&nbsp;&nbsp; تكريم الأستاذ نبيل حسنين الذي انتخب رئيساً لمجلس الإدارة خلال الفترة 2002-2009\n' +
            '-&nbsp;&nbsp;&nbsp; تكريم الأستاذ رشيد عليو بمناسبة بلوغه السن القانوني للتقاعد من منصبه كمدير لإدارة الاتحادات في مجلس الوحدة الاقتصادية العربية\n' +
            'مواقع ذات صلة:\n' +
            'المؤتمر "آثار الأزمة الاقتصادية العالمية على الصناعة ودور منظمات أصحاب الأعمال الوطنية والإقليمية" الذي نظمه الاتحاد على هامش اجتماعات الجمعية العمومية',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-06-08'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/0.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/1.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/2.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/3.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/4.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/5.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/6.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/7.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/8.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/9.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/10.jpg',
          img_alt: 'General Assembly - Syria 2009',
          locale_post_image: {
            create: [
              {
                title: 'General Assembly - Syria 2009',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الجمعية العمومية - سورية 2009',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-general-assembly-meeting-3',
    description: 'Meeting #26 of AFEI general assembly held in Cairo with a special focus on documenting the activities of member companies in their respective countries.',
    locale_post: {
      create: [
        {
          title: 'AFEI General Assembly meeting',
          excerpt: 'Meeting #26 of AFEI general assembly held in Cairo with a special focus on documenting the activities of member companies in their respective countries.',
          content: 'The meeting #26 of the AFEI general assembly was held in Cairo on 14/5/2010 and Chaired by Eng. Abdulhadi Abdulmonem/ Chairman of the AFEI BOD.\n' +
            "The General assembly approved the BOD report for the year 2009, endorsed the work plan for the year 2010 with recommendation on the importance of documenting members' activities -in their respective countries- that are falling within the lines of activities in the plan.\n" +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع الجمعية العمومية العادية للاتحاد العربي للصناعات الهندسية',
          excerpt: 'ركزت الدورة /26/ للجمعية العمومية في الاتحاد العربي للصناعات الهندسية على أهمية توثيق نشاطات الأعضاء (كل في بلده)',
          content: 'عقدت الدورة /26/ الهيئة العامة للاتحاد في القاهرة بتاريخ 14/5/2010 برئاسة المهندس عبد الهادي عبد المنعم/رئيس مجلس إدارة الاتحاد حيث صادقت الهيئة العامة على تقرير الاتحاد لعام 2009 خطة العمل لعام 2010 مع التوصية بأهمية توثيق نشاطات الأعضاء (كل في بلده) في إطار الخطوط العامة للأنشطة التي تضمنتها الخطة.\n' +
            'ملفات للتنزيل:\n' +
            'جدول الأعمال',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-05-14'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-syrian-bod-members-1',
    description: 'The members of the board of AFEI in Syria agreed on supporting the "Euro-Arab Conf. on SMEs", and discussed capacity building offers.',
    locale_post: {
      create: [
        {
          title: 'Meeting of Syrian BOD members',
          excerpt: 'The members of the board of AFEI in Syria agreed on supporting the "Euro-Arab Conf. on SMEs", and discussed capacity building offers.',
          content: 'The members of the board of AFEI in Syria held a meeting in Damascus where they agreed on their sponsorship for the "Euro-Arab Conf. on SMEs" that will be conducted by SEBC in Damascus this month.\n' +
            'The meeting also tackled correspondence with InWEnt, current status of committees formation at AFEI (according to the BOD decision in its meeting on Jan. 2010), and research results of the membership fees committee.\n' +
            'Related links:\n' +
            '1st EuroArab Conference on SMEs\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع أعضاء مجلس إدارة الاتحاد من سورية',
          excerpt: 'أعضاء مجلس الإدارة من سورية يتفقون على دعم "المؤتمر الأوربي-العربي حول دعم المنشآت الصغيرة والمتوسطة" ويناقشون مسائل بناء القدرات.',
          content: 'عقد أعضاء مجلس إدارة الاتحاد من سورية اجتماعاً في دمشق بتاريخ 10/2/2010 حيث تم الاتفاق على رعاية "المؤتمر الأوربي-العربي حول المنشآت الصغيرة والمتوسطة" الذي سينفذه مركز الأعمال والمؤسسات السورية في دمشق خلال هذا الشهر.\n' +
            'كما تناول الاجتماع المراسلات من المؤسسة الألمانية لتنمية القدرات InWEnt إلى الاتحاد، والوضع الحالي لتشكيل اللجان التخصصية في الاتحاد (وفق قرار مجلس الإدارة باجتماعه في بيروت خلال يناير/كانون الثاني 2010)، ونتائج البحث في لجنة رسوم العضوية.\n' +
            'روابط ذات صلة:\n' +
            'المؤتمر الأوربي-العربي الأول حول المنشآت الصغيرة والمتوسطة\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-02-10'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-syrian-bod-members-2',
    description: 'The members of the board of AFEI from Syria discuss topics proposed by the general secretariat for uploading on the AFEI website, and SPC request to set a meeting with members from Syria during the visit of the delegation from Brussels within the framework of the EU Program "In-Service Training".',
    locale_post: {
      create: [
        {
          title: 'Meeting of Syrian BOD members',
          excerpt: 'The members of the board of AFEI from Syria discuss topics proposed by the general secretariat for uploading on the AFEI website, and SPC request to set a meeting with members from Syria during the visit of the delegation from Brussels within the framework of the EU Program "In-Service Training".',
          content: 'During their meeting on 18/10/2010 in Damascus, members of the board of AFEI from Syria discussed the CAEU memo concerning the recommendation to develop the work of registered federations through grouping them in five sub-sectors (organizational issue not affecting operation), got informed of the topics proposed by the general secretariat for publishing on the website, and decided to circulate the letter received from European-Arabic Engineers Union announcing the organization of 1st European-Arab Engineers Forum on October 2011 and inviting AFEI members to promote, sponsor, and attend the forum.\n' +
            'The meeting also tackled the request of SPC to set a meeting with members in Syria (as representatives of employers) during the visit of the delegation from Brussels within the framework of the EU Program "In-Service Training".\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع أعضاء مجلس إدارة الاتحاد من سورية',
          excerpt: 'أعضاء مجلس إدارة الاتحاد في سورية يناقشون مقترح الأمانة العامة للمواضيع التي يمكن نشرها على موقع الإنترنت وطلب هيئة تخطيط الدولة تحديد اجتماع مع الأعضاء في سورية خلال زيارة وفد من بروكسل ضمن إطار مشروع الاتحاد الأوربي "In-service training"',
          content: 'في اجتماعهم بتاريخ 18/10/2010 في دمشق ناقش أعضاء مجلس إدارة الاتحاد العربي للصناعات الهندسية من سورية مذكرة مجلس الوحدة الاقتصادية العربية التي تضمنت توصيات اجتماع لجنة تطوير أساليب عمل الاتحادات بتجميع الاتحادات العربية ضمن خمسة قطاعات (وهي مسألة تنظيمية لاتؤثر على سير العمل)، واطلعوا على مقترح الأمانة العامة للمواضيع التي يمكن نشرها على موقع الإنترنت، كما قرروا تعميم الرسالة الواردة من اتحاد المهندسين الأوربي العربي التي تضمنت الإعلان عن تنظيم المنتدى الهندسي الأوربي العربي في تشرين الأول/اكتوبر 2011 ودعوة أعضاء الاتحاد العربي للصناعات الهندسية للمشاركة في هذا المنتدى والترويج له ولرعايته.\n' +
            'كما تناول الاجتماع طلب هيئة تخطيط الدولة تحديد اجتماع مع أعضاء الاتحاد في سورية (كممثلين لأصحاب الأعمال) خلال زيارة وفد من بروكسل ضمن إطار مشروع الاتحاد الأوربي "In-service training"\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-10-18'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-syrian-bod-members-3',
    description: 'During their meeting in Damascus, Syrian members of the board in AFEI discussed the Training-of-Trainers program on Intellectual Property Management for SMEs to be conducted by MOET in cooperation with WIPO.',
    locale_post: {
      create: [
        {
          title: 'Meeting of Syrian BOD members',
          excerpt: 'During their meeting in Damascus, Syrian members of the board in AFEI discussed the Training-of-Trainers program on Intellectual Property Management for SMEs to be conducted by MOET in cooperation with WIPO.',
          content: 'In their meeting on 5/12/2010 in Damascus Office, members of the board of AFEI from Syria discussed the WIPO ToT program on IP Management for SMEs, the invitation to attend meeting #92 of the Council of Arab Economic Unity on 9/12/2010 as an observer, and the membership application of Orient Co. in Syria to become a member in the federation.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع أعضاء مجلس إدارة الاتحاد من سورية',
          excerpt: 'خلال اجتماعهم في دمشق، ناقش أعضاء مجلس إدارة الاتحاد من سورية برنامج تدريب المدربين حول إدارة الملكية الفكرية للمؤسسات الصغيرة والمتوسطة الذي تنظمه وزارة الاقتصاد والتجارة بالتعاون مع المنظمة الدولية للملكية الفكرية WIPO.',
          content: 'في اجتماع أعضاء مجلس إدارة الاتحاد في مكتب دمشق بتاريخ 5/12/2010 بدمشق تمت مناقشة برنامج WIPO لتدريب المدربين حول إدارة الملكية الفكرية للمؤسسات الصغيرة والمتوسطة، والدعوة الموجهة للاتحاد لحضور اجتماعات الدورة/92/ لمجلس الوحدة الاقتصادية العربية بتاريخ 9/12/2010 كعضو مراقب، وطلب شركة أورينت لإنتاج الحديد الإنشائي والصناعي المدرفل على الساخن في سورية للانتساب إلى الاتحاد كعضو عامل.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-12-05'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-syrian-bod-members-4',
    description: "Syrian members of the board in AFEI discussed their involvement as employers in various initiatives and programs on the national and int'l levels.",
    locale_post: {
      create: [
        {
          title: 'Meeting of Syrian BOD members',
          excerpt: "Syrian members of the board in AFEI discussed their involvement as employers in various initiatives and programs on the national and int'l levels.",
          content: "The members considered their involvement as employers in various initiatives and programs on the national and int'l levels, covering the following:\n" +
            '-&nbsp;&nbsp;&nbsp; Cooperation in preparing the "Torino Process" report implemented by ETF within the EU Neighborhood Policy.\n' +
            '-&nbsp; Cooperation with HCSR in Syria in developing and discussing the report submitted by the Industry Sector Committee, and proposing mechanisms for creating links between the scientific research and industry.\n' +
            '-&nbsp;&nbsp; On-going discussions between AFEI, SEBC, and the SMEs Directorate at MOET on partnership of the three entities to establish the Youth Incubator within the framework of the SMEs strategy\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع أعضاء مجلس إدارة الاتحاد من سورية',
          excerpt: 'ناقش أعضاء مجلس الإدارة في سورية انخراطهم كأصحاب أعمال في مبادرات وبرامج مختلفة وطنياً ودولياً.',
          content: 'ناقش الحضور انخراطهم كأصحاب أعمال في مبادرات وبرامج مختلفة وطنياً ودولياً، وشملت بنود الاجتماع مايلي:\n' +
            '-&nbsp;&nbsp;&nbsp; التعاون في إعداد تقرير "عملية تورينو" الذي تنفذه مؤسسة التدريب الأوربية ضمن إطار سياسة الجوار للاتحاد الأوربي\n' +
            '-&nbsp;&nbsp;&nbsp; التعاون مع الهيئة العليا للبحث العلمي في سورية في إعداد ومناقشة تقرير لجنة قطاع الصناعة، واقتراح آليات الربط بين البحث العلمي والصناعة\n' +
            '-&nbsp;&nbsp; مناقشات بين الاتحاد ومركز الأعمال والمؤسسات السوري ومديرية المؤسسات الصغيرة والمتوسطة بوزارة الاقتصاد حول التشارك بين الأطراف الثلاثة في إنشاء حاضنة أعمال الشباب السوري ضمن إطار استراتيجية المؤسسات الصغيرة والمتوسطة\n' +
            'ملفات للتنزيل:\n' +
            'جدول الأعمال',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-03-06'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-syrian-bod-members-5',
    description: 'Syrian members of AFEI board discussed the position of the public sector on the feasibility of involving the private sector, and the strategy to support entrepreneurs.',
    locale_post: {
      create: [
        {
          title: 'Meeting of Syrian BOD members',
          excerpt: 'Syrian members of AFEI board discussed the position of the public sector on the feasibility of involving the private sector, and the strategy to support entrepreneurs.',
          content: 'In their meeting, members of the board of AFEI from Syria exchanged on their impressions from their meetings with the ministers of finance and economy regarding the public sector position on involving the private sector in the governmental programs.\n' +
            'The meeting also tackled the strategy of supporting entrepreneurs both before they start the business- through the partnership in vocational education &amp; training, and after graduation -through the initiative of Syrian Social Society for Youth to establish an incubator for youth.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع أعضاء مجلس إدارة الاتحاد من سورية',
          excerpt: 'تداول أعضاء مجلس الإدارة في سورية حول رأي القطاع الحكومي بجدوى مشاركة القطاع الخاص في الرأي، واستراتيجية دعم رواد الأعمال',
          content: 'في اجتماع أعضاء مجلس إدارة الاتحاد في مكتب دمشق قبيل لقائهم السيد وزير الصناعة تداول الحضور بخصوص انطباعاتهم من زياراتهم لوزيري المالية والاقتصاد وموقف القطاع الحكومي من إشراك القطاع الخاص بالرأي في البرامج الحكومية.\n' +
            'كما تناول الاجتماع استراتيجية دعم رواد الأعمال قبل إنشائهم عملهم من خلال الشراكة في التعليم والتدريب المهني، وبعد تخرجهم من خلال مبادرة الجمعية الاجتماعية للشباب السوري لإنشاء حاضنة الشباب.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-06-12'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '1st-arabcab-conference',
    description: 'The Association of Arab cable manufacturers (a sub-sector of AFEI) held its first conference "ArabCab 2005" under the patronage of HE Sheikh Abdullah bin Salman Al-Khalifa, Minister of electricity and water in the Kingdom of Bahrain, and discussed ways for developing cable manufacturers in the Arab world and combating the dumping policy by foreign companies.',
    locale_post: {
      create: [
        {
          title: '1st ArabCab Conference',
          excerpt: 'The Association of Arab cable manufacturers (a sub-sector of AFEI) held its first conference "ArabCab 2005" under the patronage of HE Sheikh Abdullah bin Salman Al-Khalifa, Minister of electricity and water in the Kingdom of Bahrain, and discussed ways for developing cable manufacturers in the Arab world and combating the dumping policy by foreign companies.',
          content: 'The Association of Arab cable manufacturers (a sub-sector of AFEI) held its first conference "ArabCab 2005" under the patronage of HE Sheikh Abdullah bin Salman Al-Khalifa, Minister of electricity and water in the Kingdom of Bahrain.\n' +
            'The conference discussed ways to develop cable manufacturers in the Arab world, land and sea freight facilities between the Arab countries, exchange of expertise amongst the Arab companies, combating the dumping policy by foreign companies in the Arab markets, adopting unified standards for cables, establishing Arab labs that would issue the conformity assessment certificates for the Arab products, and coordinating manufacturing capacities in the Arab region on the basis of integration rather than competition and dumping.\n' +
            'Members of the Association agreed to hold their 2nd conference in Morocco on April 2006.\n' +
            'Related links:\n' +
            'Arab Cable Manufacturers Association Website',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مؤتمر عرب كاب الأول',
          excerpt: 'عقد تجمع مصنعي الكابلات العرب المنبثق عن الإتحاد مؤتمره الأول "عرب كاب 2005" برعاية صاحب المعالي الشيخ عبد الله بن سلمان آل خليفة وزير الكهرباء والماء في مملكة البحرين حيث تداول بخصوص سبل تطوير مصنعي الكابلات في العالم العربي ومواجهة سياسة الإغراق المتبعة من الشركات الأجنبية.',
          content: 'عقد تجمع مصنعي الكابلات العرب المنبثق عن الإتحاد مؤتمره الأول "عرب كاب 2005" برعاية صاحب المعالي الشيخ عبد الله بن سلمان آل خليفة وزير الكهرباء والماء في مملكة البحرين.\n' +
            'بحث المؤتمر سبل تطوير صانعي الكابلات في العالم العربي، ووسائل ومنشآت الشحن البحري والبري بين الدول العربية، وتبادل الخبرات بين الشركات العربية، ومواجهة سياسة الإغراق المتبعة من الشركات الأجنبية في الأسواق العربية، وتوحيد المواصفات القياسية، وإنشاء المختبرات العربية لإصدار شهادات المطابقة الفنية للمنتجات المصنوعة في الدول العربية، وتنسيق إمكانيات الإنتاج العربي على أساس التكامل البناء وليس المنافسة والإغراق.\n' +
            'اتفق أعضاء التجمع على عقد مؤتمرهم الثاني في المغرب خلال شهر نيسان 2006.\n' +
            'روابط ذات صلة:\n' +
            'الموقع الإلكتروني لتجمع مصنعي الكابلات العرب',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2005-04-25'),
        end_on: new Date('2005-04-27'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2005-04-25_arabcab/0.jpg',
          img_alt: 'ArabCab 2005',
          locale_post_image: {
            create: [
              {
                title: 'ArabCab 2005',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'عرب كاب 2005',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'first-arab-conference-on-metrology-and-calibration',
    description: 'The conference was organized in cooperation with the National Institute for Standards in Egypt with the aim to promote coordination and integration among the Arab institutions of metrology towards supporting the credibility of measurement and calibration in the Arab countries which contributes to increasing the competitiveness of the Arab products. The initiative yielded the establishment of an (Arab Federation for Metrology and Calibration).',
    locale_post: {
      create: [
        {
          title: 'First Arab Conference on Metrology and Calibration',
          excerpt: 'The conference was organized in cooperation with the National Institute for Standards in Egypt with the aim to promote coordination and integration among the Arab institutions of metrology towards supporting the credibility of measurement and calibration in the Arab countries which contributes to increasing the competitiveness of the Arab products. The initiative yielded the establishment of an (Arab Federation for Metrology and Calibration).',
          content: 'The conference was organized according to AFEI plan in cooperation with the National Institute for Standards in Egypt with the aim of deepening knowledge of metrology and calibration in the Arab world, and encouraging coordination and integration among the Arab institutions of metrology towards supporting the credibility of measurement and calibration in the Arab countries which contributes to increasing the competitiveness of the Arab products.\n' +
            'The event linked the manufacturers of Calibration devices with the users of metrology and calibration hardware as well as the metrology institutes and institutions in the Arab countries, and provided an opportunity for cooperation amongst them.\n' +
            'An important outcome of this Conference was the birth of the Arab Federation for Metrology and Calibration.\n' +
            'Downloadable files:\n' +
            'Program, Flyer(en), Papers',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'المؤتمر العربي الأول للقياس والمعايرة',
          excerpt: 'عقد هذا المؤتمر بالتعاون مع المعهد القومي للمعايرة في مصر بهدف التنسيق والتكامل بين أجهزة القياس العربية ودعم الثقة والمصداقية في نتائج القياس والمعايرة بين الدول العربية لرفع القدرة التنافسية للمنتجات العربية. وقد أثمرت المبادرة بولادة (الاتحاد العربي للقياس والمعايرة).',
          content: 'عقد هذا المؤتمر وفق ماهو مخطط له في الاتحاد بالتعاون مع المعهد القومي للمعايرة في مصر وذلك بهدف تعميق المعرفة بعلم القياس والمعايرة في العالم العربي والتنسيق والتكامل بين أجهزة القياس العربية ودعم الثقة والمصداقية في نتائج القياس والمعايرة بين الدول العربية لرفع القدرة التنافسية للمنتجات العربية.\n' +
            'جمع هذا الحدث بين مصنعي أجهزة المعايرة والمستخدمين للقياس والمعايرة، وكذلك معاهد ومؤسسات القياس والمعايرة في الدول العربية، وهيأ الفرصة للتعاون فيما بينهم.\n' +
            'ومن النتائج الهامة لهذا المؤتمر ولادة الاتحاد العربي للقياس والمعايرة.\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج، المنشور(ع)، أوراق العمل.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2007-11-06'),
        end_on: new Date('2007-11-08'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2007-11-06_calibration_conf_eg/0.jpg',
          img_alt: 'Conference on Metrology and Calibration',
          locale_post_image: {
            create: [
              {
                title: 'Conference on Metrology and Calibration',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'المؤتمر العربي للقياس والمعايرة',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2007-11-06_calibration_conf_eg/1.jpg',
          img_alt: 'Conference on Metrology and Calibration',
          locale_post_image: {
            create: [
              {
                title: 'Conference on Metrology and Calibration',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'المؤتمر العربي للقياس والمعايرة',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: "impact-of-the-economic-crisis-on-industry-and-the-role-of-national/regional-employers'-organizations",
    description: "The conference examined the impact of the global economic crisis, and its short-term and long-term consequences as well as the role of employers' organizations. The conference also discussed the role of the AFEI as a regional organization of employers in developing practical solutions to avoid the negative consequences resulting from the crisis, including the role of intellectual capital management.",
    locale_post: {
      create: [
        {
          title: "Impact of the economic crisis on industry and the role of national/regional employers' organizations",
          excerpt: "The conference examined the impact of the global economic crisis, and its short-term and long-term consequences as well as the role of employers' organizations. The conference also discussed the role of the AFEI as a regional organization of employers in developing practical solutions to avoid the negative consequences resulting from the crisis, including the role of intellectual capital management.",
          content: 'On the occasion of the AFEI General Assembly meeting, and the attendance of members from the Arab countries, AFEI organized the conference in cooperation with SEBC under the patronage of the Syrian Minister of industry.\n' +
            "The Conference examined the impact of the global economic crisis, its short-term and long-term consequences, and the role of national/regional employers' organizations.\n" +
            'The conference also discussed the role of the AFEI as a regional organization of employers in developing practical solutions to avoid the negative consequences resulting from the crisis, including the role of intellectual capital management.\n' +
            'Related links:\n' +
            'AFEI BOD meeting, AFEI General Assembly meeting\n' +
            'Downloadable files:\n' +
            'Agenda, Presentations, News articles',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية على الصناعة ودور منظمات أصحاب الأعمال الإقليمية والوطنية',
          excerpt: 'بحث المؤتمر تأثير الأزمة الإقتصادية العالمية ونتائجها القصيرة والبعيدة الأمد ودور منظمات أصحاب الأعمال. كما ناقش المؤتمر دور الإتحاد كمنظمة إقليمية لأصحاب الأعمال في وضع حلول عملية لتفادي النتائج السلبية الناتجة عن الأزمة بما في ذلك الدور الذي يمكن أن تلعبه إدارة رأس المال الفكري',
          content: 'البرنامج، العروض التقديمية، مقالات الصحفبمناسبة انعقاد الجمعية العمومية للاتحاد وحضور الأعضاء من الدول العربية قام الاتحاد بتنظيم المؤتمر بالتعاون مع مركز الأعمال والمؤسسات السوري تحت رعاية السيد وزير الصناعة في سورية.\n' +
            'بحث المؤتمر تأثير الأزمة الإقتصادية العالمية ونتائجها القصيرة والبعيدة الأمد ودور منظمات أصحاب الأعمال الوطنية والإقليمية.\n' +
            'كما ناقش المؤتمر دور الإتحاد كمنظمة إقليمية لأصحاب الأعمال في وضع حلول عملية لتفادي النتائج السلبية الناتجة عن الأزمة والدور الذي يمكن أن تلعبه إدارة رأس المال الفكري.\n' +
            'روابط ذات صلة:\n' +
            'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية، اجتماع الجمعية العمومية للاتحاد العربي للصناعات الهندسية\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج، العروض التقديمية، مقالات الصحف\n' +
            '&nbsp;\n',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-06-07'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/0.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/1.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/2.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/3.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/4.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/5.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/6.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/7.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/8.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/9.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/10.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/11.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/12.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/13.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/14.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/15.jpg',
          img_alt: 'Impact of the economic crisis Conf.',
          locale_post_image: {
            create: [
              {
                title: 'Impact of the economic crisis Conf.',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '1st-euroarab-conference-on-smes',
    description: 'The conference is an activity that interprets the AFEI focus on linking education with industry, developing SMEs, and social responsibility.',
    locale_post: {
      create: [
        {
          title: '1st EuroArab Conference on SMEs',
          excerpt: 'The conference is an activity that interprets the AFEI focus on linking education with industry, developing SMEs, and social responsibility.',
          content: 'The conference is an activity that interprets the AFEI focus on linking education with industry, developing SMEs, and social responsibility into actions. Syrian members co-sponsored the conference that was organized by AIDMO in cooperation with SEBC under the patronage of HE the Syrian Prime Minister, and the General Secretary of the League of Arab States.\n' +
            'The conference aimed at maximizing the use of Arab and European programs and funds that are targeting the development of SMEs and increasing their competitiveness.\n' +
            'About 400 participants from the Arab countries and the EU attended the conference, and 30 key speakers from the Arab region and Europe contributed and presented papers.\n' +
            'Related links:\n' +
            'Conference on SEBC website &amp; Gallery\n' +
            'Downloadable files:\n' +
            'Program',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'المؤتمر الأوربي-العربي الأول حول المنشآت الصغيرة والمتوسطة',
          excerpt: 'هذا المؤتمر هو إحدى الأنشطة التي تترجم توجهات الاتحاد للتركيز على بناء التعليم وإيجاد علاقة تبادلية بين الصناعة والتعليم، وتطوير المنشآت الصغيرة والمتوسطة، إضافة إلى المسؤولية الاجتماعية إلى أنشطة',
          content: 'هذا المؤتمر هو إحدى الأنشطة التي تترجم توجهات الاتحاد للتركيز على بناء التعليم وإيجاد علاقة تبادلية بين الصناعة والتعليم، وتطوير المنشآت الصغيرة والمتوسطة، إضافة إلى المسؤولية الاجتماعية إلى أنشطة. وقد شارك أعضاء الاتحاد من سورية بدعم مالي للمؤتمر الذي عقدته المنظمة العربية للتنمية الصناعية والتعدين بالتعاون مع مركز الأعمال والمؤسسات السوري تحت رعاية معالي السيد رئيس مجلس الوزراء في سورية والأمين العام لجامعة الدول العربية.\n' +
            'سعى المؤتمر إلى تحقيق أقصى استفادة ممكنة من البرامج والصناديق العربية والأوربية التي أطلقتها دول المنطقتين لتأهيل وتطوير هذه المنشآت وزيادة قدراتها التنافسية.\n' +
            'حضر المؤتمر حوالي 400 مشارك من الدول العربية والاتحاد الأوروبي بالإضافة إلى مشاركة حوالي 30 متحدث رفيع المستوى من الوطن العربي وأوربة بأوراق عمل.\n' +
            'روابط ذات صلة:\n' +
            'المؤتمر &amp; الصور على الموقع الإلكتروني لمركز الأعمال والمؤسسات السوري\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-02-20'),
        end_on: new Date('2010-02-22'),
        level: { connect: { id: 6 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-20_euroarab_conf_on_smes_sy/0.jpg',
          img_alt: '1st EuroArab Conference on SMEs',
          locale_post_image: {
            create: [
              {
                title: '1st EuroArab Conference on SMEs',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'المؤتمر الأوربي-العربي الأول ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'forum-of-experts-and-specialists-in-metrology-&-calibration-of-diagnostic--and-therapeutic-equipment--',
    description: 'The Arab Federation of Engineering Industry, the Arab Federation for Metrology, and other organizations exchanged experience and knowledge about the latest technological development used in the metrology and calibration of therapeutic and diagnostic equipment.\n' +
      ' ',
    locale_post: {
      create: [
        {
          title: 'Forum of Experts and specialists in Metrology & Calibration of diagnostic  and therapeutic equipment  ',
          excerpt: 'The Arab Federation of Engineering Industry, the Arab Federation for Metrology, and other organizations exchanged experience and knowledge about the latest technological development used in the metrology and calibration of therapeutic and diagnostic equipment.\n' +
            ' ',
          content: 'The conference highlighted the importance of the calibration and metrology functions in various aspects of life in general, focusing on the necessity for periodic calibration of medical equipment to assure that they are constantly ready to use, and to obtain accurate test results for fast &amp; reliable diagnosis of providers of the medical services in the Arab World.\n' +
            'In addition, the conference discussed capacities of institutions and centers of metrology and calibration, and the roles of national authorities, maintenance agents, companies, and laboratories in providing the required services to providers of medical services.\n' +
            'Participants were introduced to the latest medical equipment through the exhibition of medical devices that accompanied the conference.\n' +
            'Related links:\n' +
            'Arab Federation for Metrology\n' +
            'Downloadable files:\n' +
            'Conference brochure (en)',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ملتقى الخبراء والمتخصصين في المعايرة والقياس في الأجهزة التشخيصية والعلاج',
          excerpt: 'الاتحاد العربي للصناعات الهندسية والاتحاد العربي للقياس والمعايرة ومنظمات أخرى يتبادلون الخبرات والمعرفة حول أحدث التطورات التقنية المستخدمة في قياس ومعايرة أجهزة العلاج والتشخيص',
          content: 'ركز المؤتمر على زيادة الوعي بأهمية وظيفة القياس والمعايرة&nbsp; بشكل عام في مختلف نواحي الحياة، مع التركيز على إلقاء الضوء على أهمية المعايرة الدورية للأجهزة الطبية وتحقيق الهدف من أن تكون صالحة للاستخدام&nbsp; باستمرار وللحصول على النتائج الدقيقة كوسيلة لسرعة ودقة التشخيص لمقدمي الخدمات الطبية في العالم العربي.\n' +
            'كما ناقش المؤتمر قدرات المؤسسات ومراكز القياس والمعايرة، وأدوار السلطات الوطنية ووكالات الصيانة والشركات والمخابر في توفير الخدمات المطلوبة لمقدمي الخدمات الطبية.\n' +
            'منح المؤتمر المشاركين فرصة للاطلاع على أحدث منتجات الأجهزة الطبية من خلال معرض الأجهزة الطبية الذي رافق للمؤتمر.\n' +
            'روابط ذات صلة:\n' +
            'الاتحاد العربي للقياس والمعايرة - المترولوجيا\n' +
            'ملفات للتنزيل:\n' +
            'بروشور المؤتمر (ع)',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-05-15'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-05-15_metrology_conf_eg/0.jpg',
          img_alt: 'Forum of Experts and specialists in Metrology - Cairo 2010',
          locale_post_image: {
            create: [
              {
                title: 'Forum of Experts and specialists in Metrology - Cairo 2010',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ملتقى الخبراء والمتخصصين في المعايرة والقياس - القاهرة 2010',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'water-desalination-conference',
    description: 'Policy makers on the national level, representatives of the private sector, municipalities, and other beneficiaries of water reuse participated in the first of a kind conference that was organized by NOSSTIA in cooperation with IDA and LDA and focused on technologies for water desalination',
    locale_post: {
      create: [
        {
          title: 'Water Desalination Conference',
          excerpt: 'Policy makers on the national level, representatives of the private sector, municipalities, and other beneficiaries of water reuse participated in the first of a kind conference that was organized by NOSSTIA in cooperation with IDA and LDA and focused on technologies for water desalination',
          content: 'AFEI General Secretary attended the one of a kind conference that was organized by NOSSTIA in cooperation with IDA and LDA and focused on the technologies for water desalination.\n' +
            'Policy makers on the national level, representatives of the private sector, municipalities, and other beneficiaries of water reuse participated in the conference.\n' +
            'The conference resulted with eight recommendations revolving around the necessity to establish programs for water reuse and unconventional water resources in order to cover the national needs for agriculture, industry, and environment services.\n' +
            'Downloadalbe file: \n' +
            'Flyer, Agenda, Report, News articles, Recommendations',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مؤتمر تحلية المياه',
          excerpt: 'شارك صناع السياسات على المستوى الوطني، وممثلو القطاع الخاص، والبلديات، والمستفيدون من إعادة استخدام المياه بالمؤتمر الأول من نوعه الذي نظمته شبكة NOSSTIA بالتعاون مع الجمعية العالمية للتحلية IDA وجمعية ليفانت للتحلية LDA والذي ركز على تقنيات تحلية المياه',
          content: 'حضر الأمين العام للاتحاد العربي للصناعات الهندسية المؤتمر الأول من نوعه الذي نظمته شبكة NOSSTIA بالتعاون مع الجمعية العالمية للتحلية IDA وجمعية ليفانت للتحلية LDA والذي ركز على تقنيات تحلية المياه.\n' +
            'شارك في المؤتمر صناع السياسات على المستوى الوطني وممثلو القطاع الخاص والبلديات والمستفيدون من إعادة استخدام المياه.\n' +
            'وقد أوصى المؤتمر في ختام جلساته بثمان توصيات تدور حول ضرورة العمل على تأسيس برامج لإعادة إستخدام المياه، وبناء موارد مياه غير تقليدية لتغطية الإحتياجات الوطنية من أجل الزراعة والصناعة والخدمات البيئية.\n' +
            'ملفات للتنزيل:\n' +
            'المنشور، البرنامج، تقرير، مقالات صحفية، التوصيات',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-09-28'),
        end_on: new Date('2010-09-29'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-09-28_nosstia_water_desalination_sy/0.jpg',
          img_alt: 'Water Desalination Conference',
          locale_post_image: {
            create: [
              {
                title: 'Water Desalination Conference',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تحلية المياه',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-09-28_nosstia_water_desalination_sy/1.jpg',
          img_alt: 'Water Desalination Conference',
          locale_post_image: {
            create: [
              {
                title: 'Water Desalination Conference',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تحلية المياه',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-09-28_nosstia_water_desalination_sy/2.jpg',
          img_alt: 'Water Desalination Conference',
          locale_post_image: {
            create: [
              {
                title: 'Water Desalination Conference',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تحلية المياه',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-09-28_nosstia_water_desalination_sy/3.jpg',
          img_alt: 'Water Desalination Conference',
          locale_post_image: {
            create: [
              {
                title: 'Water Desalination Conference',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'مؤتمر تحلية المياه',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'arab-private-sector-forum',
    description: 'AFEI delegation participated in the Arab Private Sector Forum that was organized on the sideline of the Arab Economic & Social Summit with the aim to involve the private sector, civil society, and intellectuals with the government officials in the discussions about Arab-level economic and social issues. Mr. Saniora called for the launch of regional working groups to remove legal and administrative obstacles that limit the flow of investments into the Arab countries.',
    locale_post: {
      create: [
        {
          title: 'Arab Private Sector Forum',
          excerpt: 'AFEI delegation participated in the Arab Private Sector Forum that was organized on the sideline of the Arab Economic & Social Summit with the aim to involve the private sector, civil society, and intellectuals with the government officials in the discussions about Arab-level economic and social issues. Mr. Saniora called for the launch of regional working groups to remove legal and administrative obstacles that limit the flow of investments into the Arab countries.',
          content: 'AFEI delegation participated in the Arab Private Sector Forum that was held on the sideline of the Arab Economic &amp; Social Summit in order to discuss the social and economic issues which are to be presented to the Summit.\n' +
            'This forum is an important activity that aims at involving the private sector, civil society, and intellectuals in discussing Arab-level economic and social issues with the government officials.\n' +
            'A notable discussion was the speech of Mr.Saniora who listed the major obstacles facing the Arab world development, then asserted the need to move according to paths that would enable the region to cope with changes in the world through: joint work to discover new sources of energy, joint investment in education and curricula development, health sector, investing in the economy of production (i.e. agriculture and industry sectors), and most importantly removing legal and administrative obstacles hindering the cooperation between economies in the Arab countries, and also the flow of Arab and foreign investments.\n' +
            'Downloadable files:\n' +
            'Agenda, Media article',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'منتدى القطاع الخاص العربي',
          excerpt: 'وفد الاتحاد يشارك في منتدى القطاع الخاص العربي الذي عقد على هامش القمة العربية الاقتصادية والتنموية والاجتماعية بهدف إشراك القطاع الخاص والمجتمع المدني والمفكرين مع المسؤولين الحكوميين في تناول وبحث قضايا الوطن العربي في المجال الاقتصادي والاجتماعي. والسيد السنيورة يدعو لإطلاق ورش عمل تنظر في كيفية إزالة العوائق القانونية والإدارية التي تحد من تدفق الاستثمارات للدول العربية.',
          content: 'شارك وفد الاتحاد في منتدى القطاع الخاص العربي الذي عقد على هامش القمة العربية الاقتصادية والتنموية والاجتماعية لمناقشة الموضوعات الاقتصادية والاجتماعية التي ستعرض على القمة.\n' +
            'هذا المنتدى هو من أهم الأنشطة التي تهدف إلى مشاركة القطاع الخاص والمجتمع المدني والمفكرين مع المسؤولين الحكوميين في تناول وبحث قضايا الوطن العربي في المجال الاقتصادي والاجتماعي.\n' +
            'ومن أبرز ما نوقش كلمة الأستاذ السنيورة الذي فند العوائق الأساسية لتطور العالم العربي، ومن ثم أكد على أنه ينبغي السير على مسارات تستطيع أن تمكننا كمنطقة ودول وشعوب من التلاؤم مع مقتضيات التغير الحاصل في العالم من حولنا وذلك من خلال عدة محاور، منها: العمل المشترك على إيجاد مصادر جديدة وحقيقية للطاقة- الاستثمار المشترك في التعليم وتطوير المناهج التعليمية المتلائمة مع المتغيرات- المجال الصحي- الاستثمار في الاقتصاد المنتج أي الاقتصاد في قطاعي الزراعة والصناعة- إزالة العوائق القانونية والإدارية التي تحد من التعاون بين الاقتصادات العربية ومن تدفق الاستثمارات العربية والخارجية.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج المنتدى، خبر صحفي',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-01-17'),
        end_on: new Date('2009-01-18'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '1st-forum-for-arab-textile-industries',
    description: 'The Arab Federation for Textiles Industries organized the first forum with distinguished participation of businessmen and investors, as well as Arab and foreign experts in the field. The forum came up with recommendations for supporting this important sector in the region through HR development and assistance from the international R&D and cooperation programs.',
    locale_post: {
      create: [
        {
          title: '1st Forum for Arab Textile Industries',
          excerpt: 'The Arab Federation for Textiles Industries organized the first forum with distinguished participation of businessmen and investors, as well as Arab and foreign experts in the field. The forum came up with recommendations for supporting this important sector in the region through HR development and assistance from the international R&D and cooperation programs.',
          content: 'Assistant Secretary-General participated in the Forum organized by the Arab Federation for Textile Industries under the patronage of HE the Minister of economic development of Egypt and the Secretary-General of the Council of Arabic Economic Unity. The Forum was attended by a crowd of businessmen and investors in addition to Arab and foreign experts in the field. The dialogue focused on the situation and global trends of textile industries and the possibilities for cooperation and coordination on the Arab and international levels to enhance their competitiveness.\n' +
            'The recommendations emphasized the need to support the advancement of this important industrial sector in the region, in particular through the development of human resources, and assistance from the international R&amp;D and cooperation programs.\n' +
            'Downloadable files:\n' +
            'Participants list',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الملتقى الأول للصناعات النسيجية العربية',
          excerpt: 'الاتحاد العربي للصناعات النسيجية ينظم الملتقى الأول بحضور حشد من رجال الاعمال والمستثمرين والخبراء العرب والأجانب في مجال الصناعات النسيجية، ويخرج بتوصيات لدعم هذا القطاع الصناعي الهام في المنطقة من خلال تطوير الكوادر البشرية والاستعانة ببرامج التعاون والبحث والتطوير الدولية.',
          content: 'شارك الأمين العام المساعد للاتحاد في الملتقى الذي نظمه الاتحاد العربي للصناعات النسيجية تحت رعاية وزير التنمية الاقتصادية في مصر والأمين العام لمجلس الوحدة الاقتصادية العربية. حضر الملتقى حشد من رجال الأعمال والمستثمرين إضافة إلى الخبراء العرب والأجانب في مجال الصناعات النسيجية. وتمحور الحوار حول أوضاع الصناعات النسيجية واتجاهاتها عالمياً وإمكانيات التعاون والتنسيق على الصعيدين العربي والدولي بما يعزز قدراتها التنافسية.\n' +
            'ركزت التوصيات على الدعم للنهوض بهذا القطاع الصناعي الهام في المنطقة وبالأخص من خلال تطوير الكوادر البشرية، والاستعانة ببرامج التعاون والبحث والتطوير الدولية.\n' +
            'ملفات للتنزيل:\n' +
            'قائمة المشاركين',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-03-15'),
        end_on: new Date('2009-03-16'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-03-15_arab_forum_on_textile_industries_eg/0.jpg',
          img_alt: 'Arab Textile Industries 1st Forum',
          locale_post_image: {
            create: [
              {
                title: 'Arab Textile Industries 1st Forum',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى الأول للصناعات النسيجية العربية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'arab-economic-forum-1',
    description: 'Arab Economic Forum held its session #17 under the patronage of HE the Lebanese Prime Minister and focused on ways to cope with the expected impact of the global financial crisis on the economies of the Arab countries.',
    locale_post: {
      create: [
        {
          title: 'Arab Economic Forum',
          excerpt: 'Arab Economic Forum held its session #17 under the patronage of HE the Lebanese Prime Minister and focused on ways to cope with the expected impact of the global financial crisis on the economies of the Arab countries.',
          content: 'A delegation of AFEI: Eng. Abdul Hadi Abdul Moneim/Chairman, eng. Said Al-hafez/Vice-Chairman, Mr.Mohamed Daaboul/Board Member, Dr. A.Haitham Al Yafi/Secretary-General participated in the Arab economy Forum held under the patronage of HE Mr. Fouad Saniora, Prime Minister of Lebanon. The topic "ways to cope with the expected impact of the global financial crisis on the economies of the Arab countries" was the first topic of discussions in the forum.\n' +
            'The forum gave chance for AFEI Board members (known businessmen on the Arab level) to communicate and confer with their peers. The general secretariat sent a letter to organizers expressing appreciation of AFEI delegation for the welcome and discussions in the Forum.\n' +
            'Downloadable files:\n' +
            'Agenda (en)',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'منتدى الاقتصاد العربي',
          excerpt: 'منتدى الاقتصاد العربي يعقد دورته السابعة عشرة برعاية دولة رئيس مجلس الوزراء في الجمهورية اللبنانية ويركز على كيفية مواجهة الانعكاسات المتوقعة للأزمة المالية العالمية على اقتصاديات البلدان العربية',
          content: 'شارك وفد الاتحاد المؤلف من السادة: م.عبد الهادي عبد المنعم/رئيس الاتحاد، م.سعيد الحافظ/نائب رئيس الاتحاد، أ.محمد دعبول/عضو مجلس الإدارة، د.أحمد هيثم اليافي/الأمين العام في منتدى الاقتصاد العربي (أعرق ملتقى للأعمال في الشرق الأوسط) الذي عقد تحت رعاية دولة الأستاذ فؤاد السنيورة/رئيس مجلس الوزراء في لبنان. وكان موضوع "اتجاهات الأزمة وكيفية مواجهة انعكاساتها المتوقعة على اقتصاديات البلدان العربية" فاتحة المسائل التي نوقشت.\n' +
            '&nbsp;كان المنتدى فرصة للتواصل والتباحث بين مجلس إدارة الاتحاد العربي للصناعات الهندسية وهم رجال أعمال معروفين على المستوى العربي مع نظرائهم. وقد أرسلت الأمانة العامة رسالة إلى المنظمين تعبر عن تقدير أعضاء الاتحاد للترحيب الذي شهدوه وللحوار والمناقشات التي شاركوا بها في المنتدى.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج المنتدى (ع)',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-04-02'),
        end_on: new Date('2009-04-03'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'syrian-egyptian-businessmen-council-forum',
    description: 'AFEI Representatives participated in the first forum of the Syrian-Egyptian Businessmen Council and discussed promoting growth of inter- trade, and establishing joint industrial companies.',
    locale_post: {
      create: [
        {
          title: 'Syrian-Egyptian Businessmen Council Forum',
          excerpt: 'AFEI Representatives participated in the first forum of the Syrian-Egyptian Businessmen Council and discussed promoting growth of inter- trade, and establishing joint industrial companies.',
          content: 'The first meeting of the Syrian-Egyptian Business Council assembled nearly 200 businessmen from both countries.\n' +
            'Upon exchanging transparently about the difficulties that are hindering the development of economic relations between the two countries, ministers and officials confirmed the orientation towards forming an appropriate climate for increasing the industrial and trade cooperation.\n' +
            'It was agreed to accept certificates of conformity and standards in both countries and to revise customs procedures in order to facilitate the inter-trade.\n' +
            'Downloadable files:\n' +
            'Media articles',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ملتقى مجلس رجال الأعمال السوري-المصري',
          excerpt: 'بمشاركة ممثلي الاتحاد، ملتقى مجلس رجال الأعمال السوري المصري يتداول بخصوص تشجيع تنمية التبادل التجاري وإنشاء شركات قطاع خاص صناعية مشتركة',
          content: 'جمع اللقاء الأول لمجلس رجال الأعمال السوري المصري حوالي 200 من رجال الأعمال في البلدين.\n' +
            'وبعد طرح الصعوبات التي تعيق تطوير العلاقات الاقتصادية بين البلدين بشفافية أكد المسؤولون والوزراء الحاضرون على وجود التوجه لتشكيل مناخ مناسب لزيادة التعاون الصناعي والتجاري.\n' +
            'تم الاتفاق على قبول شهادات المطابقة والمواصفات في كلا البلدين ومراجعة الإجراءات الجمركية من أجل تسهيل إجراءات التجارة البينية.\n' +
            'ملفات للتنزيل:\n' +
            'أخبار الصحف',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-03-15'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-03-15_sy_eg_business_council/0.jpg',
          img_alt: 'SY-EG Businessmen Council ',
          locale_post_image: {
            create: [
              {
                title: 'SY-EG Businessmen Council ',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'رجال الأعمال السوري-المصري',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'annual-meeting-of-the-arab-sectoral-federations-no-4',
    description: 'Electing Chairmen and Vice-Chairmen for the five divisions of the Arab sectoral federations as recommended by the CAEU committee on developing methods of federations work.',
    locale_post: {
      create: [
        {
          title: 'Annual meeting of the Arab Sectoral Federations no. 38',
          excerpt: 'Electing Chairmen and Vice-Chairmen for the five divisions of the Arab sectoral federations as recommended by the CAEU committee on developing methods of federations work.',
          content: 'CAEU invited Chairmen and General Secretaries of the Arab sectoral federations working under its umbrella to attend this preparatory meeting designated to discuss the recommendations of "CAEU committee on developing methods of federations work" then electing chairmen and vice-chairmen for the five divisions (Industry &amp; Production, Transportation, Services, Investment, Culture &amp; Information).\n' +
            'AFEI Chairman and General Secretary participated in the meeting where the AFEI Chairman was elected as a Deputy for the "Industry &amp; Production" division within the new structure of the Arab sectoral federations.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الاجتماع التحضيري للدورة /38/ للاتحادات العربية النوعية التخصصية',
          excerpt: 'انتخاب رؤساء ونواب رؤساء القطاعات الخمسة للاتحادات العربية النوعية التخصصية وفق توصيات لجنة تطوير أساليب العمل بالاتحادات في مجلس الوحدة الاقتصادية العربية.',
          content: 'وجه مجلس الوحدة الاقتصادية العربية الدعوة لرؤساء وأمناء الاتحادات العربية النوعية المتخصصة العاملة في نطاقه لحضور الاجتماع التحضيري المخصص لمناقشة توصيات لجنة تطوير أساليب العمل بالاتحادات في المجلس وانتخاب رؤساء ونواب رؤساء القطاعات الخمسة المقترحة (الصناعة والإنتاج، النقل، الخدمات، الاستثمار، الثقافة والمعلومات).\n' +
            'شارك رئيس الاتحاد والأمين العام في هذا الاجتماع حيث تم اختيار رئيس الاتحاد كنائب رئيس قطاع الإنتاج في الهيكلية الجديدة للاتحادات العربية النوعية التخصصية.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-10-20'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'annual-meeting-of-the-arab-sectoral-federations-no-2',
    description: 'Among the topics discussed in the meeting: the expected role of the private sector in leading the Arab economic cooperation -through the federations- as well as a proposal from AFEI regional office in Cairo to operationalize the Arab Fund for SMEs were discussed.',
    locale_post: {
      create: [
        {
          title: 'Annual meeting of the Arab Sectoral Federations no. 38',
          excerpt: 'Among the topics discussed in the meeting: the expected role of the private sector in leading the Arab economic cooperation -through the federations- as well as a proposal from AFEI regional office in Cairo to operationalize the Arab Fund for SMEs were discussed.',
          content: 'AFEI delegation participated in the meeting that highlighted the expected role of the private sector in leading the Arab economic cooperation through the federations, and introduced the suggestion of the general secretariat of CAEU to structure the Arab Federations into /5/ divisions.\n' +
            'AFEI regional office in Cairo introduced its proposal to operationalize the Arab Fund for SMEs through supporting the existing SMEs in the Arab countries that are suffering only from shortage in the working capital.\n' +
            'Participants stressed the need for CAEU to focus on simplifying the procedures, and modernizing the legislations that govern companies, as well as providing mobility for Arab businessmen and investors across the Arab countries.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الاجتماع الدوري /38/ للاتحادات العربية النوعية المتخصصة',
          excerpt: 'من أبرز المواضيع التي نوقشت  في الاجتماع هي: الدور المأمول من القطاع الخاص في قيادة التعاون الاقتصادي العربي من خلال الاتحادات، بالإضافة إلى مقترح مكتب الاتحاد في القاهرة لتفعيل الصندوق العربي لدعم الصناعات الصغيرة والمتوسطة.',
          content: 'شارك وفد الاتحاد في الاجتماع الذي أكد على الدور المأمول من القطاع الخاص في قيادة التعاون الاقتصادي العربي من خلال الاتحادات، وقدم الهيكلية المقترحة من الأمانة العامة لمجلس الوحدة الاقتصادية العربية لتقسيم الاتحادات العربية إلى خمسة قطاعات.\n' +
            'قدم مكتب الاتحاد في القاهرة مقترحه لتفعيل الصندوق العربي لدعم الصناعات الصغيرة والمتوسطة من خلال دعم المنشآت المتعثرة في الوطن العربي التي لاينقصها إلا التمويل.\n' +
            'أكد المشاركون على ضرورة تركيز مجلس الوحدة الاقتصادية العربية على تسهيل الإجراءات وتحديث القوانين الحاكمة للمنشآت وتوفير حرية الحركة والتنقل لرجال الأعمال والمستثمرين العرب بين الدول العربية.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-11-28'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'arab-economic-forum-2',
    description: 'With high-level participation of leaders as well as senior Arab & international experts and intellectuals, the dialogue in the Forum revolved around the perceptions of the upcoming phase and its political & economic implications.',
    locale_post: {
      create: [
        {
          title: 'Arab Economic Forum',
          excerpt: 'With high-level participation of leaders as well as senior Arab & international experts and intellectuals, the dialogue in the Forum revolved around the perceptions of the upcoming phase and its political & economic implications.',
          content: 'The forum witnessed high-level participation of leaders as well as senior Arab and international experts &amp; intellectuals. The broad framework for dialogue was the big questions facing investors and officials in the region, notably: what the new image of the Arab world? What are the new dynamics that will determine the political and economic choices, and what is the expected impact of these choices on the business environment and investment? Will the process of economic openness that provided incentives to attract foreign investments continue?\n' +
            'Downloadable files:\n' +
            'Agenda (en), Material',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'منتدى الاقتصاد العربي',
          excerpt: 'بمشاركات رفيعة من قياديين وكبار الخبراء والمفكرين العرب والدوليين، دار الحوار في المنتدى حول التصورات للمرحلة المقبلة وانعكاساتها سياسياً واقتصادياً.',
          content: 'شهد المنتدى مشاركات رفيعة من قياديين وكبار الخبراء والمفكرين العرب والدوليين. وكان الإطار العريض للحوار هو مجموعة الأسئلة الكبيرة التي يواجهها المستثمرون والمسؤولون في المنطقة ومن أبرزها: ماهي الصورة الجديدة للعالم العربي؟\n' +
            'ماهي الديناميات الجديدة التي ستحدد خياراته السياسية والاقتصادية، وماهو الأثر المتوقع لهذه الخيارات على بيئة الأعمال والاستثمار؟ هل ستستمر عملية الانفتاح الاقتصادي التي وفرت الحوافز المناسبة لجذب الاستثمارات الخارجية؟\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع (ع)، منشورات عن المنتدى',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-05-26'),
        end_on: new Date('2011-05-27'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'annual-meeting-of-the-arab-sectoral-federations-no.-39',
    description: 'Activating the newly established divisions of the Arab Sectoral Federations, and supporting SMEs are issues discussed in the meeting that was held under the patronage of HE the Lebanese Minister of Economy and Trade and attended by chairmen and general secretaries of the Arab Sectoral Federations as well as business men and women.',
    locale_post: {
      create: [
        {
          title: 'Annual meeting of the Arab Sectoral Federations no. 39',
          excerpt: 'Activating the newly established divisions of the Arab Sectoral Federations, and supporting SMEs are issues discussed in the meeting that was held under the patronage of HE the Lebanese Minister of Economy and Trade and attended by chairmen and general secretaries of the Arab Sectoral Federations as well as business men and women.',
          content: 'AFEI delegation participated in the meeting that was held under the patronage of HE the Lebanese Minister of Economy and Trade and attended by chairmen and general secretaries of the Arab Sectoral Federations as well as business men and women.\n' +
            'Participants discussed ways of exploiting the newly established divisions of the Arab Sectoral Federations in monitoring the implementation of the recommendations of regular meetings and conferences. A recommendation was approved to invite the elected chairmen of the five divisions to offer a study about the federations within each division in preparation for the Economic Summit that will be held in 2013.\n' +
            'Attendees emphasized the need for the General Secretariat of CAEU to coordinate with the Arab Fund for Economic &amp; Social Development in order to organize a meeting with the Arab federations to discuss cooperation with the private sector in activating the financing of enterprises from the Arab SMEs Fund.\n' +
            'It was agreed to hold the next annual meeting of the federations in November 2012.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الاجتماع الدوري /39/ للاتحادات العربية النوعية المتخصصة',
          excerpt: 'تفعيل دور القطاعات للاتحادات العربية النوعية المتخصصة، ودعم الصناعات الصغيرة والمتوسطة هي ماناقشه الاجتماع الذي عقد برعاية وزير الاقتصاد والتجارة في لبنان وبمشاركة رؤساء وأمناء الاتحادات العربية النوعية التخصصية ورجال وسيدات الأعمال',
          content: 'شارك وفد من الاتحاد في الاجتماع الذي عقد برعاية وزير الاقتصاد والتجارة في لبنان وحضور رؤساء وأمناء الاتحادات العربية النوعية التخصصية ورجال وسيدات الأعمال.\n' +
            'ناقش الحضور كيفية الاستفادة من الهيكلية التي أنجزت حديثاً لتقسيم الاتحادات العربية إلى خمسة قطاعات في متابعة تنفيذ توصيات الاجتماعات الدورية للاتحادات ومؤتمر الاتحادات الذي عقد في القاهرة بتاريخ 27/12/2010. وأقرت توصية بدعوة رؤساء القطاعات الخمسة إلى تقديم دراسة عن الاتحادات المنضوية في إطار كل قطاع تمهيداً لرفعها إلى القمة الاقتصادية المزمع عقدها في 2013.\n' +
            'وأكد الحضور على ضرورة أن تقوم الأمانة العامة لمجلس الوحدة الاقتصادية العربية بالتنسيق مع الصندوق العربي للانماء الاقتصادي والاجتماعي لعقد اجتماع موسع مع الاتحادات العربية بهدف بحث أوجه التعاون مع القطاع الخاص العربي في تفعيل تمويل المشروعات من الحساب الخاص لدعم الصناعات الصغيرة والمتوسطة.\n' +
            'تم الاتفاق على عقد الاجتماع السنوي القادم للاتحادات في شهر تشرين الثاني / نوفمبر 2012\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-11-18'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-11-18_caeu_asf_39_lb/0.jpg',
          img_alt: 'Arab Sectoral Federations no. 39',
          locale_post_image: {
            create: [
              {
                title: 'Arab Sectoral Federations no. 39',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الاجتماع الدوري /39/ للاتحادات ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-11-18_caeu_asf_39_lb/1.jpg',
          img_alt: 'Arab Sectoral Federations no. 39',
          locale_post_image: {
            create: [
              {
                title: 'Arab Sectoral Federations no. 39',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الاجتماع الدوري /39/ للاتحادات ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-11-18_caeu_asf_39_lb/2.jpg',
          img_alt: 'Arab Sectoral Federations no. 39',
          locale_post_image: {
            create: [
              {
                title: 'Arab Sectoral Federations no. 39',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الاجتماع الدوري /39/ للاتحادات ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-the-civil-societies-at-the-economic-&-social-council-/-las',
    description: 'Results of the evaluation study of the role of Arab civil society institutions (an observer in the Economic & Social Council/LAS) in the joint Arab work, and the role of these institutions in the field of humanitarian aid were discussed.',
    locale_post: {
      create: [
        {
          title: 'Meeting of the Civil Societies at the Economic & Social Council / LAS',
          excerpt: 'Results of the evaluation study of the role of Arab civil society institutions (an observer in the Economic & Social Council/LAS) in the joint Arab work, and the role of these institutions in the field of humanitarian aid were discussed.',
          content: 'In response to the invitation of the General Secretariat of League of Arab States (LAS), AFEI delegation attended the meeting that was organized by the Observatory of Civil Societies and Professional Associations Dept. to discuss the activation of civil society institutions role (an observer in the Economic and Social Council) in the joint arab work.\n' +
            'Attendees discussed the draft results of the assessment study carried out by the General Secretariat / LAS on the role of Arab civil society institutions in the joint Arab work.\n' +
            'Representatives of the civil society institutions also discussed their proposals to activate the role of their institutions in the field of humanitarian aid.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع منظمات المجتمع المدني في المجلس الاقتصادي والاجتماعي للجامعة العربية',
          excerpt: 'بحث نتائج الدراسة التقييمية لدور مؤسسات المجتمع المدني العربية (بصفتها المراقب لدى المجلس الاقتصادي والاجتماعي للجامعة العربية) في العمل العربي المشترك، ودور هذه المؤسسات في مجال المساعدات الإنسانية',
          content: 'بدعوة من الأمانة العامة لجامعة الدول العربية، حضر وفد الاتحاد الاجتماع الذي عقدته إدارة مرصد المجتمع المدني والاتحادات المهنية والمخصص لمناقشة تفعيل دور منظمات المجتمع المدني المراقب لدى المجلس الاقتصادي والاجتماعي في العمل العربي المشترك.\n' +
            'ناقش الحضور مسودة نتائج الدراسة التقييمية التي نفذتها الأمانة العامة لجامعة الدول العربية حول دور مؤسسات المجتمع المدني العربية في العمل العربي المشترك.\n' +
            'كما تداول ممثلو مؤسسات المجتمع المدني بخصوص مقترحاتهم لتفعيل دور مؤسساتهم في مجال المساعدات الإنسانية.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-01-10'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'assessment-of-the-role-of-sectoral-arab-federations-in-the-joint-arab-work',
    description: 'CAEU conducted a study to assess the role of sectoral Arab federations in the joint Arab work, and AFEI sent its information.',
    locale_post: {
      create: [
        {
          title: 'Assessment of the role of sectoral Arab federations in the joint Arab work',
          excerpt: 'CAEU conducted a study to assess the role of sectoral Arab federations in the joint Arab work, and AFEI sent its information.',
          content: 'Founded on the believe of CAEU General Secretariat in the role of sectoral Arab federations in the joint Arab work, and the assignment of the CAEU to conduct an assessment study for the existing federations, the General Secretariat at CAEU circulated a questionnaire that allows to show the accomplishments of these federations appropriately in the assessment.\n' +
            'The data was collected in cooperation between the regional office in Cairo and the regional office in Damascus under the supervision of the AFEI board.\n' +
            'Information was sent to the CAEU General Secretariat enclosed with a formal letter from AFEI at the beginning of March.\n' +
            'Downloadable files:\n' +
            'Letter from CAEU',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'تقييم دور الاتحادات العربية النوعية المتخصصة في العمل العربي المشترك',
          excerpt: 'مجلس الوحدة الاقتصادية العربية ينفذ دراسة تقييم لدور الاتحادات العربية النوعية المتخصصة في العمل العربي المشترك، والاتحاد يرسل مشاركته. ',
          content: 'إيماناً من الأمانة العامة لمجلس الوحدة الاقتصادية العربية بدور الاتحادات العربية النوعية المتخصصة في العمل العربي المشترك، وحيث أن المجلس كلفها بتنفيذ دراسة تقييم لدور الاتحادات القائمة، فقد عممت نموذج استبيان يسمح بإظهار إنجازات الاتحادات بالصورة الملائمة في التقييم.\n' +
            'ورد التعميم إلى الاتحاد وتم جمع البيانات المطلوبة بالتعاون بين المكتب الإقليمي في القاهرة والمكتب الإقليمي في دمشق تحت إشراف مجلس إدارة الاتحاد.\n' +
            'أرسلت المعلومات إلى الأمانة العامة لمجلس الوحدة الاقتصادية بكتاب رسمي من الاتحاد في مطلع شهر آذار/مارس.\n' +
            'ملفات للتنزيل:\n' +
            'كتاب مجلس الوحدة الاقتصادية العربية',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-02-00'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-02-00_caeu_questionnaire/0.jpg',
          img_alt: 'CAEU Questionnaire',
          locale_post_image: {
            create: [
              {
                title: 'CAEU Questionnaire',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'تقييم دور الاتحادات العربية ',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-with-regional-director-of-scottish-aid',
    description: 'In response to invitation from the AFEI Chairman, a meeting with the Scottish Aid regional director was held in presence of the General Secretary of CAEU to discuss possibilities to make use of the Scottish experience in the field of developing SMEs in order to develop similar enterprises in the Arab region.',
    locale_post: {
      create: [
        {
          title: 'Meeting with Regional Director of Scottish Aid',
          excerpt: 'In response to invitation from the AFEI Chairman, a meeting with the Scottish Aid regional director was held in presence of the General Secretary of CAEU to discuss possibilities to make use of the Scottish experience in the field of developing SMEs in order to develop similar enterprises in the Arab region.',
          content: '&nbsp;In response to invitation from the AFEI Chairman, a meeting with the Scottish Aid regional director was held in presence of the General Secretary of CAEU and representatives of AFEI.\n' +
            'The meeting aimed at discussing possibilities to make use of the Scottish experience in the field of developing SMEs in order to develop similar enterprises in the Arab region which has an urgent need for such enterprises.\n' +
            'CAEU General Secretary pointed out that the interest in getting introduced to international experiences in the field of developing SMEs comes from the need to create a mechanism to activate the role of the Arab SMEs Fund that was established last year.\n' +
            'As a result of the discussions, it was agreed to continue the communication between AFEI and the Scottish Aid and to prepare for two meetings, the first encompasses Scottish experts and their peers from the Arab countries to be held in Cairo next Marsh, and the second for specialists from the Arab region to visit Scotland and get introduced to the details of the experience.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'لقاء المدير الإقليمي لهيئة المعونة الاسكتلندية',
          excerpt: 'بدعوة من رئيس الاتحاد، عقد لقاء مع المدير الإقليمي لهيئة المعونة الاسكتلندية بحضور الأمين العام لمجلس الوحدة الاقتصادية العربية وتم بحث إمكانيات الاستفادة من التجربة الإسكتلندية في مجال تنمية المنشآت الصغيرة والمتوسطة في تطوير الصناعات المشابهة في الوطن العربي.',
          content: '&nbsp;بدعوة من رئيس الاتحاد، عقد لقاء مع المدير الإقليمي لهيئة المعونة الاسكتلندية بحضور الأمين العام لمجلس الوحدة الاقتصادية العربية وممثلي الاتحاد.\n' +
            'هدف اللقاء إلى بحث إمكانيات الاستفادة من التجربة الإسكتلندية في مجال تنمية المنشآت الصغيرة والمتوسطة في تطوير الصناعات المشابهة في الوطن العربي حيث أن الحاجة اليوم ملحة لمثل هذا النوع من المنشآت.\n' +
            'لفت الأمين العام لمجلس الوحدة الاقتصادية العربية إلى أن الاهتمام بالاطلاع على تجارب عالمية في تطوير المنشآت الصغيرة والمتوسطة يعود إلى الحاجة لوضع آلية لتفعيل الصندوق العربي لتمويل المنشآت الصغيرة والمتوسطة الذي تم إنشاؤه في العام الماضي.\n' +
            'وبعد المناقشة تقرر استمرار التواصل بين الإتحاد وهيئة المعونة الإسكتلندية للإعداد للقائين، الأول في القاهرة في غضون شهر مارس المقبل لعدد من الخبراء الإسكتلنديين مع نظرائهم من الجانب المصري والعربي، والثاني في اسكتلندا لمتخصصين من الجانب المصري والعربي للتعرف العملي على التجربة الإسكتلندية على أرض الواقع.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-07-25'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'first-national-awareness-seminar-on-social-responsibility',
    description: 'The Syrian Arab Standards and Metrology Organization held an awareness raising seminar on Social Responsibility Standard (ISO 26000)',
    locale_post: {
      create: [
        {
          title: 'First National Awareness Seminar on Social Responsibility',
          excerpt: 'The Syrian Arab Standards and Metrology Organization held an awareness raising seminar on Social Responsibility Standard (ISO 26000)',
          content: 'Under the patronage of Ministry of Industry in Syria, and in cooperation with the International Standardization Organization (ISO), the Syrian Arab Standard and Metrology Organization (SASMO) held an awareness raising seminar on the Social Responsibility Standard (ISO 26000).\n' +
            'The seminar showed that the social responsibility of corporations is beyond philanthropic activities, and that the Standard is a comprehensive document that includes a definition of Social Responsibility, the principles that must be followed, and the various issues that fall in the areas of these principles.\n' +
            'The seminar also discussed the role of governments in encouraging corporations to implement the Social Responsibility Standard through incentives.\n' +
            'The seminar presented some pilot experiences in applying the SR standard; one is the experience of Madar Aluminum Company (represented by Mr.Hassan Daaboul) which is a member of AFEI.\n' +
            'Downloadable files:\n' +
            'Presentations',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ندوة التوعية الوطنية الأولى للمسؤولية المجتمعية',
          excerpt: 'هيئة المواصفات والمقاييس السورية تعقد ندوة توعية حول المواصفة القياسية للمسؤولية المجتمعية ISO 26000',
          content: 'تحت رعاية وزارة الصناعة وبالتعاون مع منظمة التقييس الدولية ISO عقدت هيئة المواصفات والمقاييس السورية ندوة توعية حول المواصفة القياسية للمسؤولية المجتمعية ISO&nbsp; 26000.\n' +
            'بيّنت الندوة أن المسؤولية الاجتماعية للشركات لا تقتصر على النشاطات الخيرية، وأن المواصفة هي وثيقة شاملة وتتضمن تعريفاً للمسؤولية المجتمعية والمبادئ التي يجب إتباعها والمسائل المختلفة التي تقع في مجالات هذه المبادئ.\n' +
            '&nbsp;كما ناقشت الندوة دور الحكومات في تشجيع الشركات على تطبيق مواصفة المسؤولية المجتمعية من خلال خلق الحوافز اللازمة.\n' +
            'عرضت تجارب وطنية رائدة في تطبيق مواصفة المسؤولية المجتمعية خلال الندوة ومن أبرزها تجربة شركة مدار للألمنيوم (ممثلة بالأستاذ حسان دعبول) وهي من أعضاء الاتحاد.\n' +
            'ملفات للتنزيل:\n' +
            'العروض التقديمية',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-06-28'),
        level: { connect: { id: 3 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'first-private-sector-consultation-meeting',
    description: 'CAEU held a consultation meeting for the private sector to tackle ways of responding to the changing context in the Arab region and the challenge of promoting inter-Arab countries investments.',
    locale_post: {
      create: [
        {
          title: 'First Private Sector Consultation Meeting',
          excerpt: 'CAEU held a consultation meeting for the private sector to tackle ways of responding to the changing context in the Arab region and the challenge of promoting inter-Arab countries investments.',
          content: 'AFEI representative participated in the first consultation meeting for the private sector that was organized by CAEU with the aim to discuss ways of responding to the changing context in the Arab region and the challenge of promoting inter-Arab countries investments.\n' +
            'Representatives of the sectroal federations in the council, and a group of Arab businessmen and investors joined the meeting.\n' +
            'A distinguished idea that was discussed in the meeting is that the issue of unemployment in the Arab countries (especially Egypt) is actually an issue of unskilled workforce; and the solution lies in Education &amp; Training.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الاجتماع التشاوري الأول للقطاع الخاص',
          excerpt: 'عقد مجلس الوحدة الاقتصادية العربية اجتماعاً تشاورياً للقطاع الخاص حول التفاعل مع الأوضاع المتغيرة في الوطن العربي ومحاولة الخروج منها بما يشجع الاستثمارات العربية البينية.',
          content: 'شارك ممثل الاتحاد في الاجتماع التشاوري الأول للقطاع الخاص الذي عقده مجلس الوحدة الاقتصادية العربية بهدف مناقشة سبل التفاعل مع الأوضاع المتغيرة في الوطن العربي ومحاولة الخروج منها بما يشجع الاستثمارات العربية البينية.\n' +
            'حضر الاجتماع ممثلو الاتحادات النوعية في المجلس ومجموعة من رجال الأعمال والمستثمرين العرب.\n' +
            'من أبرز الأفكار التي نوقشت مسألة أن البطالة في الدول العربية (وخاصة مصر) ليست هي المشكلة وإنما هي عدم توفر العمالة الماهرة، والحل يكمن في التعليم والتدريب.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-07-05'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'launching-lm-report-2010-2011-in-syria',
    description: 'AFEI representatives participated in the launching event of the first LM report in Syria which presented data analysis of the supply and demand sides of LM for 2009-2010 and reflected the labor force situation and LM changes. Such information supports decision making at different institutions (especially those concerned with the human resources), setting economic and social (micro/macro) policies, as well as decision making on the implementation level.',
    locale_post: {
      create: [
        {
          title: 'Launching LM Report 2010-2011 in Syria',
          excerpt: 'AFEI representatives participated in the launching event of the first LM report in Syria which presented data analysis of the supply and demand sides of LM for 2009-2010 and reflected the labor force situation and LM changes. Such information supports decision making at different institutions (especially those concerned with the human resources), setting economic and social (micro/macro) policies, as well as decision making on the implementation level.',
          content: 'AFEI representatives participated in the launching event of the first LM report in Syria which presented data analysis of the supply and demand sides of LM for 2009-2010 and reflected the labor force situation and LM changes. Such information supports decision making at different institutions (especially those concerned with the human resources), setting economic and social (micro/macro) policies, as well as decision making on the implementation level.\n' +
            'This study was based on 2 surveys implemented by the Ministry of Social Affairs and Labor (MOSAL) in cooperation with the Central Bureau of Statistics within the framework of the UNDP project "Establishment of a Database for a Comprehensive Labor and Employment Policy in Syria ".\n' +
            'Results showed challenges of priority to be addressed in governmental measures and plans, namely:\n' +
            '1)&nbsp;&nbsp;&nbsp; Constant pressure on the LM and increasing number of the entrants (due to high population growth).\n' +
            '2)&nbsp;&nbsp;&nbsp; Increase in dependency rate.\n' +
            '3)&nbsp;&nbsp;&nbsp; Low economic participation of women.\n' +
            '4)&nbsp;&nbsp;&nbsp; Continuous mismatch between the output of the education system and the LM needs.\n' +
            'Related links:\n' +
            'United Nations Development Program in Syria\n' +
            'Downloadable files\n' +
            'WS Agenda, Presentation',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'إطلاق تقرير سوق العمل 2010-2011 في سورية',
          excerpt: 'شارك ممثلو الاتحاد في ورشة إطلاق تقرير سوق العمل الأول من نوعه في سورية والذي يتضمن تحليلاً لقاعدة بيانات سوق العمل 2009-2010 لجانبي العرض والطلب ويعكس واقع قوة العمل وتغيرات سوق العمل بما يدعم صنع القرار في الجهات المختلفة وخاصة منها المعنية بالقوة البشرية ووضع السياسات الاقتصادية والاجتماعية الكلية والجزئية وكذلك القرارات التنفيذية.',
          content: 'شارك ممثلو الاتحاد في ورشة إطلاق تقرير سوق العمل الأول من نوعه في سورية والذي يتضمن تحليلاً لقاعدة بيانات سوق العمل 2009-2010 لجانبي العرض والطلب ويعكس واقع قوة العمل وتغيرات سوق العمل بما يدعم صنع القرار في الجهات المختلفة وخاصة منها المعنية بالقوة البشرية ووضع السياسات الاقتصادية والاجتماعية الكلية والجزئية وكذلك القرارات التنفيذية.\n' +
            'اعتمدت الدراسة في التقرير على مسحين ميدانيين نفذتهما وزارة الشؤون الاجتماعية والعمل بالتعاون مع المكتب المركزي للإحصاء ضمن إطار مشروع "إنشاء قاعدة بيانات من أجل سياسات شاملة للعمالة والتوظيف" المنفذ بالتعاون مع برنامج الأمم المتحدة الإنمائي.\n' +
            'بينت النتائج التحديات ذات الأولوية في مبادرات وخطط الجهات الحكومية وهي:\n' +
            '1)&nbsp;&nbsp;&nbsp; استمرار الضغوط على سوق العمل وارتفاع عدد الداخلين للسوق (يعزى للنمو السكاني المرتفع)\n' +
            '2)&nbsp;&nbsp;&nbsp; ارتفاع معدل الإعالة\n' +
            '3)&nbsp;&nbsp;&nbsp; ضعف المشاركة الاقتصادية للمرأة\n' +
            '4)&nbsp;&nbsp; استمرار الخلل بين مخرجات التعليم واحتياجات سوق العمل\n' +
            'روابط ذات صلة:\n' +
            'برنامج الأمم المتحدة الإنمائي في سورية\n' +
            'ملفات للتنزيل:\n' +
            'برنامج ورشة العمل، العرض التقديمي',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-07-27'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'national-apprenticeship-committee-meeting',
    description: 'The representatives of the business sector and the Education sector discussed amendments to the third draft of Decree establishing the "National Commission for TVET". The commission is meant to work on making the TVET system flexible and responsive to the changes in the LM.',
    locale_post: {
      create: [
        {
          title: 'National Apprenticeship Committee meeting',
          excerpt: 'The representatives of the business sector and the Education sector discussed amendments to the third draft of Decree establishing the "National Commission for TVET". The commission is meant to work on making the TVET system flexible and responsive to the changes in the LM.',
          content: 'AFEI members from Syria participated -as representatives of the business sector- in the meeting of National Apprenticeship Committee that was dedicated to discuss the necessary amendments on the proposed decree to establish the "National Commission for TVET" from the perspective of employers so that it allows the commission to work on making the TVET system more flexible and responsive to developments in the LM.\n' +
            'Worth noting that the proposal to establish a commission followed years of cooperation between the education and business sectors which enabled partners to get introduced to experiences of other developed countries through the Apprenticeship Project (implemented by ETF) and the Modernization of VET System in Syria Program (proposed 3 scenarios for the commission). So; experience in public-private partnership was built on pilot level before setting the legal and administrative framework needed to effectively serve that partnership.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع اللجنة الوطنية للتلمذة المهنية',
          excerpt: 'بمشاركة ممثلي قطاع الأعمال وقطاع التربية، نوقشت التعديلات على المسودة الثالثة لمقترح مرسوم إنشاء "الهيئة الوطنية للتعليم والتدريب المهني والتقاني" التي ستعنى بجعل منظومة التعليم والتدريب المهني والتقاني مرنة وقادرة على متابعة تطورات سوق العمل',
          content: 'شارك بعض أعضاء الاتحاد من سورية كممثلين عن قطاع الأعمال في اجتماع اللجنة الوطنية للتلمذة المهنية الذي خصص لمناقشة التعديلات المطلوبة على المرسوم المقترح لإنشاء "الهيئة الوطنية للتعليم والتدريب المهني والتقاني" من جانب أصحاب العمل بحيث تسمح للهيئة بالعمل على جعل منظومة التدريب والتعليم المهني والتقاني مرنة وقادرة على متابعة تطورات سوق العمل.\n' +
            'الجدير بالذكر أن اقتراح إنشاء الهيئة المذكورة جاء بعد عدة سنوات من التعاون بين قطاع التربية وقطاع الأعمال التي سمحت بالاطلاع على تجارب العديد من الدول المتقدمة من خلال خبراء مؤسسة التدريب الأوربية التي نفذت مشروع التلمذة الصناعية وخبراء مشروع تحديث التعليم والتدريب المهني الذين ساهموا في وضع ثلاث سيناريوهات للهيئة المقترحة. وبذلك فإن بناء الخبرة في الشراكة بين القطاعين جاء على مستوى تجريبي قبل وضع الإطار التشريعي والإداري اللازم لخدمة هذه الشراكة بفعالية.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-09-30'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'launching-conference-for-tresmed-4-',
    description: 'The conference focused on hot issues in the Arab countries: status of youth and employment, training & youth, and dialogue & social participation of youth and social dialogue.',
    locale_post: {
      create: [
        {
          title: 'Launching conference for TRESMED 4 ',
          excerpt: 'The conference focused on hot issues in the Arab countries: status of youth and employment, training & youth, and dialogue & social participation of youth and social dialogue.',
          content: 'This project -financed by the European Commission- aims to consolidate channels for collaboration and dialogue amongst the organizations representing economic and social interests all over the Euro-Mediterranean region. Present and actively participating in the launch conference were representatives of the Economic &amp; Social Councils (ESCs) of Morocco, Algeria, Lebanon, and Jordan. Also present were organizations representing civil society from Tunisia, Syria (AFEI General Secretary), Egypt and Palestine.\n' +
            'The conference was structured into three main themes &ndash; &ldquo;Young people, training and social dialogue&rdquo;, &ldquo;Women and social dialogue&rdquo; and &ldquo;Good practices in the region and regional cooperation&rdquo;.\n' +
            'The project is working on creating a network between the EU, the countries of the Mediterranean and French-speaking countries to exchange about the reforms, institutional capacity building, and economic growth. Institutionalization of social dialogue is the core of the project activities.\n' +
            'Related links:\n' +
            'TRISMED Website\n' +
            'Downloadable files:\n' +
            'Program (En), Conclusions (En), AFEI report, Presentation from Syria ',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مؤتمر إطلاق مشروع تريسميد 4 ',
          excerpt: 'مؤتمر إطلاق المشروع يركز على مسائل ساخنة في الوطن العربي: وضع الشباب والعمالة، التدريب والشباب، والحوار الاجتماعي ومشاركة الشباب فيه.',
          content: 'هذا المشروع ممول من الاتحاد الأوربي وهو يهدف إلى تطبيع سبل التعاون والحوار بين المنظمات التي تمثل المصالح الإقتصادية والإجتماعية في المنطقة اليورومتوسطية.&nbsp; شارك في مؤتمر إطلاق المشروع ممثلون عن المجالس الاقتصادية والاجتماعية في المغرب والجزائر ولبنان والأردن. كما حضره ممثلون من منظمات غير حكومية في تونس وسورية (الأمين العام للاتحاد) ومصر وفلسطين.\n' +
            'نظم المؤتمر وفق ثلاثة محاور هي: "الشباب والتدريب والحوار الإجتماعي"، "المرأة والحوار الإجتماعي"، "الممارسات الجيدة في المنطقة والتعاون الإقليمي".\n' +
            'المشروع يقوم بالتشبيك بين الاتحاد الأوربي ودول حوض المتوسط والدول المتحدثة بالفرنسية بحيث يمكن التبادل حول الإصلاحات وبناء القدرات المؤسساتية والنمو الاقتصادي حسب تجاوب وتفاعل كل شريك. جوهر العمل في المشروع هو في مأسسة الحوار الاجتماعي.\n' +
            'روابط ذات صلة:\n' +
            'الموقع الإلكتروني لمشروع تريسميد\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج (ع)، نتائج المؤتمر (ع)، التقرير، عرض تقديمي عن تدريب الشباب في سورية',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-10-03'),
        end_on: new Date('2011-10-03'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/0.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/1.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/2.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/3.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/4.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/5.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/6.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/7.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/8.jpg',
          img_alt: 'TRESMED 4 Paris 2011',
          locale_post_image: {
            create: [
              {
                title: 'TRESMED 4 Paris 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ترسميد 4 باريس 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '3rd-german-arab-education-and-vocational-training-forum',
    description: 'Ghorfa & iMove organize the forum as a platform for companies and institutions in the sector of education to expand and strengthen the business relationships and cooperation. ',
    locale_post: {
      create: [
        {
          title: '3rd German-Arab Education and Vocational Training Forum',
          excerpt: 'Ghorfa & iMove organize the forum as a platform for companies and institutions in the sector of education to expand and strengthen the business relationships and cooperation. ',
          content: 'The AFEI Secretary General participated in the forum which was hosted by Ghorfa in cooperation with iMove (an initiative of the German Federal Ministry of Education and Research) and was organized under the patronage of the Federal Minister of Education &amp; Research. The forum is seen as a platform for companies and institutions in the sector of education to expand and strengthen the business relationships and cooperation, and it was attended by over 250 participants from the Arab countries, Germany and Europe.\n' +
            'Prior to the official opening of the forum, some of the attendees took part in a visit to TRAINICO which gave visitors a tour in the training centre.During the two day forum, key speakers from the Arab world and Germany reported on the current state of affairs as well as new projects and trends in the education and vocational training sector.\n' +
            'Related links:\n' +
            'Forum On iMOVE website\n' +
            'Downloadable files:\n' +
            'Flyer, Program, Report, Presentations sessions1, sessions2, sessions3, sessions4',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الملتقى الألماني-العربي الثالث حول التعليم والتدريب المهني',
          excerpt: 'تنظم الغرفة العربية الألمانية للتجارة والصناعة بالتعاون مع مبادرة iMove الملتقى كمنصة للشركات والمؤسسات من قطاع التعليم لتعزيز وتوسيع علاقات الأعمال والتعاون.',
          content: 'شارك الأمين العام للاتحاد العربي للصناعات الهندسية في الملتقى الألماني العربي الثالث حول التعليم والتدريب المهني الذي استضافته الغرفة العربية الألمانية للتجارة والصناعة بالتعاون مع iMove (مبادرة وزارة التعليم والبحث الفيدرالية الألمانية) والذي عقد تحت رعاية وزيرة التعليم والبحث الألمانية. يعتبر هذا الملتقى منصة للشركات والمؤسسات من قطاع التعليم لتعزيز وتوسيع علاقات الأعمال وبناء تعاون مثمر حيث حضر الملتقى مايقارب 250 مشارك من الوطن العربي وألمانيا وأوربا.\n' +
            'قبل الافتتاح الرسمي للملتقى، شارك بعض الحاضرين بزيارة إلى TRAINICO التي وفرت لهم جولة في مركز التدريب المهني لقطاع الطيران.\n' +
            'خلال الملتقى قدم متحدثون رفيعو المستوى وممثلو المؤسسات من ألمانيا والوطن العربي عروضاً حول الواقع الحالي والمشاريع الإبداعية والاتجاهات في هذا المجال.\n' +
            'روابط ذات صلة:\n' +
            'المنتدى على الموقع الإلكتروني لـ iMOVE\n' +
            'ملفات للتنزيل:\n' +
            'المنشور، البرنامج، تقرير المشاركة، العروض التقديمية الجلسة الأولى، الجلسة الثانية، الجلسة الثالثة، الجلسة الرابعة',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-10-06'),
        end_on: new Date('2011-10-07'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-10-06_imove_vet_forum_de/0.jpg',
          img_alt: 'Edu.&Vocational Training Forum 2011',
          locale_post_image: {
            create: [
              {
                title: 'Edu.&Vocational Training Forum 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'Edu.&Vocational Training Forum 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '4th-forum-on-successful-management-practices',
    description: 'The Arab Administrative Development Organization organized the forum in cooperation with the HRD Ministry in Sudan, and JIAD hosted the third day and introduced its experience and partnership with the ministry in the field of training and qualification.',
    locale_post: {
      create: [
        {
          title: '4th Forum on Successful Management Practices',
          excerpt: 'The Arab Administrative Development Organization organized the forum in cooperation with the HRD Ministry in Sudan, and JIAD hosted the third day and introduced its experience and partnership with the ministry in the field of training and qualification.',
          content: 'The forum was organized in cooperation between Arab Administrative Development Organization (ARADO) and the HRD Ministry in Sudan, and attracted broad participation from the Arab countries. Model experiences in the field of successful managerial practices were presented to the audience.\n' +
            'In the third day, after a field visit to GIAD Industrial Group, participants were introduced to the experience of GIAD in implementing total quality system and excellence model.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الملتقى الرابع للممارسات الإدارية الناجحة',
          excerpt: 'نظمت المنظمة العربية للتنمية الإدارية الملتقى بالتعاون مع وزارة تنمية الموارد البشرية في السودان، وجياد تحتضن اليوم الثالث وتقدم تجربتها وشراكتها مع الوزارة في مجال التدريب والتأهيل. ',
          content: 'نظم الملتقى بالتعاون بين المنظمة العربية للتنمية الإدارية ووزارة تنمية الموارد البشرية في السودان. وقد حظي الملتقى بمشاركة واسعة من الدول العربية وقدم تجارب نموذجية لممارسات إدارية ناجحة من الأقطار العربية للحضور.في اليوم الثالث، اطلع المشاركون على تجربة مجموعة جياد الصناعية في تطبيق الجودة الشاملة وجائزة التميز بعد زيارة ميدانية في منشآتها.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-02-21'),
        end_on: new Date('2012-02-23'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '6th-arab-forum-on-smes',
    description: 'AFEI presented a paper to the 6th Arab Forum on SMEs; and the forum recommended working on simplifying the administrative procedures for firms, and establishing & supporting incubators in the Arab countries as a tool for creating job opportunities.',
    locale_post: {
      create: [
        {
          title: '6th Arab Forum on SMEs',
          excerpt: 'AFEI presented a paper to the 6th Arab Forum on SMEs; and the forum recommended working on simplifying the administrative procedures for firms, and establishing & supporting incubators in the Arab countries as a tool for creating job opportunities.',
          content: 'AFEI delegation participated in the 6th Arab Forum on SMEs which tackled the important role of SMEs in employment (the priority in the region currently), the importance of capacity building to support SMEs competitiveness, and some experiences from the Arab countries in developing SMEs.\n' +
            'AFEI presented a paper titled "AFEI approach to supporting SMEs" as an example of a SMEs support programs. The paper highlighted the need for professional/business associations to engage in charity measures only through a specialized organization and transparently in order to earn the trust of the governmental sector.\n' +
            'One of the distinguished ideas discussed was the importance of offering technical support to SMEs alongside the financing. The forum recommended working on simplifying the administrative procedures for firms, and establishing &amp; supporting incubators in the Arab countries as a tool for creating job opportunities.\n' +
            'Related links:\n' +
            'Forum at Tunisian Industry Portal, Arab Industrial Development and Mining Organization\n' +
            'Downloadable files:\n' +
            'Agenda, Brochure, The final statement',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة',
          excerpt: 'الاتحاد يشارك بورقة عمل في الملتقى العربي السادس للصناعات الصغيرة والمتوسطة. والملتقى يوصي بتبسيط الإجراءات الإدارية للمنشآت وبإنشاء ودعم حاضنات المشاريع في البلدان العربية كإحدى الأدوات لخلق فرص العمل',
          content: 'شارك وفد الاتحاد في الملتقى العربي السادس للصناعات الصغيرة والمتوسطة الذي عرض الدور الأهم الذي تلعبه هذه الصناعات في التشغيل (وهو الأولوية في الوطن العربي حالياً)، وأهمية التأهيل لدعم تنافسية هذه الصناعات، وبعض التجارب&nbsp; العربية في تنمية الصناعات الصغيرة والمتوسطة.\n' +
            'قدم الاتحاد ورقة عمل بعنوان "مقاربة الاتحاد العربي للصناعات الهندسية لدعم المنشآت الصغيرة والمتوسطة" كأحد الأمثلة عن برامج دعم وتمويل الصناعات الصغيرة والمتوسطة التي خلصت إلى أن الاتحادات المهنية يجب أن تقوم بالمبادرات الخيرية من خلال منظومة متخصصة وبشفافية وبذلك يمكن أن تكسب ثقة القطاع الحكومي.\n' +
            'من أبرز الأفكار التي تناولها النقاش أهمية تقديم الدعم الفني للصناعات الصغيرة والمتوسطة إلى جانب التمويل. وخلص الملتقى لتوصيات منها العمل على تبسيط الإجراءات الإدارية للمنشآت وإنشاء ودعم حاضنات المشاريع في البلدان العربية كإحدى الأدوات لخلق فرص العمل.\n' +
            'روابط ذات صلة:\n' +
            'ما ذكر في بوابة الصناعة التونسية، المنظمة العربية للتنمية الصناعية والتعدين\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج، البروشور، البيان الختامي',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-04-24'),
        end_on: new Date('2012-04-26'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/0.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/1.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/2.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/3.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/4.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/5.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/6.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/7.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/8.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/9.jpg',
          img_alt: '6th Arab Forum on SMEs - Tunisia',
          locale_post_image: {
            create: [
              {
                title: '6th Arab Forum on SMEs - Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'workshop-on-draft-study-of-the-national-innovation-system-in-syria',
    description: 'The regional gtz project "Promotion of Innovation and Technology for SMEs in the Near East" prepared a study of the National Innovation System in Syria which was presented and discussed during the workshop. The study showed that developing the culture of entrepreneurship and establishing incubators are among the priorities for the development of the NIS in Syria.',
    locale_post: {
      create: [
        {
          title: 'Workshop on draft study of the National Innovation System in Syria',
          excerpt: 'The regional gtz project "Promotion of Innovation and Technology for SMEs in the Near East" prepared a study of the National Innovation System in Syria which was presented and discussed during the workshop. The study showed that developing the culture of entrepreneurship and establishing incubators are among the priorities for the development of the NIS in Syria.',
          content: 'The regional gtz project "Promotion of Innovation and Technology for SMEs in the Near East" prepared a study of the National Innovation System in Syria which was presented and discussed during the workshop.\n' +
            'As the responsible ministry for developing a supportive business environment, the Ministry of Economy and Trade assisted in the organization of this meeting and hosted the workshop.\n' +
            'The NIS study was prepared by the German expert Mr.Seidel who visited Syria during July and conducted interviews with many institutions and individuals in order to assess the NIS in Syria.\n' +
            'The project manager Mrs.Alexandra Hilblig presented the concept of innovation as a base for discussion, then Mr.Seidel presented the methodology of the study and the main findings that are summarized in the following priorities for developing the NIS in Syria:\n' +
            '-&nbsp;Enhancing the national innovation policy in Syria.\n' +
            '-&nbsp;Adopting and implementing a national strategy for Innovation.\n' +
            '-&nbsp;Developing the culture of entrepreneurship.\n' +
            '-&nbsp;Establishing incubators and incubation services to enable the transformation of innovative ideas into competitive products and services\n' +
            'Related links:\n' +
            'Project description on gtz website\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ورشة عمل حول مسودة دراسة منظومة الإبداع الوطنية في سورية',
          excerpt: 'قام المشروع الإقليمي المنفذ من الوكالة الألمانية للتعاون الفني "ترويج الإبداع والتقانة للمنشآت الصغيرة والمتوسطة في الشرق الأدنى" بإعداد مسودة الدراسة لمنظومة الإبداع الوطنية في سورية حيث تم عرضها ومناقشتها خلال الورشة. وقد بينت الدراسة أن نشر ثقافة ريادة الأعمال وإنشاء حاضنات هي من أولويات تطوير منظومة الإبداع في سورية.',
          content: 'قام المشروع الإقليمي المنفذ من الوكالة الألمانية للتعاون الفني "ترويج الإبداع والتقانة للمنشآت الصغيرة والمتوسطة في الشرق الأدنى" بإعداد مسودة الدراسة لمنظومة الإبداع الوطنية في سورية حيث تم عرضها ومناقشتها خلال الورشة\n' +
            'باعتبارها الجهة المسؤولة عن تطوير البيئة المناسبة لدعم قطاع الأعمال، فقد ساهمت وزارة الاقتصاد والتجارة في التحضيرات كما استضافت الورشة.\n' +
            'أجريت الدراسة من قبل الخبير الألماني السيد أوفه زايدل الذي حضر إلى سورية في شهر تموز الفائت وأجرى مقابلات مع العديد من المؤسسات والأشخاص بهدف تقييم منظومة الإبداع الوطنية في سورية.\n' +
            'قدمت مديرة المشروع الإقليمي السيدة ألكساندرا هيلبيغ مفهوم الإبداع وأهميته، ثم قدم السيد زايدل منهجية الدراسة والمكتشفات الأساسية التي تلخصت بالأولويات التالية لتطوير منظومة الإبداع والابتكار في سورية:\n' +
            '- تعزيز سياسة الإبداع الوطنية في سورية\n' +
            '- إعداد وتنفيذ إستراتيجية وطنية للإبداع\n' +
            '- نشر ثقافة ريادة الأعمال\n' +
            '- إنشاء حاضنات وخدمات الحضانة تسمح بتحويل الأفكار المبدعة الى منتجات وخدمات منافسة\n' +
            'روابط ذات صلة:\n' +
            'وصف المشروع على موقع الوكالة الألمانية للتعاون الفني\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-11-18'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/0.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/1.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/2.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/3.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/4.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/5.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/6.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/7.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/8.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/9.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/10.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/11.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/12.jpg',
          img_alt: 'GIZ WS 2009 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ WS 2009 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ورشة عمل giz في 2009 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'regional-seminar-on-strengthening-the-national-innovation-systems',
    description: 'The seminar was organized within the framework of the regional project "Promotion of Innovation and Technology for SMEs in the Near East" which is implemented by gtz. \n' +
      'The seminar hosted selected speakers who introduced approaches to strengthening innovation systems from an international perspective and experiences. Representatives from different institutions responsible of private sector support or innovation policy in the three partner countries (Egypt, Jordan, & Syria) joined the seminar where examples of steps taken towards strengthening the national innovation systems were presented and a chance for exchange amongst participants was provided. \n' +
      'Daaboul Industrial Group (member of AFEI) hosted a field trip for participants in its premises, and presented some innovative practices in its companies.',
    locale_post: {
      create: [
        {
          title: 'Regional Seminar on Strengthening the National Innovation Systems',
          excerpt: 'The seminar was organized within the framework of the regional project "Promotion of Innovation and Technology for SMEs in the Near East" which is implemented by gtz. \n' +
            'The seminar hosted selected speakers who introduced approaches to strengthening innovation systems from an international perspective and experiences. Representatives from different institutions responsible of private sector support or innovation policy in the three partner countries (Egypt, Jordan, & Syria) joined the seminar where examples of steps taken towards strengthening the national innovation systems were presented and a chance for exchange amongst participants was provided. \n' +
            'Daaboul Industrial Group (member of AFEI) hosted a field trip for participants in its premises, and presented some innovative practices in its companies.',
          content: 'The regional gtz project &ldquo;Promotion of Innovation and Technology for SMEs in the Near East&rdquo; promoted this regional exchange over almost two years. It included the analysis of the national innovation systems in the three partner countries (Egypt, Jordan, &amp; Syria) with the objective to identify weaknesses, strengths and concrete opportunities for further intervention.\n' +
            'The seminar provided the opportunity to demonstrate the result of this comparative analysis, as well as &ldquo;good practice&rdquo; insights from other more industrialized countries but especially also the chance to use the presence of the wide variety of experts from the three partner countries to combine their knowledge and learn from each other, and to encourage new ways of interacting and &ldquo;doing&rdquo; innovation promotion.\n' +
            'The seminar invited selected speakers who introduced approaches for strengthening innovation systems from an international perspective and experiences, as well as representatives from different institutions responsible of private sector support or innovation policy in the three partner countries where examples of steps taken towards strengthening the national innovation systems were presented.\n' +
            'DIG (member of AFEI) hosted a field trip for participants in its premises, and presented some innovative practices in its companies.\n' +
            'Related links: Project description on gtz website\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ندوة إقليمية حول تعزيز منظومات الإبداع الوطنية',
          excerpt: 'نفذت الندوة في إطار المشروع الإقليمي الذي تنفذه الوكالة الألمانية للتعان الفني "ترويج الإبداع والتقانة للمنشآت الصغيرة والمتوسطة في الشرق الأدنى". \n' +
            'استضافت الندوة متحدثين مختارين لعرض مقاربات تعزيز منظومات الإبداع من منظور وخبرات عالمية، وجمعت ممثلي الجهات المسؤولة عن تقديم الدعم للقطاع الخاص أو رسم سياسات الإبداع من البلدان الشريكة (مصر والأردن وسورية) حيث عرضت بعض الأمثلة لمبادرات تعزيز المنظومة الوطنية للإبداع وأعطت الفرصة للتبادل بين المشاركين. \n' +
            'استضافت مجموعة دعبول الصناعية (عضو الاتحاد) المشاركين في زيارة ميدانية وقدمت عرضاً حول بعض ممارسات الإبداع في شركاتها.',
          content: 'لقد شجع المشروع الإقليمي الذي تنفذه الوكالة الألمانية للتعاون الفني "ترويج الإبداع والتقانة للمنشآت الصغيرة والمتوسطة في الشرق الأدنى" هذا التبادل على المستوى الإقليمي على مدى سنتين تقريباً ونفذت دراسة لمنظومات الإبداع الوطنية في البلدان الثلاثة الشريكة (مصر والأردن وسورية) بهدف التعرف على نقاط الضعف والقوة والفرص للمداخلات.\n' +
            'وفرت الندوة الفرصة لعرض نتائج دراسة المقارنة ولمحة عن "الممارسات الجيدة" من الدول الصناعية. كما سمحت بالاستفادة من وجود مجموعة واسعة من الخبراء من الدول الثلاثة الشريكة لدمج معارفهم والتعلم من بعضهم وتشجيع طرق جديدة في التفاعل و"الترويج للإبداع".\n' +
            'شارك في الندوة متحدثون مختارون قدموا مقاربات تعزيز منظومات الإبداع من منظور وخبرات عالمية، كما شارك ممثلو الجهات المسؤولة عن تقديم الدعم للقطاع الخاص أو رسم سياسات الإبداع من البلدان الشريكة حيث عرضت بعض الأمثلة لمبادرات تعزيز المنظومة الوطنية للإبداع.\n' +
            'استضافت مجموعة دعبول الصناعية (عضو الاتحاد) المشاركين في جولة ميدانية وقدمت عرضاً حول بعض ممارسات الإبداع في شركاتها.\n' +
            'روابط ذات صلة: وصف المشروع على موقع الوكالة الألمانية للتعاون الفني\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-02-16'),
        end_on: new Date('2010-02-17'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/0.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/1.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/2.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/3.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/4.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/5.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/6.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/7.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/8.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/9.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/10.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/11.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/12.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/13.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/14.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/15.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/16.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/17.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/18.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/19.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/20.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/21.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/22.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/23.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/24.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/25.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/26.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/27.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/28.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/29.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/30.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/31.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/32.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/33.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/34.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/35.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/36.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/37.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/38.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/39.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/40.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/41.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/42.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/43.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/44.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/45.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/46.jpg',
          img_alt: 'GIZ Seminar 2010 Syria',
          locale_post_image: {
            create: [
              {
                title: 'GIZ Seminar 2010 Syria',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'ندوة giz في 2010 - سورية',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '"services-for-innovating-firms"-workshop',
    description: 'A delegation from Syria participated in the workshop that was organized by CMI, EIB, and WBI within the framework of the project "Fostering Innovation". The workshop aimed at introducing the best practices in providing services that the innovating firms need. Participants were senior experts in innovation coming from seven Mediterranean partner countries, therefore, the discussions in the workshop covered wider issues of common interest and deepened to tackle what makes the innovation policy effective in the Mediterranean countries.',
    locale_post: {
      create: [
        {
          title: '"Services for Innovating Firms" workshop',
          excerpt: 'A delegation from Syria participated in the workshop that was organized by CMI, EIB, and WBI within the framework of the project "Fostering Innovation". The workshop aimed at introducing the best practices in providing services that the innovating firms need. Participants were senior experts in innovation coming from seven Mediterranean partner countries, therefore, the discussions in the workshop covered wider issues of common interest and deepened to tackle what makes the innovation policy effective in the Mediterranean countries.',
          content: 'AFEI General Secretary participated in the Syrian delegation to the workshop that was organized by CMI, EIB, and WBI within the framework of the project "Fostering Innovation".\n' +
            'The workshop &ndash;organized on the request of managers of techno-parks and incubators in the Mediterranean partner countries- aimed at introducing the best practices in providing services that the innovating firms need. Participants were senior experts in innovation coming from seven Mediterranean partner countries, therefore, the discussions in the workshop covered wider issues of common interest and deepened to tackle what makes the innovation policy effective in the Mediterranean countries.\n' +
            'AFEI General Secretary presented the Syrian paper that showed the current situation of the innovation in Syria according to the evaluation study carried out in 2010 within the framework of the giz regional project "Promotion of Innovation and Technology for SMEs in the Near East" and identified field and priorities of improvements (esp. entrepreneurship and incubators) and summarized the experiences of different institutions (SEBC, SCS, SSSY) in establishing incubators in Syria.\n' +
            'Downloadable files:\n' +
            'Workshop program\n' +
            'CMI Brochure (en)',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ورشة عمل "خدمات للشركات المبدعة"',
          excerpt: 'شارك وفد سورية في الورشة التي نفذها مركز مرسيليا لتكامل المنطقة المتوسطية CMI والبنك الأوربي للاستثمار EIB ومعهد البنك الدولي  WBI ضمن أنشطة مشروع "تنمية الإبداع". هدف الورشة هي التعرف على أفضل الممارسات في توفير الخدمات التي تحتاجها الشركات المبدعة. كان المشاركون من سبع دول متوسطية شريكة على مستوى عال من الخبرة في مجال الإبداع لذلك فقد شملت المناقشات خلال الورشة مسائل أوسع ذات اهتمام مشترك وتعمقت لبحث جوهر مايجعل سياسة الإبداع فعالة في بلدان المتوسط.',
          content: 'شارك الأمين العام للاتحاد في وفد سورية إلى ورشة العمل التي نفذت بالتعاون بين مركز مرسيليا لتكامل المنطقة المتوسطية CMI والبنك الأوربي للاستثمار EIB ومعهد البنك الدولي&nbsp; WBI ضمن أنشطة مشروع "تنمية الإبداع".\n' +
            'هدفت الورشة- التي نظمت بناءً على طلب مدراء الحاضنات والحدائق التكنولوجية في البلدان المتوسطية الشريكة- للتعرف على أفضل الممارسات في توفير الخدمات التي تحتاجها الشركات المبدعة. كان المشاركون من سبع دول متوسطية شريكة على مستوى عال من الخبرة في مجال الإبداع لذلك فقد شملت المناقشات خلال الورشة مسائل أوسع ذات اهتمام مشترك وتعمقت لبحث جوهر مايجعل سياسة الإبداع فعالة في بلدان المتوسط.\n' +
            'قدم الأمين العام للاتحاد ورقة عمل سورية التي لخصت الوضع الحالي للإبداع في سورية وفق التقييم الذي أجري ضمن إطار مشروع giz الإقليمي "ترويج الإبداع والتقانة للمؤسسات الصغيرة والمتوسطة في الشرق القريب" خلال عام 2010 والذي حدد مجالات التحسين وأولوياتها (ومن بينها الريادة في الأعمال والحاضنات) إضافة لملخص عن خبرات المؤسسات المختلفة (مركز الأعمال والمؤسسات السوري- الجمعية السورية للمعلوماتية- الجمعية الاجتماعية للشباب السوري) في إنشاء حاضنات في سورية.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الورشة\n' +
            'بروشور مركز مرسيليا للتكامل المتوسطي (ع)',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-04-28'),
        end_on: new Date('2011-04-29'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'evaluation-of-smes-support-program-(ssp)-in-syria',
    description: 'A group of experts and representatives of beneficiaries assessed the EU SMEs Support Program accomplishments in supporting the business sector and  supporting the Ministry of Economy and Trade in setting policies and strategies for developing SMEs',
    locale_post: {
      create: [
        {
          title: 'Evaluation of SMEs Support Program (SSP) in Syria',
          excerpt: 'A group of experts and representatives of beneficiaries assessed the EU SMEs Support Program accomplishments in supporting the business sector and  supporting the Ministry of Economy and Trade in setting policies and strategies for developing SMEs',
          content: 'As a representative of the business sector, AFEI General Secretary attended the meeting that was organized by the EU Delegation with the objective to assess the accomplishments of the SMEs Support Program (SSP) financed by the EU.\n' +
            "The representative of&nbsp; the EC pointed out that the objective of this meeting and subsequent meetings is to work on a final evaluation of the SSP which finished its activities mid 2010, and that the evaluation is using multiple criteria based on the inception report, the annual work reports, and the feedback from the private sector about accomplishments. He asserted that the aim is to identify the program's weaknesses in order to avoid them in the next phase.\n" +
            'Representative of the Ministry of Economy and Trade summarized the accomplishments of the program in the field of supporting the business sector (incubation) and supporting the ministry itself on policies/strategies level (awareness raising, and adopting a national definition of SMEs).',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع تقييم برنامج دعم المشاريع الصغيرة والمتوسطة في سورية ',
          excerpt: 'قدمت مجموعة من الخبراء وممثلو الجهات المستفيدة من برنامج الاتحاد الأوربي دعم المنشآت الصغيرة والمتوسطة في سورية تقييمها لإنجازات البرنامج على صعيد دعم قطاع الأعمال وعلى صعيد دعم وزارة الاقتصاد والتجارة في وضع السياسات والاستراتيجيات التطويرية للمشاريع الصغيرة والمتوسطة',
          content: 'بصفته ممثلاً لقطاع الأعمال، حضر الأمين العام للاتحاد الاجتماع الذي نظمته بعثة المفوضية الأوربية بهدف تقييم برنامج دعم المشاريع الصغيرة والمتوسطة الممول من الاتحاد الأوربي.\n' +
            'بدأ ممثل بعثة المفوضية الأوربية بتبيان الهدف من هذا الاجتماع والاجتماعات اللاحقة وهو العمل على إجراء تقييم نهائي لبرنامج دعم المنشآت الصغيرة والمتوسطة الذي أنهى نشاطاته في منتصف 2010، وأن التقييم سيتم باستخدام معايير متعددة اعتماداً على التقرير التمهيدي، وتقارير العمل السنوية، والتغذية الراجعة من القطاع الخاص حول إنجازات البرنامج. والهدف من ذلك هو تحديد مواطن الضعف والعمل على تجنبها للارتقاء بالبرنامج في المرحلة القادمة.\n' +
            'لخصت ممثلة وزارة الاقتصاد والتجارة إنجازات البرنامج على صعيد دعم قطاع الأعمال (الحاضنات) ودعم الوزارة في السياسات والاستراتيجيات (رفع الوعي، اعتماد تعريف وطني للمنشآت الصغيرة والمتوسطة).',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-02-14'),
        level: { connect: { id: 3 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'training-for-trainers-workshop-on-effective-management-of-intellectual-property-assets-for-smes',
    description: "The workshop was organized within the framework of cooperation between the Ministry of Economy and Trade in Syria and the World Intellectual Property Organization (WIPO) with the objective to transfer knowledge and basic skills to trainers in order to provide primary assistance to employers and SMEs which would contribute to enhancing its competitiveness in the local and int'l markets. AFEI coordinated with the Syrian members in nominating representatives of their companies who would become core trainers.\n",
    locale_post: {
      create: [
        {
          title: 'Training for Trainers Workshop on Effective Management of Intellectual Property Assets for SMEs',
          excerpt: "The workshop was organized within the framework of cooperation between the Ministry of Economy and Trade in Syria and the World Intellectual Property Organization (WIPO) with the objective to transfer knowledge and basic skills to trainers in order to provide primary assistance to employers and SMEs which would contribute to enhancing its competitiveness in the local and int'l markets. AFEI coordinated with the Syrian members in nominating representatives of their companies who would become core trainers.\n",
          content: "The workshop was organized within the framework of cooperation between the Ministry of Economy and Trade in Syria and the World Intellectual Property Organization (WIPO) with the objective to transfer knowledge and basic skills to trainers in order to provide primary assistance to employers and SMEs which would contribute to enhancing its competitiveness in the local and int'l markets.\n" +
            'AFEI coordinated with the Syrian members in nominating representatives of their companies who would become core trainers.\n' +
            'Related links:\n' +
            'World Intellectual Property OrganizationSyrian Patent Office New law for patents in Syria',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ورشة عمل تدريب مدربين حول الإدارة الفعالة لأصول الملكية الفكرية لصالح الشركات الصغيرة والمتوسطة',
          excerpt: 'نظمت الدورة في إطار التعاون بين وزارة الاقتصاد والتجارة في سورية والمنظمة العالمية لحماية الملكية (وايبو) بهدف إكساب مدربين المعرفة والمهارات الأساسية لتقديم المساعدة الأولية لأصحاب الأعمال والمنشآت الصغيرة والمتوسطة مما سيساهم في تعزيز قدرتها التنافسية في الأسواق المحلية والدولية.  ساهم الاتحاد في التنسيق مع الأعضاء في سورية لترشيح ممثلين عن شركاتهم ليصبحوا مدربين أساسيين.\n',
          content: 'نظمت الدورة في إطار التعاون بين وزارة الاقتصاد والتجارة في سورية والمنظمة العالمية لحماية الملكية (وايبو) بهدف إكساب مدربين المعرفة والمهارات الأساسية لتقديم المساعدة الأولية لأصحاب الأعمال والمنشآت الصغيرة والمتوسطة مما سيساهم في تعزيز قدرتها التنافسية في الأسواق المحلية والدولية.\n' +
            'ساهم الاتحاد في التنسيق مع الأعضاء في سورية لترشيح ممثلين عن شركاتهم ليصبحوا مدربين أساسيين.\n' +
            'الروابط ذات الصلة:\n' +
            'موقع المنظمة العالمية لحماية حقوق الملكية الفكرية&nbsp;موقع مكتب براءات الاختراع السوريقانون براءات الاختراع في سورية ',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-01-16'),
        end_on: new Date('2011-01-20'),
        level: { connect: { id: 3 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-the-arab-council-for-economic-unity-#94',
    description: 'The Council appreciated the efforts of its general secretariat in preparing the evaluation study of Arab sectoral federations operating under its umbrella and decided to assign the general secretariat the task to review the positions of these federations and their regional offices, and to postpone the publication of the information booklet of the federations until after clearing up the position of some federations.',
    locale_post: {
      create: [
        {
          title: 'Meeting of the Arab Council for Economic Unity #94',
          excerpt: 'The Council appreciated the efforts of its general secretariat in preparing the evaluation study of Arab sectoral federations operating under its umbrella and decided to assign the general secretariat the task to review the positions of these federations and their regional offices, and to postpone the publication of the information booklet of the federations until after clearing up the position of some federations.',
          content: 'Upon invitation from the general secretariat of the CAEU, representatives of AFEI participated in the regular meeting /94/ where the Jordanian representative became the chairman of the Council for the next term.\n' +
            'One of the topics presented to the Council was the evaluation study of Arab sectoral federations working under its umbrella that was conducted by its general secretariat. The Council appreciated the efforts of its general secretariat in preparing the study, and decided to assign to the general secretariat the task to review the position of these federations and their regional offices, and to postpone the publication of the information booklet of the federations until after clarifying the position of some federations.\n' +
            'Related links:\n' +
            'Study of Arab sectoral federations',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الاجتماع /94/ لمجلس الوحدة الاقتصادية العربية',
          excerpt: 'ثمن المجلس جهود أمانته العامة في إعداد الدراسة التقييمية للاتحادات العربية النوعية المتخصصة العاملة في نطاقه، وقرر تكليف الأمانة العامة بدراسة موقف الاتحادات ومكاتبها الإقليمية وإرجاء تنفيذ الكتاب التعريفي للاتحادات لحين البت في موقف بعضها.',
          content: 'بناءً على دعوة الأمانة العامة لمجلس الوحدة الاقتصادية العربية شارك ممثلي الاتحاد في اجتماع المجلس الدوري /94/ حيث تسلمت المملكة الأردنية الهاشمية رئاسة المجلس للدورة القادمة. من أبرز المواضيع التي عرضت على المجلس الدراسة التقييمية للاتحادات العربية النوعية المتخصصة العاملة في نطاقه التي نفذتها الأمانة العامة للمجلس. وقد ثمن المجلس جهود أمانته العامة في إعداد الدراسة، وقرر تكليف الأمانة العامة بدراسة موقف الاتحادات ومكاتبها الإقليمية وإرجاء تنفيذ الكتاب التعريفي للاتحادات لحين البت في موقف بعضها.\n' +
            'روابط ذات صلة:\n' +
            'الدراسة التقييمية للاتحادات العربية النوعية المتخصصة',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-06-07'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '4th-meeting-of-mena-oecd-working-group-2-on-sme-policy,-entrepreneurship-and-human-capital-development',
    description: 'The meeting was held within the framework of the MENA-OECD Investment Program, and in cooperation with the Ministry of International Cooperation & Development in Tunisia, around the topic "Beyond the crisis: Supporting Young Enterprise". The focus was on revising SMEs and Entrepreneurship policies, and fields of support for SMEs in the startup phase (training, financing, incubation). Required policy tools to facilitate the process of transformation from young to growing enterprises were explained.',
    locale_post: {
      create: [
        {
          title: '4th meeting of MENA-OECD Working Group 2 on SME Policy, Entrepreneurship and Human Capital Development',
          excerpt: 'The meeting was held within the framework of the MENA-OECD Investment Program, and in cooperation with the Ministry of International Cooperation & Development in Tunisia, around the topic "Beyond the crisis: Supporting Young Enterprise". The focus was on revising SMEs and Entrepreneurship policies, and fields of support for SMEs in the startup phase (training, financing, incubation). Required policy tools to facilitate the process of transformation from young to growing enterprises were explained.',
          content: 'The meeting, &ldquo;Beyond the crisis: Supporting Young Enterprise&rdquo;, examined the role of direct and indirect policies to support entrepreneurs through their first three years of development.\n' +
            'Hosted by the OECD in partnership with the Tunisian Ministry of Development and International Cooperation, the event brought together dignitaries and distinguished speakers, and high-level experts, and private sector representatives from MENA and OECD countries. Over 100 policy-makers, representatives of international organizations, local stakeholders and the donor community met to debate how public policy can promote entrepreneurship and support young enterprises in the MENA region.\n' +
            'The meeting enclosed a review of Entrepreneurs and SMEs policies, and It also included a round table discussion, where the delegates of the Working Group presented the last developments in the policies of SMEs.\n' +
            'Sessions on the second day revolved around the role of public policy in influencing the choices of individuals to undertake venture entrepreneurship, and discussed in detail the areas of assistance that can be made in the establishment phase such as training activities, special services at the local level, schemes of finance, incubators, and accompanied programs. The last two sessions discussed the special needs in the phase of establishment of innovative SMEs which require a different set of supportive measures in both the public and private sectors to meet the technical difficulties and financial constraints. They also included an explanation of required policy tools to facilitate the process of transformation from young enterprises to growing enterprises.\n' +
            'Related links:\n' +
            'Investment project, Event on the OECD Website\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اللقاء الرابع لمجموعة عمل MENA-OECD حول سياسات المنشآت الصغيرة والمتوسطة، وريادة الأعمال، وتنمية الموارد البشرية',
          excerpt: 'في إطار برنامج منظمة التعاون الاقتصادي والتنمية في دول الشرق الأوسط وشمال أفريقيا للاستثمار وبالتعاون مع وزارة التعاون الدولي والتنمية في تونس، تم تنظيم اللقاء الرابع لمجموعة العمل الثانية المختصة بسياسات المنشآت الصغيرة والمتوسطة وريادة الأعمال وتنمية الموارد البشرية تحت عنوان "مابعد الأزمة: سياسات لدعم المنشآت الفتية". ركز اللقاء على مراجعة السياسات المتعلقة بتطوير المنشآت الصغيرة والمتوسطة وريادة الأعمال، ومجالات الدعم الذي يمكن تقديمه لهم في مرحلة التأسيس مثل التدريب والتمويل والحاضنات. كما قدم شرح عن أدوات السياسات اللازمة لتسهيل عملية تحول المنشآت من منشآت فتية إلى نامية.',
          content: 'بحث الاجتماع "مابعد الأزمة: دعم المشاريع الفتية" دور السياسات المباشرة وغير المباشرة في دعم رواد الأعمال خلال السنوات الثلاثة الأولى من تطوير منشآتهم.\n' +
            'ضم هذا النشاط الذي استضافته منظمة التعاون الاقتصادي والتنمية في دول الشرق الأوسط وشمال افريقيا MENA OECD بالتعاون مع وزارة التعاون الدولي والتنمية في تونس كبار الشخصيات والمتحدثين المرموقين والخبراء رفيعي المستوى من بلدان الشرق الأوسط وممثلي القطاع الخاص من دول المتوسط. التقى أكثر من مئة من صناع القرار وممثلي المنظمات الدولية والجهات المعنية المحلية والجهات المانحة لمناقشة كيف يمكن للسياسات العامة أن تشجع ريادة الأعمال وتقدم الدعم للمنشآت الفتية في منطقة حول المتوسط.\n' +
            'تضمن اللقاء مراجعة للسياسات المتعلقة برواد الأعمال وبالمنشآت الصغيرة والمتوسطة. كما تضمن نقاشات طاولة مستديرة، حيث عرض فيها ممثلو مجموعة العمل آخر التطورات الحاصلة في سياسات المنشآت الصغيرة والمتوسطة.\n' +
            'دارت جلسات اليوم الثاني حول الدور الذي تلعبه السياسات العامة في التأثير على خيارات الأفراد في خوض مجازفات ريادية ، كما تناولت بشيء من التفصيل مجالات المساعدات التي يمكن تقديمها للمنشآت في مرحلة التأسيس كأنشطة التدريب، الخدمات المتخصصة على المستوى المحلي، التمويل، الحاضنات، والبرامج المرافقة.\n' +
            'دار الحديث في الجلستين الأخيرتين حول الاحتياجات الخاصة في مرحلة تأسيس مشاريع إبداعية (التي تتطلب مجموعة مختلفة من الإجراءات الداعمة في المجالين العام والخاص لتلبية الصعوبات الفنية والمالية التي تواجهها المشاريع الإبداعية)، وتضمنت شرحاً عن أدوات السياسة المطلوبة لتسهيل عملية تحول المنشآت من منشآت فتية إلى منشآت نامية.\n' +
            'روابط ذات صلة:\n' +
            'الموقع الإلكتروني لمشروع الإستثمار، ورشة العمل على الموقع الإلكتروني لمنظمة التعاون الاقتصادي والتنمية في دول الشرق الأوسط وشمال افريقيا\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-03-29'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2010-03-29_oecd_wg_on_sme_tn/0.jpg',
          img_alt: '4th meeting of MENA-OECD WG, Tunisia',
          locale_post_image: {
            create: [
              {
                title: '4th meeting of MENA-OECD WG, Tunisia',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اللقاء الرابع لمجموعة عمل MENA-OECD  في تونس',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'bod-meeting-of-the-arab-iron-&-steel-union',
    description: 'AFEI Representative participated in the BOD meeting of the Arab Iron & Steel Union as an observer. The BOD got updated about impacts of the political situations on the iron and steel manufacturers in Libya, Egypt, and Syria. It was agreed to hold the next BOD meeting in Tunisia. After the meeting, guests were invited to a field visit to the new facilities of SULB factory in Al-Had industrial zone.',
    locale_post: {
      create: [
        {
          title: 'BOD Meeting of the Arab Iron & Steel Union',
          excerpt: 'AFEI Representative participated in the BOD meeting of the Arab Iron & Steel Union as an observer. The BOD got updated about impacts of the political situations on the iron and steel manufacturers in Libya, Egypt, and Syria. It was agreed to hold the next BOD meeting in Tunisia. After the meeting, guests were invited to a field visit to the new facilities of SULB factory in Al-Had industrial zone.',
          content: 'Upon invitation from the Arab Iron &amp; Steel Union, AFEI representative attended the BOD meeting no. 104.\n' +
            'The board got updates from its members about the impact of the political situations on the manufacturers in Libya, Egypt, and Syria.\n' +
            'AISU BOD discussed about the reluctance of some members to pay membership fees, and decided to discuss suggestions to handle this issue from members through email, then to amend the bylaw accordingly.\n' +
            'It was agreed to hold the next BOD meeting in Tunisia on Nov. 2012.\n' +
            'The final activity was a field visit to the new facilities of SULB factories in Al-Had industrial zone.\n' +
            'Downloadable files:\n' +
            'Program, Press release',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب',
          excerpt: 'شارك ممثل الاتحاد العربي للصناعات الهندسية في اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب بصفته عضواً مراقباً. اطلع المجلس على تأثير الظروف السياسية على مصانع الحديد والصلب في ليبيا ومصر وسورية، وأقر عقد اجتماعه القادم في تونس. بختام الاجتماع، دعي الضيوف إلى زيارة ميدانية لمنشآت مصنع SULB  التي بنيت حديثاً في منطقة الحد الصناعية.',
          content: 'بدعوة من الاتحاد العربي للحديد والصلب، حضر ممثل الاتحاد العربي للصناعات الهندسية اجتماع مجلس الإدارة الدوري رقم /104/.\n' +
            'اطلع المجلس من أعضائه على تأثير التغيرات السياسية على مصانع الحديد والصلب في ليبيا ومصر وسورية.\n' +
            'تداول المجلس مسألة عزوف بعض الأعضاء عن متابعة سداد رسوم العضوية وقرر مناقشة مقترحات الأعضاء عبر البريد الإلكتروني لمعالجة هذه المسألة ومن ثم تعديل النظام الأساسي للاتحاد على ضوء ذلك.\n' +
            'تقرر عقد الاجتماع القادم للمجلس في تونس خلال شهر تشرين الثاني 2012.\n' +
            'اختتمت الاجتماعات بزيارة ميدانية إلى منشآت مصنع SULB&nbsp; التي بنيت حديثاً في منطقة الحد الصناعية.\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج، نشرة صحفية',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-05-14'),
        end_on: new Date('2012-05-15'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'launching-meeting-the-restructuring-and-modernization-of-the-standardization-system-in-syria',
    description: 'The meeting identified the main challenges (legislative, administrative, organizational) facing the restructuring of the Standardization system, and presented the transition plan and change management to establish a national standardization system that is oriented towards market and customers and actively participating in standardization activities on the regional and international levels.',
    locale_post: {
      create: [
        {
          title: 'Launching meeting: the Restructuring and Modernization of the Standardization System in Syria',
          excerpt: 'The meeting identified the main challenges (legislative, administrative, organizational) facing the restructuring of the Standardization system, and presented the transition plan and change management to establish a national standardization system that is oriented towards market and customers and actively participating in standardization activities on the regional and international levels.',
          content: 'AFEI Secretary General participated in the meeting that was organized by the EU program "Strengthening the Quality Management, Capabilities, and Infrastructure" to launch the initiative of restructuring and modernization of the standardization system in Syria.\n' +
            'Presenters asserted that the standardization system supports national authorities in protecting the public interest (health and safety of citizens, animals, and the environment ...etc) through determining an acceptable safety level of products and providing a basis for market surveillance. It also supports the regional and international trade (passports for free movement of goods).\n' +
            'Presentations also showed that standardization strengthens fair competition -through avoiding dumping the market with goods- and increases competition in goods through avoiding the multiplicity of tests and certification of the product. In addition, standardization defines a common basis of the product specifications for authorities, traders and consumers.\n' +
            'The program manager identified the main challenges (legislative, administrative, organizational) facing the restructuring of the Standardization system, and presented the transition plan and change management to establish a national standardization system that is oriented towards market and customers and actively participating in the standardization activities on the regional and international levels.\n' +
            'Related links:\n' +
            'Quality Syria Website\n' +
            'Downloadable files:\n' +
            'Program',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع إطلاق إعادة هيكلة وتحديث منظومة المواصفات القياسية في سورية',
          excerpt: 'استعرض الاجتماع التحديات الأساسية التي تواجه تطبيق نظام المواصفات القياسية كتلك التشريعية والإدارية والتنظيمية، وخطة التحول وإدارة التغيير للوصول لهيئة تقييس وطنية متخصصة وموجّهة نحو السوق والزبائن وتشارك بشكل فاعل في أنشطة التقييس على مستوى إقليمي ودولي.',
          content: 'شارك الأمين العام للاتحاد في الاجتماع الذي نظمه برنامج الاتحاد الأوربي "تعزيز إدارة الجودة وقدراتها وبنياتها التحتية" لإطلاق مبادرة إعادة هيكلة وتحديث منظومة المواصفات في سورية.\n' +
            'أكد المحاضرون على أن نظام التقييس يدعم الجهات الوطنية في حماية المصالح العامة (صحة وسلامة المواطنين والحيوانات والبيئة...الخ) من خلال تحديد مستوى مقبول من السلامة للمنتجات وتوفير أساس لمراقبة السوق، كما أنه يدعم التجارة الإقليمية والدولية (جوازات سفر من أجل الانتقال الحر للبضائع).\n' +
            'كما بينت العروض أن التقييس يعزز عدالة المنافسة من خلال المساهمة في تجنب إغراق السوق بالسلع، ويعزز تنافسية البضائع من خلال تجنب تعدد الاختبارات والشهادات للمنتج. كما أنه يحدد الأساس المشترك لمواصفات المُنتَج لكلٍ من السلطات والتجار والمستهلكين.\n' +
            'استعرضت مديرة البرنامج التحديات الأساسية التي تواجه تطبيق نظام المواصفات القياسية كتلك التشريعية والإدارية والتنظيمية، وخطة التحول وإدارة التغيير للوصول لهيئة تقييس وطنية متخصصة موجّهة نحو السوق والزبائن وتشارك بشكل فاعل في أنشطة التقييس على مستوى إقليمي ودولي.\n' +
            'روابط ذات صلة:\n' +
            'الموقع الالكتروني للجودة في سورية\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-07-15'),
        level: { connect: { id: 3 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'launching-conference-of-the-regional-project-"social-partnership-in-vet-in-the-southern-and-eastern-mediterranean-region"',
    description: 'The conference clarified the methodology of the regional project (implemented by ETF)  which aims at contributing to strengthening the role of social partners in VET focusing on institutional capacity building of employers organizations and trade unions engaged in VET in neighboring countries of the Southern and Eastern Mediterranean region.\n' +
      'Participating countries decided that the focus of the project will be on the continuing vocational training (CVT), i.e. the training of the employed and those seeking employment, which enables dealing with unemployed youth as they constitute a considerable proportion of overall unemployment in the region.\n',
    locale_post: {
      create: [
        {
          title: 'Launching conference of the regional project "Social Partnership in VET in the Southern and Eastern Mediterranean Region"',
          excerpt: 'The conference clarified the methodology of the regional project (implemented by ETF)  which aims at contributing to strengthening the role of social partners in VET focusing on institutional capacity building of employers organizations and trade unions engaged in VET in neighboring countries of the Southern and Eastern Mediterranean region.\n' +
            'Participating countries decided that the focus of the project will be on the continuing vocational training (CVT), i.e. the training of the employed and those seeking employment, which enables dealing with unemployed youth as they constitute a considerable proportion of overall unemployment in the region.\n',
          content: 'The conference clarified the methodology of the regional project (implemented by ETF)&nbsp; which aims at contributing to strengthening the role of social partners in VET focusing on institutional capacity building of employers organizations and trade unions engaged in VET in neighboring countries of the Southern and Eastern Mediterranean region.\n' +
            'Participating countries decided that the focus of the project will be on the continuing vocational training (CVT), i.e. the training of the employed and those seeking employment, which enables dealing with unemployed youth as they constitute a considerable proportion of overall unemployment in the region.\n' +
            'ETF will support each country following a common path in six steps:\n' +
            '1) Awareness raising on the role of social partners\n' +
            '2) Awareness raising on the importance of working together\n' +
            '3) Mapping the role of Social Partners in VET in partner countries\n' +
            '4) Definition of an agreed framework for cooperation\n' +
            '5) Definition of common position papers in a specific topic\n' +
            '6) Definition of common action plan in a specific topic linked to continuing training\n' +
            'In countries where Social Partners have no or very limited experience in dealing with VET issues, the ETF&rsquo;s work will probably focus on the first three steps. In countries where social partners have already experience in cooperating with VET issues, the ETF could start from working at step 4 facilitating a more technical work on a specific topic.\n',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مؤتمر إطلاق المشروع الإقليمي "الشراكة الاجتماعية في مجال التعليم والتدريب المهني في منطقة جنوب وشرق المتوسط" ',
          excerpt: 'أوضح  المؤتمر منهجية المشروع الإقليمي الذي تنفذه مؤسسة التدريب الأوربية والذي يهدف للمساهمة في تقوية دور الشركاء الاجتماعيين في التعليم والتدريب المهني حيث سيركز المشروع على بناء قدرات منظمات أصحاب الأعمال واتحادات العمال المنخرطة في التعليم والتدريب المهني في بلدان حوض المتوسط. \n' +
            'قررت البلدان الشريكة أن يركز المشروع على التدريب المهني المستمر أي تدريب العمال على رأس عملهم والباحثين عن عمل وهذا يسمح بمعالجة بطالة الشباب التي تشكل نسبة كبيرة من المتعطلين في المنطقة.\n',
          content: 'أوضح المؤتمر منهجية المشروع الإقليمي الذي تنفذه مؤسسة التدريب الأوربية والذي يهدف للمساهمة في تقوية دور الشركاء الاجتماعيين في التعليم والتدريب المهني حيث سيركز المشروع على بناء قدرات منظمات أصحاب الأعمال واتحادات العمال المنخرطة في التعليم والتدريب المهني في بلدان حوض المتوسط. كما سيعنى المشروع بالتدريب المهني المستمر بمفهوم أي بتدريب العمال على رأس عملهم والباحثين عن عمل وهذا يسمح بمعالجة بطالة الشباب التي تشكل نسبة كبيرة من المتعطلين في المنطقة.\n' +
            'سيقوم خبراء مؤسسة التدريب الأوربية بتقديم الدعم لكل بلد على حدى للتقدم على مسار محدد من /6/ خطوات:\n' +
            '1.&nbsp;&nbsp;&nbsp; التوعية بخصوص دور الشركاء الاجتماعيون\n' +
            '2.&nbsp;&nbsp;&nbsp; التوعية بخصوص أهمية العمل معاً (التعاون)\n' +
            '3.&nbsp;&nbsp;&nbsp; تحليل تفاصيل إشراك الشركاء الاجتماعيون في صياغة سياسات التعليم والتدريب المهني وتنفيذها\n' +
            '4.&nbsp;&nbsp;&nbsp; تحديد إطار تعاون متفق عليه\n' +
            '5.&nbsp;&nbsp;&nbsp; تحديد الموقف المشترك بخصوص مسائل مختارة وتوثيقه في أوراق عمل\n' +
            '6.&nbsp;&nbsp;&nbsp; وضع خطة عمل مشتركة لموضوع محدد في التدريب المستمر\n' +
            'في البلدان التي تمتلك خبرة محدودة في الشراكة الاجتماعية في التعليم والتدريب المهني على الأرجح ستعمل مؤسسة التدريب الأوربية على الخطوات الثلاثة الأولى فقط. وفي البلدان التي لدى الشركاء الاجتماعيون فيها خبرة بالتعاون في مسائل التعليم والتدريب المهني، تستطيع مؤسسة التدريب الأوربية أن تبدأ العمل من الخطوة الرابعة وهذا يسهل العمل فنياً على موضوع محدد.\n' +
            'روابط ذات صلة\n' +
            'المشروع على الموقع الإلكتروني لمؤسسة التدريب الأوروبية\n' +
            'ملفات للتنزيل:\n' +
            'البرنامج',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-07-18'),
        end_on: new Date('2011-07-19'),
        level: { connect: { id: 5 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-07-18_etf_social_partnership_conf/0.jpg',
          img_alt: 'Social Partnership in VET - Italy 2011',
          locale_post_image: {
            create: [
              {
                title: 'Social Partnership in VET - Italy 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الشراكة الاجتماعية في مجال التعليم والتدريب المهني - إيطاليا 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2011-07-18_etf_social_partnership_conf/1.jpg',
          img_alt: 'Social Partnership in VET - Italy 2011',
          locale_post_image: {
            create: [
              {
                title: 'Social Partnership in VET - Italy 2011',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'الشراكة الاجتماعية في مجال التعليم والتدريب المهني - إيطاليا 2011',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'project-for-setting-the-national-policy-for-science,-technology,-and-innovation-in-syria-1',
    description: 'In March 2010, the Higher Commission for Scientific Research (HCSR) started the implementation of activities within its project for "Setting the national policy for science, technology, and innovation in Syria". AFEI General Secretary participated in meetings and activities of the "Industry sector committee" as a representative of the business sector, and contributed with a paper on the AFEI vision for science, technology, and innovation policy in the engineering sector. The committee presented its proposal which was discussed in a workshop on 23/12/2010 with participation of the AFEI General Secretary and consultant from AFEI Damascus Office.',
    locale_post: {
      create: [
        {
          title: 'Project for setting the National Policy for Science, Technology, and Innovation in Syria',
          excerpt: 'In March 2010, the Higher Commission for Scientific Research (HCSR) started the implementation of activities within its project for "Setting the national policy for science, technology, and innovation in Syria". AFEI General Secretary participated in meetings and activities of the "Industry sector committee" as a representative of the business sector, and contributed with a paper on the AFEI vision for science, technology, and innovation policy in the engineering sector. The committee presented its proposal which was discussed in a workshop on 23/12/2010 with participation of the AFEI General Secretary and consultant from AFEI Damascus Office.',
          content: 'In March 2010, the Higher Commission for Scientific Research (HCSR) started the implementation of activities within its project for "Setting the national policy for science, technology, and innovation in Syria". Since its beginning, AFEI General Secretary has been involved in this project as one of the representatives of business sector.\n' +
            'Activities started with distributing a questionnaire to various institutions concerned with setting and implementing the national policy for science, technology and innovation with the objective to assess the development sectors according to specific criteria (economic, scientific, social, and strategic significance) and the impact of research topics on each sector in order to define priority topics for research and development. Then, on2/3/2010, a workshop was organized with participation of a large number of researchers and business sector representatives where priorities of scientific research were discussed. Based on the results of the questionnaire, the priority sectors were defined (energy, agriculture, industry, water, health, communication, and capacity building); HCSR board of directors then added the "environment" to priority sectors.\n' +
            'Sectoral committees were established with a resolution of the prime minister and assigned the task of analyzing the status-quo of each sector, examining the future trends in it, and offering proposals for developing the sector through scientific research and technological development in harmony with priorities adopted for the sector and the 11th Five Year Plan. AFEI General Secretary participated in meetings and activities of the "Industry sector committee" as a representative of the business sector, and contributed with a paper on the AFEI vision for science, technology, and innovation policy in the engineering sector. The committee presented its proposal which was discussed in a workshop on 23/12/2010 with participation of the AFEI General Secretary and consultant from AFEI Damascus Office.\n',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مشروع رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية',
          excerpt: 'في آذار/مارس 2010، بدأت الهيئة العليا للبحث العلمي تنفذ أنشطة ضمن مشروعها لرسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية. شارك الأمين العام للاتحاد في اجتماعات ونشاطات لجنة "قطاع الصناعة" كممثل لقطاع الأعمال كما قدم مقترح الاتحاد لرؤية السياسة الوطنية للعلوم والتقانة والابتكار في قطاع الصناعات الهندسية لهذه اللجنة. قدمت لجنة قطاع الطاقة مقترحاتها ونوقشت في ورشة عمل بتاريخ 23/12/2010 بمشاركة الأمين العام للاتحاد والاستشارية لدى مكتب الاتحاد بدمشق.',
          content: 'في آذار/مارس 2010، بدأت الهيئة العليا للبحث العلمي تنفذ أنشطة ضمن مشروعها لرسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية. ويشارك الأمين العام للاتحاد بصفته أحد ممثلي قطاع الأعمال في هذه المبادرة منذ إطلاقها.\n' +
            'استهلت الأنشطة بتوزيع استبيان على المعنيين في الجهات والمؤسسات المختلفة المعنية بوضع وتنفيذ السياسة الوطنية للعلوم والتقانة والابتكار بهدف تقييم القطاعات التنموية وفق معايير محددة (الأهمية الاقتصادية، العلمية، الاجتماعية، الاستراتيجية) وتأثير المواضيع البحثية على كل قطاع وصولاً لتحديد مواضيع البحث والتطوير ذات الأولوية. ثم عقدت ورشة عمل شارك فيها عدد كبير من الباحثين المختصين وممثلو قطاع الأعمال لمناقشة أولويات البحث العلمي في 2/3/2010. تم تحديد القطاعات ذات الأولوية وفق نتائج الاستبيان (الطاقة- الزراعة- الصناعة- المياه- الصحة- الاتصالات- بناء القدرات التمكينية) وأقر مجلس إدارة الهيئة إضافة قطاع البيئة إلى القطاعات ذات الأولوية.\n' +
            'تم تشكيل لجان قطاعية بقرار من رئيس مجلس الوزراء مهمتها تحليل الواقع الراهن للقطاع ودراسة توجهات العمل المستقبلية فيه وتقديم المقترحات لتطوير القطاع من خلال توظيف البحث العلمي والتطوير التقاني بما يتوافق مع الأولويات المعتمدة للقطاع والخطة الخمسية الحادية عشرة. ولقد شارك الأمين العام للاتحاد في اجتماعات ونشاطات لجنة "قطاع الصناعة" كممثل لقطاع الأعمال كما قدم مقترح الاتحاد لرؤية السياسة الوطنية للعلوم والتقانة والابتكار في قطاع الصناعات الهندسية لهذه اللجنة. قدمت لجنة قطاع الطاقة مقترحاتها ونوقشت في ورشة عمل بتاريخ 23/12/2010 بمشاركة الأمين العام للاتحاد والاستشارية لدى مكتب الاتحاد بدمشق.\n' +
            'روابط ذات صلة:\n' +
            'موقع الهيئة العليا للبحث العلمي على الإنترنتالأنشطة اللاحقة للمشروع خلال عام 2011',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2010-03-01'),
        end_on: new Date('2010-12-31'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'project-for-setting-the-national-policy-for-science,-technology,-and-innovation-in-syria-2',
    description: 'The Higher Commission for Scientific Research (HCSR) continued its project "Setting the national policy for science, technology, and innovation in Syria", and promoted the Scientific Research Information System that it established on its website. A "Scientific, advisory, specialized committee in the industry sector" was established under the umbrella of HCSR, and AFEI General secretary is participating as a representative of the business sector. ',
    locale_post: {
      create: [
        {
          title: 'Project for setting the National Policy for Science, Technology, and Innovation in Syria',
          excerpt: 'The Higher Commission for Scientific Research (HCSR) continued its project "Setting the national policy for science, technology, and innovation in Syria", and promoted the Scientific Research Information System that it established on its website. A "Scientific, advisory, specialized committee in the industry sector" was established under the umbrella of HCSR, and AFEI General secretary is participating as a representative of the business sector. ',
          content: 'The Higher Commission for Scientific Research (HCSR) continued its project "Setting the national policy for science, technology, and innovation in Syria", and promoted the Scientific Research Information System that it established on its website.\n' +
            'With a resolution of the prime minister, a "Scientific, advisory, specialized committee in the industry sector" was established under the umbrella of HCSR, and AFEI General secretary is participating as a representative of the business sector. In summary, the committee is a platform for coordination amongst HCSR and represented institutions which will contribute in examining issues and topics related to the industry sector from a research and technology perspective, as well as in following up the implementation of project resolutions related to the industry sector.\n' +
            'Related links:\n' +
            'HCSR websiteScientific Research Information System websiteActivities of this project in 2011 ',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مشروع رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية',
          excerpt: 'تابعت الهيئة العليا للبحث العلمي مبادرة "رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية"، حيث روجت لـ"نظام معلومات البحث العلمي" الذي أنشأته على موقعها على الإنترنت. تم تشكيل "لجنة علمية استشارية تخصصية في مجال الصناعة" تحت مظلة الهيئة بمشاركة الأمين العام للاتحاد كممثل عن قطاع الأعمال.',
          content: 'تابعت الهيئة العليا للبحث العلمي مبادرة "رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية"، حيث روجت لـ"نظام معلومات البحث العلمي" الذي أنشأته على موقعها على الإنترنت.\n' +
            'بقرار من رئيس مجلس الوزراء تم تشكيل "لجنة علمية استشارية تخصصية في مجال الصناعة" تحت مظلة الهيئة بمشاركة الأمين العام للاتحاد كممثل عن قطاع الأعمال. تتلخص مهام اللجنة في كونها المنصة للتنسيق بين الهيئة وبين الجهات الممثلة في اللجنة وستساهم في دراسة القضايا والموضوعات التي تتعلق بقطاع الصناعة من منظور بحثي وتقاني وكذلك في متابعة تنفيذ قرارات المشروع بما يخص قطاع الصناعة.\n' +
            'روابط ذات صلة:\n' +
            'موقع الهيئة العليا للبحث العلمي على الإنترنتموقع نظام معلومات البحث العلمي على الإنترنتالأنشطة السابقة للمشروع خلال عام 2011',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-01-01'),
        end_on: new Date('2012-12-31'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-egyptian-bod-members-1',
    description: 'In preparation for the upcoming meeting of the AFEI General Assembly, Egyptian members in AFEI held a meeting to discuss the current issues within the federation. The agenda included a discussion on how to implement the new vision of AFEI, a presentation of the new website of AFEI, and a discussion on means for activating AFEI members as well as attracting new members of those supporting the development initiatives.',
    locale_post: {
      create: [
        {
          title: 'Meeting of Egyptian BOD members',
          excerpt: 'In preparation for the upcoming meeting of the AFEI General Assembly, Egyptian members in AFEI held a meeting to discuss the current issues within the federation. The agenda included a discussion on how to implement the new vision of AFEI, a presentation of the new website of AFEI, and a discussion on means for activating AFEI members as well as attracting new members of those supporting the development initiatives.',
          content: 'In preparation for the upcoming meeting of the AFEI General Assembly, and with the objective to discuss internal issues, Egyptian members in AFEI held a meeting that was moderated by the Assistant Secretary General. The consultant from AFEI Regional Office in Damascus joined the meeting.\n' +
            'The agenda covered the following issues:\n' +
            '-&nbsp;&nbsp;&nbsp; Discussion on how to implement the new vision of AFEI.\n' +
            '-&nbsp;&nbsp;&nbsp; Discussion on means for activating AFEI members as well as attracting new members of those supporting the development initiatives.\n' +
            '-&nbsp;&nbsp;&nbsp; A presentation of the new website of AFEI.\n' +
            '-&nbsp;&nbsp;&nbsp; Display of the current financial situation of AFEI Regional Office in Cairo.\n' +
            'Following the presentation of the new website of AFEI, attendees decided to advocate for the website with AFEI members in Egypt and urge them to provide the Regional Office in Cairo with the information sheet of their companies as well as the documentation of their activities in supporting the development initiatives in order to upload them on the website.\n' +
            'Attendees also conferred on the exceptionally hard circumstances in Syria, and agreed on sending a letter to the AFEI Chairman to convey their readiness to support AFEI members from Syria with information, experience, and logistics that might be needed when the Syrian colleagues wish to explore possibilities of doing business in their second country Egypt.\n' +
            'Downloadable files:\n' +
            'Agenda of the meeting\n' +
            'Letter to the Syrian members of AFEI',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع أعضاء مجلس إدارة الاتحاد من مصر',
          excerpt: 'بمناسبة قرب انعقاد الجمعية العمومية للإتحاد، عقد أعضاء الاتحاد في مصر لقاءهم لبحث الوضع الحالي للإتحاد حيث تضمن جدول الأعمال استعراض الرؤية الجديدة للاتحاد ومناقشة كيفية تفعيلها، وعرض الموقف الحالي للموقع الإلكتروني للاتحاد بعد تحديثه، وأساليب ووسائل تحفيز أعضاء الاتحاد واجتذاب أعضاء جدد من الناشطين في دعم المبادرات التنموية.',
          content: 'بمناسبة قرب انعقاد الجمعية العمومية للإتحاد، وبهدف التباحث في شؤون ترتيب البيت الداخلي للاتحاد، عقد أعضاء الاتحاد في مصر لقاءهم بحضور الأمين العام المساعد للاتحاد واستضافة الاستشارية في مكتب الاتحاد بدمشق. وتضمن جدول الأعمال المواضيع التالية:\n' +
            '- استعراض الرؤية الجديدة للاتحاد ومناقشة كيفية تفعيلها في مصر.\n' +
            '- التداول حول أساليب ووسائل تحفيز أعضاء الاتحاد واجتذاب أعضاء جدد من الناشطين في دعم المبادرات التنموية.\n' +
            '- عرض الموقف الحالي للموقع الإلكتروني للاتحاد بعد تحديثه\n' +
            '- استعراض الموقف الحالي الإداري والمالي لمكتب الاتحاد في القاهرة\n' +
            'بعد الاطلاع على الموقع الإلكتروني الجديد للاتحاد، اتفق الحضور على التواصل مع إخوانهم أعضاء الاتحاد في مصر للترويج للموقع وحثهم على تزويد مكتب الاتحاد في القاهرة باستمارة معلومات شركاتهم إضافة إلى توثيق نشاطاتهم في دعم المبادرات التنموية كي يصار إلى تحميلها على الموقع.\n' +
            'كما تداول أعضاء الاتحاد الظروف الاستثنائية الصعبة التي تمر بها سورية الشقيقة واتفقوا على مخاطبة رئيس الاتحاد بكتاب يتضمن تأكيدهم واستعدادهم لتقديم الدعم للأخوة أعضاء الاتحاد في سورية وتوفير معلوماتهم وخبراتهم وخدماتهم اللوجستية وغيرها مما قد يحتاجه الزملاء في حال رغبتهم باستكشاف إمكانيات الاستثمار في بلدهم الثاني مصر.\n' +
            'ملفات للتنزيل:\n' +
            'جدول أعمال الاجتماع\n' +
            'الرسالة الموجهة للأخوة أعضاء الاتحاد في سورية',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-09-17'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meeting-of-egyptian-bod-members-2',
    description: 'During their meeting in Cairo, Egyptian members of the board in AFEI discussed about the implementation of the AFEI General Assembly resolutions, preparation of the first meeting of the young industrialists, cooperation with the National Accreditation Center in Egypt in accrediting products from the Arab countries as a passport to the global market. Attendees agreed on holding the next general assembly meeting alongside the Calibration and Metrology conference that AFEI is organizing in cooperation with the Arab Federation for Metrology on 15-17/5/2010 in Cairo.',
    locale_post: {
      create: [
        {
          title: 'Meeting of Egyptian BOD members',
          excerpt: 'During their meeting in Cairo, Egyptian members of the board in AFEI discussed about the implementation of the AFEI General Assembly resolutions, preparation of the first meeting of the young industrialists, cooperation with the National Accreditation Center in Egypt in accrediting products from the Arab countries as a passport to the global market. Attendees agreed on holding the next general assembly meeting alongside the Calibration and Metrology conference that AFEI is organizing in cooperation with the Arab Federation for Metrology on 15-17/5/2010 in Cairo.',
          content: 'Upon invitation from the AFEI Chairman, and attended by the Assistant General Secretary, Egyptian members of the board in AFEI held a meeting to follow up the implementation of the AFEI General Assembly resolutions, namely:\n' +
            '- Reviewing the bylaw of AFEI\n' +
            '- Preparing for the next meeting of AFEI board of directors\n' +
            '- Preparing for the first meeting of the young industrialists\n' +
            '- Membership issues\n' +
            '- Cooperation with the National Accreditation Center in Egypt in accrediting products from the Arab countries as a passport to the global market.\n' +
            'Attendees agreed on holding the next general assembly meeting alongside the Calibration and Metrology conference that AFEI is organizing in cooperation with the Arab Federation for Metrology on 15-17/5/2010 in Cairo.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع أعضاء مجلس إدارة الاتحاد من مصر',
          excerpt: 'خلال اجتماعهم في القاهرة، ناقش أعضاء مجلس إدارة الاتحاد من مصر ماتم تنفيذه من قرارات الجمعية العمومية والتحضيرات للقاء الأول لشباب الصناعيين والتعاون مع المركز الوطني للاعتماد في مصر بخصوص اعتماد منتجات الدول العربية مما يسمح لها بالدخول للسوق العالمي. واتفق الحضور على عقد اجتماع الجمعية العمومية القادم على هامش مؤتمر المعايرة والقياس الذي ينظمه الاتحاد بالتعاون مع الاتحاد العربي للقياس والمعايرة خلال الفترة 15-17/5/2010 في القاهرة.',
          content: 'بدعوة من رئيس مجلس إدارة الاتحاد وبحضور الأمين العام المساعد للاتحاد، عقد أعضاء مجلس الإدارة من مصر اجتماعهم لمتابعة تنفيذ قرارات الجمعية العمومية وبالأخص:\n' +
            '- مراجعة القانون الأساسي للاتحاد\n' +
            '- التحضير لاجتماع مجلس الإدارة القادم\n' +
            '- التحضير للقاء الأول لشباب الصناعيين\n' +
            '- شؤون العضوية\n' +
            '- التعاون مع المركز الوطني للاعتماد في مصر بخصوص اعتماد منتجات الدول العربية مما يسمح لها بالدخول للسوق العالمي.\n' +
            'اتفق الحضور على عقد اجتماع الجمعية العمومية للاتحاد على هامش مؤتمر المعايرة والقياس الذي ينظمه الاتحاد بالتعاون مع الاتحاد العربي للقياس والمعايرة خلال الفترة 15-17/5/2010.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2009-08-01'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'project-for-setting-the-national-policy-for-science,-technology,-and-innovation-in-syria-3',
    description: 'Within the project of Higher Commission for Scientific Research (HCSR) "Setting the national policy for science, technology, and innovation in Syria", the industry sector committee continued its activities and discussed its report titled "Analysis of the status-quo of the industry sector in Syria and future trends" in a workshop on March 2011 which was attended by the AFEI General Secretary and the consultant of AFEI Damascus Office.',
    locale_post: {
      create: [
        {
          title: 'Project for setting the National Policy for Science, Technology, and Innovation in Syria',
          excerpt: 'Within the project of Higher Commission for Scientific Research (HCSR) "Setting the national policy for science, technology, and innovation in Syria", the industry sector committee continued its activities and discussed its report titled "Analysis of the status-quo of the industry sector in Syria and future trends" in a workshop on March 2011 which was attended by the AFEI General Secretary and the consultant of AFEI Damascus Office.\n' +
            'AFEI General Secretary became a member in the work team for "Mechanisms of linking scientific research institutions with the industry and service sectors" as a representative of the business sector, and he offered two contributions: a "proposed mechanism for enhancing the linkages between industry and scientific research", and "Ideas for activating the cooperation between industry and scientific institutions ".\n' +
            'HCSR continued the project activities with the sectoral committees and work teams, and established an information system for scientific research on its website with the objective of linking scientific research institutions, and strengthen the links and channels between researchers.',
          content: 'Within the project of Higher Commission for Scientific Research (HCSR) "Setting the national policy for science, technology, and innovation in Syria", the industry sector committee continued its activities and discussed its report titled "Analysis of the status-quo of the industry sector in Syria and future trends" in a workshop on March 2011 which was attended by the AFEI General Secretary and the consultant of AFEI Damascus Office.\n' +
            'The next step in the project was the formation of a work team for "Mechanisms of linking scientific research institutions with the industry and service sectors" with a resolution of the prime minister. The team assignment was to describe the current situation and relations between research institutions and manufacturing and service institutions, then to define requirements for coordination and linking these institutions and other related institutions. AFEI General Secretary is a member in the work team as a representative of the business sector, and he offered two contributions: a "proposed mechanism for enhancing the linkages between industry and scientific research", and "Ideas for activating the cooperation between industry and scientific institutions ".\n' +
            'HCSR continued the project activities with the sectoral committees and work teams, and established an information system for scientific research on its website with the objective of linking scientific research institutions, and strengthen the links and channels between researchers.\n' +
            'Related links:\n' +
            'HCSR websiteScientific Research Information System websiteActivities of this project in 2010 Activities of this project in 2012',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مشروع رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية',
          excerpt: 'ضمن مبادرة الهيئة العليا للبحث العلمي "رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية"، تابعت لجنة قطاع الصناعة نشاطاتها وناقشت تقريرها بعنوان "تحليل الواقع الراهن لقطاع الصناعة السورية والتوجهات المستقبلية" في ورشة عمل خلال آذار/مارس 2011 حضرها الأمين العام للاتحاد والاستشارية لدى مكتب الاتحاد بدمشق.\n' +
            'الأمين العام للاتحاد أصبح عضواً في فريق عمل "آليات الترابط بين الهيئات العلمية البحثية والقطاعات الإنتاجية والخدمية" كممثل لقطاع الأعمال، وقد قدم مساهمتين: مقترح "آليات العمل لتحسين الارتباط بين الصناعة والبحث العلمي" و"أفكار لتنشيط التعاون بين الهيئات الصناعية والعلمية".\n' +
            'تابعت الهيئة مبادرتها من خلال اللجان القطاعية وفرق العمل، وقد أحدثت نظام معلومات خاص بالبحث العلمي على موقعها على الإنترنت بهدف التنسيق بين الهيئات العلمية البحثية وتعزيز الصلة وقنوات وآليات الترابط بين الباحثين.',
          content: 'ضمن مبادرة الهيئة العليا للبحث العلمي "رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية"، تابعت لجنة قطاع الصناعة نشاطاتها وناقشت تقريرها بعنوان "تحليل الواقع الراهن لقطاع الصناعة السورية والتوجهات المستقبلية" في ورشة عمل خلال آذار/مارس 2011 حضرها الأمين العام للاتحاد والاستشارية لدى مكتب الاتحاد بدمشق.\n' +
            'الخطوة التالية في المبادرة كانت تشكيل فريق عمل "آليات الترابط بين الهيئات العلمية البحثية والقطاعات الإنتاجية والخدمية" بقرار من رئيس مجلس الوزراء مهمته توصيف الواقع الراهن للعلاقات بين المؤسسات البحثية والمؤسسات الإنتاجية والخدمية ومن ثم تحديد المتطلبات اللازمة للتنسيق والترابط بين هذه المؤسسات ومؤسسات أخرى ذات علاقة. الأمين العام للاتحاد هو عضو في فريق العمل كممثل لقطاع الأعمال، وقد قدم مساهمتين: مقترح "آليات العمل لتحسين الارتباط بين الصناعة والبحث العلمي" و"أفكار لتنشيط التعاون بين الهيئات الصناعية والعلمية".\n' +
            'تابعت الهيئة مبادرتها من خلال اللجان القطاعية وفرق العمل، وقد أحدثت نظام معلومات خاص بالبحث العلمي على موقعها على الإنترنت بهدف التنسيق بين الهيئات العلمية البحثية وتعزيز الصلة وقنوات وآليات الترابط بين الباحثين.\n' +
            'روابط ذات صلة:\n' +
            'موقع الهيئة العليا للبحث العلمي على الإنترنتموقع نظام معلومات البحث العلمي على الإنترنتالأنشطة السابقة للمشروع خلال عام 2010الأنشطة اللاحقة للمشروع خلال عام 2012',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2011-01-01'),
        end_on: new Date('2011-12-31'),
        level: { connect: { id: 1 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'workshop-on-"protecting-the-arab-industry-within-the-framework-of-wto-rules"',
    description: 'Studies, Research and Training Center – CAEU in cooperation with the Ministry of Trade and Industry organized a workshop titled "Protecting the Arab industry within the framework of WTO rules" with the objective to introduce to factories operating in Egypt the services of ANTI-DUMPING, SUBSIDIES, & SAFEGUARD DEPARTMENT which help in limiting the impact on local industry resulting from the application of free trade rules WTO rules.',
    locale_post: {
      create: [
        {
          title: 'Workshop on "Protecting the Arab industry within the framework of WTO rules"',
          excerpt: 'Studies, Research and Training Center – CAEU in cooperation with the Ministry of Trade and Industry organized a workshop titled "Protecting the Arab industry within the framework of WTO rules" with the objective to introduce to factories operating in Egypt the services of ANTI-DUMPING, SUBSIDIES, & SAFEGUARD DEPARTMENT which help in limiting the impact on local industry resulting from the application of free trade rules WTO rules.',
          content: 'In cooperation with the Ministry of Trade and Industry in Egypt, Studies, Research and Training Center &ndash; CAEU organized a workshop titled "Protecting the Arab industry within the framework of WTO rules".\n' +
            'The objective of the workshop is to introduce to factories operating in Egypt the services of ANTI-DUMPING, SUBSIDIES, &amp; SAFEGUARD DEPARTMENT which help in limiting the impact on local industry resulting from the application of WTO rules.\n' +
            "Following the official opening, the first session was dedicated to representatives of manufacturers and Arab federations' explanations of the problems that their industries are facing as a result of applying the WTO rules. The workshop covered in details the procedures for filling in the complaint application.\n" +
            'Downloadable files:\n' +
            'Workshop agenda\n' +
            'Presentation',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ورشة عمل "حماية الصناعة العربية في إطار قواعد منظمة التجارة العالمية"',
          excerpt: 'نظم مركز التدريب والبحوث والدراسات في مجلس الوحدة الاقتصادية العربية بالتعاون مع وزارة التجارة والصناعة ورشة عمل "حماية الصناعة العربية في إطار قواعد منظمة التجارة العالمية" بهدف تعريف المنشآت العاملة في مصر بخدمات جهاز مكافحة الدعم والإغراق والوقاية التي تساعد في الحد من الآثار الواقعة على الصناعات العربية من جراء التزام الدول العربية بتطبيق قواعد تحرير التجارة التي تضمنتها اتفاقية منظمة التجارة العالمية.',
          content: 'بالتعاون مع وزارة التجارة والصناعة في مصر، نظم مركز التدريب والبحوث والدراسات في مجلس الوحدة الاقتصادية العربية ورشة عمل "حماية الصناعة العربية في إطار قواعد منظمة التجارة العالمية".\n' +
            'هدف الورشة هو تعريف المنشآت العاملة في مصر بخدمات جهاز مكافحة الدعم والإغراق والوقاية التي تساعد في الحد من الآثار الواقعة على الصناعات العربية من جراء التزام الدول العربية بتطبيق قواعد تحرير التجارة التي تضمنتها اتفاقية منظمة التجارة العالمية.\n' +
            'بعد الافتتاح الرسمي، استهلت الورشة بجلسة عمل استعرض فيها ممثلو المنشآت الصناعية والاتحادات العربية المشاكل التي تواجهها صناعاتهم من جراء تطبيق قواعد اتفاقية منظمة التجارة العالمية. وتضمنت الورشة شرحاً تفصيليً لإجراءات التقدم بشكوى وكيفية استيفائها.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الورشة\n' +
            'العرض التقديمي',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2012-11-07'),
        end_on: new Date('2012-11-08'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-general-assembly-meeting-no./27/',
    description: 'Cairo hosted the annual meetings of the Arab Federation for Engineering Industries on 16-17/1/2013. General Secretary of the Council of Arab Economic Unity, President of the Egyptian Authority for Standards & Quality, and Chairman of the Chamber for Engineering industries in the Egyptian Federation of Industries attended the meeting, and the AFEI General Assembly approved the new strategic vision of the federation and its structures as well as the modified bylaw that fits with this vision. A new Board of Directors was elected for the term 2012-2016.',
    locale_post: {
      create: [
        {
          title: 'AFEI General Assembly meeting no./27/',
          excerpt: 'Cairo hosted the annual meetings of the Arab Federation for Engineering Industries on 16-17/1/2013. General Secretary of the Council of Arab Economic Unity, President of the Egyptian Authority for Standards & Quality, and Chairman of the Chamber for Engineering industries in the Egyptian Federation of Industries attended the meeting, and the AFEI General Assembly approved the new strategic vision of the federation and its structures as well as the modified bylaw that fits with this vision. A new Board of Directors was elected for the term 2012-2016.',
          content: 'Cairo hosted the annual meetings of the Arab Federation for Engineering Industries on 16-17/1/2013. Amongst participants: HE Mr.Mohamed El-Rabie, the General Secretary of the Council of Arab Economic Unity; Dr.Hasan Abdelmaguid, the President of the Egyptian Authority for Standards &amp; Quality-representative of HE the Minister of Trade and Industry; and Eng.Hamdi Abdelaziz, the Chairman of the Chamber for Engineering Industries in the Egyptian Federation of Industries. Fifty members from Egypt, Syria, Sudan, Lebanon, Bahrain, and KSA attended the meetings and approved the new strategic vision of the federation and its structures as well as the modified bylaw that fits with this vision. A new Board of Directors for the term 2012-2016 was elected.\n' +
            'Alongside the meetings, a seminar on "Impacts of the political situation on the economy in the region" was organized.\n' +
            'Highlights of the opening speeches\n' +
            'HE El-Rabie emphasized the role of private sector in the national economy, and appraised AFEI accomplishments and goals in his speech, concluding with wishes of more success for the AFEI.In his speech, Eng.Hafez, Chairman of the AFEI board of directors mentioned that consensus is the basis for working towards the goals, and AFEI is changing the mode of cooperation between members with the aim to be more effective in their respective countries. And for the first time, members are representing the employers as an active partner on the national level.\n' +
            'The speech of Dr.Abdelmaguid asserted that the engineering industry is the basis for all other industries. And the government in Egypt is promoting the role of national and Arab NGOs as a means for developing the industry. He mentioned that cooperation and solidarity, working as a team, and depending on science and modern technologies are characteristics of this era and are the only way for industrial development in our countries.Eng.Abdulaziz presented the Chamber of Engineering Industries briefly, and summarized the challenges facing the sector as a result of different trade agreements (Arab, European, Aghadir,..). He concluded: businessmen continuous meetings can achieve what the governments could not achieve; we hope as a federation of industries to be able to integrate and fill the gaps.\n' +
            'Dr.Yafi, the General Secretary of AFEI mentioned that concepts changed around the globe, and the federation became more experienced in cooperating regionally, on the Arab level, and with the government. He confirmed that the cooperation of the group of employers with legislative and development institution nationally, regionally, and internationally created a brand name for the federation, and the federation is a counterpart in policy making and planning measures related to the sector. This would not have been possible without the faith each member has. Although the Federation umbrella brings the members closer, nevertheless, the priorities of each one in supporting the society and government are varied. Therefore, each country will focus on its own issues, i.e., the AFEI goals will be reached partially, and in different ways within the countries to fit their phase of development and priorities.\n' +
            'Downloadable files:\n' +
            'Agenda of the meetingsSpeech of AFEI Chairman of the BoardSpeech of AFEI General SecretryPresentation of the new strategic vision',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع الجمعية العمومية للاتحاد العربي للصناعات الهندسية – الدورة /27/',
          excerpt: 'استضافت القاهرة الاجتماعات السنوية للاتحاد العربي للصناعات الهندسية خلال الفترة 16-17/1/2013 بحضور معالي السفير محمد الربيع- أمين عام مجلس الوحدة الاقتصادية العربية والدكتور حسن عبد المجيد- رئيس هيئة المواصفات والجودة وممثل معالي وزير الصناعة والتجارة والمهندس حمدي عبد العزيز- رئيس غرفة الصناعات الهندسية باتحاد الصناعات المصرية. وأقرت الجمعية العمومية الرؤية الاستراتيجية الجديدة للاتحاد وأجهزته المختلفة كما أقرت نسخة معدلة من النظام الأساسي تتناسب مع هذه الرؤية. وتم انتخاب مجلس إدارة لدورة جديدة من /18/ عضواً يمثلون كل الدول الأعضاء في الإتحاد.',
          content: 'استضافت القاهرة الاجتماعات السنوية للاتحاد العربي للصناعات الهندسية خلال الفترة 16-17/1/2013 برئاسة م.سعيد الحافظ- رئيس مجلس إدارة الإتحاد وبحضور معالي السفير محمد الربيع- أمين عام مجلس الوحدة الاقتصادية العربية والدكتور حسن عبد المجيد- رئيس هيئة المواصفات والجودة وممثل معالي وزير الصناعة والتجارة والمهندس حمدي عبد العزيز- رئيس غرفة الصناعات الهندسية باتحاد الصناعات المصرية.شارك في الاجتماع حوالي 50 عضواً من أعضاء الهيئة العمومية وهم من مصر وسوريا والسودان ولبنان والبحرين والسعودية، وتأتي هذه الاجتماعات لإقرار التغييرات في هيكلة الاتحاد حيث أقرت الجمعية العمومية الرؤية الاستراتيجية الجديدة للاتحاد وأجهزته المختلفة كما أقرت نسخة معدلة من النظام الأساسي تتناسب مع هذه الرؤية. وتضمن الاجتماع عرضاً حياً للموقع الجديد للاتحاد على الإنترنت. وقد انتخب مجلس إدارة لدورة جديدة من /18/ عضواً يمثلون كل&nbsp; الدول الأعضاء فى الإتحاد.على هامش الاجتماعات نظمت ندوة حول "آثار الوضع السياسي على الاقتصاد في المنطقة".\n' +
            'أبرز النقاط في كلمات الافتتاح\n' +
            'أبرز سعادة السفير محمد الربيع في كلمته دور القطاع الخاص الذي يتحمل أعباء الاقتصاد الوطني والذي استطاع أن يحمي مصر خلال الثورة. وذكر بأنه يراهن على الاتحاد وإنجازاته التاريخية وأهدافه العظيمة الرائدة، وقد شارك الإتحاد بكثير من الندوات والمؤتمرات على مستوى محلي وفي الاتحاد الأوربي، وحقق إنجازات عملية فيما يتعلق بإنجاز رؤية جديدة للمؤسسات الصغيرة والمتوسطة وهي الأمل الحقيقي لنا في مثل هذا الوقت. وختم السفير الربيع كلمته بتمنياته بالمزيد من النجاحات والتوفيق للاتحاد في ظل القيادة الحكيمة.\n' +
            'في كلمته ذكر المهندس سعيد الحافظ &ndash; رئيس مجلس إدارة الاتحاد بأن القناعة والإقتناع أساس الإتفاق والعمل بصدق لتحقيق الأهداف وأن الاتحاد يحاول تطبيق هذا ويقوم بالتغييرات في طريقة التعاون فيما بين أعضائه ليصبحوا أكثر تأثيراً في تطوير بلدانهم والأمة العربية، وذلك انطلاقاً من قناعتهم بأن شركاتهم لن تستفيد بدون إفادة مجتمعاتها. وتابع المهندس الحافظ بقوله: لقد لمسنا التغييرات في مفهوم التعاون العربي في الاتحاد، ولأول مرة فإن أعضاء الاتحاد يحملون راية الاتحاد ويتحدثون باسم قطاع الأعمال كشريك فاعل في البلد.\n' +
            'بعد الترحيب بالسادة الحضور من مختلف الدول العربية (سورية ولبنان والسعودية والبحرين والسودان) في بلدهم الثاني مصر، وبالإنابة عن السيد وزير الصناعة والتجارة الخارجية أكد الدكتور حسن عبد المجيد رئيس هيئة المواصفات والجودة أن الصناعات الهندسية هي أساس ومحور كل الصناعات والتقدم بها هو أساس للتقدم في أية صناعات أخرى فكل الصناعات تعتمد في الأساس على الصناعات الهندسية. كما ذكر بأن الحكومة المصرية وبصفة خاصة وزارة الصناعة تولي اهتماماً كبيراً لتفعيل دور المنظمات غير الحكومية سواء على المستوى الإقليمي أو العربي للنهوض بالصناعة المصرية والعربية، وتفتح ذراعيها وعقلها وقلبها للحوار للتعرف على متطلبات الصناعات المختلفة لتوفير المناخ الملائم للنهوض بتلك الصناعات. ثم أشار د.عبد المجيد إلى أن التعاون والتكاتف والعمل كفريق واحد والاعتماد على العلم والتكنولوجيات المتطورة هو سمة العصر والسبيل الوحيد لإحداث نهضة صناعية في بلادنا العربية.\n' +
            'بدأ المهندس حمدي عبد العزيز - رئيس غرفة الصناعات الهندسية باتحاد الصناعات المصرية كلمته بفكرة موجزة عن الغرفة ولخص التحديات التي تواجهها الصناعات الهندسية في الآثار التي تقع عليها من جراء توقيع الاتفاقيات (العربية- الاتحاد الأوربي- أغادير- كوميز). وذكر بأن الغرفة استعانت بمكاتب استشارية وحددت أهدافها واستراتيجيتها للتغلب على المشاكل الموجودة. وختم بقوله: أن الاجتماعات المتواصلة بين أصحاب الأعمال يمكن أن تحقق ما لم تستطع الحكومات تحقيقه، وكلنا أمل كاتحاد صناعات أن يكون بيننا تكامل وأن نتمكن من سد الثغرات وأن نكمل بعضنا.\n' +
            'تحدث د.أحمد هيثم اليافي-الأمين العام للاتحاد في كلمته عن المفاهيم التي تغيرت في العالم وخبرة الاتحاد التي نمت في التعاون الدولي والإقليمي ومع الحكومة. وأكد أن تعاون هذا التجمع من أصحاب الأعمال مع مؤسسات تشريعية وتنموية محلية وعربية ودولية جعلت اسم الاتحاد معروفاً، وأصبح شريكاً في وضع السياسات والخطط التي تؤثر على قطاع الصناعات الهندسية، ولم يكن هذا ليكون لولا الإيمان العميق لدى كلٍ من الأعضاء. ولفت إلى أن وجود الأعضاء تحت مظلة الاتحاد يقارب بينهم، إلا أن هناك عدة أولويات للتفاعل مع المجتمع والتأثير الإيجابي في مساعدة الحكومات للوصول إلى قراراتها المناسبة لها في الأقطار المختلفة. لذلك فإن كل قطر سيركز على مواضيع خاصة تهمه أكثر من غيرها بطريقته وبسرعته، أي أن أهداف الاتحاد قد تتحقق جزئياً وبصورة مختلفة في كل بلد من البلدان، حيث تتناسب مع أولوياتها ومرحلة التطور الاقتصادي فيها.\n' +
            'ملفات للتنزيل:\n' +
            'جدول الأعمالكلمة رئيس مجلس إدارة الاتحادكلمة الأمين العام للاتحادالعرض التقديمي حول الرؤية الاستراتيجية للاتحاد',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2013-01-16'),
        end_on: new Date('2013-01-17'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } },
    post_image: {
      create: [
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg0.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg1.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg2.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg3.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg4.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg5.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg6.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg7.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg8.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg9.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg10.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg11.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg12.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg13.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg14.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg15.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg16.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg17.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg18.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg19.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg20.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg21.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg22.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg23.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg24.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg25.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg26.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg27.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg28.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg29.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg30.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg31.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg32.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg33.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg34.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        },
        {
          img_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg35.jpg',
          img_alt: '2013 General Assembly',
          locale_post_image: {
            create: [
              {
                title: '2013 General Assembly',
                locale: { connect: { name: 'en-US' } }
              },
              {
                title: 'اجتماع الجمعية العمومية 2013',
                locale: { connect: { name: 'ar-SY' } }
              }
            ]
          }
        }
      ]
    }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'caeu-technical-committee-meeting-investment-and-trade-promotion-in-the-arab-countries-2',
    description: 'The proposed scheme for promoting investment and trade in the Arab countries is meant to allow the private sector to express its needs and opportunities. The CAEU general secretariat prepared the basis and invited private sector organizations and other stakeholders to get involved.',
    locale_post: {
      create: [
        {
          title: 'CAEU technical committee meeting: Investment and Trade promotion in the Arab countries',
          excerpt: 'The proposed scheme for promoting investment and trade in the Arab countries is meant to allow the private sector to express its needs and opportunities. The CAEU general secretariat prepared the basis and invited private sector organizations and other stakeholders to get involved.',
          content: 'AFEI representatives participated in the meeting of the CAEU technical committee which focused on the proposed scheme for promoting investment and trade in the Arab countries.\n' +
            'The meeting started with a speech of the CAEU General Secretary who mentioned that the government has been acting on behalf of the private sector and taking decisions that are not related to its needs for a long time, and it is no more effective for the government and the private sector to act independently of each others. HE emphasized that CAEU proposed scheme is meant to allow the private sector to express its needs and opportunities. He concluded by asserting that the scheme sets the basis for the private sector organizations and other stakeholders to get involved.\n' +
            'Among other hot topics was the paper on private sector role in financing SMEs in the Arab countries. The focus was on innovative options for financing that are effective and in line with the society values.\n' +
            'Downloadable files:\n' +
            'Agenda',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع اللجنة الفنية لآلية تنمية الاستثمار والتجارة في البلاد العربية',
          excerpt: 'الخطة المقترحة لآلية تنمية الاستثمار والتجارة العربية تهدف لإعطاء فرصة للقطاع الخاص للتعبير عن فرصه واحتياجاته، والأمانة العامة لمجلس الوحدة الاقتصادية العربية تضع الأساس وتدعو جميع منظمات القطاع الخاص والمعنيين للاندماج وفق مايرونه.',
          content: 'شارك م.جمال عفيفي/نائب رئيس مجلس إدارة&nbsp;الاتحاد ومستشارة الاتحاد في اجتماع اللجنة الفنية لآلية تنمية الاستثمار والتجارة في البلاد العربية التي تمحورت حول الخطة المقترحة لهذه الآلية.\n' +
            'استهل الاجتماع بكلمة من الأمين العام لمجلس الوحدة الاقتصادية العربية أشار فيها إلى أنه قد مضى وقت طويل يقوم فيه الجانب الحكومي بدور القطاع الخاص ويأخذ قرارات لاتتفق مع مايحتاجه، ولم يعد بإمكان أي من الجانبين الحكومي والخاص العمل بشكل منفرد. وذكر بأن مجلس الوحدة الاقتصادية العربية يسعى لإثراء الآلية لجعلها قادرة على إعطاء القطاع الخاص فرصة للتعبير عن فرصه واحتياجاته. وختم بالتأكيد على أن الخطة تعتبر الأساس الذي ندعو من خلالها جميع منظمات القطاع الخاص والمعنيين للاندماج وفق مايرونه.\n' +
            'من بين المواضيع الهامة كان ورقة العمل حول دور القطاع الخاص في تمويل المشروعات الصغيرة والمتوسطة العربية والتي ركزت على خيارات التمويل غير التقليدية الفعالة والمقبولة في إطار قيم المجتمع.\n' +
            'ملفات للتنزيل:\n' +
            'برنامج الاجتماع',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2013-10-08'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'annual-meeting-of-the-arab-sectoral-federations-no.-41',
    description: 'The meeting discussed the first draft of the proposed Arab Investment & Trade mechanism, and the efforts of the Arab Federation for Metrology towards establishing Arab standards as well as harmonizing them with the international standards in order to market the Arab products. An idea to establish a Board of Directors for the Arab sectoral federations is presented for feedback from the federations.',
    locale_post: {
      create: [
        {
          title: 'Annual meeting of the Arab Sectoral Federations no. 41',
          excerpt: 'The meeting discussed the first draft of the proposed Arab Investment & Trade mechanism, and the efforts of the Arab Federation for Metrology towards establishing Arab standards as well as harmonizing them with the international standards in order to market the Arab products. An idea to establish a Board of Directors for the Arab sectoral federations is presented for feedback from the federations.',
          content: 'A delegation from AFEI joined the meeting which was held in Beirut, Lebanon and attended by chairmen and general secretaries of the Arab Sectoral Federations as well as business men and women.\n' +
            "The Chairman of the Arab Federation for Metrology presented a paper summarizing the federation's efforts towards unified standards for various products in order to facilitate the inter-Arab countries trade and the equal effort to harmonize the Arab standards with the international ones in order to open a market for the Arab products. He described the plan to build a quality assessment labs for food products within the ten member countries of the federation and then to expand to other products.\n" +
            'The General Secretary of the CAEU referred to the engagement of the Arab Sectoral Federations through the structure of five main sectors under the umbrella of CAEU and proposed an idea to establish a Board of Directors for the federations with CAEU acting as a secretariat for it. The discussion ended up with an agreement to give a chance to the federations to get their feedback about the effectiveness of this idea, and propose operational details in a designated meeting to be held mid January.\n' +
            'The attendees discussed the first draft of the proposed Arab Investment &amp; Trade working mechanism. It was agreed to form a working group and assign it the task of deepening the concepts of the mechanism and to present a paper to the meeting mid January.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الاجتماع الدوري /41/ للاتحادات العربية النوعية المتخصصة',
          excerpt: 'تناول الاجتماع مقترحاً أولياً لنظام عمل آلية الاستثمار والتجارة العربية، وجهود الاتحاد العربي للقياس والمعايرة نحو توحيد المواصفات العربية والتقارب مع المواصفات الدولية لفتح مجال التسويق للمنتجات العربية. وينتهي بطرح فكرة تشكيل مجلس إدارة للاتحادات العربية النوعية المتخصصة لاستمزاج آراء الاتحادات.',
          content: 'شارك وفد الاتحاد الاتحاد العربي للصناعات الهندسية في الاجتماع الذي عقد في بيروت/لبنان بحضور رؤساء وأمناء الاتحادات العربية النوعية التخصصية ورجال وسيدات الأعمال.\n' +
            'عرض رئيس الاتحاد العربي للقياس والمعايرة ورقة عمل تتضمن جهد الإتحاد في السعي إلى توحيد المواصفات العربية في العديد من السلع لتسهيل تداول هذه السلع داخل البلدان العربية والجهد الموازي للتقارب مع المواصفات الدولية لفتح مجال التسويق للمنتجات العربية. كما ذكر بأنه سيتم البدء في إنشاء مختبرات فحص جودة المواد الغذائية بالدول العربية العشر أعضاء الإتحاد لضمان سلامتها ثم التوسع في غيرها من المنتجات.\n' +
            'تحدث أمين عام مجلس الوحدة الاقتصادية العربية عن عمل الاتحادات العربية النوعية في هيكلية القطاعات الخمسة تحت مظلة المجلس، وعرض فكرة أن يتم تشكيل مجلس إدارة للإتحادات بحيث يعمل مجلس الوحدة الاقتصادية العربية كسكرتارية له. وانتهى النقاش إلى الاتفاق على إتاحة الفرصة أمام الاتحادات لإعداد وجهة نظرها في فعالية هذه الفكرة واقتراح آليات تنفيذها خلال اجتماع استثنائي يعقد للإتحادات العربية النوعية المتخصصة في منتصف شهر يناير القادم.\n' +
            'ناقش الحضور "ورقة عمل بمقترح أولي لنظــام عمـــل آلية الاستثمار والتجارة العربية"، وتم الاتفاق على تشكيل لجنة مصغرة لتعميق مفاهيم الآلية وتقديم ورقة إلى الاجتماع بمنتصف يناير القادم.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2013-11-14'),
        end_on: new Date('2013-11-15'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'meetings-of-the-arab-iron-&-steel-union',
    description: 'A representative of AFEI participated as an observer in the General Assembly meeting of the Arab Iron & Steel Union. The members focused on the need for coordination and integration amongst the producers of steel to face the challenge that resulted from the increase of the raw material prices. The topic of including Carbon emissions reduction programs and energy conservation measures within the future plans for the production facilities was promoted.',
    locale_post: {
      create: [
        {
          title: 'Meetings of the Arab Iron & Steel Union',
          excerpt: 'A representative of AFEI participated as an observer in the General Assembly meeting of the Arab Iron & Steel Union. The members focused on the need for coordination and integration amongst the producers of steel to face the challenge that resulted from the increase of the raw material prices. The topic of including Carbon emissions reduction programs and energy conservation measures within the future plans for the production facilities was promoted.',
          content: 'Upon invitation from the Arab Iron &amp; Steel Union, the AFEI representative Mr.Mutassem Daaboul attended the BOD meeting no. 107.\n' +
            'The meeting agenda included latest updates in the steel manufacturing sector on the arab and international levels, and the establishment of a regional office for the union in the Gulf.\n' +
            'The attendees focused on the need for coordination and integration amongst the producers of steel to face the challenge that resulted from the increase of the raw material prices which impacted the cost of production. The chairman of the board emphasized the need to intensify the R&amp;D activities toward making use of the local raw material and developing the production technology in order to reduce the cost of production.\n' +
            'The topic of including Carbon emissions reduction programs and energy conservation measures within the future plans for the production facilities was promoted.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماعات الاتحاد العربي للحديد والصلب',
          excerpt: 'الاتحاد العربي للصناعات الهندسية يشارك كمراقب في اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب الذي ركز على ضرورة التنسيق والتكامل بين منتجي الصلب لمواجهة التحدي من اتجاه مصدري الخامات والمواد الأولية الرئيسية اللازمة لهذه الصناعة إلى زيادة أسعار الخامات والمستلزمات بنسب كبيرة. كما ناقش أهمية مشروعات التوافق البيئي وخفض الانبعاثات وترشيد استهلاك الطاقة، ووضع ذلك في برامج التوسع المستقبلية لهذه الصناعة في المنطقة.',
          content: 'بدعوة من الاتحاد العربي للحديد والصلب، حضر أ.معتصم دعبول/ممثل الاتحاد العربي للصناعات الهندسية اجتماع مجلس الإدارة الدوري رقم /107/.\n' +
            'تضمن جدول الاجتماعات أهم المستجدات على صعيد صناعة الصلب العربية والعالمية، وفتح مكتب إقليمي في منطقة الخليج العربي.\n' +
            'وقد ركز المشاركون في الاجتماعات على أهمية وضرورة التعاون والتنسيق والتكامل بين منتجي الصلب لمواجهة التحدي الذي يواجه صناعة الصلب العربي المتمثل في اتجاه مصدري الخامات والمواد الأولية الرئيسية اللازمة لهذه الصناعة إلى رفع أسعار الخامات والمستلزمات بنسب مرتفعة، مما أدى إلى زيادة كبيرة في تكلفة الإنتاج. وأكد رئيس مجلس إدارة الاتحاد العربي للحديد والصلب على ضرورة تكثيف أعمال البحث والتطوير على أسس علمية واقتصادية لزيادة الاعتماد قدر الإمكان على الخامات المحلية، وتطوير تكنولوجيا الإنتاج بما يسهم في خفض تكلفة الإنتاج.\n' +
            'كما ناقش المجتمعون أهمية مشروعات التوافق البيئي وخفض الانبعاثات وترشيد استهلاك الطاقة، ووضع ذلك في برامج التوسع المستقبلية لهذه الصناعة في المنطقة.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2013-05-19'),
        end_on: new Date('2013-05-20'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'competitiveness-as-an-engine-for-economic-growth',
    description: 'The Arab Union for intellectual property rights held its fifth conference under the auspices of the Council of Arab Economic Unity, and with the high participation of Arab federations, enterprises and institutions with interest in the topic. The conference tackled two themes: supporting competitiveness, and creativity and innovation in the competitive environment. Papers of academic experts and officials in the relevant organizations were presented.',
    locale_post: {
      create: [
        {
          title: 'Competitiveness as an engine for economic growth',
          excerpt: 'The Arab Union for intellectual property rights held its fifth conference under the auspices of the Council of Arab Economic Unity, and with the high participation of Arab federations, enterprises and institutions with interest in the topic. The conference tackled two themes: supporting competitiveness, and creativity and innovation in the competitive environment. Papers of academic experts and officials in the relevant organizations were presented.',
          content: 'The Arab Union for intellectual property rights held its fifth conference under the auspices of the Council of Arab Economic Unity, and with the high participation of Arab federations, enterprises and institutions with interest in the topic.\n' +
            'Throughout the presentations of academic experts and officials in the relevant organizations, the conference tackled two themes:&nbsp;\n' +
            '1- Supporting competitiveness\n' +
            '2- Creativity and innovation in the competitive environment',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'مؤتمر التنافسية كمحرك للنمو الاقتصادي',
          excerpt: 'نظم الاتحاد العربي لحماية حقوق الملكية الفكرية مؤتمره الخامس لحماية حقوق الملكية الفكرية تحت رعاية مجلس الوحدة الاقتصادية العربية وبمشاركة كبيرة من الاتحادات والمنشآت والمؤسسات المهتمة. وتناول المؤتمر محوري دعم القدرة التنافسية والابداع والابتكار في البيئة التنافسية من خلال أوراق عمل لخبراء أكاديميين ومسؤولين في المنظمات ذات الصلة.',
          content: 'نظم الاتحاد العربي لحماية حقوق الملكية الفكرية مؤتمره الخامس لحماية حقوق الملكية الفكرية تحت رعاية مجلس الوحدة الاقتصادية العربية وبمشاركة كبيرة من الاتحادات والمنشآت والمؤسسات المهتمة.&nbsp;\n' +
            'من خلال أوراق عمل لخبراء أكاديميين ومسؤولين في المنظمات العربية والدولية ذات الصلة تناول المؤتمر المحورين التاليين:&nbsp;\n' +
            'المحور الاول- دعم القدرة التنافسية\n' +
            'شمل هذا المحور أوراق العمل التالية:\n' +
            '\n' +
            '\n' +
            'مفهوم التنافسية ومؤشرات قياس القدرة التنافسية\n' +
            'الحفاظ على القدرة التنافسية في الصناعة في زمن الأزمات مع أخذ النموذج المصري كأحدى دول الربيع العربي\n' +
            'تعزيز القدرة التنافسية للصادرات المصرية وتأثيرها على سياسة سعر الصرف\n' +
            'دور إدارة الجمارك في دعم التنافسية\n' +
            'الجودة والتنافسية\n' +
            '\n' +
            '\n' +
            'المحور الثاني- الإبداع والابتكار في البيئة التنافسية\n' +
            'شمل هذا المحور أوراق العمل التالية:\n' +
            '\n' +
            '\n' +
            'براءة الاختراع كأداة لنقل التكنولوجيا\n' +
            'الإبداع التكنولوجي كمدخل لتعزيز المؤسسات الاقتصادية\n' +
            'تطور الحماية الدولية للملكية الصناعية من اتفاقية باريس إلى اتفاقية الجوانب المتصلة بالتجارة من حقوق الملكية الفكرية ( TRIPS)- الاقتصاد الإبداعي\n' +
            'دعم البحث العلمي للبيئة التنافسية: دعم وتنمية الموارد البشرية على الإبداع والابتكار\n' +
            '\n',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2013-05-30'),
        level: { connect: { id: 4 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'annual-meeting-of-the-arab-sectoral-federations-no-3',
    description: 'The meeting presented studies and proposals that were submitted from the federations in the field of quality, maritime transportation, and technology innovation. The General Secretarial of the Arab Council for Economic Unity also presented a unified bylaw for the Arab sectoral federations',
    locale_post: {
      create: [
        {
          title: 'Annual meeting of the Arab Sectoral Federations no. 42',
          excerpt: 'The meeting presented studies and proposals that were submitted from the federations in the field of quality, maritime transportation, and technology innovation. The General Secretarial of the Arab Council for Economic Unity also presented a unified bylaw for the Arab sectoral federations',
          content: 'The meeting presented studies and proposals that were submitted from the federations in the field of quality, maritime transportation, and technology innovation. The General Secretarial of the Arab Council for Economic Unity also presented a unified bylaw for the Arab sectoral federations',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'الاجتماع الدوري /42/ للاتحادات العربية النوعية المتخصصة',
          excerpt: 'استعرض الاجتماع الدوري الثاني والأربعين للاتحادات العربية النوعية التخصصية الذي عقد بحضور رؤساء وأمناء الاتحادات العربية النوعية التخصصية ورجال وسيدات الأعمال دراسات ومقترحات واردة من الاتحادات في مجال الجودة والربط البحري والإبداع التكنولوجي كما قدمت الأمانة العامة للمجلس مذكرة حول النظام الأساسي للاتحادات العربية النوعية المتخصصة',
          content: 'شارك الأستاذ محمد دعبول/عضو مجلس إدارة الاتحاد العربي للصناعات الهندسية في الاجتماع الذي عقد في البحر الميت بالأردن بحضور رؤساء وأمناء الاتحادات العربية النوعية التخصصية ورجال وسيدات الأعمال.&nbsp;\n' +
            'تضمن الاجتماع عدداً من الدراسات والمقترحات الواردة من الاتحادات العربية النوعية المتخصصة العاملة في نطاق مجلس الوحدة الاقتصادية العربية ومن أبرزها:\n' +
            '&nbsp;\n' +
            '\n' +
            'دراسة التسويق والجودة" المقدمة من إتحاد المصدرين والمستودرين العرب.\n' +
            'دراسة "علامة الجودة والأمانة للمنتجات العربية"المقدمة من الإتحاد العربي للقياس والمعايرة.\n' +
            'المقترحات الواردة من إتحاد رجال الأعمال العرب.\n' +
            '"متابعة مشروع الربط البحرى العربي"المقدمة &nbsp;من إتحاد غرف الملاحة البحرية.&nbsp;\n' +
            'ورقة عمل عن "الإبداع التكنولوجي ركيزة من ركائز التقدم الصناعي" المقدمة من الإتحاد &nbsp;العربي لحماية &nbsp;حقوق الملكية الفكرية.\n' +
            '\n' +
            '&nbsp;\n' +
            'كما قدمت الأمانة العامة للمجلس مذكرتها حول "النظام الأساسي للاتحادات العربية النوعية المتخصصة"',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2014-11-11'),
        end_on: new Date('2014-11-12'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'caeu-technical-committee-meeting-investment-and-trade-promotion-in-the-arab-countries-1',
    description: 'The Committee addressed the business environment for SMEs in the Arab region and the development of technical & managerial capacities of the SMEs. A full package for establishing an Arab company for manufacturing tractors and agricultural machinery',
    locale_post: {
      create: [
        {
          title: 'CAEU technical committee meeting: Investment and Trade promotion in the Arab countries',
          excerpt: 'The Committee addressed the business environment for SMEs in the Arab region and the development of technical & managerial capacities of the SMEs. A full package for establishing an Arab company for manufacturing tractors and agricultural machinery',
          content: 'The Committee addressed the business environment for SMEs in the Arab region and the development of technical &amp; managerial capacities of the SMEs. A full package for establishing an Arab company for manufacturing tractors and agricultural machinery',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع اللجنة الفنية لآلية تنمية الاستثمار والتجارة في البلاد العربية',
          excerpt: 'اللجنة تناقش بيئة الأعمال للمشروعات الصغيرة والمتوسطة في الدول العربية وتطوير القدرات الفنية والإدارية في هذه المشروعات، وتستعرض الملف المتكامل للإجراءات التأسيسية للشركة العربية للجرارات والآلات الزراعية',
          content: '\n' +
            'شارك الأمين العام المساعد للاتحاد في اجتماع اللجنة الفنية لآلية تنمية الاستثمار والتجارة في البلاد العربية الذي عقد في مقر الأمانة العامة لمجلس الوحدة الاقتصادية العربية بالقاهرة.\n' +
            'من أبرز المواضيع التي تناولها الاجتماع:\n' +
            '\n' +
            '\n' +
            'نتائج ورشة العمل حول التجارة الإلكترونية في الوطن العربي\n' +
            'تطوير القدرات الفنية والإدارية للمؤسسات والمنشآت الصغيرة والمتوسطة\n' +
            'بيئة الأعمال للمشروعات متناهية الصغر والصغيرة والمتوسطة في الدول العربية- التحديات والفرص\n' +
            '\n' +
            '\n' +
            'كما قدمت الأمانة العامة للمجلس مذكرة حول "الملف المتكامل للإجراءات التأسيسية للشركة العربية للجرارات والآلات الزراعية"، و"ملف الاستثمار في الجمهورية العربية السورية".\n',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2014-11-04'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'board-of-directors-meeting-of-the-arab-iron-&-steel-union',
    description: 'A representative of AFEI participated as an observer in the Board of Directors meeting of the Arab Iron & Steel Union. The meeting was held alongside the Sulb Summit, and emphasized the impact of dumping practices as well as the energy and oil prices on the competitiveness.',
    locale_post: {
      create: [
        {
          title: 'Board of Directors meeting of the Arab Iron & Steel Union',
          excerpt: 'A representative of AFEI participated as an observer in the Board of Directors meeting of the Arab Iron & Steel Union. The meeting was held alongside the Sulb Summit, and emphasized the impact of dumping practices as well as the energy and oil prices on the competitiveness.',
          content: 'A representative of AFEI participated as an observer in the Board of Directors meeting of the Arab Iron &amp; Steel Union. The meeting was held alongside the Sulb Summit, and emphasized the impact of dumping practices as well as the energy and oil prices on the competitiveness.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب',
          excerpt: 'الاتحاد العربي للصناعات الهندسية يشارك كمراقب في اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب الذي عقد بالتزامن مع قمة الصلب، والذي أبرز تأثر القطاع بالإغراق وبأسعار الطاقة والنفط.',
          content: 'بدعوة من الاتحاد العربي للحديد والصلب، حضر أ.محمد دعبول/عضو مجلس إدارة الاتحاد العربي للصناعات الهندسية اجتماع مجلس الإدارة الدوري رقم /110/.تمت مناقشة واقع الصناعة بشكل عام في الوطن العربي وذكر بأن هنالك تباطؤ في زيادة الانتاج خاصة بعد انخفاض أسعار النفط حيث أن الحديد والصلب يرتبط بأسعار النفط بشكل كبير.وناقش المجتمعون بعض المواضيع الهامة لقطاع الحديد والصلب ومن أبرزها حالات الإغراق وأسعار الطاقة التي تؤثر سلباً على القدرة التنافسية.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2014-10-29'),
        level: { connect: { id: 4 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'workshop-on-e-commerce-in-the-arab-region',
    description: 'The General Secretariat of the Arab Council for Economic Unity organized the workshop with the aim to promote benefits and positive impact of the E-Commerce on the inter-Arab trade on the one hand, as well as to present the requirements for implementing E-Commerce applications in the Arab countries.',
    locale_post: {
      create: [
        {
          title: 'Workshop on E-Commerce in the Arab region',
          excerpt: 'The General Secretariat of the Arab Council for Economic Unity organized the workshop with the aim to promote benefits and positive impact of the E-Commerce on the inter-Arab trade on the one hand, as well as to present the requirements for implementing E-Commerce applications in the Arab countries.',
          content: 'The General Secretariat of the Arab Council for Economic Unity organized the workshop with the aim to promote benefits and positive impact of the E-Commerce on the inter-Arab trade on the one hand, as well as to present the requirements for implementing E-Commerce applications in the Arab countries.',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'ورشة عمل التجارة الإلكترونية في الوطن العربي',
          excerpt: 'نظمت الأمانة العامة لمجلس الوحدة الاقتصادية العربية ووزارة الصناعة والتجارة والمشروعات الصغيرة والمتوسطة ورشة العمل التي هدفت لإبراز فوائد التجارة الإلكترونية وأثرها على التجارة العربية من ناحية، إضافة لاستعراض متطلبات تنفيذ تطبيقات التجارة الإلكترونية في الوطن العربي.',
          content: 'شارك م.رءوف كمال/الأمين العام المساعد للاتحاد العربي للصناعات الهندسية في ورشة عمل "التجارة الإلكترونية في الوطن العربي" التي نظمتها الأمانة العامة لمجلس الوحدة الاقتصادية العربية بالتعاون مع وزارة الصناعة والتجارة والمشروعات الصغيرة والمتوسطة بجمهورية مصر العربية.هدفت الورشة لتشجيع ونشر التجارة الإلكترونية من خلال مناقشة فوائدها وأثرها على التجارة العربية، ومن خلال تبادل الخبرات بين الدول العربية حول تحقيق متطلبات تنفيذ تطبيقات التجارة الإلكترونية في الوطن العربي.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2014-10-15'),
        end_on: new Date('2014-10-16'),
        level: { connect: { id: 4 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: '10th-arabcab-conference',
    description: 'In his 10th ArabCab Conference that was organized under the patronage of HE the Minister of Trade & Industry in Egypt, the Association of Arab Cable Manufacturers hosted around 40 members and suppliers. Two research centers also joined the conference, namely, Societe General Cross Asset Research and Integer Research Ltd.',
    locale_post: {
      create: [
        {
          title: '10th ArabCab Conference',
          excerpt: 'In his 10th ArabCab Conference that was organized under the patronage of HE the Minister of Trade & Industry in Egypt, the Association of Arab Cable Manufacturers hosted around 40 members and suppliers. Two research centers also joined the conference, namely, Societe General Cross Asset Research and Integer Research Ltd.',
          content: 'The 10th Arab Cable Manufacturers Conference was held in Aswan, Egypt and focused on "transportation in the arab world".&nbsp;\n' +
            'In addition to discussing the common issues and problems facing cable manufacturers in the region, the conference hosted a number of key speakers in the fields of cable manufacturing &nbsp;and its related industries, as well as the fields of transportation and economic development.&nbsp;\n' +
            'Alongside the event, field visits around the city of Aswan were featured.\n' +
            'For more information, please visit the ArabCab website',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'المؤتمر العاشر لمصنعي الكابلات العرب ',
          excerpt: 'في مؤتمره العاشر "عرب كاب 2014" الذي نظم برعاية وزير الصناعة والتجارة في جمهورية مصر العربية استضاف تجمع مصنعي الكابلات العرب المنبثق عن الإتحاد مايقارب /40/ شركة من منتجي الكابلات ومورديهم إضافة لمركزي أبحاث Societe General Cross Asset Research وInteger Research Ltd..',
          content: 'في مؤتمره العاشر "عرب كاب 2014" الذي نظم برعاية وزير الصناعة والتجارة في جمهورية مصر العربية استضاف تجمع مصنعي الكابلات العرب المنبثق عن الإتحاد مايقارب /40/ شركة من منتجي الكابلات ومورديهم إضافة لمركزي أبحاث Societe General Cross Asset Research وInteger Research Ltd..عقد المؤتمر العاشر لتجمع الكابلات في مدينة أسوان بجمهورية مصر العربية وركز على أهمية النقل في الوطن العربي لتنمية التجارة البينية.إلى جانب مناقشة المسائل والعوائق التي تواجه مصنعي الكابلات في المنطقة فقد استضاف المؤتمر متحدثين في مجال صناعة الكابلات والصناعات المغذية، وفي مجال النقل والتنمية الاقتصادية.\n' +
            'وعلى هامش المؤتمر كانت هناك زيارات لمواقع أثرية في أسوان.\n' +
            'لمزيد من المعلومات، يرجى زيارة موقع تجمع الكابلات العرب\n',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2014-10-13'),
        end_on: new Date('2014-10-15'),
        level: { connect: { id: 4 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

result = await prismaClient.post.create(
{
  data: {
    slug: 'afei-general-assembly-and-bod-meetings',
    description: 'Twenty member companies of AFEI from Egypt, Syria, Lebanon, and Iraq attended the General Assembly and BOD meetings in Beirut, Lebanon. Members discussed the negative impact of current challenges in their countries manifesting primarily in the issue of getting visas to enter the country where the meeting is conducted.',
    locale_post: {
      create: [
        {
          title: 'AFEI General Assembly and BOD meetings',
          excerpt: 'Twenty member companies of AFEI from Egypt, Syria, Lebanon, and Iraq attended the General Assembly and BOD meetings in Beirut, Lebanon. Members discussed the negative impact of current challenges in their countries manifesting primarily in the issue of getting visas to enter the country where the meeting is conducted.',
          content: 'Twenty member companies of AFEI from Egypt, Syria, Lebanon, and Iraq attended the General Assembly and BOD meetings in Beirut, Lebanon.\n' +
            'The AFEI Chairman of the BOD emphasized in his opening speeches the need for such platform that allows members to get involved in tackling pressing issues which affect their businesses, societies, and countries. He also stressed the need to continue the quest towards making AFEI a corner stone in the process of developing the economic regulations which would guarantee harmonization with the global developments and provide guidance to the economic development initiatives.\n' +
            'Members discussed the negative impact of current challenges in their countries manifesting primarily in the issue of getting visas to enter the country where the meeting is conducted. They also praised the efforts of the AFEI members of each country in contacting their national institutions to resolve issues in this regard.\n' +
            'On the discussion table also was the fact that AFEI includes a variety of different industries. Attendees agreed to consider this feature as an opportunity and proceed to establish homogeneous associations under the AFEI umbrella that would tackle specialized common issues. A good example of such endeavor is the Arab Cable Manufacturers Association which was launched in 2005.\n' +
            `Some fundamental barriers to inter-Arab trade and investments were acknowledged. These are: the additional fees (beside tariff) on the products, prices of energy in some Arab countries, and dumping. As an association of employers, AFEI is requested to lobby for overcoming some obstacles. For that, the young industrialists' representative proposed to hire bright youth and offer mentorship and framework for them to come up with studies on how to tackle such common barriers as well as to change the mentality of "what AFEI offers to members" into "what members can offer to AFEI".\n` +
            'Alongside the meetings, AFEI organized a seminar with two experts. Mr. Patrick Daru, ILO delivered a presentation titled "Employers participation in skills development", and Mr. Philip Chite, ESCWA delivered a presentation titled "Current and prospected trade opportunities for the engineering industries in the Arab world".',
          locale: { connect: { name: 'en-US' } }
        },
        {
          title: 'اجتماعات الجمعية العمومية ومجلس إدارة الاتحاد',
          excerpt: 'عقد الاتحاد العربي للصناعات الهندسية اجتماع هيئته العامة ومجلس إدارته في بيروت/لبنان بمشاركة عشرين من الشركات الأعضاء من مصر وسورية ولبنان والعراق. أشار الحضور خلال المناقشات إلى التأثير السلبي للتحديات في الأقطار العربية الذي يتجلى في صعوبة الحصول على تأشيرة دخول لأعضاء الاتحاد إلى البلد الذي تم اختياره للاجتماع، وأكدوا بأن أعضاء الاتحاد في كل قطر يتواصلون مع الجهات المختصة للتخفيف من تأثير هذا النوع من العوائق قدر الإمكان.',
          content: 'عقد الاتحاد العربي للصناعات الهندسية اجتماع هيئته العامة ومجلس إدارته في بيروت/لبنان بمشاركة عشرين من الشركات الأعضاء من مصر وسورية ولبنان والعراق.\n' +
            'استهلت الاجتماعات بكلمة قصيرة لرئيس مجلس الإدارة أبرز فيها أهمية الاتحاد كمنبر قانوني يسمح للأعضاء بالعمل في المواضيع الملحة التي تؤثر على أعمالهم ومجتمعاتهم وأقطارهم العربية. وأكد على أن الاتحاد حاز على احترام المنظمات العربية واعترفت به حكومات بعض الأقطار كتجمع لأصحاب الأعمال وشريك في التنمية، كما اتخذته بعض الجهات الدولية التي تعمل بالتنمية كمرجع في وضع خططها وفي دعم تنفيذها على أرض الواقع أيضاً. وشدّد رئيس مجلس إدارة الاتحاد على أهمية مواصلة السعي ليكون الاتحاد حجر أساس في وضع التشريعات قبل صدورها من أجل ضمان مقاربتها مع مايجري في العالم مما سيعود بالنفع الكثير على الاقتصاد والمجتمع لأنه سيساعد في تيسير وتوجيه مبادرات التنمية الاقتصادية.\n' +
            'أشار الحضور خلال المناقشات إلى التأثير السلبي للتحديات في الأقطار العربية الذي يتجلى في صعوبة الحصول على تأشيرة دخول لأعضاء الاتحاد إلى البلد الذي تم اختياره للاجتماع، وأكدوا بأن أعضاء الاتحاد في كل قطر يتواصلون مع الجهات المختصة للتخفيف من تأثير هذا النوع من العوائق قدر الإمكان.\n' +
            'كما وضعت على طاولة النقاش مسألة هامة بخصوص ماينفرد به الاتحاد عن غيره من حيث تنوع الصناعات التي يضمها واختلافها والذي يمكن اعتباره فرصة وليس مشكلة بالعمل على إنشاء تجمعات متجانسة تحت مظلة الاتحاد تعنى بمواضيع متخصصة ومشاكل مشتركة مثل تجمع مصنعي الكابلات العرب الذي أنشئ في عام 2005.&nbsp;\n' +
            'ذكرت بعض العوائق الحقيقية أمام الاستثمارات والتجارة العربية البينية خلال الاجتماع ومن أهمها الرسوم "غير الجمركية" المفروضة على المنتجات، وتغير أسعار الطاقة في بعض الأقطار، والإغراق. وطرحت فكرة أن يقوم الاتحاد بالعمل بجهود وخطوات تنفيذية لتذليل بعض هذه العوائق من خلال الضغط lobbying كتجمع لأصحاب الأعمال. كما وردت فكرة من الجيل الصناعي الشاب بتوظيف طاقات مبدعة ورعايتها ووضع إطار لعملها على توفير بعض الدراسات والحلول للمشكلات الجماعية؛ والأهم من ذلك لتغيير مفهوم "ماذا سيقدم لي الاتحاد" إلى "ماذا يمكن أن أقدم للاتحاد".&nbsp;\n' +
            'وعلى هامش الاجتماعات نظم الاتحاد العربي للصناعات الهندسية ندوة استمع فيها الحضور لعرضين، الأول بعنوان "دور أصحاب الأعمال في تنمية المهارات والدعم الفني الذي توفره منظمة العمل الدولية في هذا المجال" قدمه خبير منظمة العمل الدولية ILO، والثاني بعنوان "واقع وفرص التبادل التجاري لمنتجات الصناعات الهندسية في الوطن العربي" قدمه خبير منظمة الإسكوا ESCWA.',
          locale: { connect: { name: 'ar-SY' } }
        }
      ]
    },
    activity: {
      create: {
        started_on: new Date('2014-11-14'),
        end_on: new Date('2014-11-15'),
        level: { connect: { id: 2 } }
      }
    },
    user_post_created_byTouser: { connect: { user_login: 'admin' } },
    type: { connect: { name: 'normal' } },
    category: { connect: { slug: 'activity' } }
  }
}
);
console.log(result);

