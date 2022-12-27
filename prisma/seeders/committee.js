import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().post.create({
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
            locale_id: "en-US"
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
            locale_id: "en-US"
          },
          {
            title: "لجنة الشباب الصناعي",
            excerpt: `ضم "لقاء الشباب الصناعيين العرب" جيل الصف الثاني في الشركات الأعضاء الذين سيشغلون المناصب القيادية في المستقبل. كانت الغاية هي خلق صلات للشباب مع الجيل المؤسس في الاتحاد استعداداً لتحملهم مسؤوليات تطوير الاتحاد. بنتيجة اللقاء، تم تشكيل "لجنة دائمة للشباب الصناعيين" تحت مظلة الاتحاد.`,
            content: `تكررت دعوة الشباب الصناعي (الجيل الثاني من أبناء أصحاب الشركات الأعضاء في الإتحاد أو الصف الثاني من المديرين) إلى اجتماعات الاتحاد منذ عام 2006 بهدف إتاحة الفرصة لهم للتعرف على أفكار الجيل المؤسس، وكانت فكرة ضرورة إشراكهم في العمل العام تنضج إلى أن قدم المرحوم م.عبد الهادي عبد المنعم (رئيس مجلس الإدارة في الفترة 2009-2011) اقتراحه بتنظيم هذا العمل بشكل مؤسسي في إطار الاتحاد وذلك بهدف تشبيك جيل الشباب وتعميق التعاون فيما بينهم للمساعدة في إعداد جيل يؤمن بالتعاون العربي ويساعد الجيل الحالي في نقل التطور والمستجدات في العمل الصناعي واستعداداً لتحمل مسؤولية الاتحاد بمفاهيمه المستجدة.
  وفي تشرين الأول/اكتوبر 2009 تم تنظيم "لقاء الشباب الصناعيين العرب" الذي شارك فيه جيل الصف الثاني في الشركات الأعضاء والذين سيشغلون المناصب القيادية في المستقبل. كانت الغاية هي خلق صلات للشباب مع الجيل المؤسس في الاتحاد استعداداً لتحملهم مسؤوليات تطوير الاتحاد بما يتلاءم مع أفكارهم ومستجدات عصرهم.
  بنتيجة اللقاء، تم تشكيل "لجنة دائمة للشباب الصناعيين" يمثل فيها جميع الدول العربية (إن أمكن ذلك) على أن تقوم اللجنة بإعداد مقترحاتها بشأن آليات العمل والارتباط بالاتحاد.
  يمكنكم الاطلاع على نشاطات اللجنة التالية:\n-    اجتماع لجنة الشباب الصناعي في دمشق/سورية بتاريخ 6/3/2010\n-    اجتماع لجنة الشباب الصناعي في بيروت/لبنان بتاريخ 2/7/2010`,
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
