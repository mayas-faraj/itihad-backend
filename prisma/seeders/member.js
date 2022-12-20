import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = (new PClient()).getInstance().member.create({
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
      image_src: "01_Ammoura.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "02_Akarim.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "03_MHDaaoul.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "04_Boulbol.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "05_Fallouh.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "06_Dassouki.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "07_Slhafez.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "01_alzayani.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "02_Eabdelhady.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "03_WLinjawi.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "04_Afifi.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "05_AlNaki.JPG",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "06_Osman.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "07_Mursi.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "08_Khafaji.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "09_Sultan.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "10_Baldawi.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "11_Sellemi.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "12_Abd_Alhady.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "13_Samir_Aref.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);

  result = (new PClient()).getInstance().member.create({
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
      image_src: "08_tufenkji.jpg",
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
              connect: {
                name: "ar-SY"
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);
};
