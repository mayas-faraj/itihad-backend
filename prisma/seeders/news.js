import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "الموقع الجديد للاتحاد على الإنترنت",
            excerpt: "الاتحاد يطلق موقعه الإلكتروني الديناميكي على الإنترنت لخدمة أعضائه والقراء",
            content: "الاتحاد يطلق موقعه الإلكتروني الديناميكي على الإنترنت بوظائف جديدة لخدمة أعضائه والقراء.\nإن الترويج للأعضاء (جميع النشاطات والمساهمات) هي ميزة للموقع الجديد، إضافة إلى أن الملفات الخاصة بالنشاط متاحة للتنزيل من الموقع.\nالميزة الثانية هي الفلترة والبحث عن الكلمات المفتاحية وهي تسهل محاولات الزائر للوصول إلى معلومة معينة على الموقع.",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "تأجيل اجتماعات الجمعية العمومية ومجلس الإدارة",
            excerpt: "تم الاتفاق على تأجيل اجتماعات مجلس الإدارة والجمعية العمومية التي كان من المقرر عقدها خلال الفترة 6-7 / 6 / 2012 في لبنان وذلك بسبب الظروف الاستثنائية وضمان سلامة المشاركين. ",
            content: "تم الاتفاق على تأجيل اجتماعات مجلس الإدارة والجمعية العمومية التي كان من المقرر عقدها خلال الفترة 6-7 / 6 / 2012 في لبنان وذلك بسبب الظروف الاستثنائية وضمان سلامة المشاركين.",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "مجلس الوحدة الاقتصادية العربية يتابع مشروع إنشاء هيئة عربية للتسويق",
            excerpt: "وجه مجلس الوحدة الاقتصادية رسالة إلى الاتحادات العربية النوعية التخصصية العاملة في نطاقه لإبداء آرائها بخصوص مساهمتها ومساهمة الشركات من أعضائها في مشروع إنشاء هيئة عربية للتسويق ",
            content: "ورد كتاب موجه من الأمانة العامة لمجلس الوحدة الاقتصادية العربية إلى الاتحادات العربية النوعية التخصصية متضمناً طلب إبداء الرأي بخصوص مشاركة الاتحادات أو أعضائها من الشركات في إنشاء \"جهاز عربي للتسويق\".\nمنذ السبعينات انتهج مجلس الوحدة الاقتصادية العربية منهج إقامة المشروعات العربية المشتركة باعتباره وسيلة لتشجيع رؤوس الأموال العربية للاستثمار في مشروعات عربية مشتركة مما يؤدي بالتالي إلى تنمية التجارة العربية البينية.\nقامت الأمانة العامة للمجلس باتخاذ الإجراءات لتأسيس عدد من الشركات العربية المشتركة تختلف عن جيل الشركات التي أنشئت في السبعينات حيث يتم المساهمة فيها من القطاع الخاص والمستثمرين العرب وذلك واتساقاً مع قرارات القمم العربية التي تدعو إلى تعظيم دور القطاع الخاص العربي في التنمية العربية الشاملة.",
            locale_id: "ar-SY"
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
  console.log(result);

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "ورشة عمل \"الإدارة الإلكترونية لشؤون الموظفين\"",
            excerpt: "ينظم الاتحاد العربي لتنمية الموارد البشرية هذه الورشة (باعتماد جامعة عين شمس) في شرم الشيخ خلال الفترة 1-5 يوليو 2012. وتهدف الورشة إلى تزويد المشاركين بالمفاهيم والمهارات الأساسية للإدارة الإلكترونية واستخدام التقنيات الحديثة في إدارة شئون الموظفين من خلال نظم المعلومات المتطورة. للمزيد، يمكنكم زيارة الموقع www.uhrda.org",
            content: "ورد الإعلان عن الورشة إلينا من الاتحاد العربي لتنمية الموارد البشرية الذي ينظم هذه الورشة (باعتماد جامعة عين شمس) في شرم الشيخ خلال الفترة 1-5 يوليو 2012.\nوتهدف الورشة إلى تزويد المشاركين بالمفاهيم والمهارات الأساسية للإدارة الإلكترونية واستخدام التقنيات الحديثة في إدارة شئون الموظفين من خلال نظم المعلومات المتطورة.\nللمهتمين، يمكنكم زيارة الموقع www.uhrda.org",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "تهنئة بقدوم شهر رمضان",
            excerpt: "مبارك علينا وعليكم الشهر الفضيل.\nنتقدم لكم بأحلى وأصدق الأماني الطيبة وأجل آيات التبريك.\nأعاده الله عليكم وعلى أهلكم وأحبابكم والوطن بالخير والبركة وقد عمها الأمن والسلام والازدهار.",
            content: "مبارك علينا وعليكم الشهر الفضيل.\nنتقدم لكم بأحلى وأصدق الأماني الطيبة وأجل آيات التبريك.\nأعاده الله عليكم وعلى أهلكم وأحبابكم والوطن بالخير والبركة وقد عمها الأمن والسلام والازدهار.",
            locale_id: "ar-SY"
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
  console.log(result);

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "عيد الفطر 2012",
            excerpt: "تهنئة من أسرة الاتحاد العربي للصناعات الهندسية: تقبل الله صيامكم وقيامكم وكافة أعمالكم، وبارك لكم بعيدكم، وأعاده عليكم وعلى الأمة وقد أزال الغمة وأنعم علينا بالأمن والأمان والاطمئنان. وكل عام وأنتم بخير",
            content: ".تهنئة من أسرة الاتحاد العربي للصناعات الهندسية: تقبل الله صيامكم وقيامكم وكافة أعمالكم، وبارك لكم بعيدكم، وأعاده عليكم وعلى الأمة وقد أزال الغمة وأنعم علينا بالأمن والأمان والاطمئنان. وكل عام وأنتم بخير",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "معرض الاستيراد والتصدير في الصين",
            excerpt: "سيقام معرض الصين للاستيراد والتصدير خلال الفترة 15-19/10/2012 في مجمع المعرض بمدينة غوانغ زهاو في الصين، حيث خصصت المرحلة الأولى للأجهزة الإلكترونية والأجهزة المنزلية الكهربائية ومواد وعتاد البناء والآلات والمواد الأولية الصناعية. للمزيد، يمكنكم زيارة الموقع http://www.cantonfair.org.cn/en/import/detail.aspx?oid=390",
            content: "سيقام معرض الصين للاستيراد والتصدير خلال الفترة 15-19/10/2012 في مجمع المعرض بمدينة غوانغ زهاو في الصين، حيث خصصت المرحلة الأولى للأجهزة الإلكترونية والأجهزة المنزلية الكهربائية ومواد وعتاد البناء والآلات والمواد الأولية الصناعية.\nأعلنت شركة ليماتيك (عضو الاتحاد من لبنان) مشاركتها في المعرض (Hall: 10.3, Booth No. L 37-40)\nللمزيد، يمكنكم زيارة موقع المعرض على الإنترنت http://www.cantonfair.org.cn/en/import/detail.aspx?oid=390",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "الدبلوم المهني في تنمية الموارد البشرية",
            excerpt: "ينظم الاتحاد العربي لتنمية الموارد البشرية برنامجاً تدريبياً لمدة عشرة أيام بعنوان (إدارة الموارد البشرية) خلال الفترة 18-27/11/2012 في الرباط، المغرب. هذا البرنامج معتمد من المجلس الأمريكي لاعتماد الشهادات المهنية ACAC وسيحصل الناجحون على دبلوم مهني. للمزيد، يمكنكم زيارة الموقع www.uhrda.org",
            content: "ورد الإعلان إلينا من الاتحاد العربي لتنمية الموارد البشرية الذي ينظم البرنامج التدريبي بعنوان (إدارة الموارد البشرية) في الرباط، المغرب خلال الفترة 18-27/11/2012.\nيهدف البرنامج إلى ترسيخ مفهوم أن الموارد البشرية أصل من أصول المؤسسة وعرض المفاهيم والمعارف الحديثة في مجال إدارة الموارد البشرية.\nهذا البرنامج معتمد من المجلس الأمريكي لاعتماد الشهادات المهنية ACAC ، ويمنح الناجحين دبلوماً مهنياً.\nللمهتمين، يمكنكم زيارة الموقع www.uhrda.org",
            locale_id: "ar-SY"
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
  console.log(result);

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "ورش عمل تأهيل قانونية ومالية",
            excerpt: "ينظم الاتحاد العربي لتنمية الموارد البشرية ورشتي عمل بعنوان (التقنيات الحديثة في إعداد التقارير المالية والتحليل المالي والمحاسبي) و (تأهيــل الإدارات القانونيـــة) خلال الفترة 9-18/12/2012 في اسطنبول/تركيا. هذا البرنامج معتمد من المجلس الأمريكي لاعتماد الشهادات المهنية ACAC. للتفاصيل  يمكنكم زيارة الموقع www.uhrda.org",
            content: "ورد الإعلان إلينا من الاتحاد العربي لتنمية الموارد البشرية الذي ينظم ورشتي عمل بعنوان (التقنيات الحديثة في إعداد التقارير المالية والتحليل المالي والمحاسبي) و (تأهيــل الإدارات القانونيـــة) في اسطنبول/تركيا خلال الفترة 9-18/12/2012 برسوم اشتراك مقدارها 2000 دولار أمريكي لكل ورشة.\nهذه الأنشطة معتمدة من المجلس الأمريكي لاعتماد الشهادات المهنية ACAC. للمهتمين، يمكنكم زيارة الموقع http://www.uhrda.org.\nملفات للتنزيل:\nإعلان ورشة (التقنيات الحديثة في إعداد التقارير المالية والتحليل المالي المحاسب)\nإعلان ورشة (تأهيل الإدارات القانونية)\nفعاليات الاتحاد العربي لتنمية الموارد البشرية خلال شهري نوفمبر وديسمبر",
            locale_id: "ar-SY"
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
  console.log(result);

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "مشروعات مشتركة مقترحة من مجلس الوحدة الاقتصادية للشركات أعضاء الاتحادات العربية النوعية",
            excerpt: "وفق اقتراح أعضاء الهيئة الاستشارية لمجلس الحكماء، طرح مجلس الوحدة الاقتصادية لائحة من المشروعات العربية المشتركة لاستمزاج آراء رؤساء الشركات الأعضاء في الاتحادات النوعية العربية ومناقشة وجهات نظرهم خلال اجتماع خاص لذلك بتاريخ 28/11/2012.",
            content: "وردت الرسالة الإلكترونية المؤرخة 25/11/2012 إلى الأمانة العامة للاتحاد من مجلس الوحدة الاقتصادية العربية والتي تتضمن طلب تعميم لائحة من المشروعات العربية المشتركة وفق اقتراح أعضاء الهيئة الاستشارية لمجلس الحكماء في المجلس واستمزاج آراء رؤساء الشركات الأعضاء في الاتحادات النوعية العربية حيث سيصار إلى مناقشة وجهات نظر الشركات المهتمة خلال اجتماع بتاريخ 28/11/2012 في القاهرة.\nيمكن للشركات الأعضاء في الاتحاد الاطلاع على المقترحات والتواصل مباشرة مع الدكتور/السيد عبد الفتاح مدير المكتب الفني بالأمانة العامة للمجلس بخصوص رغبتها بالمشاركة في هذه المشروعات وفق ماتراه مناسباً.\nملفات للتنزيل:\nالرسالة الإلكترونية من المجلس\nلائحة المشروعات المقترحة",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "اجتماعات الجمعية العمومية ومجلس إدارة الاتحاد العربي للصناعات الهندسية",
            excerpt: "تستضيف جمهورية مصر العربية اجتماعات مجلس الإدارة والجمعية العمومية العادية وغير العادية للاتحاد العربي للصناعات الهندسية خلال الفترة 16-17/1/2013 في القاهرة لإقرار الرؤية الجديدة للاتحاد وهيكلية عمل مكاتبه الإقليمية واللائحة الداخلية المعدلة وفق ذلك.",
            content: "تستضيف جمهورية مصر العربية اجتماعات مجلس الإدارة والجمعية العمومية العادية وغير العادية للاتحاد العربي للصناعات الهندسية خلال الفترة 16-17/1/2013 في القاهرة. من أبرز البنود على الأجندة: إقرار الرؤية الجديدة للاتحاد وهيكلية عمل مكاتبه الإقليمية واللائحة الداخلية المعدلة.\nكانت الاجتماعات مقررة في حزيران/يونيه 2012 في بيروت وتأجلت لأسباب طارئة.",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "اجتماع فريق عمل لإنجاز التصور الخاص بوضع الجهاز العربي للتسويق",
            excerpt: "تدعو الأمانة العامة لمجلس الوحدة الاقتصادية العربية خبراء التسويق بالشركات العربية التابعة للاتحادات العربية النوعية وممثلي هذه الاتحادات والمهتمين بمقترح تأسيس \"الجهاز العربي للتسويق\" للمشاركة في الاجتماع الأول لفريق العمل المقرر عقده في 24/2/2013 بمقر المجلس في القاهرة.",
            content: "تدعو الأمانة العامة لمجلس الوحدة الاقتصادية العربية خبراء التسويق بالشركات العربية التابعة للاتحادات العربية النوعية وممثلي هذه الاتحادات والمهتمين بمقترح تأسيس \"الجهاز العربي للتسويق\" موضع التنفيذ للمشاركة في الاجتماع الأول لفريق العمل المشكل بالتعاون مع المؤسسة الدولية الإسلامية لتمويل التجارة والمقرر عقده في 24/2/2013 بمقر المجلس في القاهرة.\nملفات للتنزيل:\nبرنامج عمل ومذكرات الاجتماع",
            locale_id: "ar-SY"
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
  console.log(result);

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "خطة فعاليات الاتحاد العربي لتنمية الموارد البشرية لعام 2013",
            excerpt: "نشر الاتحاد العربي لتنمية الموارد البشرية خطة فعالياته خلال عام 2013 التي ستنفذها: وحدة البرامج التدريبية وورش العمل - وحدة البرامج النوعية - وحدة الشهادات المهنية - وحدة المؤتمرات.\n \nيمكنكم الاطلاع على التفاصيل بزيارة موقع الاتحاد: http://www.uhrda.org",
            content: "نشر الاتحاد العربي لتنمية الموارد البشرية خطة فعالياته خلال عام 2013 التي ستنفذها: وحدة البرامج التدريبية وورش العمل - وحدة البرامج النوعية - وحدة الشهادات المهنية - وحدة المؤتمرات.\nيمكنكم الاطلاع على التفاصيل بزيارة موقع الاتحاد: http://www.uhrda.org",
            locale_id: "ar-SY"
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

  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
          },
          {
            title: "دور أصحاب الأعمال في التجارب الرائدة للتعليم المزدوج في مصر وسوريا",
            excerpt: "عرض يلخص أهم ملامح التجربتين الرائدتين لنظام التعليم المزدوج في مصر وسوريا، والتحدي المشترك لهاتين التجربتين. قدم هذا العرض (من استشارية لدى الاتحاد) لمجموعة من طلبة الماجستير من الدول العربية وألمانيا.\nالتحدي الأساسي هو في تبني التجربة الرائدة وجعلها منظومة للبلد. والأسباب مختلفة وتحتاج إلى دراسات حول خصائص البيئة التي تنقل لها التجربة (المجتمع والثقافة). ",
            content: "عرض يلخص أهم ملامح التجربتين الرائدتين لنظام التعليم المزدوج في مصر وسوريا، والتحدي المشترك لهاتين التجربتين. قدم هذا العرض (من استشارية لدى الاتحاد) لمجموعة من طلبة الماجستير من الدول العربية وألمانيا.\nالتحدي الأساسي هو في تبني التجربة الرائدة وجعلها منظومة للبلد. والأسباب مختلفة وتحتاج إلى دراسات حول خصائص البيئة التي تنقل لها التجربة (المجتمع والثقافة). ",
            locale_id: "ar-SY"
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
};
