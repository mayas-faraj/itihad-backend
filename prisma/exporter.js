let data=[
{"slug":"afei-bod-&-general-assembly-meetings","description":"MEETINGS ARE POSTPONED","button_link":"arabengineeringindustries.org\/view\/Anouncements\/viewAnnounceDetails.php?id=30","started_on":"2012-06-06","end_on":"0000-00-00"},
{"slug":"arab-iron-and-steel-union-meeting","description":"AFEI as an observer to the AISU meeting of the BOD","button_link":"","started_on":"2012-05-15","end_on":"0000-00-00"},
{"slug":"arab-turkish-industrial-cooperation-conf.","description":"AIDMO organizes the conference in Libya on 7-8\/5\/2012.","button_link":"","started_on":"2012-05-07","end_on":"0000-00-00"},
{"slug":"caeu-meeting-#94","description":"The Council of Arab Economic Unity is holding its meeting #94 at Marriott hotel in Cairo, and organizing a conference \"The economic impact of Arab spring on the stock markets\" in cooperation with the Arab Federation of Financial Analysts.","button_link":"","started_on":"2012-06-07","end_on":"0000-00-00"},
{"slug":"istanbul-chamber-of-commerce-delegation","description":"A meeting amongst a delegation of businessmen in Turkey with interested Egyptian businessmen at Hilton Hotel in Cairo","button_link":"http:\/\/www.face2face-event.com","started_on":"2012-08-27","end_on":"2012-08-27"},
{"slug":"strategic-management-for-total-quality-workshop","description":"A training workshop in Istanbul on 23-27\/9\/2012 organized by the Arab House for Administrative Development (AHAD)","button_link":"http:\/\/www.arabhous.org\/werash_details.php?program=133&arch=yes","started_on":"2012-09-23","end_on":"0000-00-00"},
{"slug":"1st-arab-forum-on:-strategic-planning-for-the-development-of-organizational-performance","description":"Arab House for Administrative Development organizes the forum in Sharm Elsheikh on 16-20\/9\/2012","button_link":"http:\/\/www.arabhous.org\/conference_details.php?werash=11&arch=yes","started_on":"2012-09-16","end_on":"2012-09-16"},
{"slug":"int'l-exhibition-for-industries-and-production-supplement","description":"The exhibition is organized in Tripoli, Libya on 1-4\/10\/2012 under the patronage of the Ministry of Industry in Libya","button_link":"http:\/\/libyaindustries.com\/en\/","started_on":"2012-10-01","end_on":"2012-10-01"},
{"slug":"annual-meeting-of-the-arab-sectoral-federations-no.-42","description":"The meeting presented studies and proposals that were submitted from the federations in the field of quality, maritime transportation, and technology innovation. The General Secretarial of the Arab Council for Economic Unity also presented a unified bylaw for the Arab sectoral federations","button_link":"","started_on":"2014-11-11","end_on":"0000-00-00"},
{"slug":"afei-bod-meeting","description":"AFEI BOD is conducting its meeting in Khartoum on 6 Dec. 2015 to get updates on the situation of different member companies and agree on the date and agenda for the General Assembly meeting.","button_link":"","started_on":"2015-12-06","end_on":"2015-12-06"},
{"slug":"sectoral-arab-federations-meeting","description":"The meeting is taking place in Khartoum on 7 Dec. 2015","button_link":"","started_on":"2015-12-07","end_on":"2015-12-07"}
];

let dataEn=[
{"title":"AFEI BOD & General Assembly meetings","excerpt":"MEETINGS ARE POSTPONED","button_text":"read more"},
{"title":"Arab Iron and Steel Union meeting","excerpt":"AFEI as an observer to the AISU meeting of the BOD","button_text":"read more"},
{"title":"Arab-Turkish Industrial Cooperation Conf.","excerpt":"AIDMO organizes the conference in Libya on 7-8\/5\/2012.","button_text":"read more"},
{"title":"CAEU meeting #94","excerpt":"The Council of Arab Economic Unity is holding its meeting #94 at Marriott hotel in Cairo, and organizing a conference \"The economic impact of Arab spring on the stock markets\" in cooperation with the Arab Federation of Financial Analysts.","button_text":"read more"},
{"title":"Istanbul Chamber of Commerce Delegation","excerpt":"A meeting amongst a delegation of businessmen in Turkey with interested Egyptian businessmen at Hilton Hotel in Cairo","button_text":"read more"},
{"title":"Strategic Management for Total Quality Workshop","excerpt":"A training workshop in Istanbul on 23-27\/9\/2012 organized by the Arab House for Administrative Development (AHAD)","button_text":"read more"},
{"title":"1st Arab Forum on: Strategic Planning for the development of organizational performance","excerpt":"Arab House for Administrative Development organizes the forum in Sharm Elsheikh on 16-20\/9\/2012","button_text":"read more"},
{"title":"Int'l Exhibition for Industries and Production Supplement","excerpt":"The exhibition is organized in Tripoli, Libya on 1-4\/10\/2012 under the patronage of the Ministry of Industry in Libya","button_text":"read more"},
{"title":"Annual meeting of the Arab Sectoral Federations no. 42","excerpt":"The meeting presented studies and proposals that were submitted from the federations in the field of quality, maritime transportation, and technology innovation. The General Secretarial of the Arab Council for Economic Unity also presented a unified bylaw for the Arab sectoral federations","button_text":"read more"},
{"title":"AFEI BOD Meeting","excerpt":"AFEI BOD is conducting its meeting in Khartoum on 6 Dec. 2015 to get updates on the situation of different member companies and agree on the date and agenda for the General Assembly meeting.","button_text":"read more"},
{"title":"Sectoral Arab Federations meeting","excerpt":"The meeting is taking place in Khartoum on 7 Dec. 2015","button_text":"read more"}
];

