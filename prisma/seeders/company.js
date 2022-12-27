import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة العامة للصناعات المعدنية (بردى)",
            excerpt: "شركة لتصنيع الأدوات المنزلية وخاصة البرادات والأفران وطناجر الضغط",
            representer: "م. موفق عتيق",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة نوري للتجارة",
            excerpt: "تأسست شركة نوري للتجارة عام 1989 كشركة توصية بسيطة هدفها التجارة العامة واستيراد وتصدير المواد الأولية للصناعة وقضبان الستانلس ستيل والأنابيب الحديدية السوداء والمغلفنة والمضخات الزراعية والكهربائية",
            representer: "بشار نوري",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "المؤسسة العامة للصناعات الهندسية",
            excerpt: "تشرف المؤسسة الهندسية على كافة الصناعات الهندسية المتعلقة بالقطاع العام ويتبع لها /13/  شركة صناعية لإنتاج الكابلات- البطاريات السائلة- الحديد-الإنشاءات-الصناعات الالكترونية - الصناعات المنزلية- الصناعات التحويلية-الجرارات الزراعية- المحركات- الأخشاب- الألمنيوم- الكبريت.",
            representer: "د. نضال فلوح",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مدار لبثق الألمنيوم",
            excerpt: "أنشأت شركة مدار لبثق الألمنيوم عام 1992 وهي متخصصة بإنتاج مقاطع الألمنيوم. ولها شركات شقيقة متخصصة بإنتاج مواد الإنشاءات والبناء.",
            representer: "محمد دعبول",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الريم والرشيد المتحدة للصناعة",
            excerpt: "شركة الريم والرشيد المتحدة للصناعة هي اندماج لشركتي \"الرشيد للحواسب والصناعة\" و\"الريم للمنتجات البلاستيكية\" بموجب قرار وزارة الاقتصاد رقم /3394/ تاريخ 28/12/2011. تأسست شركة الرشيد للحواسب والصناعة عام 1992 بموجب قانون الاستثمار رقم 10 لعام 1991 وهي مختصة بإنتاج القوالب واستيراد وتجارة القوالب وموادها الأولية اللازمة، وبرامج الحاسوب الصناعية والتجارية. تأسست شركة الريم للمنتجات البلاستيكية عام 1997 بموجب قانون الاستثمار رقم 10 لعام 1991 وهي مختصة بإنتاج مختلف المنتجات والأدوات والأثاث المنزلي البلاستيكي.",
            representer: "عماد اليافي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "عوض عمورة الصناعية",
            excerpt: "مجموعة شركات عوض عمورة تأسست عام 1975 وتضم الآن مجموعة الشركات التالية:\n- في سورية: تصنيع زيوت السيارات- تصنيع بروفيلات الألمنيوم- تصنيع البراميل المعدنية- تصنيع العبوات البلاستيكية.\n- في السودان: تصنيع زيوت السيارات- سحب بروفيلات الألمنيوم- تصنيع العبوات البلاستيكية.",
            representer: "د. عوض عمورة",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة دباس للصناعة ش.م.ل",
            excerpt: "إن شركة دباس للصناعة عضو في مجموعة شركات دباس، وهي تركز على جودة المنتجات والخدمات على حد سواء. تقوم شركة دباس للصناعة بإنتاج: شاسيهات الفلويسانت، أجهزة الإنارة وما يتفرع عنها من خزانات كهربائية، وتابلوهات ومحولات ومقويات كهربائية، واحتياطي الطاقة الكهربائية، وفواصل الطاقة الكهربائية، وشاحن كهربائي، والقطع الحديدية وسقوف مستعارة من المعادن.",
            representer: "سمير طبال",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة كابلات لبنان ش.م.ل",
            excerpt: "لدى شركة كابلات لبنان 45 عاما من الخبرة في إنتاج مجموعة كاملة من الكابلات الكهربائية والهاتفية في خدمة المرافق العامة، الصناعية، وفي قطاعات البناء والنفط والغاز. كابلات لبنان لديها شهرة في منطقة الشرق الأوسط وأفريقيا لأنها عالية الجودة وتعتمد الدقة في التسليم في الوقت المحدد وفي خدمة الزبائن. تعمل الشركة وفق مواصفات الجودة العالمية ISO:9001  و ISO:14001",
            representer: "م. غسان بلبل",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة مدار زجاج (المحدودة المسؤولية)",
            excerpt: "تصنع شركة مدار زجاج جميع أنواع الزجاج المعماري والزجاج المستخدم في المجالات الصناعية والصناعات الهندسية، إضافة إلى الزجاج الفني.",
            representer: "حسان دعبول",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الأسلاك التونسية ",
            excerpt: "تأسست عام 1978، وتعتبر شركة تونس للكابلات الشركة الرائدة في إنتاج الكابلات في تونس.\nتوظف شركة تونس للكابلات 525 من العاملين من بينهم مهندسين وفنيين ذوي المهارات العالية، ويزيد رقم مبيعاتها عن 160 مليون دينار منها 65% من التصدير.\nكونها الشركة الرائدة في صناعة الكابلات، فإن تونس للكابلات دمجت الطاقة الإنتاجية مع الخبرة التكنولوجية لتلبية الطلب المتزايد في الأسواق.\nكي تكون الرائدة في السوق، فقد أسست تونس للكابلات نظام ضمان الجودة وحصلت على شهادة 9001 ISO نسخة 2009.\nإن مجال منتجات شركة تونس للكابلات الذي يحقق التنوع يتوافق تماماً مع المواصفات الدولية IEC بما فيها المواصفات الأوربية والفرنسية والألمانية والبريطانية.",
            representer: "منصف السلامي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الثابت لصناعة الالمنيوم المحدودة",
            excerpt: "هي إحدى شركات مجموعة ثابت البلداوي وأولاده، حيث بدأت الشركة عملها منذ عام 1974 في جمهورية العراق ومقرها العاصمة بغداد. تهتم الشركة بشكل رئيسي بتصميم وتنفيذ كافة أعمال الألمنيوم والزجاج وفق المواصفات العالمية الحديثة و المتجددة وتجارة الألواح الالكابوند لتغليف الواجهات والسلالم العملاقة.",
            representer: "كرار ثابت البلداوي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مدار لطلاء الصفائح ",
            excerpt: "أحدثت شركة مدار لطلاء الصفائح في نهاية عام 2004 لإنتاج صفائح الألمنيوم والحديد المغلفن المطلية. ويتضمن المعمل خط الإنتاج الرئيسي، ومعمل لإنتاج الدهانات ووحدة لخلط ومزج الألوان باستخدام أحدث التقنيات المتاحة في هذا المجال . بالإضافة إلى وحدة لشرح وزخرفة اللفائف المطلية لإنتاجها بالقياسات المطلوبة، ووحدة لقص اللفائف وتحويلها إلى ألواح.",
            representer: "م. محمد ممتاز دعبول",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مؤسسة المصري للصناعات المنزلية",
            excerpt: "أول منشأة قامت بتصنيع أفران غاز و طناجر الضغط في سورية",
            representer: "عمر المصري",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مجموعة محجوب الصناعية ",
            excerpt: "تأسست مجموعة محجوب الصناعية في عام 1958 وأصبحت واحدة من الشركات العالمية المتميزة بامتدادها الشاقولي في تصميم وتصنيع المواد الأولية والقوالب ومعدات سحب وتصنيع مقاطع الـ U-PVC بخلائط هندسية خاصة للمناخ القاسي مع تصميم وتصنيع أنظمة للنوافذ والأبواب تلائم أسواق منطقة الشرق الأوسط والخليج العربي والولايات المتحدة الأمريكية بتنافسية تعتمد حلول تكاملية اقتصادية وفنية وجمالية.\nولقد أثبتت تقنياتنا المتمثلة بمجموعة من براءات الاختراع المسجلة في الولايات المتحدة الأمريكية وسورية تنافسيتها وتميزها العالميين من خلال نجاح معملنا Peak Profile في ولاية يوتاه &ndash; مدينة سولت ليك في الولايات المتحدة علماً أن جميع حلول أنظمة محجوب للنوافذ والأبواب مصنعة ومختبرة وفقاً للمواصفات القياسية الألمانية والأمريكية والسورية. \nوتنفرد مجموعة محجوب الصناعية بكفالة على حلولها لمدة 25 عام في تحمل كافة العوامل الجوية القاسية في بلدان الخليج العربي وولايات (نيفادا - أريزونا - فلوريدا - كنتاكي) الأمريكية والموثقة بفحوصات الجهات المعتمدة.\n(ويعد معملنا في أمريكا من المعامل الوحيدة الذي كان رابحاً أثناء الأزمة المالية أعوام 2008 - 2009 - 2010 بسبب استخدامه لميزات محجوب الفنية والتنافسية ذات المواصفة الأعلى بالسعر الأدنى)",
            representer: "محمد خالد محجوب",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مجموعة الدسوقي – مولينكس – المنارة",
            excerpt: "تأسست مجموعة الدسوقي لصاحبها عبد العزيز الدسوقي عام 1967، ويشمل الإنتاج: ساحبات هواء المنارة&ndash; مولينكس للأدوات الكهربائية المنزلية&ndash; مراوح الدسوقي المتعددة الاستعمال&ndash; المقاومات الحرارية المستعملة بالأفران والغلايات.",
            representer: "عبد العزيز الدسوقي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مجموعة عبدالكريم",
            excerpt: "تأسست في عام 1986 وبدأت الإنتاج في عام 1987. نشاطها الصناعي يغطي: الزيوت والشحوم المعدنية، والبراميل المعدنية، والمواد الكيماوية المستخدمة في حقول النفط، ومصفاة للزيوت المعدنية المستعملة.\nتضم مجموعة من الشركات هي: الكريم للتجارة والصناعة ش.م.م- ميتا درم لصناعة البراميل المعدنية- الكريم للكيماويات ش.م.م- الكريم للزيوت المعدنية ش.م.م",
            representer: "جمال عبدالكريم",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الحافظ لصناعة  البرادات والأدوات المنزلية",
            excerpt: "بدأت المرحلة الجديدة لشركة الحافظ في منتصف السبعينيات، وقد بذلت الشركة جهوداً كبيرةً تهدف إلى تطوير وتحسين أدائها ومنتجاتها وتقنيات ومعدات التصنيع فيها بما يتلاءم مع كل ما هو عصريّ في هذا المجال من الصناعة. تعتبر شركة الحافظ من الشركات الهندسية العريقة التي تنتج التصاميم للبرادات والأدوات المنزلية المختلفة، وتقوم ورشات خاصة في الشركة بتصنيع العديد من الآلات والتجهيزات وقوالب البرادات لتغذية المشاريع المستحدثة كما تقوم بإجراء عمليات الصيانة اللازمة عليها.",
            representer: "عبد المعين الحافظ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة التجهيزات الكهربائية اللبنانية – ماتليك",
            excerpt: "",
            representer: "الأستاذ الياس ضومط",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الإنشاءات المعدنية والصناعات الميكانيكية ",
            excerpt: "افتتحت الشركة معاملها في عدرا قرب دمشق عام 1978 وبدأت بإنتاج المراجل البخارية وبسعات تتراوح بين 1 طن و10 طن/ سا وكذلك إنتاج أنظمة التسخين بالطاقة الشمسية ومنتجات الإنشاءات المعدنية (خزانات الوقود- الأبراج- القاطرات) إضافة إلى إنتاج غاز الأوكسجين.",
            representer: "م. عدنان رستم",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الحديد والصلب المصرية",
            excerpt: "تقوم الشركة باستغلال مناجم الحديد وكافة الأعمال المتعلقة بصناعة الحديد والصلب والإتجار فيها كمجمع متكامل لإنتاج الحديد والصلب للاستهلاك المحلي والتصدير بطاقة 1.2 مليون طن صلب خام سنوياً مطابق للمواصفات العالمية والمحلية. تقع الشركة في مدينة التبيين 35 كم جنوب القاهرة على مساحة 1700 فدان ويعمل بها حوالي 12000 عامل.",
            representer: "م. محمد سعد نجيدة",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة المصرية للسبائك الحديدية (الفيروسيليكون)",
            excerpt: "تقوم الشركة المصرية للسبائك الحديدية بتصنيع سبيكة الفيروسيليكون حيث تصدر 75% من إنتاجها للأسواق العالمية. ويعتبر مصنع الفيروسيليكون &ndash;ايفاكو &ndash; بطاقته الإنتاجية  /50/ ألف طن سنوياً أكبر مركز صناعي متكامل لإنتاج سبائك الفيروسيليكون في الشرق الأوسط. ويستخدم إنتاجه في صناعات الحديد والصلب.\nلدي الشركة فريق عمل تسويقي ذو مستوى عال من الخبرة والكفاءة بالإضافة إلى التعاقدات الطويلة مع عملائها في أوروبا واليابان والولايات المتحدة الأمريكية.\nتم إنشاء مركز تدريب بالمركز الرئيسي للشركة بادفو و تزويده بجميع الأجهزة العلمية اللازمة و إعداد الدورات التدريبية للعاملين بمعرفة المراكز المتخصصة داخل الشركة.\nحصلت الشركة على شهادة المواصفة العالمية ISO 9002 اللازمة لتصدير منتجاتها للخارج. و قد أدخلت الشركة مؤخرا نظام المعلومات المتكامل عن طريق شركة ا.ب.م العالمية لربط المصانع بإدفو بفروعها بالقاهرة و الإسكندرية ليتسنى التعامل مع تحديات العولمة عن شبكات الإنترنت و تبادل المعلومات عن طريق التقنيات الحديثة.",
            representer: "م. محمد السعداوي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الوايلر فريد – للطلمبات",
            excerpt: "الوايلرفريد هي شراكة مصرية ألمانية بين شركة Allweiler AG الألمانية وشركة الوايلر فريد المصرية وقد تأسست عام 1982 وتقوم بتصنيع كافة أنواع المضخات للأغراض (الزراعية- الري- الصناعية- المنازل) ويقع مصنع شركة الوايلر فريد بمدينة العاشر من رمضان، المنطقة الصناعية ب 2.",
            representer: "م. حسن فريد حسنين",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة مصر لصناعة الكباسات ",
            excerpt: "- شركة مصر لصناعة الكباسات شركة مساهمة مصرية ومساهميها:\n&bull; مجموعة من البنوك ( بنك التنمية الصناعية، بنك الاستثمار العربي، بنك الاستثمار الأوروبي، بنك قناة السويس، بنك مصر إيران، البنك المصري الخليجي)\n&bull; مؤسسة التمويل الدولية\n&bull; مجموعة دله البركة البحرين، الشركة المصرية السعودية.\n&bull; مجموعة من الأفراد.\n- المصنع هو المصنع الوحيد في الشرق الأوسط وأفريقيا لإنتاج كباسات التبريد. رأس مال الشركة المصدر والمدفوع  118,580,200 جنيها مصريا حوالى  20مليون دولار أمريكي.\n- مجموع العاملين بالشركة 720 عامل.\n- الشركة حاصلة على شهادات الجودة : (ISO 9001:2000, VDE, GOST, ROHS)\nنشاط الشركة:\n- يتمثل نشاط الشركة فى إنتاج كباسات التبريد اللازمة لصناعة الثلاجات المنزلية.\n- تصل الطـاقة الإنتاجية القصوى للمشروع حوالي 2 مليون وحـدة كبـاس سنوياً لتغطيـة احتياجات السـوق المحلـى بالاضافة إلي تصدير منتج الشركة للعديد من الدول العربية والأفريقية وكذلك الدول الأوروبية.\n- أهم أسواق التصدير: الجزائر، السودان، تونس، المغرب، السعودية، سوريا، الأردن، لبنان، العراق، إثيوبيا، نيجيريا، البرتغال، إيطاليا، إسبانيا، تركيا، روسيا، المجر، بولندا، التشيك، إنجلترا، اليونان، ألمانيا، بلغاريا.\n- إن إنتاج الشركة يتميز بمستوى جودة عالي مما اكسب الشركة سمعة ممتازة في أسواق التصدير بما يتمتع به المنتج من قدرة أداء تشغيلي فائقة على مواجهة ظروف التشغيل الشاقة مثل ارتفاع درجات الحرارة وتذبذب الجهد الكهربائى مما يعطيها ميزة التشغيل الآمن طوال عمر الكباس إضافة إلى انخفاض مستوى الضوضاء الصادر عنه.\n- يغطي إنتاج الشركة مختلف احتياجات العملاء سواء من حيث الأحجام المختلفة أو مختلف غازات التبريد.\n- تنتج الشركة كباسات صديقة بيئة لا تشكل خطرا على طبقة الأوزون ، ولا تسهم في ظاهرة \"الاحتباس الحراري\".\n\n",
            representer: "م. جمال حسن عفيفى",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة مالتي إم جروب",
            excerpt: "تصنع الشركة الأثاث المكتبي (معدني وخشبي) والأثاث المدرسي والفندقي كما تصنع  الشبك الممدد ومستلزمات البناء.",
            representer: "م. إسلام عبد الهادي عبد المنعم السيد",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة النصر لصناعة المطروقات",
            excerpt: "تعتبر شركة النصر لصناعة المطروقات أكبر منشأة للمطروقات في مصر وفي الشرق الأوسط. أنشئت الشركة عام 1960 وهي تنتج الصفائح الحديدية المطروقة التي تغذي صناعة السيارات والسكك الحديدية.",
            representer: "م. حمدي عباس إبراهيم السيد",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة العربية للصلب المخصوص (اركوستيل)",
            excerpt: "- الشركة العربية للصلب المخصوص \"أركوستيل\" شركة مساهمة مصرية تقع في المنطقة الصناعية الرابعة والخامسة بمدينة السادات- محافظة المنوفية بجمهورية مصر العربية\n- تقوم \"أركوستيل\" بإنتاج وتسويق الصلب عالي الجودة على هيئة عروق صلب ومسبوكات ومدرفلات طويلة ولفائف.\n- الشركة مجهزة بأحدث التكنولوجيا والمعدات في مجال إنتاج ودرفلة وتشطيب ومعالجة الصلب المخصوص.\n- تنتج الشركة الصلب المقاوم للصدأ والصلب سهل القطع وصلب اليايات وصلب المعالجة السطحية وصلب التقسية طبقاً للمواصفات العالمية والمواصفات الفنية للعملاء.",
            representer: "م. أسامة حلمي السعيد",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مصنع قادر للصناعات المتطورة",
            excerpt: "- أنشئ مصنع قادر (أحد مصانع الهيئة العربية للتصنيع) عام 1949 بغرض إنتاج طائرة التدريب (الجمهورية) وغيرها من المنتجات المدنية ذات الجودة العالية.\n- قام المصنع في بداية الستينات بإدخال تكنولوجيا تشكيل وتشغيل الصلب المدرع لإنتاج العربات المدرعة بمصر وقد أنتج المصنع العربية المدرعة (الوليد) وأنتج منها حوالي 2000 عربة وتم تسويقها بعدة دول عربية وأفريقية.\n- في سنة 1975 انضم مصنع قادر للهيئة العربية للتصنيع.\n- في سنة 1982 بدأ المصنع في إنتاج عائلة المركبة المدرعة (فهد) وفي نفس العام أنشئ بالمصنع مركز لتصنيع منتجات البلاستيك للأغراض المدنية والعسكرية.\n- في سنة 1990 بدأ المصنع بإنتاج العربات المدرعة الخفيفة وكذا العربات المصفحة.\n- في سنة 1994 تم إنتاج العديد من عربات الإطفاء المتوسطة والثقيلة.\n- في سنة 2003 بدأ مصنع قادر بالمشاركة في الخطة القومية لتطوير الخدمة بالسكك الحديدية المصرية وذلك من خلال تصنيع التجهيزات الداخلية للعربات بأنواعها وكذلك البواجي والعجلات وأجسام العربات والفرامل.\n- يبلغ عدد العاملين حوالي 2000 عامل.",
            representer: "م. عبد الصادق أحمد عبدالرحيم",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة السويدي إليكتريك ",
            excerpt: "- تصنيع المهمات الكهربائية (كابلات حتى جهد 400 ك.ف،محولات القوى حتى جهد 220 ك.ف، محولات التوزيع العدادات، توربينات الرياح، أعمدة الإنارة، عوازل خزفية وصلات ونهايات كابلات، أسلاك ومواصلات) \n- المشروعات والمقاولات الكهربائية: مشروعات توليد الكهربائية بنظام EPC أو IPP- مشروعات نقل وتوزيع الكهرباء.",
            representer: "م. احمد السويدي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة ماك لتصنيع تيل الفرامل (إيماك لنظم الفرامل)",
            excerpt: "-    شركة ماك لتصنيع تيل الفرامل (إنتاج وصنيع جميع أنواع تيل الفرامل النقل والملاكي وتصنيع التيل الصناعي).\n-    شركة إيماك لنظم الفرامل (إنتاج وتشطيب جميع أنواع تيل الفرامل النقل والملاكي).",
            representer: "م. إبراهيم السيد إبراهيم صالح",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة جوريكا مصر جروب للصناعة",
            excerpt: "تأسست عام 1984 تقوم بإنتاج المقطورات والنصف مقطورات والأوتوبيسات والميني باصات ولواري MAN حيث أننا الوكلاء الوحيدون لشركة MZN Germany في مصر \n\n",
            representer: "م. ممدوح قسطور غبريال",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة كيمكو للأعمال الكهربائية والتوريدات",
            excerpt: "تصنيع معادن للأعمال الكهربائية وحوامل كابلات وسلالم كابلات وملحقاتها.",
            representer: "م. خالد عبد المجيد سيف ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة تراست للتصنيع الهندسي",
            excerpt: "تصنيع جميع أنواع كراسي السيارات (ملاكي - نصف نقل - اتوبيسات - ميكروباص)",
            representer: "تامر محمد ماجد شافعي  ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة المورد للإستيراد والتصدير والاستثمار ",
            excerpt: "- استيراد وتسويق جرارات زراعية ومعدات هندسية.\n- وكيلة جرارات سوناليكا بمصر.\n- شركة تتمتع بالإتصالات الدولية والمحلية ولها علاقات تجارية مميزة.",
            representer: "سليمان عبادة",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة العالمية لتكنولوجيا المعادن",
            excerpt: "-    إنتاج سبائك الألمونيوم المختلفة في شكل قوالب.\n-    إجراء المعالجة الحرارية لأجزاء الألمنيوم.\n-    مصنع الشركة في مدينة العاشر من رمضان الصناعية.",
            representer: "م. بريقع توفيق محمد ضيف الله ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة هادي مايزر",
            excerpt: "تعتبر المشايات المعدنية التي تنتجها مايزر إحدى أفضل المنتجات من نوعها في أوربة. ونشعر بأن هذا يفي الشركة حقها. ولاشك بأن أحد العوامل في هذا النجاح هو التزام قسم التخطيط بالعمل وبمواعيد التسليم. نحن ننتج المشايات المعدنية بجميع أنواعها ومقاساتها والسلالم الحلزونية.",
            representer: "م. شريف عبد الهادي عبد المنعم ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الإحسان",
            excerpt: "",
            representer: "إحسان الحافظ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الأمين",
            excerpt: "",
            representer: "أمين الحافظ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة اللبنانية للتجارة والصناعة الحديثة - ليماتيك ",
            excerpt: "شركة ليماتيك هي شركة دولية متخصصة في صناعة الأجهزة المنزلية ومتمماتها. وهي حالياً واحدة من أهم الشركات المنتجة للأجهزة والمعدات المنزلية  لما حققته من نمو مطرد عالمياً خلال السنوات الخمسين الماضية. إن منتجات ليماتيك تتفوق بتصاميمها على مستوى العالم وهي من الأكثر تنافسية في الأسواق. لدى شركة ليماتيك مصانع في لبنان والسعودية وسورية، وهي تشغل أكثر من 1800 عامل.",
            representer: "م. محمد سعيد الحافظ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة اوباكو / لبنان",
            excerpt: "",
            representer: "غسان الحافظ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة إعمار الوطنية",
            excerpt: "",
            representer: "م. إياد عمورة",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة العامة لصناعة الكابلات بدمشق",
            excerpt: "هي إحدى الشركات العامة التابعة للمؤسسة العامة للصناعات الهندسية والتي تتبع بدورها وزارة الصناعة.\nتقوم الشركة بإنتاج وتسويق كافة أنواع كابلات التوتر المنخفض وحتى (1) كيلو فولت ، تعتمد الشركة المواصفات العالمية التالية : ( السورية SNS &ndash; الألمانية VDE &ndash; الكهرباء الدولية IEC ) ويمكن التصنيع وفق أية مواصفة عالمية أخرى.\nتتمتع كافة منتجات الشركة بجودة عالية وسمعة جيدة في الأسواق المحلية والمجاورة و يتمتع المهندسون والفنيون في الشركة بخبرات فنية متميزة و الشركة حائزة على شهادة الجودة : ISO 9001 لعام 2000 من شركة DNV.\nتستخدم الشركة في صناعة منتجاتها آلات متطورة حديثة وتسعى الشركة دائما\" لتطوير خطوط الإنتاج وتحديثها لمواكبة التطورات العالمية لهذه الصناعة.\nتستخدم الشركة أجود أنواع المواد الأولية المطابقة للمواصفات العالمية كما أن الشركة مجهزة بأحدث الأجهزة المخبرية اللازمة لفحص المواد الأولية ولإجراء الاختبارات على المنتجات النهائية والنصف مصنعة.",
            representer: "",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة العربية السورية للصناعات الإلكترونية سيرونيكس",
            excerpt: " تعد الشركة العربية السورية للصناعات الالكترونية من الشركات الرائدة في مجال الصناعات الإلكترونية و يتجلى هذا التطور بمواكبتها احدث التقانات في الإلكترونيات الرقمية و التماثلية و التقدم الواضح من خلال القفزة النوعية التي أحرزتها في فترة وجيزة و هي تستمر في متابعة كل ما هو جديد.",
            representer: "د. نوار العوا",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة حلب لصناعة الكابلات",
            excerpt: "إحدى الشركات العامة التابعة للمؤسسة العامة للصناعات الهندسية والتي تتبع بدورها لوزارة الصناعة ، إنتاج الشركة من الكابلات بمختلف أنواعها يستخدم لنقل التوترات المنخفضة والمتوسطة والعالية ونقل الإشارات الصوتية والتلفزيونية.",
            representer: "م. مصطفى جويد ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مركز الأعمال الدولي",
            excerpt: "يعتبر مركز الأعمال الدولي من أوائل الشركات المتخصصة في سوريا التي  تعنى بمجالات حلول الطاقة المتكاملة  وهندسة الاتصالات وتقديمالاستشارات الفنية والهندسية المتراكمة لديها نتيجة الخبرة الواسعة التي اكتسبتها منذ انطلاقتها المبكرة.\n&bull; تأسس مركز الأعمال الدولي IBC من قبل المهندس هيثم الجندلي عام 1955 كمكتب هندسي متخصص في دراسة وتنفيذ المشاريع الهندسية والكهربائية.\n&bull; تطور مركز الأعمال الدولي خلال العقود الستة الماضية بحيث أصبح من أكبر الشركات الوطنية الرائدة في مجالات حلول الطاقة وهندسة الإنارة والاتصالات وحازعلى ثقة كبرى الشركات العالمية المعروفة في هذه المجالات وقام بتمثيلها في سوريا.\n&bull; يسعى مركز الأعمال الدولي لتطوير خدماته وتحسينها باستمرار وتوسيع فروعه ليشمل كافة  أنحاء القطر كما يسعى لإيصال خدماته إلى بلدان  أخرى كما تم مؤخراً بافتتاح IBC Africa  مركز الأعمال الدولي في السودان، الخرطوم.\n&bull; قام مركز الأعمال الدولي بتنفيذ ودراسة العديد من المشاريـع الهامة والرائدة نذكر منها:\n- تركيب  وحدات التغذية EMERSON لمشروع المليون خط مع المؤسسة العامة للاتصالات.\n- تطوير وتركيب  تجهيزات الطاقة الاحتياطية في مطارات سوريا\n- تركيب أكبر مجموعة وحدة تغذية احتياطية في سورية UPS في هيئة الطاقة الذرية\n- مؤخراً تم التعاقد مع شركة MTN سوريا لتنفيذ أعمال الصيانة الطارئة والوقائية لأبراج البث الخلوية.\n&bull; يولي مركز الأعمال الدولي بالغ الأهمية للصيانة وخدمة ما بعد البيع حيث يسعى من خلال كوادره من مهندسين وفنيين لتقديم الدعم الفني على مدار الساعة لكافة عملاءه وبالسرعة الممكنة.",
            representer: "م. وائل جندلي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة القصير للعوازل",
            excerpt: "",
            representer: "محمد هيثم قصير",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مؤسسة الريس للأجهزة الكهربائية المنزلية",
            excerpt: "",
            representer: "خليل الريس",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة العامة للصناعات الميكانيكية",
            excerpt: "الشركة العامة للصناعات الميكانيكية هي إحدى شركات وزارة الصناعة والمعادن العراقية وهي شركة عامة عاملة في تصنيع المضخات والآلات الزراعية أجهزة الري بالرش تصنيع البراغي وبقية أجزاء الربط إنتاج الجرارات والحاصدات والآلات الزراعية والمضخات الإروائية والصناعية إنتاج الأثاث المعدني والخشبي صناعة ألواح البناء الجاهز، والمستودعات والمخازن المبردة.",
            representer: "م. صباح الخفاجي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة العربية للمعادن الخفيفة",
            excerpt: "تأسست شركة الصناعات الكويتية عام 1993 كشركة قابضة، وتعتبر الشركة الأولى من نوعها في دولة الكويت. الهدف الرئيسي للشركة هو تقديم خدمات في مجال الإدارة للشركات التابعة لها، وتشجيع المشاريع الجديدة والاستثمار في القطاعات الصناعية المختلفة محلياً وعالمياً وفق اهتماماتها. إن نشاط الشركات التابعة متنوع ويتكامل لتنفيذ أعمال الألمنيوم المعماري. ميزة هذا المفهوم للعميل هو تلبية جميع متطلباته المعمارية من مصدر واحد سواءً كان سحب الألمنيوم، تصنيع، أعمال الزجاج، تشكيل اللفائف وصولاً للتركيب والصيانة.",
            representer: "محمد النقي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة ألمنيوم الكويت",
            excerpt: "أنشئت الشركة في عام 1968 وهي متخصصة في تصميم وتصنيع وتركيب وصيانة منتجات الألمنيوم للإنشاءات والديكورات. تنتج الشركة جميع أنواع الأبواب والنوافذ والفواصل الداخلية والدرابزين وغيرها من منتجات الألمنيوم الإنشائية المختلفة.\nنفذت الشركة العديد من مشاريع الإسكان الحكومية والمشاريع التجارية المرموقة في دولة الكويت ومن بينها أبراج الكويت كمعلم سياحي في الكويت. تقدم الشركة بانتظام منتجات وتكنولوجيا جديدة لإرضاء متطلبات العملاء وأذواقهم وهو ما لم تقدمه الشركات المنافسة في منطقة الخليج، وقد فازت الشركة بعدد من الجوائز والكؤوس في مجال أنشطتها، ومنحت الشركة عام 1999 شهادة نظام إدارة الجودة الأيزو 9001.",
            representer: "ناصر علي النقي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الكابلات السعودية",
            excerpt: "هي شركة رائدة في سوق تزويد الكابلات ذات المستوى العالمي لقطاعي الطاقة والاتصالات تأسست عام 1975.\n وينعكس تميزها التقني في حقيقة أنها أول مصنع في الشرق الأوسط لإنتاج الكابلات للجهد المتوسط والعالي وكذلك الألياف الضوئية للاتصالات. وتواصل شركة الكابلات السعودية الابتكار، وتوفير مثبطات اللهب والكابلات الخالية من الهالوجين. وبفضل شهادة الجودة العالمية ISO 9001 للتصميم والتصنيع والخدمات وصلت الشركة إلى تحقيق رضى العملاء في أكثر من 60 بلداً في جميع أنحاء العالم.",
            representer: "فيصل الدباغ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الحدادة المحدودة",
            excerpt: "تأسست شركة أكسينل عام 1973 من خلف أحد أقدم منازل التجارة في الشرق الأوسط، وهي تنتمي لمجموعة شركات تم إنشاؤها وفق رؤية مشتركة لتحقيق النمو الاقتصادي من خلال الترابط المعرفي مع أطراف مختلفة في العالم. عبر مايزيد عن 35 عاماً في تاريخ إكسينل، ومن خلال المهارات الداخلية والشراكات والمشاريع مع الشركات العالمية في أنحاء الأرض، اكتسبت خبرة في مجالات الطاقة والصناعات المتنوعة، والبتروكيماويات، والإنشاءات وتطوير البنية التحتية، والرعاية الصحية، والخدمات الصناعية، وتكنولوجيا المعلومات، والخدمات اللوجستية، والعقارات والاستثمارات العالمية.\nمن خلال قدرتها على تحديد الفرص، فإن إكسينل مبدعة وسباقة في بناء مشاريع وشركات البنية التحتية، والصناعات المتنوعة والمقاولات معترف بها إقليمياً ودولياً. من إنشائها أول مصنع لإنتاج الكابلات الكهربائية في الشرق الأوسط، إلى بناء أول محطة طاقة خضراء في جنوب آسيا، ومن أول تطبيق عملي لمنشأة تحلية المياه  في السعودية إلى الاستثمار الخاص في صناعة البتروكيماويات، فقد شاركت اكسينل برأسمال استثماري وبنت تحالفات مع شركات عالمية ومؤسسات دولية معترف بها في إنشاء شركات ذات ارتباطات عالمية.",
            representer: "",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الشرق الاوسط للكابلات – ميدال كبيلز ",
            excerpt: "شركة ميدال للكابلات هي قصة نجاح ولدت عام 1977، كشراكة بين إنترستيل- البحرين و أوليكس للكابلات-استراليا.\nوكان هدفها أن تشق الطريق في مجال تصنيع قضبان الألمنيوم والموصلات الكهربائية للوصول إلى درجة من الاكتفاء الذاتي الصناعي في منطقة الشرق الأوسط.\nرسالتنا هي أن نؤسس ونستثمر في منشآت تصنيع سبائك وقضبان الألمنيوم وخدماتها وتبني أحدث ماتوصلت له التكنولوجيا في عمليات التصنيع.",
            representer: "حامد راشد الزياني",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة عمورة للبترول",
            excerpt: "تصنيع زيوت السيارات، سحب بروفيلات ألمنيوم، تصنيع العبوات البلاستيكية",
            representer: "د. عوض عمورة",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مجموعة جياد الصناعية",
            excerpt: "تأسست المجموعة في عام 1993م وفق رؤية تجعل منها كبرى المجموعات الصناعية في الإقليم، رسالتها العمل والمبادرة لتطوير المقدرات والاستغلال الأمثل للإمكانيات دفعاً لمسيرة التنمية وتحقيق إستراتيجية الدولة الهادفة لاستكمال بناء أمة سودانية موحدة آمنة ومتطورة. يغطي نشاط المجموعة معظم مجالات الإنتاج الصناعي وتتخصص في توطين الصناعات والتقانات الحديثة بالتركيز علي الصناعات الهندسية من الآليات الثقيلة والمركبات والطيران والتعدين والصناعات المعدنية والصناعات الإلكترونية.",
            representer: "م. أحمد عبد الرحمن عثمان",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة حلوان لمحركات الديزل",
            excerpt: "منتجاتها:\n1. عائلة محركات ديزل حلوان من (22 حتى 125) حصان.\n2. عائلة محركات ديزل دويتس (FL511) من (7.7 حتى 30) حصان.\n3. عائلة محركات ديزل حلوان طراز H من (40 - 268) حصان.\n4. وحدات توليد الكهرباء بمحركات ديزل دويتس (FL912) حتى 57 ك.ف.أ\n5. وحدات توليد الكهرباء بمحركات ديزل حلوان حتى 150 ك.ف.أ \n6. وحدات لحام بالقوس الكهربائي تعمل بالديزل من (400 حتى 500) أمبير.\n7. وحدات توليد الكهرباء بمحركات ديزل عالمية حتى 2500  ك.ف.أ\n8. وحدات ضخ ورفع المياه من (45 حتى 240)متر مكعب.\n9. وحدات ضخ ورفع المياه من (110 حتى 415) متر مكعب.\n10. جلب وسبائك كراسي المحاور.\n11. معدات التشييد والبناء.",
            representer: "م. محمد كمال عبد الحميد",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مجموعة الأهرام لنظم الأمان",
            excerpt: "إنتاج وتصنيع جميع أنواع الكوالين والسلندرات للأبواب والشبابيك.",
            representer: "م. سمير عارف",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الدلتا لوسائل النقل - دلتا اوتوموتيف",
            excerpt: "",
            representer: "د. نادر رياض",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة بافاريا مصر",
            excerpt: "تأسست شركة بافاريا مصر عام  1972 بهدف توفير احتياجات السوق المحلي من أجهزة ومعدات مكافحة الحرائق لتعمل بدورها علي تقديم الحماية للأفراد والمجتمع من مؤسساته العامة والخاصة لتكون شركتنا عامل داعم للمجتمع الذي نعمل فيه.\nبافاريا مصر من أولى الشركات التي تأسست في ظل قانون الاستثمار كشركة توصية بسيطة مستقلة، وبدأت نشاطها الناجح بفريق عمل صغير مكون من عاملين ومهندس واحد.",
            representer: "د. نادر رياض",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة المصرية لصناعة المعدات التلفونية",
            excerpt: " تأسست الشركة المصرية لصناعة المعدات التليفونية كشركة مساهمة مصرية تعمل وفقاً لاحكام القانون رقم 159 لسنة 1981. و تعمل الشركة في تصنيع و تجميع و تسويق و تركيب المعدات التليفونية.",
            representer: "م. أيمن هشام حجاوي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الحجار للصناعة",
            excerpt: " شركة تكنولوجيا الهواء المضغوط هي الوكيل الوحيد والمستورد لضواغط الهواء كيزر Kaeser الألمانية.\nتنتج شركة كيزر ضواغط الهواء الحلزونية، والترددية ذات الضغط العالي والمنخفض والبلاور وضواغط الديزل النقالي والمجففات. نحن نتعاون مع شركة RAMI الإيطالية وهي التي تمدنا بالضواغط الترددية، والمجففات الصناعية والفلاتر وجميع إكسسوارات الضواغط الترددية وكذلك تمد مصنعنا بمدينة 6 أكتوبر بالمعونة الفنية اللازمة لإنتاج ضواغط الهواء في مصر. كذلك فإن شركتنا هي الوكيل الوحدي لشركة CAMOZZI الإيطالية وهي متخصصة في نظم التحكم بالهواء المضغوط.\nإستكمالاً لمسيرة شركتنا فى تغطية أكبر مايمكن فى الهواء المضغوط تم إستحداث توكيل جديد ينتج مولدات النتروجين وهى شركة  N2R الإيطالية.\nوفي مجال الصناعة فلدينا شركة الحجار للصناعة بمدينة 6 أكتوبر وهى تنتج ضواغط هواء ترددية من 1 حتى 25 حصان بمعونه فنية من شركة  RAMI الإيطالية وقد تأسست سنة 1992 وتنتج هذا النوع من الضواغط بتقنيات فنية عالية ومناسبة للإجواء المصرية.\n\n",
            representer: "م. عمر مصطفى الحجار",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الكابلات الكهربائية المصرية",
            excerpt: "تأسست الشركة عام 1954 وهي أول شركة يتم إنشاؤها بغرض صناعة الكابلات الكهربائية في الشرق الأوسط. وتقوم الشركة حالياً بإنتاج الأسلاك والكابلات الكهربائية حتى 66 ك.ف وكذلك موصلات الألمنيوم بنوعيها والكابلات التليفونية.",
            representer: "م. أحمد محمد عبدالله الحسيني",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة الهندسية لصناعة السيارات",
            excerpt: "تأسست الشركة الهندسية لصناعة السيارات عام 2000 وهي متخصصة بإنتاج اللواري والأتوبيسات ومحركات الديزل والجرارات الزراعية كشركة منبثقة عن لشركة النصر لصناعة السيارات بنتيجة تطبيق سياسة الخصخصة والتحول الى الاقتصاد الحر.\n أنشئت الشركة الهندسية لصناعة السيارات لتكون رائدة إنتاج المركبات التجارية في مصر، وهي مستقلة تماماً عن الشركة الأم وكشركة تابعة مساهمة مصرية خاضعة لقانون 203 لسنة 1991 قانون شركات قطاع الأعمال العام.\nتعمل الشركة الهندسية لصناعة السيارات بالمشاركة مع أكثر الشركات العالمية المتخصصة مثل:  IVECO و IRIS BUS وMAN وSCANIA وRENAULT وDAEWOO وASHOK-LYLAND وCUMMINS وMWM وDEUTZ وZF وALLISON وVOITH.\nدور الشركة الهندسية لصناعة السيارات هو تزويد السوق المصرية بجميع أنواع المركبات التجارية والجرارات الزراعية المناسبة للطرق والبيئة في مصر وبسعر معقول ، وهي أول شركة في مصر تنتج الاتوبيسات التى تعمل بمحركات الغاز الطبيعي المضغوط،  وأول شركة في إنتاج الجرارات الزراعية،  وأول شركة في إنتاج محركات الديزل تبريد هواء، وأول شركة في إنتاج الميدى باصات، وهذا ماجعلها الرائدة.",
            representer: "م. رأفت طه علي مسروجه",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "الشركة المصرية اليابانية لأعمال الصلب",
            excerpt: "تأسست الشركة عام 1985 وبدأت نشاطها الصناعي عام 1988 لإنتاج قطع الغيار ومكونات الآلات الصناعية والمعدات لجميع القطاعات الصناعية",
            representer: "م. محمود سلطان",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة حلوان للمسبوكات",
            excerpt: "حلوان للمسبوكات أكبر مجمع للمسابك المتخصصة في مصر لصناعة المسبوكات الهندسية عالية التقنية من الزهر والصلب بمختلف أنواعها وهي الركيزة الأساسية لتلبية متطلبات الصناعة الحربية والمدنية والمصدر الرئيسي لمعظم الصناعات والمرافق الكبرى من هذه المسبوكات.",
            representer: "م. محمد مصطفى عبدالحميد أبو النجا ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة ستايل تيم للصناعة",
            excerpt: "وحدات إضاءة داخلية للمنازل والفنادق والمشروعات السياحية.",
            representer: "د. مجدي عبد المنعم إبراهيم",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة طيبة للصناعات الهندسية",
            excerpt: "مجموعة طيبة للصناعات الهندسية تعتبر الشركة الرائدة والموردة لأنظمة تكييف الهواء في مصر والشرق الأوسط مع أكثر من 25 سنة من الخبرة و الثقة و أكثر من 3000 مشروع بمصر والعالم ومنتجاتها المصنعة بمصانع العاشر من رمضان بتكنولوجيا متطورة وجودة عالمية أكسبت الشركة السمعة الطيبة والدور الرائد. وتعتبر شركة طيبة من أولى الشركات المصنعة لأنظمة الهواء التى تحصل على شهاده ISO 9001:2000 & ISO 14001 & ISO 18001 للجودة.",
            representer: "م. مجد الدين فاروق المنزلاوي ",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة المهندس الدولية",
            excerpt: "تنتج الشركة وحدات توليد كهرباء من 5 إلى  3000 ك.ف.أ، وحدات ضخ مياه، وحدات ضواغط هواء، لوحات توزيع كهرباء ضغط منخفض، لوحات تحسين معامل القدرة، مقطورات 1، 2 أكس، وكبائن عازلة للصوت وعازلة للمناخ.",
            representer: "د. محمد خميس",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "مجموعة جي إم سي للصناعات الهندسية والمغذية",
            excerpt: " تعد شركة جي ام سي الشركة الرلئدة فى مجال صناعة الأجهزة المنزلية فى مصر وقد تأسست مطلع عام 1980 حيث تغطى أنشطة الشركة التصديرية العديد من الأسواق العربية والأفريقية والأسيوية والأوروبية. حصلت الشركة على العديد من الشهادات المعتمدة مثل: ISO 9001, ISO 1400 , CE , SASO, ETL",
            representer: "محمد حسين جنيدي",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة أوال الخليج للتصنيع",
            excerpt: "",
            representer: "الأستاذ عادل مطر",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().company.create({
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
            locale_id: "en-US"
          },
          {
            name: "شركة الشرق لإنتاج الحديد الصناعي والإنشائي المدرفل على الساخن",
            excerpt: "تأسست شركة الشرق لانتاج القضبان الحديدية في عام 1993 وفق قانون الاستثمار رقم(10) لعام 1990، حيث أنها الشركة الأولى في سوريا من القطاع الخاص تعمل في مجال انتاج القضبان الحديدية على الحامي.\nوقد بدأت الشركة بانتاجها الفعلي في عام 1994 باشراف نخبة من المهندسين والفنيين المختصين في مجال سحب ودرفلة المعادن على الحامي. وفي بداية عمل الشركة قامت الشركة بتغذية السوق المحلية بالمنتجات الحديدية، وبحكم موقعها الجغرافي في مدينة حلب (شمال سوريا) فانها تقوم بتغطية السوق المحلية بشكل كبير بالمنتجات الحديدية الصناعية. وتتمتع شركة الشرق بمركز قوي بانتاج القضبان الحديدية مثل المبروم المحلزن (الانشائي) وحديد المبسط والتربيع الصناعي، بالاضافة الى أنها قامت أخيرا بانتاج الزوايا الحديدية.\nومنذ البداية أحرزت شركة الشرق خبرات استثناثية بجودة عالية في درفلة وسحب المعادن على الحامي وبما يتناسب مع المواصفات القياسية العالمية والسورية. وتتمتع شركة الشرق بمركز قوي في السوق السورية بكونها الشركة الأولى في تأمين النقص الذي يحصل في بعض الأحيان في الأسواق المحلية.\nوفي عام 2002 قامت شركة الشرق بتغطية الأسواق المجاورة بالمنتجات الحديدية مثل (لبنان  الاردن و العراق) وصدرت بمعدل 60% من انتاجها الكلي, وفق المواصفات العالمية ووفق أفضل الأنواع لطرق التحزيم. وهذا وقد وضعت الشركة في خططها المستقبلية الى تصدير كميات اكبر الى البلدان المجاورة.\nان انتاج شركة الشرق السنوي يبلغ 330,000 طن سنويا و أن رؤية الشركة المستقبلية هي ان تكون من الشركات المصنعة الاولى للحديد في سورية و الشرق الأوسط لكافة انواع المقاطع الحديدية (الانشائي و الصناعي).",
            representer: "الأستاذ م.جورج تفنكجي",
            locale_id: "ar-SY"
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
};
