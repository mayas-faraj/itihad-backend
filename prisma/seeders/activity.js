import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2008-01-16'),
          end_on: new Date('2008-01-18'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
            excerpt: 'عقد مجلس الإدارة اجتماعه بمشاركة الشباب الصناعي ومدير إدارة الاتحادات في الأمانة العامة لمجلس الوحدة الاقتصادية العربية. كما التقى معالي وزير الصناعة اللبناني، وممثلي جمعية الصناعيين اللبنانيين. ',
            content: 'عقد مجلس إدارة الاتحاد العربي للصناعات الهندسية اجتماعه في بيروت خلال الفترة 21-22/1/2010 حيث استعرض تقرير النشاطات وصادق على محضري الاجتماعين السابقين كما تداول بخصوص اقتراح تعديل النظام الأساسي وقرر تشكيل لجنة لمراجعة توافق النظام الأساسي مع اللائحة الداخلية لمجلس الوحدة الاقتصادية برئاسة الأستاذ محمد دعبول.\n' +
              'في نهاية الاجتماع تحدث الأستاذ حسان دعبول مقرر لجنة الشباب الصناعي في الاتحاد عن وجهة نظر الشباب فيما لمسوه من انخراطهم بعمل الاتحاد، وتمنياتهم في&nbsp; المرحلة القادمة، و ما ينوون فعله دعماً لعمل الإتحاد وتحقيقاً لرؤية جيلهم.\n' +
              'وعلى هامش الاجتماع التقى مجلس الإدارة جمعية الصناعيين اللبنانيين، ومعالي وزير الصناعة اللبناني. كما استمع إلى عرض حول استخدامات التصنيف العربي المعياري للمهن.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-01-21'),
          end_on: new Date('2010-01-22'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/0.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/1.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/2.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/3.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/4.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/5.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/6.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/7.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/8.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/9.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/10.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/11.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/12.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/13.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/14.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/15.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/16.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/17.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/18.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-01-21_bod_lb/19.jpg',
            image_alt: 'BOD Lebanon 2010',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2010',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة - لبنان 2010',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
            excerpt: 'أوصى مجلس الإدارة بضرورة توثيق أنشطة الأعضاء وتعميم الاستفادة من هذه الأنشطة من خلال الأمانة العامة، وقرر تعميم ورقة الأستاذ منصف السلامي حول أساليب الري الحديثة والاستفادة من الطاقة الشمسية. ',
            content: 'عقد مجلس الإدارة اجتماعه برئاسة المهندس عبد الهادي عبد المنعم رئيس مجلس الإدارة حيث صادق على محضر الاجتماع السابق واستعرض تقرير النشاطات وخطة العمل وأوصى بضرورة توثيق أنشطة الأعضاء كل في بلده وتعميم الاستفادة من هذه الأنشطة من خلال الأمانة العامة. وبعد الاطلاع على ورقة مقترحة من الأستاذ منصف السلامي عن أساليب الري الحديثة والاستفادة من الطاقة الشمسية تقرر تعميم الورقة على الأعضاء وتجميع المقترحات العملية لمن يهمه الأمر منهم.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-05-17'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-12-08'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-12-08_bod_lb/0.jpg',
            image_alt: 'BOD Lebanon 2011',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجلس الإدارة - لبنان 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-12-08_bod_lb/1.jpg',
            image_alt: 'BOD Lebanon 2011',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Lebanon 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجلس الإدارة - لبنان 2011',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'لقاء الشباب الصناعيين العرب',
            excerpt: 'جيل الصف الثاني في الشركات الأعضاء يلتقي لخلق صلات مع المؤسسين وفيما بينهم، وتشكيل لجنة للشباب الصناعيين تحت مظلة الاتحاد.',
            content: 'المشاركون في اللقاء هم جيل الصف الثاني في الشركات الأعضاء والذين سيشغلون المناصب القيادية في المستقبل. كانت الغاية هي خلق صلات للشباب مع الجيل المؤسس في الاتحاد استعداداً لتحملهم مسؤوليات تطوير الاتحاد بما يتلاءم مع أفكارهم ومستجدات عصرهم. بنتيجة اللقاء، تم تشكيل "لجنة دائمة للشباب الصناعيين" على أن تقوم اللجنة بإعداد مقترحاتها بشأن آليات العمل والارتباط بالاتحاد.\n' +
              'روابط ذات صلة:\n' +
              'لجنة الشباب الصناعي\n' +
              'ملفات للتنزيل:\n' +
              'برنامج اللقاء، مقالات الصحف',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-10-25'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-03-06'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-03-06_yic_meeting_sy/0.jpg',
            image_alt: 'Young Industrialists ',
            locale_post_image: {
              create: [
                {
                  title: 'Young Industrialists ',
                  locale_id: 'en-US'
                },
                {
                  title: 'لجنة الشباب الصناعي ',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
            excerpt: 'تدارس أعضاء المجلس بخصوص مقترح تحديث موقع الإنترنت والدعم المقدم من مؤتمر تجمع الكابلات للاتحاد، والمسائل المزمع عرضها في اجتماع الجمعية العمومية القادم.',
            content: 'ترأس الأستاذ نبيل حسنين/رئيس مجلس الإدارة/ الاجتماع الذي تطرق إلى مقترح تحديث موقع الاتحاد على الإنترنت، والدعم المقدم من مؤتمر تجمع الكابلات للاتحاد إضافة إلى الشؤون الداخلية تحضيراً لعرضها على اجتماع الجمعية العمومية القادم.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2008-05-10'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
            excerpt: 'عقد مجلس إدارة الاتحاد للدورة 2005-2009 اجتماعه الأخير قبيل انتخاب المجلس الجديد للفترة التالية وبحضور الشباب الصناعي حيث تم إعادة تعيين د.أحمد هيثم اليافي أميناً عاماً للاتحاد لفترة جديدة وفقاً للنظام الأساسي.',
            content: 'عقد مجلس إدارة الاتحاد للدورة 2005-2009 اجتماعه الأخير قبيل انتخاب المجلس الجديد للفترة التالية. ووفقاً لما تم إقراره سابقاً فقد شارك الجيل الثاني من الشباب الصناعيين في هذا الاجتماع الذي عقد برئاسة الأستاذ محمد النقي نظراً للظروف الصحية التي حالت دون حضور رئيس مجلس الإدارة. قرر الأعضاء إعادة تعيين د.أحمد هيثم اليافي أميناً عاماً للاتحاد لفترة جديدة وفقاً للنظام الأساسي.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-06-07'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/0.jpg',
            image_alt: 'BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجلس الإدارة - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/1.jpg',
            image_alt: 'BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجلس الإدارة - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/2.jpg',
            image_alt: 'BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجلس الإدارة - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/3.jpg',
            image_alt: 'BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجلس الإدارة - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_bod_sy/4.jpg',
            image_alt: 'BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجلس الإدارة - سورية 2009',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع مجلس إدارة الاتحاد العربي للصناعات الهندسية',
            excerpt: 'الجمعية العمومية تنتخب أعضاء مجلس الإدارة، واختيار المهندس عبد الهادي عبد المنعم رئيساً. ',
            content: 'بعد انتهاء أعمال الجمعية العمومية العادية وانتخاب أعضاء مجلس إدارة الاتحاد اجتمع السادة أعضاء مجلس الإدارة المنتخبين وفتح باب الترشيح لرئاسة مجلس إدارة الاتحاد، وبعد المداولات قرر الأعضاء بالإجماع&nbsp; انتخاب الأستاذ عبد الهادي عبد المنعم لرئاسة المجلس خلال الفترة 2009-2012، كما اتفق الأعضاء فيما بينهم بالتشاور وتقرر بالإجماع:\n' +
              '-&nbsp;&nbsp;&nbsp; انتخاب الأستاذ حامد راشد الزياني نائباً للرئيس عن منطقة الخليج بالتزكية.\n' +
              '-&nbsp;&nbsp;&nbsp; انتخاب المهندس منصف السلامي نائباً للرئيس عن منطقة المغرب العربي بالتزكية.\n' +
              '-&nbsp;&nbsp;&nbsp; انتخاب السيد المهندس محمد سعيد الحافظ نائباً للرئيس عن منطقة المشرق العربي بالتزكية.\n' +
              'وتقرر أن يكون اجتماع مجلس الإدارة القادم في بيروت خلال شهر كانون الأول/ديسمبر 2009.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-06-08'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/0.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/1.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/2.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/3.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/4.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/5.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/6.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/7.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/8.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_bod_sy/9.jpg',
            image_alt: 'New BOD Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'New BOD Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: ' مجلس الإدارة الجديد - سورية 2009',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-07-02'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-03-13'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/0.jpg',
            image_alt: 'AVX Meeting Lebanon 2012',
            locale_post_image: {
              create: [
                {
                  title: 'AVX Meeting Lebanon 2012',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/1.jpg',
            image_alt: 'AVX Meeting Lebanon 2012',
            locale_post_image: {
              create: [
                {
                  title: 'AVX Meeting Lebanon 2012',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/2.jpg',
            image_alt: 'AVX Meeting Lebanon 2012',
            locale_post_image: {
              create: [
                {
                  title: 'AVX Meeting Lebanon 2012',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/3.jpg',
            image_alt: 'AVX Meeting Lebanon 2012',
            locale_post_image: {
              create: [
                {
                  title: 'AVX Meeting Lebanon 2012',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/4.jpg',
            image_alt: 'AVX Meeting Lebanon 2012',
            locale_post_image: {
              create: [
                {
                  title: 'AVX Meeting Lebanon 2012',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/5.jpg',
            image_alt: 'AVX Meeting Lebanon 2012',
            locale_post_image: {
              create: [
                {
                  title: 'AVX Meeting Lebanon 2012',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-03-13_avx_meeting/6.jpg',
            image_alt: 'AVX Meeting Lebanon 2012',
            locale_post_image: {
              create: [
                {
                  title: 'AVX Meeting Lebanon 2012',
                  locale_id: 'en-US'
                },
                {
                  title: 'مجموعة عمل صياغة الرؤية الاستراتيجية للاتحاد - لبنان 2012',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-06-01'),
          end_on: new Date('2011-06-02'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/0.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/1.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/2.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/3.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/4.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/5.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/6.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/7.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/8.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/9.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/10.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/11.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/12.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/13.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/14.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/15.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/16.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/17.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/18.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/19.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/20.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/21.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/22.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/23.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/24.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-06-01_giz_wrap-up_seminar_jo/25.jpg',
            image_alt: 'GIZ Wrap-up Seminar 2011',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Wrap-up Seminar 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الندوة الختامية لمشروع GIZ في 2011',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع الجمعية العمومية العادية للاتحاد العربي للصناعات الهندسية',
            excerpt: 'بحضور السيد نائب رئيس مجلس الوزراء للشؤون الاقتصادية والسيد وزير الصناعة والسيد وزير الدولة لشؤون الاستثمار، عقد الاتحاد العربي للصناعات الهندسية اجتماع الجمعية العمومية للدورة /23/ في دمشق.',
            content: 'عقد الاتحاد العربي للصناعات الهندسية اجتماع الجمعية العمومية العادية للدورة /23/ في دمشق وذلك بحضور السيد نائب رئيس مجلس الوزراء للشؤون الاقتصادية والسيد وزير الصناعة والسيد وزير الدولة لشؤون الاستثمار ممثل رئيس مجلس الوزراء ورئيس اتحاد غرف التجارة السورية.\n' +
              'حيث صادقت الجمعية العمومية على تقرير مجلس الإدارة لعام 2006 كما أقرت خطة عمل الاتحاد لعام 2007 وناقشت تقرير لجنة تحديد الرؤيا المستقبلية للاتحاد.\n' +
              'ملفات للتنزيل:\n' +
              'أخبار الصحف',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2007-04-07'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع الجمعية العمومية العادية للاتحاد العربي للصناعات الهندسية',
            excerpt: 'عقد الاتحاد العربي للصناعات الهندسية اجتماع الجمعية العمومية العادية للدورة /24/ في القاهرة، وأعقبه اجتماع الهيئة العمومية غير العادية المخصص لمناقشة تعديلات النظام الأساسي للاتحاد.',
            content: 'عقدت الاجتماعات العادية وغير العادية للجمعية العمومية للاتحاد في القاهرة خلال الفترة 10-11/5/2008 برئاسة السيد الأستاذ نبيل فريد حسنين/رئيس مجلس الإدارة.\n' +
              'تناولت جلسة الافتتاح للدورة العادية للجمعية العمومية مفهوم عمل الشركات المتنافسة معاً تحت مظلة الاتحاد نحو مواءمة وتحسين بيئة الأعمال في المنطقة وتشجيع التجارة البينية، وفكرة عقد مؤتمر سنوي حول مسألة ذات اهتمام مشترك، ودور الاتحاد في تنسيق النشاط الصناعي في الدول العربية.\n' +
              'خصص اجتماع الجمعية العمومية غير العادية للاتفاق على تعديل بعض مواد النظام الأساسي للاتحاد التي صيغت من قبل اللجنة المشكلة بناءً على مقترحات بعض الأعضاء.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماعات',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2008-05-10'),
          end_on: new Date('2008-05-12'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-06-08'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/0.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/1.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/2.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/3.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/4.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/5.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/6.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/7.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/8.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/9.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-08_ga_meeting_sy/10.jpg',
            image_alt: 'General Assembly - Syria 2009',
            locale_post_image: {
              create: [
                {
                  title: 'General Assembly - Syria 2009',
                  locale_id: 'en-US'
                },
                {
                  title: 'الجمعية العمومية - سورية 2009',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع الجمعية العمومية العادية للاتحاد العربي للصناعات الهندسية',
            excerpt: 'ركزت الدورة /26/ للجمعية العمومية في الاتحاد العربي للصناعات الهندسية على أهمية توثيق نشاطات الأعضاء (كل في بلده)',
            content: 'عقدت الدورة /26/ الهيئة العامة للاتحاد في القاهرة بتاريخ 14/5/2010 برئاسة المهندس عبد الهادي عبد المنعم/رئيس مجلس إدارة الاتحاد حيث صادقت الهيئة العامة على تقرير الاتحاد لعام 2009 خطة العمل لعام 2010 مع التوصية بأهمية توثيق نشاطات الأعضاء (كل في بلده) في إطار الخطوط العامة للأنشطة التي تضمنتها الخطة.\n' +
              'ملفات للتنزيل:\n' +
              'جدول الأعمال',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-05-14'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-02-10'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع أعضاء مجلس إدارة الاتحاد من سورية',
            excerpt: 'أعضاء مجلس إدارة الاتحاد في سورية يناقشون مقترح الأمانة العامة للمواضيع التي يمكن نشرها على موقع الإنترنت وطلب هيئة تخطيط الدولة تحديد اجتماع مع الأعضاء في سورية خلال زيارة وفد من بروكسل ضمن إطار مشروع الاتحاد الأوربي "In-service training"',
            content: 'في اجتماعهم بتاريخ 18/10/2010 في دمشق ناقش أعضاء مجلس إدارة الاتحاد العربي للصناعات الهندسية من سورية مذكرة مجلس الوحدة الاقتصادية العربية التي تضمنت توصيات اجتماع لجنة تطوير أساليب عمل الاتحادات بتجميع الاتحادات العربية ضمن خمسة قطاعات (وهي مسألة تنظيمية لاتؤثر على سير العمل)، واطلعوا على مقترح الأمانة العامة للمواضيع التي يمكن نشرها على موقع الإنترنت، كما قرروا تعميم الرسالة الواردة من اتحاد المهندسين الأوربي العربي التي تضمنت الإعلان عن تنظيم المنتدى الهندسي الأوربي العربي في تشرين الأول/اكتوبر 2011 ودعوة أعضاء الاتحاد العربي للصناعات الهندسية للمشاركة في هذا المنتدى والترويج له ولرعايته.\n' +
              'كما تناول الاجتماع طلب هيئة تخطيط الدولة تحديد اجتماع مع أعضاء الاتحاد في سورية (كممثلين لأصحاب الأعمال) خلال زيارة وفد من بروكسل ضمن إطار مشروع الاتحاد الأوربي "In-service training"\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-10-18'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع أعضاء مجلس إدارة الاتحاد من سورية',
            excerpt: 'خلال اجتماعهم في دمشق، ناقش أعضاء مجلس إدارة الاتحاد من سورية برنامج تدريب المدربين حول إدارة الملكية الفكرية للمؤسسات الصغيرة والمتوسطة الذي تنظمه وزارة الاقتصاد والتجارة بالتعاون مع المنظمة الدولية للملكية الفكرية WIPO.',
            content: 'في اجتماع أعضاء مجلس إدارة الاتحاد في مكتب دمشق بتاريخ 5/12/2010 بدمشق تمت مناقشة برنامج WIPO لتدريب المدربين حول إدارة الملكية الفكرية للمؤسسات الصغيرة والمتوسطة، والدعوة الموجهة للاتحاد لحضور اجتماعات الدورة/92/ لمجلس الوحدة الاقتصادية العربية بتاريخ 9/12/2010 كعضو مراقب، وطلب شركة أورينت لإنتاج الحديد الإنشائي والصناعي المدرفل على الساخن في سورية للانتساب إلى الاتحاد كعضو عامل.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-12-05'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-03-06'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع أعضاء مجلس إدارة الاتحاد من سورية',
            excerpt: 'تداول أعضاء مجلس الإدارة في سورية حول رأي القطاع الحكومي بجدوى مشاركة القطاع الخاص في الرأي، واستراتيجية دعم رواد الأعمال',
            content: 'في اجتماع أعضاء مجلس إدارة الاتحاد في مكتب دمشق قبيل لقائهم السيد وزير الصناعة تداول الحضور بخصوص انطباعاتهم من زياراتهم لوزيري المالية والاقتصاد وموقف القطاع الحكومي من إشراك القطاع الخاص بالرأي في البرامج الحكومية.\n' +
              'كما تناول الاجتماع استراتيجية دعم رواد الأعمال قبل إنشائهم عملهم من خلال الشراكة في التعليم والتدريب المهني، وبعد تخرجهم من خلال مبادرة الجمعية الاجتماعية للشباب السوري لإنشاء حاضنة الشباب.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-06-12'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'مؤتمر عرب كاب الأول',
            excerpt: 'عقد تجمع مصنعي الكابلات العرب المنبثق عن الإتحاد مؤتمره الأول "عرب كاب 2005" برعاية صاحب المعالي الشيخ عبد الله بن سلمان آل خليفة وزير الكهرباء والماء في مملكة البحرين حيث تداول بخصوص سبل تطوير مصنعي الكابلات في العالم العربي ومواجهة سياسة الإغراق المتبعة من الشركات الأجنبية.',
            content: 'عقد تجمع مصنعي الكابلات العرب المنبثق عن الإتحاد مؤتمره الأول "عرب كاب 2005" برعاية صاحب المعالي الشيخ عبد الله بن سلمان آل خليفة وزير الكهرباء والماء في مملكة البحرين.\n' +
              'بحث المؤتمر سبل تطوير صانعي الكابلات في العالم العربي، ووسائل ومنشآت الشحن البحري والبري بين الدول العربية، وتبادل الخبرات بين الشركات العربية، ومواجهة سياسة الإغراق المتبعة من الشركات الأجنبية في الأسواق العربية، وتوحيد المواصفات القياسية، وإنشاء المختبرات العربية لإصدار شهادات المطابقة الفنية للمنتجات المصنوعة في الدول العربية، وتنسيق إمكانيات الإنتاج العربي على أساس التكامل البناء وليس المنافسة والإغراق.\n' +
              'اتفق أعضاء التجمع على عقد مؤتمرهم الثاني في المغرب خلال شهر نيسان 2006.\n' +
              'روابط ذات صلة:\n' +
              'الموقع الإلكتروني لتجمع مصنعي الكابلات العرب',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2005-04-25'),
          end_on: new Date('2005-04-27'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2005-04-25_arabcab/0.jpg',
            image_alt: 'ArabCab 2005',
            locale_post_image: {
              create: [
                {
                  title: 'ArabCab 2005',
                  locale_id: 'en-US'
                },
                {
                  title: 'عرب كاب 2005',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'المؤتمر العربي الأول للقياس والمعايرة',
            excerpt: 'عقد هذا المؤتمر بالتعاون مع المعهد القومي للمعايرة في مصر بهدف التنسيق والتكامل بين أجهزة القياس العربية ودعم الثقة والمصداقية في نتائج القياس والمعايرة بين الدول العربية لرفع القدرة التنافسية للمنتجات العربية. وقد أثمرت المبادرة بولادة (الاتحاد العربي للقياس والمعايرة).',
            content: 'عقد هذا المؤتمر وفق ماهو مخطط له في الاتحاد بالتعاون مع المعهد القومي للمعايرة في مصر وذلك بهدف تعميق المعرفة بعلم القياس والمعايرة في العالم العربي والتنسيق والتكامل بين أجهزة القياس العربية ودعم الثقة والمصداقية في نتائج القياس والمعايرة بين الدول العربية لرفع القدرة التنافسية للمنتجات العربية.\n' +
              'جمع هذا الحدث بين مصنعي أجهزة المعايرة والمستخدمين للقياس والمعايرة، وكذلك معاهد ومؤسسات القياس والمعايرة في الدول العربية، وهيأ الفرصة للتعاون فيما بينهم.\n' +
              'ومن النتائج الهامة لهذا المؤتمر ولادة الاتحاد العربي للقياس والمعايرة.\n' +
              'ملفات للتنزيل:\n' +
              'البرنامج، المنشور(ع)، أوراق العمل.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2007-11-06'),
          end_on: new Date('2007-11-08'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2007-11-06_calibration_conf_eg/0.jpg',
            image_alt: 'Conference on Metrology and Calibration',
            locale_post_image: {
              create: [
                {
                  title: 'Conference on Metrology and Calibration',
                  locale_id: 'en-US'
                },
                {
                  title: 'المؤتمر العربي للقياس والمعايرة',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2007-11-06_calibration_conf_eg/1.jpg',
            image_alt: 'Conference on Metrology and Calibration',
            locale_post_image: {
              create: [
                {
                  title: 'Conference on Metrology and Calibration',
                  locale_id: 'en-US'
                },
                {
                  title: 'المؤتمر العربي للقياس والمعايرة',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-06-07'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/0.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/1.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/2.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/3.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/4.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/5.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/6.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/7.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/8.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/9.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/10.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/11.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/12.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/13.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/14.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-06-07_financial_crisis_conf_sy/15.jpg',
            image_alt: 'Impact of the economic crisis Conf.',
            locale_post_image: {
              create: [
                {
                  title: 'Impact of the economic crisis Conf.',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تأثير الأزمة الاقتصادية العالمية ',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-02-20'),
          end_on: new Date('2010-02-22'),
          level: { connect: { id: 6 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-20_euroarab_conf_on_smes_sy/0.jpg',
            image_alt: '1st EuroArab Conference on SMEs',
            locale_post_image: {
              create: [
                {
                  title: '1st EuroArab Conference on SMEs',
                  locale_id: 'en-US'
                },
                {
                  title: 'المؤتمر الأوربي-العربي الأول ',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-05-15'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-05-15_metrology_conf_eg/0.jpg',
            image_alt: 'Forum of Experts and specialists in Metrology - Cairo 2010',
            locale_post_image: {
              create: [
                {
                  title: 'Forum of Experts and specialists in Metrology - Cairo 2010',
                  locale_id: 'en-US'
                },
                {
                  title: 'ملتقى الخبراء والمتخصصين في المعايرة والقياس - القاهرة 2010',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'مؤتمر تحلية المياه',
            excerpt: 'شارك صناع السياسات على المستوى الوطني، وممثلو القطاع الخاص، والبلديات، والمستفيدون من إعادة استخدام المياه بالمؤتمر الأول من نوعه الذي نظمته شبكة NOSSTIA بالتعاون مع الجمعية العالمية للتحلية IDA وجمعية ليفانت للتحلية LDA والذي ركز على تقنيات تحلية المياه',
            content: 'حضر الأمين العام للاتحاد العربي للصناعات الهندسية المؤتمر الأول من نوعه الذي نظمته شبكة NOSSTIA بالتعاون مع الجمعية العالمية للتحلية IDA وجمعية ليفانت للتحلية LDA والذي ركز على تقنيات تحلية المياه.\n' +
              'شارك في المؤتمر صناع السياسات على المستوى الوطني وممثلو القطاع الخاص والبلديات والمستفيدون من إعادة استخدام المياه.\n' +
              'وقد أوصى المؤتمر في ختام جلساته بثمان توصيات تدور حول ضرورة العمل على تأسيس برامج لإعادة إستخدام المياه، وبناء موارد مياه غير تقليدية لتغطية الإحتياجات الوطنية من أجل الزراعة والصناعة والخدمات البيئية.\n' +
              'ملفات للتنزيل:\n' +
              'المنشور، البرنامج، تقرير، مقالات صحفية، التوصيات',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-09-28'),
          end_on: new Date('2010-09-29'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-09-28_nosstia_water_desalination_sy/0.jpg',
            image_alt: 'Water Desalination Conference',
            locale_post_image: {
              create: [
                {
                  title: 'Water Desalination Conference',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تحلية المياه',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-09-28_nosstia_water_desalination_sy/1.jpg',
            image_alt: 'Water Desalination Conference',
            locale_post_image: {
              create: [
                {
                  title: 'Water Desalination Conference',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تحلية المياه',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-09-28_nosstia_water_desalination_sy/2.jpg',
            image_alt: 'Water Desalination Conference',
            locale_post_image: {
              create: [
                {
                  title: 'Water Desalination Conference',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تحلية المياه',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-09-28_nosstia_water_desalination_sy/3.jpg',
            image_alt: 'Water Desalination Conference',
            locale_post_image: {
              create: [
                {
                  title: 'Water Desalination Conference',
                  locale_id: 'en-US'
                },
                {
                  title: 'مؤتمر تحلية المياه',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'منتدى القطاع الخاص العربي',
            excerpt: 'وفد الاتحاد يشارك في منتدى القطاع الخاص العربي الذي عقد على هامش القمة العربية الاقتصادية والتنموية والاجتماعية بهدف إشراك القطاع الخاص والمجتمع المدني والمفكرين مع المسؤولين الحكوميين في تناول وبحث قضايا الوطن العربي في المجال الاقتصادي والاجتماعي. والسيد السنيورة يدعو لإطلاق ورش عمل تنظر في كيفية إزالة العوائق القانونية والإدارية التي تحد من تدفق الاستثمارات للدول العربية.',
            content: 'شارك وفد الاتحاد في منتدى القطاع الخاص العربي الذي عقد على هامش القمة العربية الاقتصادية والتنموية والاجتماعية لمناقشة الموضوعات الاقتصادية والاجتماعية التي ستعرض على القمة.\n' +
              'هذا المنتدى هو من أهم الأنشطة التي تهدف إلى مشاركة القطاع الخاص والمجتمع المدني والمفكرين مع المسؤولين الحكوميين في تناول وبحث قضايا الوطن العربي في المجال الاقتصادي والاجتماعي.\n' +
              'ومن أبرز ما نوقش كلمة الأستاذ السنيورة الذي فند العوائق الأساسية لتطور العالم العربي، ومن ثم أكد على أنه ينبغي السير على مسارات تستطيع أن تمكننا كمنطقة ودول وشعوب من التلاؤم مع مقتضيات التغير الحاصل في العالم من حولنا وذلك من خلال عدة محاور، منها: العمل المشترك على إيجاد مصادر جديدة وحقيقية للطاقة- الاستثمار المشترك في التعليم وتطوير المناهج التعليمية المتلائمة مع المتغيرات- المجال الصحي- الاستثمار في الاقتصاد المنتج أي الاقتصاد في قطاعي الزراعة والصناعة- إزالة العوائق القانونية والإدارية التي تحد من التعاون بين الاقتصادات العربية ومن تدفق الاستثمارات العربية والخارجية.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج المنتدى، خبر صحفي',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-01-17'),
          end_on: new Date('2009-01-18'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'الملتقى الأول للصناعات النسيجية العربية',
            excerpt: 'الاتحاد العربي للصناعات النسيجية ينظم الملتقى الأول بحضور حشد من رجال الاعمال والمستثمرين والخبراء العرب والأجانب في مجال الصناعات النسيجية، ويخرج بتوصيات لدعم هذا القطاع الصناعي الهام في المنطقة من خلال تطوير الكوادر البشرية والاستعانة ببرامج التعاون والبحث والتطوير الدولية.',
            content: 'شارك الأمين العام المساعد للاتحاد في الملتقى الذي نظمه الاتحاد العربي للصناعات النسيجية تحت رعاية وزير التنمية الاقتصادية في مصر والأمين العام لمجلس الوحدة الاقتصادية العربية. حضر الملتقى حشد من رجال الأعمال والمستثمرين إضافة إلى الخبراء العرب والأجانب في مجال الصناعات النسيجية. وتمحور الحوار حول أوضاع الصناعات النسيجية واتجاهاتها عالمياً وإمكانيات التعاون والتنسيق على الصعيدين العربي والدولي بما يعزز قدراتها التنافسية.\n' +
              'ركزت التوصيات على الدعم للنهوض بهذا القطاع الصناعي الهام في المنطقة وبالأخص من خلال تطوير الكوادر البشرية، والاستعانة ببرامج التعاون والبحث والتطوير الدولية.\n' +
              'ملفات للتنزيل:\n' +
              'قائمة المشاركين',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-03-15'),
          end_on: new Date('2009-03-16'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-03-15_arab_forum_on_textile_industries_eg/0.jpg',
            image_alt: 'Arab Textile Industries 1st Forum',
            locale_post_image: {
              create: [
                {
                  title: 'Arab Textile Industries 1st Forum',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى الأول للصناعات النسيجية العربية',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'منتدى الاقتصاد العربي',
            excerpt: 'منتدى الاقتصاد العربي يعقد دورته السابعة عشرة برعاية دولة رئيس مجلس الوزراء في الجمهورية اللبنانية ويركز على كيفية مواجهة الانعكاسات المتوقعة للأزمة المالية العالمية على اقتصاديات البلدان العربية',
            content: 'شارك وفد الاتحاد المؤلف من السادة: م.عبد الهادي عبد المنعم/رئيس الاتحاد، م.سعيد الحافظ/نائب رئيس الاتحاد، أ.محمد دعبول/عضو مجلس الإدارة، د.أحمد هيثم اليافي/الأمين العام في منتدى الاقتصاد العربي (أعرق ملتقى للأعمال في الشرق الأوسط) الذي عقد تحت رعاية دولة الأستاذ فؤاد السنيورة/رئيس مجلس الوزراء في لبنان. وكان موضوع "اتجاهات الأزمة وكيفية مواجهة انعكاساتها المتوقعة على اقتصاديات البلدان العربية" فاتحة المسائل التي نوقشت.\n' +
              '&nbsp;كان المنتدى فرصة للتواصل والتباحث بين مجلس إدارة الاتحاد العربي للصناعات الهندسية وهم رجال أعمال معروفين على المستوى العربي مع نظرائهم. وقد أرسلت الأمانة العامة رسالة إلى المنظمين تعبر عن تقدير أعضاء الاتحاد للترحيب الذي شهدوه وللحوار والمناقشات التي شاركوا بها في المنتدى.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج المنتدى (ع)',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-04-02'),
          end_on: new Date('2009-04-03'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'ملتقى مجلس رجال الأعمال السوري-المصري',
            excerpt: 'بمشاركة ممثلي الاتحاد، ملتقى مجلس رجال الأعمال السوري المصري يتداول بخصوص تشجيع تنمية التبادل التجاري وإنشاء شركات قطاع خاص صناعية مشتركة',
            content: 'جمع اللقاء الأول لمجلس رجال الأعمال السوري المصري حوالي 200 من رجال الأعمال في البلدين.\n' +
              'وبعد طرح الصعوبات التي تعيق تطوير العلاقات الاقتصادية بين البلدين بشفافية أكد المسؤولون والوزراء الحاضرون على وجود التوجه لتشكيل مناخ مناسب لزيادة التعاون الصناعي والتجاري.\n' +
              'تم الاتفاق على قبول شهادات المطابقة والمواصفات في كلا البلدين ومراجعة الإجراءات الجمركية من أجل تسهيل إجراءات التجارة البينية.\n' +
              'ملفات للتنزيل:\n' +
              'أخبار الصحف',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-03-15'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-03-15_sy_eg_business_council/0.jpg',
            image_alt: 'SY-EG Businessmen Council ',
            locale_post_image: {
              create: [
                {
                  title: 'SY-EG Businessmen Council ',
                  locale_id: 'en-US'
                },
                {
                  title: 'رجال الأعمال السوري-المصري',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'الاجتماع التحضيري للدورة /38/ للاتحادات العربية النوعية التخصصية',
            excerpt: 'انتخاب رؤساء ونواب رؤساء القطاعات الخمسة للاتحادات العربية النوعية التخصصية وفق توصيات لجنة تطوير أساليب العمل بالاتحادات في مجلس الوحدة الاقتصادية العربية.',
            content: 'وجه مجلس الوحدة الاقتصادية العربية الدعوة لرؤساء وأمناء الاتحادات العربية النوعية المتخصصة العاملة في نطاقه لحضور الاجتماع التحضيري المخصص لمناقشة توصيات لجنة تطوير أساليب العمل بالاتحادات في المجلس وانتخاب رؤساء ونواب رؤساء القطاعات الخمسة المقترحة (الصناعة والإنتاج، النقل، الخدمات، الاستثمار، الثقافة والمعلومات).\n' +
              'شارك رئيس الاتحاد والأمين العام في هذا الاجتماع حيث تم اختيار رئيس الاتحاد كنائب رئيس قطاع الإنتاج في الهيكلية الجديدة للاتحادات العربية النوعية التخصصية.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-10-20'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'الاجتماع الدوري /38/ للاتحادات العربية النوعية المتخصصة',
            excerpt: 'من أبرز المواضيع التي نوقشت  في الاجتماع هي: الدور المأمول من القطاع الخاص في قيادة التعاون الاقتصادي العربي من خلال الاتحادات، بالإضافة إلى مقترح مكتب الاتحاد في القاهرة لتفعيل الصندوق العربي لدعم الصناعات الصغيرة والمتوسطة.',
            content: 'شارك وفد الاتحاد في الاجتماع الذي أكد على الدور المأمول من القطاع الخاص في قيادة التعاون الاقتصادي العربي من خلال الاتحادات، وقدم الهيكلية المقترحة من الأمانة العامة لمجلس الوحدة الاقتصادية العربية لتقسيم الاتحادات العربية إلى خمسة قطاعات.\n' +
              'قدم مكتب الاتحاد في القاهرة مقترحه لتفعيل الصندوق العربي لدعم الصناعات الصغيرة والمتوسطة من خلال دعم المنشآت المتعثرة في الوطن العربي التي لاينقصها إلا التمويل.\n' +
              'أكد المشاركون على ضرورة تركيز مجلس الوحدة الاقتصادية العربية على تسهيل الإجراءات وتحديث القوانين الحاكمة للمنشآت وتوفير حرية الحركة والتنقل لرجال الأعمال والمستثمرين العرب بين الدول العربية.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-11-28'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'منتدى الاقتصاد العربي',
            excerpt: 'بمشاركات رفيعة من قياديين وكبار الخبراء والمفكرين العرب والدوليين، دار الحوار في المنتدى حول التصورات للمرحلة المقبلة وانعكاساتها سياسياً واقتصادياً.',
            content: 'شهد المنتدى مشاركات رفيعة من قياديين وكبار الخبراء والمفكرين العرب والدوليين. وكان الإطار العريض للحوار هو مجموعة الأسئلة الكبيرة التي يواجهها المستثمرون والمسؤولون في المنطقة ومن أبرزها: ماهي الصورة الجديدة للعالم العربي؟\n' +
              'ماهي الديناميات الجديدة التي ستحدد خياراته السياسية والاقتصادية، وماهو الأثر المتوقع لهذه الخيارات على بيئة الأعمال والاستثمار؟ هل ستستمر عملية الانفتاح الاقتصادي التي وفرت الحوافز المناسبة لجذب الاستثمارات الخارجية؟\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع (ع)، منشورات عن المنتدى',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-05-26'),
          end_on: new Date('2011-05-27'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-11-18'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-11-18_caeu_asf_39_lb/0.jpg',
            image_alt: 'Arab Sectoral Federations no. 39',
            locale_post_image: {
              create: [
                {
                  title: 'Arab Sectoral Federations no. 39',
                  locale_id: 'en-US'
                },
                {
                  title: 'الاجتماع الدوري /39/ للاتحادات ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-11-18_caeu_asf_39_lb/1.jpg',
            image_alt: 'Arab Sectoral Federations no. 39',
            locale_post_image: {
              create: [
                {
                  title: 'Arab Sectoral Federations no. 39',
                  locale_id: 'en-US'
                },
                {
                  title: 'الاجتماع الدوري /39/ للاتحادات ',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-11-18_caeu_asf_39_lb/2.jpg',
            image_alt: 'Arab Sectoral Federations no. 39',
            locale_post_image: {
              create: [
                {
                  title: 'Arab Sectoral Federations no. 39',
                  locale_id: 'en-US'
                },
                {
                  title: 'الاجتماع الدوري /39/ للاتحادات ',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع منظمات المجتمع المدني في المجلس الاقتصادي والاجتماعي للجامعة العربية',
            excerpt: 'بحث نتائج الدراسة التقييمية لدور مؤسسات المجتمع المدني العربية (بصفتها المراقب لدى المجلس الاقتصادي والاجتماعي للجامعة العربية) في العمل العربي المشترك، ودور هذه المؤسسات في مجال المساعدات الإنسانية',
            content: 'بدعوة من الأمانة العامة لجامعة الدول العربية، حضر وفد الاتحاد الاجتماع الذي عقدته إدارة مرصد المجتمع المدني والاتحادات المهنية والمخصص لمناقشة تفعيل دور منظمات المجتمع المدني المراقب لدى المجلس الاقتصادي والاجتماعي في العمل العربي المشترك.\n' +
              'ناقش الحضور مسودة نتائج الدراسة التقييمية التي نفذتها الأمانة العامة لجامعة الدول العربية حول دور مؤسسات المجتمع المدني العربية في العمل العربي المشترك.\n' +
              'كما تداول ممثلو مؤسسات المجتمع المدني بخصوص مقترحاتهم لتفعيل دور مؤسساتهم في مجال المساعدات الإنسانية.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-01-10'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'تقييم دور الاتحادات العربية النوعية المتخصصة في العمل العربي المشترك',
            excerpt: 'مجلس الوحدة الاقتصادية العربية ينفذ دراسة تقييم لدور الاتحادات العربية النوعية المتخصصة في العمل العربي المشترك، والاتحاد يرسل مشاركته. ',
            content: 'إيماناً من الأمانة العامة لمجلس الوحدة الاقتصادية العربية بدور الاتحادات العربية النوعية المتخصصة في العمل العربي المشترك، وحيث أن المجلس كلفها بتنفيذ دراسة تقييم لدور الاتحادات القائمة، فقد عممت نموذج استبيان يسمح بإظهار إنجازات الاتحادات بالصورة الملائمة في التقييم.\n' +
              'ورد التعميم إلى الاتحاد وتم جمع البيانات المطلوبة بالتعاون بين المكتب الإقليمي في القاهرة والمكتب الإقليمي في دمشق تحت إشراف مجلس إدارة الاتحاد.\n' +
              'أرسلت المعلومات إلى الأمانة العامة لمجلس الوحدة الاقتصادية بكتاب رسمي من الاتحاد في مطلع شهر آذار/مارس.\n' +
              'ملفات للتنزيل:\n' +
              'كتاب مجلس الوحدة الاقتصادية العربية',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-02-00'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-02-00_caeu_questionnaire/0.jpg',
            image_alt: 'CAEU Questionnaire',
            locale_post_image: {
              create: [
                {
                  title: 'CAEU Questionnaire',
                  locale_id: 'en-US'
                },
                {
                  title: 'تقييم دور الاتحادات العربية ',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'لقاء المدير الإقليمي لهيئة المعونة الاسكتلندية',
            excerpt: 'بدعوة من رئيس الاتحاد، عقد لقاء مع المدير الإقليمي لهيئة المعونة الاسكتلندية بحضور الأمين العام لمجلس الوحدة الاقتصادية العربية وتم بحث إمكانيات الاستفادة من التجربة الإسكتلندية في مجال تنمية المنشآت الصغيرة والمتوسطة في تطوير الصناعات المشابهة في الوطن العربي.',
            content: '&nbsp;بدعوة من رئيس الاتحاد، عقد لقاء مع المدير الإقليمي لهيئة المعونة الاسكتلندية بحضور الأمين العام لمجلس الوحدة الاقتصادية العربية وممثلي الاتحاد.\n' +
              'هدف اللقاء إلى بحث إمكانيات الاستفادة من التجربة الإسكتلندية في مجال تنمية المنشآت الصغيرة والمتوسطة في تطوير الصناعات المشابهة في الوطن العربي حيث أن الحاجة اليوم ملحة لمثل هذا النوع من المنشآت.\n' +
              'لفت الأمين العام لمجلس الوحدة الاقتصادية العربية إلى أن الاهتمام بالاطلاع على تجارب عالمية في تطوير المنشآت الصغيرة والمتوسطة يعود إلى الحاجة لوضع آلية لتفعيل الصندوق العربي لتمويل المنشآت الصغيرة والمتوسطة الذي تم إنشاؤه في العام الماضي.\n' +
              'وبعد المناقشة تقرر استمرار التواصل بين الإتحاد وهيئة المعونة الإسكتلندية للإعداد للقائين، الأول في القاهرة في غضون شهر مارس المقبل لعدد من الخبراء الإسكتلنديين مع نظرائهم من الجانب المصري والعربي، والثاني في اسكتلندا لمتخصصين من الجانب المصري والعربي للتعرف العملي على التجربة الإسكتلندية على أرض الواقع.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-07-25'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-06-28'),
          level: { connect: { id: 3 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'الاجتماع التشاوري الأول للقطاع الخاص',
            excerpt: 'عقد مجلس الوحدة الاقتصادية العربية اجتماعاً تشاورياً للقطاع الخاص حول التفاعل مع الأوضاع المتغيرة في الوطن العربي ومحاولة الخروج منها بما يشجع الاستثمارات العربية البينية.',
            content: 'شارك ممثل الاتحاد في الاجتماع التشاوري الأول للقطاع الخاص الذي عقده مجلس الوحدة الاقتصادية العربية بهدف مناقشة سبل التفاعل مع الأوضاع المتغيرة في الوطن العربي ومحاولة الخروج منها بما يشجع الاستثمارات العربية البينية.\n' +
              'حضر الاجتماع ممثلو الاتحادات النوعية في المجلس ومجموعة من رجال الأعمال والمستثمرين العرب.\n' +
              'من أبرز الأفكار التي نوقشت مسألة أن البطالة في الدول العربية (وخاصة مصر) ليست هي المشكلة وإنما هي عدم توفر العمالة الماهرة، والحل يكمن في التعليم والتدريب.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-07-05'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-07-27'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع اللجنة الوطنية للتلمذة المهنية',
            excerpt: 'بمشاركة ممثلي قطاع الأعمال وقطاع التربية، نوقشت التعديلات على المسودة الثالثة لمقترح مرسوم إنشاء "الهيئة الوطنية للتعليم والتدريب المهني والتقاني" التي ستعنى بجعل منظومة التعليم والتدريب المهني والتقاني مرنة وقادرة على متابعة تطورات سوق العمل',
            content: 'شارك بعض أعضاء الاتحاد من سورية كممثلين عن قطاع الأعمال في اجتماع اللجنة الوطنية للتلمذة المهنية الذي خصص لمناقشة التعديلات المطلوبة على المرسوم المقترح لإنشاء "الهيئة الوطنية للتعليم والتدريب المهني والتقاني" من جانب أصحاب العمل بحيث تسمح للهيئة بالعمل على جعل منظومة التدريب والتعليم المهني والتقاني مرنة وقادرة على متابعة تطورات سوق العمل.\n' +
              'الجدير بالذكر أن اقتراح إنشاء الهيئة المذكورة جاء بعد عدة سنوات من التعاون بين قطاع التربية وقطاع الأعمال التي سمحت بالاطلاع على تجارب العديد من الدول المتقدمة من خلال خبراء مؤسسة التدريب الأوربية التي نفذت مشروع التلمذة الصناعية وخبراء مشروع تحديث التعليم والتدريب المهني الذين ساهموا في وضع ثلاث سيناريوهات للهيئة المقترحة. وبذلك فإن بناء الخبرة في الشراكة بين القطاعين جاء على مستوى تجريبي قبل وضع الإطار التشريعي والإداري اللازم لخدمة هذه الشراكة بفعالية.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-09-30'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-10-03'),
          end_on: new Date('2011-10-03'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/0.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/1.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/2.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/3.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/4.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/5.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/6.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/7.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-03_tresmed_4_conf_fr/8.jpg',
            image_alt: 'TRESMED 4 Paris 2011',
            locale_post_image: {
              create: [
                {
                  title: 'TRESMED 4 Paris 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'ترسميد 4 باريس 2011',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-10-06'),
          end_on: new Date('2011-10-07'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-10-06_imove_vet_forum_de/0.jpg',
            image_alt: 'Edu.&Vocational Training Forum 2011',
            locale_post_image: {
              create: [
                {
                  title: 'Edu.&Vocational Training Forum 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'Edu.&Vocational Training Forum 2011',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'الملتقى الرابع للممارسات الإدارية الناجحة',
            excerpt: 'نظمت المنظمة العربية للتنمية الإدارية الملتقى بالتعاون مع وزارة تنمية الموارد البشرية في السودان، وجياد تحتضن اليوم الثالث وتقدم تجربتها وشراكتها مع الوزارة في مجال التدريب والتأهيل. ',
            content: 'نظم الملتقى بالتعاون بين المنظمة العربية للتنمية الإدارية ووزارة تنمية الموارد البشرية في السودان. وقد حظي الملتقى بمشاركة واسعة من الدول العربية وقدم تجارب نموذجية لممارسات إدارية ناجحة من الأقطار العربية للحضور.في اليوم الثالث، اطلع المشاركون على تجربة مجموعة جياد الصناعية في تطبيق الجودة الشاملة وجائزة التميز بعد زيارة ميدانية في منشآتها.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-02-21'),
          end_on: new Date('2012-02-23'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-04-24'),
          end_on: new Date('2012-04-26'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/0.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/1.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/2.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/3.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/4.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/5.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/6.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/7.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/8.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2012-04-24_arab_smes_forum_tn/9.jpg',
            image_alt: '6th Arab Forum on SMEs - Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '6th Arab Forum on SMEs - Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'الملتقى العربي السادس للصناعات الصغيرة والمتوسطة - تونس',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-11-18'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/0.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/1.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/2.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/3.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/4.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/5.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/6.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/7.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/8.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/9.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/10.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/11.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2009-11-18_giz_innovation_study_ws_sy/12.jpg',
            image_alt: 'GIZ WS 2009 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ WS 2009 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ورشة عمل giz في 2009 - سورية',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-02-16'),
          end_on: new Date('2010-02-17'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/0.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/1.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/2.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/3.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/4.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/5.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/6.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/7.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/8.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/9.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/10.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/11.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/12.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/13.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/14.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/15.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/16.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/17.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/18.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/19.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/20.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/21.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/22.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/23.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/24.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/25.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/26.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/27.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/28.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/29.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/30.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/31.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/32.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/33.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/34.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/35.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/36.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/37.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/38.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/39.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/40.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/41.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/42.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/43.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/44.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/45.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-02-16_giz_regional_seminar_sy/46.jpg',
            image_alt: 'GIZ Seminar 2010 Syria',
            locale_post_image: {
              create: [
                {
                  title: 'GIZ Seminar 2010 Syria',
                  locale_id: 'en-US'
                },
                {
                  title: 'ندوة giz في 2010 - سورية',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-04-28'),
          end_on: new Date('2011-04-29'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع تقييم برنامج دعم المشاريع الصغيرة والمتوسطة في سورية ',
            excerpt: 'قدمت مجموعة من الخبراء وممثلو الجهات المستفيدة من برنامج الاتحاد الأوربي دعم المنشآت الصغيرة والمتوسطة في سورية تقييمها لإنجازات البرنامج على صعيد دعم قطاع الأعمال وعلى صعيد دعم وزارة الاقتصاد والتجارة في وضع السياسات والاستراتيجيات التطويرية للمشاريع الصغيرة والمتوسطة',
            content: 'بصفته ممثلاً لقطاع الأعمال، حضر الأمين العام للاتحاد الاجتماع الذي نظمته بعثة المفوضية الأوربية بهدف تقييم برنامج دعم المشاريع الصغيرة والمتوسطة الممول من الاتحاد الأوربي.\n' +
              'بدأ ممثل بعثة المفوضية الأوربية بتبيان الهدف من هذا الاجتماع والاجتماعات اللاحقة وهو العمل على إجراء تقييم نهائي لبرنامج دعم المنشآت الصغيرة والمتوسطة الذي أنهى نشاطاته في منتصف 2010، وأن التقييم سيتم باستخدام معايير متعددة اعتماداً على التقرير التمهيدي، وتقارير العمل السنوية، والتغذية الراجعة من القطاع الخاص حول إنجازات البرنامج. والهدف من ذلك هو تحديد مواطن الضعف والعمل على تجنبها للارتقاء بالبرنامج في المرحلة القادمة.\n' +
              'لخصت ممثلة وزارة الاقتصاد والتجارة إنجازات البرنامج على صعيد دعم قطاع الأعمال (الحاضنات) ودعم الوزارة في السياسات والاستراتيجيات (رفع الوعي، اعتماد تعريف وطني للمنشآت الصغيرة والمتوسطة).',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-02-14'),
          level: { connect: { id: 3 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'ورشة عمل تدريب مدربين حول الإدارة الفعالة لأصول الملكية الفكرية لصالح الشركات الصغيرة والمتوسطة',
            excerpt: 'نظمت الدورة في إطار التعاون بين وزارة الاقتصاد والتجارة في سورية والمنظمة العالمية لحماية الملكية (وايبو) بهدف إكساب مدربين المعرفة والمهارات الأساسية لتقديم المساعدة الأولية لأصحاب الأعمال والمنشآت الصغيرة والمتوسطة مما سيساهم في تعزيز قدرتها التنافسية في الأسواق المحلية والدولية.  ساهم الاتحاد في التنسيق مع الأعضاء في سورية لترشيح ممثلين عن شركاتهم ليصبحوا مدربين أساسيين.\n',
            content: 'نظمت الدورة في إطار التعاون بين وزارة الاقتصاد والتجارة في سورية والمنظمة العالمية لحماية الملكية (وايبو) بهدف إكساب مدربين المعرفة والمهارات الأساسية لتقديم المساعدة الأولية لأصحاب الأعمال والمنشآت الصغيرة والمتوسطة مما سيساهم في تعزيز قدرتها التنافسية في الأسواق المحلية والدولية.\n' +
              'ساهم الاتحاد في التنسيق مع الأعضاء في سورية لترشيح ممثلين عن شركاتهم ليصبحوا مدربين أساسيين.\n' +
              'الروابط ذات الصلة:\n' +
              'موقع المنظمة العالمية لحماية حقوق الملكية الفكرية&nbsp;موقع مكتب براءات الاختراع السوريقانون براءات الاختراع في سورية ',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-01-16'),
          end_on: new Date('2011-01-20'),
          level: { connect: { id: 3 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'الاجتماع /94/ لمجلس الوحدة الاقتصادية العربية',
            excerpt: 'ثمن المجلس جهود أمانته العامة في إعداد الدراسة التقييمية للاتحادات العربية النوعية المتخصصة العاملة في نطاقه، وقرر تكليف الأمانة العامة بدراسة موقف الاتحادات ومكاتبها الإقليمية وإرجاء تنفيذ الكتاب التعريفي للاتحادات لحين البت في موقف بعضها.',
            content: 'بناءً على دعوة الأمانة العامة لمجلس الوحدة الاقتصادية العربية شارك ممثلي الاتحاد في اجتماع المجلس الدوري /94/ حيث تسلمت المملكة الأردنية الهاشمية رئاسة المجلس للدورة القادمة. من أبرز المواضيع التي عرضت على المجلس الدراسة التقييمية للاتحادات العربية النوعية المتخصصة العاملة في نطاقه التي نفذتها الأمانة العامة للمجلس. وقد ثمن المجلس جهود أمانته العامة في إعداد الدراسة، وقرر تكليف الأمانة العامة بدراسة موقف الاتحادات ومكاتبها الإقليمية وإرجاء تنفيذ الكتاب التعريفي للاتحادات لحين البت في موقف بعضها.\n' +
              'روابط ذات صلة:\n' +
              'الدراسة التقييمية للاتحادات العربية النوعية المتخصصة',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-06-07'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-03-29'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2010-03-29_oecd_wg_on_sme_tn/0.jpg',
            image_alt: '4th meeting of MENA-OECD WG, Tunisia',
            locale_post_image: {
              create: [
                {
                  title: '4th meeting of MENA-OECD WG, Tunisia',
                  locale_id: 'en-US'
                },
                {
                  title: 'اللقاء الرابع لمجموعة عمل MENA-OECD  في تونس',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-05-14'),
          end_on: new Date('2012-05-15'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-07-15'),
          level: { connect: { id: 3 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-07-18'),
          end_on: new Date('2011-07-19'),
          level: { connect: { id: 5 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-07-18_etf_social_partnership_conf/0.jpg',
            image_alt: 'Social Partnership in VET - Italy 2011',
            locale_post_image: {
              create: [
                {
                  title: 'Social Partnership in VET - Italy 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الشراكة الاجتماعية في مجال التعليم والتدريب المهني - إيطاليا 2011',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2011-07-18_etf_social_partnership_conf/1.jpg',
            image_alt: 'Social Partnership in VET - Italy 2011',
            locale_post_image: {
              create: [
                {
                  title: 'Social Partnership in VET - Italy 2011',
                  locale_id: 'en-US'
                },
                {
                  title: 'الشراكة الاجتماعية في مجال التعليم والتدريب المهني - إيطاليا 2011',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'مشروع رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية',
            excerpt: 'في آذار/مارس 2010، بدأت الهيئة العليا للبحث العلمي تنفذ أنشطة ضمن مشروعها لرسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية. شارك الأمين العام للاتحاد في اجتماعات ونشاطات لجنة "قطاع الصناعة" كممثل لقطاع الأعمال كما قدم مقترح الاتحاد لرؤية السياسة الوطنية للعلوم والتقانة والابتكار في قطاع الصناعات الهندسية لهذه اللجنة. قدمت لجنة قطاع الطاقة مقترحاتها ونوقشت في ورشة عمل بتاريخ 23/12/2010 بمشاركة الأمين العام للاتحاد والاستشارية لدى مكتب الاتحاد بدمشق.',
            content: 'في آذار/مارس 2010، بدأت الهيئة العليا للبحث العلمي تنفذ أنشطة ضمن مشروعها لرسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية. ويشارك الأمين العام للاتحاد بصفته أحد ممثلي قطاع الأعمال في هذه المبادرة منذ إطلاقها.\n' +
              'استهلت الأنشطة بتوزيع استبيان على المعنيين في الجهات والمؤسسات المختلفة المعنية بوضع وتنفيذ السياسة الوطنية للعلوم والتقانة والابتكار بهدف تقييم القطاعات التنموية وفق معايير محددة (الأهمية الاقتصادية، العلمية، الاجتماعية، الاستراتيجية) وتأثير المواضيع البحثية على كل قطاع وصولاً لتحديد مواضيع البحث والتطوير ذات الأولوية. ثم عقدت ورشة عمل شارك فيها عدد كبير من الباحثين المختصين وممثلو قطاع الأعمال لمناقشة أولويات البحث العلمي في 2/3/2010. تم تحديد القطاعات ذات الأولوية وفق نتائج الاستبيان (الطاقة- الزراعة- الصناعة- المياه- الصحة- الاتصالات- بناء القدرات التمكينية) وأقر مجلس إدارة الهيئة إضافة قطاع البيئة إلى القطاعات ذات الأولوية.\n' +
              'تم تشكيل لجان قطاعية بقرار من رئيس مجلس الوزراء مهمتها تحليل الواقع الراهن للقطاع ودراسة توجهات العمل المستقبلية فيه وتقديم المقترحات لتطوير القطاع من خلال توظيف البحث العلمي والتطوير التقاني بما يتوافق مع الأولويات المعتمدة للقطاع والخطة الخمسية الحادية عشرة. ولقد شارك الأمين العام للاتحاد في اجتماعات ونشاطات لجنة "قطاع الصناعة" كممثل لقطاع الأعمال كما قدم مقترح الاتحاد لرؤية السياسة الوطنية للعلوم والتقانة والابتكار في قطاع الصناعات الهندسية لهذه اللجنة. قدمت لجنة قطاع الطاقة مقترحاتها ونوقشت في ورشة عمل بتاريخ 23/12/2010 بمشاركة الأمين العام للاتحاد والاستشارية لدى مكتب الاتحاد بدمشق.\n' +
              'روابط ذات صلة:\n' +
              'موقع الهيئة العليا للبحث العلمي على الإنترنتالأنشطة اللاحقة للمشروع خلال عام 2011',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2010-03-01'),
          end_on: new Date('2010-12-31'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'مشروع رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية',
            excerpt: 'تابعت الهيئة العليا للبحث العلمي مبادرة "رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية"، حيث روجت لـ"نظام معلومات البحث العلمي" الذي أنشأته على موقعها على الإنترنت. تم تشكيل "لجنة علمية استشارية تخصصية في مجال الصناعة" تحت مظلة الهيئة بمشاركة الأمين العام للاتحاد كممثل عن قطاع الأعمال.',
            content: 'تابعت الهيئة العليا للبحث العلمي مبادرة "رسم السياسة الوطنية للعلوم والتقانة والابتكار في سورية"، حيث روجت لـ"نظام معلومات البحث العلمي" الذي أنشأته على موقعها على الإنترنت.\n' +
              'بقرار من رئيس مجلس الوزراء تم تشكيل "لجنة علمية استشارية تخصصية في مجال الصناعة" تحت مظلة الهيئة بمشاركة الأمين العام للاتحاد كممثل عن قطاع الأعمال. تتلخص مهام اللجنة في كونها المنصة للتنسيق بين الهيئة وبين الجهات الممثلة في اللجنة وستساهم في دراسة القضايا والموضوعات التي تتعلق بقطاع الصناعة من منظور بحثي وتقاني وكذلك في متابعة تنفيذ قرارات المشروع بما يخص قطاع الصناعة.\n' +
              'روابط ذات صلة:\n' +
              'موقع الهيئة العليا للبحث العلمي على الإنترنتموقع نظام معلومات البحث العلمي على الإنترنتالأنشطة السابقة للمشروع خلال عام 2011',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-01-01'),
          end_on: new Date('2012-12-31'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-09-17'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2009-08-01'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2011-01-01'),
          end_on: new Date('2011-12-31'),
          level: { connect: { id: 1 } },
          classification: { connect: { id: 3 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2012-11-07'),
          end_on: new Date('2012-11-08'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2013-01-16'),
          end_on: new Date('2013-01-17'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } },
      post_image: {
        create: [
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg0.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg1.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg2.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg3.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg4.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg5.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg6.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg7.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg8.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg9.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg10.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg11.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg12.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg13.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg14.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg15.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg16.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg17.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg18.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg19.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg20.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg21.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg22.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg23.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg24.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg25.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg26.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg27.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg28.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg29.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg30.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg31.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg32.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg33.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg34.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
                }
              ]
            }
          },
          {
            image_src: '/assets/imgs/galleries/damascus_office/2013-01-16_ga_meeting_eg35.jpg',
            image_alt: '2013 General Assembly',
            locale_post_image: {
              create: [
                {
                  title: '2013 General Assembly',
                  locale_id: 'en-US'
                },
                {
                  title: 'اجتماع الجمعية العمومية 2013',
                  locale_id: 'ar-SY'
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

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع اللجنة الفنية لآلية تنمية الاستثمار والتجارة في البلاد العربية',
            excerpt: 'الخطة المقترحة لآلية تنمية الاستثمار والتجارة العربية تهدف لإعطاء فرصة للقطاع الخاص للتعبير عن فرصه واحتياجاته، والأمانة العامة لمجلس الوحدة الاقتصادية العربية تضع الأساس وتدعو جميع منظمات القطاع الخاص والمعنيين للاندماج وفق مايرونه.',
            content: 'شارك م.جمال عفيفي/نائب رئيس مجلس إدارة&nbsp;الاتحاد ومستشارة الاتحاد في اجتماع اللجنة الفنية لآلية تنمية الاستثمار والتجارة في البلاد العربية التي تمحورت حول الخطة المقترحة لهذه الآلية.\n' +
              'استهل الاجتماع بكلمة من الأمين العام لمجلس الوحدة الاقتصادية العربية أشار فيها إلى أنه قد مضى وقت طويل يقوم فيه الجانب الحكومي بدور القطاع الخاص ويأخذ قرارات لاتتفق مع مايحتاجه، ولم يعد بإمكان أي من الجانبين الحكومي والخاص العمل بشكل منفرد. وذكر بأن مجلس الوحدة الاقتصادية العربية يسعى لإثراء الآلية لجعلها قادرة على إعطاء القطاع الخاص فرصة للتعبير عن فرصه واحتياجاته. وختم بالتأكيد على أن الخطة تعتبر الأساس الذي ندعو من خلالها جميع منظمات القطاع الخاص والمعنيين للاندماج وفق مايرونه.\n' +
              'من بين المواضيع الهامة كان ورقة العمل حول دور القطاع الخاص في تمويل المشروعات الصغيرة والمتوسطة العربية والتي ركزت على خيارات التمويل غير التقليدية الفعالة والمقبولة في إطار قيم المجتمع.\n' +
              'ملفات للتنزيل:\n' +
              'برنامج الاجتماع',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2013-10-08'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'الاجتماع الدوري /41/ للاتحادات العربية النوعية المتخصصة',
            excerpt: 'تناول الاجتماع مقترحاً أولياً لنظام عمل آلية الاستثمار والتجارة العربية، وجهود الاتحاد العربي للقياس والمعايرة نحو توحيد المواصفات العربية والتقارب مع المواصفات الدولية لفتح مجال التسويق للمنتجات العربية. وينتهي بطرح فكرة تشكيل مجلس إدارة للاتحادات العربية النوعية المتخصصة لاستمزاج آراء الاتحادات.',
            content: 'شارك وفد الاتحاد الاتحاد العربي للصناعات الهندسية في الاجتماع الذي عقد في بيروت/لبنان بحضور رؤساء وأمناء الاتحادات العربية النوعية التخصصية ورجال وسيدات الأعمال.\n' +
              'عرض رئيس الاتحاد العربي للقياس والمعايرة ورقة عمل تتضمن جهد الإتحاد في السعي إلى توحيد المواصفات العربية في العديد من السلع لتسهيل تداول هذه السلع داخل البلدان العربية والجهد الموازي للتقارب مع المواصفات الدولية لفتح مجال التسويق للمنتجات العربية. كما ذكر بأنه سيتم البدء في إنشاء مختبرات فحص جودة المواد الغذائية بالدول العربية العشر أعضاء الإتحاد لضمان سلامتها ثم التوسع في غيرها من المنتجات.\n' +
              'تحدث أمين عام مجلس الوحدة الاقتصادية العربية عن عمل الاتحادات العربية النوعية في هيكلية القطاعات الخمسة تحت مظلة المجلس، وعرض فكرة أن يتم تشكيل مجلس إدارة للإتحادات بحيث يعمل مجلس الوحدة الاقتصادية العربية كسكرتارية له. وانتهى النقاش إلى الاتفاق على إتاحة الفرصة أمام الاتحادات لإعداد وجهة نظرها في فعالية هذه الفكرة واقتراح آليات تنفيذها خلال اجتماع استثنائي يعقد للإتحادات العربية النوعية المتخصصة في منتصف شهر يناير القادم.\n' +
              'ناقش الحضور "ورقة عمل بمقترح أولي لنظــام عمـــل آلية الاستثمار والتجارة العربية"، وتم الاتفاق على تشكيل لجنة مصغرة لتعميق مفاهيم الآلية وتقديم ورقة إلى الاجتماع بمنتصف يناير القادم.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2013-11-14'),
          end_on: new Date('2013-11-15'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماعات الاتحاد العربي للحديد والصلب',
            excerpt: 'الاتحاد العربي للصناعات الهندسية يشارك كمراقب في اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب الذي ركز على ضرورة التنسيق والتكامل بين منتجي الصلب لمواجهة التحدي من اتجاه مصدري الخامات والمواد الأولية الرئيسية اللازمة لهذه الصناعة إلى زيادة أسعار الخامات والمستلزمات بنسب كبيرة. كما ناقش أهمية مشروعات التوافق البيئي وخفض الانبعاثات وترشيد استهلاك الطاقة، ووضع ذلك في برامج التوسع المستقبلية لهذه الصناعة في المنطقة.',
            content: 'بدعوة من الاتحاد العربي للحديد والصلب، حضر أ.معتصم دعبول/ممثل الاتحاد العربي للصناعات الهندسية اجتماع مجلس الإدارة الدوري رقم /107/.\n' +
              'تضمن جدول الاجتماعات أهم المستجدات على صعيد صناعة الصلب العربية والعالمية، وفتح مكتب إقليمي في منطقة الخليج العربي.\n' +
              'وقد ركز المشاركون في الاجتماعات على أهمية وضرورة التعاون والتنسيق والتكامل بين منتجي الصلب لمواجهة التحدي الذي يواجه صناعة الصلب العربي المتمثل في اتجاه مصدري الخامات والمواد الأولية الرئيسية اللازمة لهذه الصناعة إلى رفع أسعار الخامات والمستلزمات بنسب مرتفعة، مما أدى إلى زيادة كبيرة في تكلفة الإنتاج. وأكد رئيس مجلس إدارة الاتحاد العربي للحديد والصلب على ضرورة تكثيف أعمال البحث والتطوير على أسس علمية واقتصادية لزيادة الاعتماد قدر الإمكان على الخامات المحلية، وتطوير تكنولوجيا الإنتاج بما يسهم في خفض تكلفة الإنتاج.\n' +
              'كما ناقش المجتمعون أهمية مشروعات التوافق البيئي وخفض الانبعاثات وترشيد استهلاك الطاقة، ووضع ذلك في برامج التوسع المستقبلية لهذه الصناعة في المنطقة.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2013-05-19'),
          end_on: new Date('2013-05-20'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2013-05-30'),
          level: { connect: { id: 4 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2014-11-11'),
          end_on: new Date('2014-11-12'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2014-11-04'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب',
            excerpt: 'الاتحاد العربي للصناعات الهندسية يشارك كمراقب في اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب الذي عقد بالتزامن مع قمة الصلب، والذي أبرز تأثر القطاع بالإغراق وبأسعار الطاقة والنفط.',
            content: 'بدعوة من الاتحاد العربي للحديد والصلب، حضر أ.محمد دعبول/عضو مجلس إدارة الاتحاد العربي للصناعات الهندسية اجتماع مجلس الإدارة الدوري رقم /110/.تمت مناقشة واقع الصناعة بشكل عام في الوطن العربي وذكر بأن هنالك تباطؤ في زيادة الانتاج خاصة بعد انخفاض أسعار النفط حيث أن الحديد والصلب يرتبط بأسعار النفط بشكل كبير.وناقش المجتمعون بعض المواضيع الهامة لقطاع الحديد والصلب ومن أبرزها حالات الإغراق وأسعار الطاقة التي تؤثر سلباً على القدرة التنافسية.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2014-10-29'),
          level: { connect: { id: 4 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'ورشة عمل التجارة الإلكترونية في الوطن العربي',
            excerpt: 'نظمت الأمانة العامة لمجلس الوحدة الاقتصادية العربية ووزارة الصناعة والتجارة والمشروعات الصغيرة والمتوسطة ورشة العمل التي هدفت لإبراز فوائد التجارة الإلكترونية وأثرها على التجارة العربية من ناحية، إضافة لاستعراض متطلبات تنفيذ تطبيقات التجارة الإلكترونية في الوطن العربي.',
            content: 'شارك م.رءوف كمال/الأمين العام المساعد للاتحاد العربي للصناعات الهندسية في ورشة عمل "التجارة الإلكترونية في الوطن العربي" التي نظمتها الأمانة العامة لمجلس الوحدة الاقتصادية العربية بالتعاون مع وزارة الصناعة والتجارة والمشروعات الصغيرة والمتوسطة بجمهورية مصر العربية.هدفت الورشة لتشجيع ونشر التجارة الإلكترونية من خلال مناقشة فوائدها وأثرها على التجارة العربية، ومن خلال تبادل الخبرات بين الدول العربية حول تحقيق متطلبات تنفيذ تطبيقات التجارة الإلكترونية في الوطن العربي.',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2014-10-15'),
          end_on: new Date('2014-10-16'),
          level: { connect: { id: 4 } },
          classification: { connect: { id: 4 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
          },
          {
            title: 'المؤتمر العاشر لمصنعي الكابلات العرب ',
            excerpt: 'في مؤتمره العاشر "عرب كاب 2014" الذي نظم برعاية وزير الصناعة والتجارة في جمهورية مصر العربية استضاف تجمع مصنعي الكابلات العرب المنبثق عن الإتحاد مايقارب /40/ شركة من منتجي الكابلات ومورديهم إضافة لمركزي أبحاث Societe General Cross Asset Research وInteger Research Ltd..',
            content: 'في مؤتمره العاشر "عرب كاب 2014" الذي نظم برعاية وزير الصناعة والتجارة في جمهورية مصر العربية استضاف تجمع مصنعي الكابلات العرب المنبثق عن الإتحاد مايقارب /40/ شركة من منتجي الكابلات ومورديهم إضافة لمركزي أبحاث Societe General Cross Asset Research وInteger Research Ltd..عقد المؤتمر العاشر لتجمع الكابلات في مدينة أسوان بجمهورية مصر العربية وركز على أهمية النقل في الوطن العربي لتنمية التجارة البينية.إلى جانب مناقشة المسائل والعوائق التي تواجه مصنعي الكابلات في المنطقة فقد استضاف المؤتمر متحدثين في مجال صناعة الكابلات والصناعات المغذية، وفي مجال النقل والتنمية الاقتصادية.\n' +
              'وعلى هامش المؤتمر كانت هناك زيارات لمواقع أثرية في أسوان.\n' +
              'لمزيد من المعلومات، يرجى زيارة موقع تجمع الكابلات العرب\n',
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2014-10-13'),
          end_on: new Date('2014-10-15'),
          level: { connect: { id: 4 } },
          classification: { connect: { id: 1 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);

  result = await (new PClient()).getInstance().post.create(
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
            locale_id: 'en-US'
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
            locale_id: 'ar-SY'
          }
        ]
      },
      activity: {
        create: {
          started_on: new Date('2014-11-14'),
          end_on: new Date('2014-11-15'),
          level: { connect: { id: 2 } },
          classification: { connect: { id: 2 } }
        }
      },
      user_post_created_byTouser: { connect: { user_login: 'admin' } },
      type: { connect: { name: 'normal' } },
      category: { connect: { slug: 'activity' } }
    }
  }
  );
  console.log(result);
}; 