let dataAr=[
{"title":"اجتماعات مجلس الإدارة والجمعية العمومية","excerpt":"تم تأجيل الاجتماعات","button_text":"قراءة المزيد"},
{"title":"اجتماع مجلس إدارة الاتحاد العربي للحديد والصلب","excerpt":"<p>يشارك ممثل الاتحاد العربي للصناعات الهندسية كعضو مراقب في الاجتماع<\/p>","button_text":"قراءة المزيد"},
{"title":"مؤتمر التعاون الصناعي العربي التركي","excerpt":"تعقد المنظمة العربية للتنمية الصناعية والتعدين المؤتمر في طرابلس\/ليبيا خلال الفترة 7-8 \/ 5 \/ 2012","button_text":"قراءة المزيد"},
{"title":"اجتماع مجلس الوحدة الاقتصادية العربية رقم 94","excerpt":"يعقد مجلس الوحدة الاقتصادية العربية الاجتماع الوزاري للدورة العادية #94 في فندق ماريوت بالقاهرة. كما ينظم بالتعاون مع الاتحاد العربي للمحللين الماليين مؤتمر \"الأثر الاقتصادي لثورات الربيع العربي على أسواق المال\".","button_text":"قراءة المزيد"},
{"title":"وفد غرفة تجارة اسطنبول","excerpt":"لقاء وفد من رجال الأعمال في تركيا مع رجال الأعمال المصريين الراغبين بالتعاون مع تركيا في فندق هلتون رمسيس بالقاهرة","button_text":"قراءة المزيد"},
{"title":"ورشة عمل الإدارة الاستراتيجية للجودة الشاملة","excerpt":"ورشة عمل تدريبية في اسطنبول خلال الفترة 23-27\/9\/2012 تنظمها الدار العربية للتنمية الإدارية","button_text":"قراءة المزيد"},
{"title":"الملتقى العربي الأول حول التخطيط الاستراتيجي لتطوير أداء المؤسسات","excerpt":"تنظم الدار العربية للتنمية الإدارية الملتقى في شرم الشيخ خلال الفترة 16-20\/9\/2012","button_text":"قراءة المزيد"},
{"title":"المعرض الدولي للصناعات ومستلزمات الإنتاج","excerpt":"يقام المعرض في طرابلس، ليبيا خلال الفترة 1-4\/10\/2012 تحت رعاية وزارة الصناعة الليبية","button_text":"قراءة المزيد"},
{"title":"الاجتماع الدوري \/42\/ للاتحادات العربية النوعية المتخصصة","excerpt":"استعرض الاجتماع الدوري الثاني والأربعين للاتحادات العربية النوعية التخصصية الذي عقد بحضور رؤساء وأمناء الاتحادات العربية النوعية التخصصية ورجال وسيدات الأعمال دراسات ومقترحات واردة من الاتحادات في مجال الجودة والربط البحري والإبداع التكنولوجي كما قدمت الأمانة العامة للمجلس مذكرة حول النظام الأساسي للاتحادات العربية النوعية المتخصصة","button_text":"قراءة المزيد"},
{"title":"اجتماع مجلس إدارة الاتحاد","excerpt":"يعقد مجلس إدارة الاتحاد العربي للصناعات الهندسية اجتماعه في الخرطوم بتاريخ 6 كانون الأول\/ديسمبر 2015 للاطلاع على أحوال الشركات الأعضاء والاتفاق على موعد وأجندة اجتماع هيأته العامة.","button_text":"قراءة المزيد"},
{"title":"اجتماع الاتحادات العربية النوعية المتخصصة","excerpt":"يعقد الاجتماع في الخرطوم بتاريخ 7 كانون الأول\/ديسمبر 2015","button_text":"قراءة المزيد"}
];

for(let i=0; i<data.length; i++) {
  data[i].locale_event={
    create: [
      {...dataEn[i], locale: { connect: { name: 'en-US'}}}, 
      {...dataAr[i], locale: { connect: { name: 'ar-SY'}}}
    ]
  };

  data[i].event={
    create: {
      started_on: data[i].started_on,
      end_on: data[i].end_on,
    }
  };

  data[i].user_post_created_byTouser= {
    connect: {
      user_login: "admin"
    }
  };

  data[i].type={
    connect: {
      name: "normal"
    }
  };

  data[i].category={
    connect: {
      slug: "event"
    }
  };

  delete data[i].started_on;
  delete data[i].end_on;

  console.log("result = prismaClient.event.create(");
  console.dir({data: data[i]}, { depth: null });
  console.log(");");
  console.log("console.log(result);");
  console.log();
}


