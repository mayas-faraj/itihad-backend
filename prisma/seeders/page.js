import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().post.create({
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

  result = await (new PClient()).getInstance().post.create({
    data: {
      slug: "about-us",
      description: "The Federation is an association of Arab countries' employers operating in the sector of engineering industries which aims at contributing to defending the interests of member companies within the framework of society public interest in all forums",
      category: {
        connect: {
          slug: "page"
        }
      },
      menu_item: {
        create: {
          menu: {
            connect: {
              name: "main-menu"
            }
          },
          icon: "",
          item_order: 0,
          locale_menu_item: {
            create: [
              {
                title: "About us",
                locale: {
                  connect: {
                    name: "en-US"
                  }
                }
              },
              {
                title: "عن الإتحاد",
                locale: {
                  connect: {
                    name: "ar-SY"
                  }
                }
              }
            ]
          }
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

  result = await (new PClient()).getInstance().post.create({
    data: {
      slug: "contact-us",
      description: "Contact AFEI in Damascus and Cairo by email or directly by phone. ",
      category: {
        connect: {
          slug: "page"
        }
      },
      menu_item: {
        create: {
          menu: {
            connect: {
              name: "main-menu"
            }
          },
          icon: "",
          item_order: 7,
          locale_menu_item: {
            create: [
              {
                title: "Contact us",
                locale: {
                  connect: {
                    name: "en-US"
                  }
                }
              },
              {
                title: "اتصل بنا",
                locale: {
                  connect: {
                    name: "ar-SY"
                  }
                }
              }
            ]
          }
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

  result = await (new PClient()).getInstance().post.create({
    data: {
      slug: "activities",
      description: "The AFEI Chairman of the BOD emphasized in his opening speeches the need for such platform that allows members to get involved in tackling pressing issues which affect their businesses, societies, and countries. He also stressed the need to continue the quest towards making AFEI a corner stone in the process of developing the economic regulations which would guarantee harmonization with the global developments and provide guidance to the economic development initiatives.",
      category: {
        connect: {
          slug: "page"
        }
      },
      menu_item: {
        create: {
          menu: {
            connect: {
              name: "main-menu"
            }
          },
          icon: "",
          item_order: 2,
          locale_menu_item: {
            create: [
              {
                title: "Activities",
                locale: {
                  connect: {
                    name: "en-US"
                  }
                }
              },
              {
                title: "النشاطات",
                locale: {
                  connect: {
                    name: "ar-SY"
                  }
                }
              }
            ]
          }
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

  result = await (new PClient()).getInstance().post.create({
    data: {
      slug: "members",
      description: "Provision of specialized services for the members which falls within the Federation's priorities, at a high level of quality, and responding to the requirements of each country.",
      category: {
        connect: {
          slug: "page"
        }
      },
      menu_item: {
        create: {
          menu: {
            connect: {
              name: "main-menu"
            }
          },
          icon: "",
          item_order: 1,
          locale_menu_item: {
            create: [
              {
                title: "members",
                locale: {
                  connect: {
                    name: "en-US"
                  }
                }
              },
              {
                title: "الأعضاء",
                locale: {
                  connect: {
                    name: "ar-SY"
                  }
                }
              }
            ]
          }
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

  result = await (new PClient()).getInstance().post.create({
    data: {
      slug: "for-your-information",
      description: `Associations are recently seen as the forth model of society (beside the Community, the Market, and the State).
  The German Federation of Industries has the knowledge, as well as the structures, procedures, and human capacities which make it a good example of a how mutual complementarities between the four models can be accomplished.`,
      category: {
        connect: {
          slug: "page"
        }
      },
      menu_item: {
        create: {
          menu: {
            connect: {
              name: "main-menu"
            }
          },
          icon: "",
          item_order: 3,
          locale_menu_item: {
            create: [
              {
                title: "FYI",
                locale: {
                  connect: {
                    name: "en-US"
                  }
                }
              },
              {
                title: "لمعلوماتك",
                locale: {
                  connect: {
                    name: "ar-SY"
                  }
                }
              }
            ]
          }
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

  result = await (new PClient()).getInstance().post.create({
    data: {
      slug: "announcements",
      description: "",
      category: {
        connect: {
          slug: "page"
        }
      },
      menu_item: {
        create: {
          menu: {
            connect: {
              name: "main-menu"
            }
          },
          icon: "",
          item_order: 3,
          locale_menu_item: {
            create: [
              {
                title: "Announcements",
                locale: {
                  connect: {
                    name: "en-US"
                  }
                }
              },
              {
                title: "مستجدات",
                locale: {
                  connect: {
                    name: "ar-SY"
                  }
                }
              }
            ]
          }
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

  result = await (new PClient()).getInstance().post.create({
    data: {
      slug: "media",
      description: "",
      category: {
        connect: {
          slug: "page"
        }
      },
      menu_item: {
        create: {
          menu: {
            connect: {
              name: "main-menu"
            }
          },
          icon: "",
          item_order: 5,
          locale_menu_item: {
            create: [
              {
                title: "Media",
                locale: {
                  connect: {
                    name: "en-US"
                  }
                }
              },
              {
                title: "ميديا",
                locale: {
                  connect: {
                    name: "ar-SY"
                  }
                }
              }
            ]
          }
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
};
