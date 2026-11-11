(function () {
  "use strict";

  const CORE_T = Object.freeze({
    "بازرگانی مهاجر — صادرات مواد غذایی":"Mohajer Trading Group — Food Exports",
    "بازرگانی مهاجر":"Mohajer Trading Group",
    "خانه":"Home","محصولات":"Products","دپارتمان‌ها":"Departments","درباره ما":"About Us","تماس":"Contact",
    "استعلام قیمت":"Request a Quote","فارسی":"Persian","فعال":"Active","در دسترس":"Available",
    "العربية":"Arabic","به‌زودی":"Coming Soon",
    "از مزرعه تا سفره جهان":"From Farm to Tables Around the World",
    "صادرات مواد غذایی":"Food Exports","با کیفیت":"with Quality","جهانی":"Global",
    "تأمین و صادرات انواع مواد غذایی سالم و باکیفیت":"Supplying and exporting a wide range of healthy, high-quality food products",
    "به بازارهای بین‌المللی":"to international markets","با کیفیت جهانی":"with world-class quality",
    "مشاهده محصولات":"Explore Products","درخواست مشاوره":"Request a Consultation","درخواست قیمت":"Request a Quote",
    "تنوعی از طعم و کیفیت":"A Variety of Flavors, A Standard of Quality","دسته‌بندی محصولات":"Product Categories",
    "۹ گروه":"9 Categories","محصولات غذایی":"Food Products","مشاهده همه محصولات":"View All Products",
    "ماکارونی":"Pasta","خمیرمایه":"Yeast","کنسروجات":"Canned Foods","گلوکز و نشاسته":"Glucose & Starch",
    "نوشیدنی‌ها":"Beverages","رب گوجه‌فرنگی":"Tomato Paste","شکر":"Sugar","شیر خشک":"Milk Powder","جوش شیرین":"Baking Soda",
    "فیلتر محصولات":"Filter Products","پاک کردن همه":"Clear All","دسته‌بندی محصول":"Product Category",
    "غذا و نوشیدنی":"Food & Beverages","لبنیات":"Dairy","پخت و نانوایی":"Baking & Bakery",
    "مواد اولیه":"Ingredients","کالای مصرفی":"Consumer Goods","سایر":"Other","زیر دسته":"Subcategory",
    "رب گوجه":"Tomato","شیرین‌کننده‌ها":"Sweeteners","روغن و چربی":"Oils & Fats",
    "مراقبت شخصی":"Personal Care","خانگی":"Household","جزئیات محصول":"Product Details",
    "نوشیدنی‌ها و آبمیوه‌ها":"Beverages & Juices",
    "تازگی و کیفیت برای بازارهای جهانی":"Freshness and Quality for Global Markets",
    "کنسروها":"Canned Foods","محصولات کنسروی باکیفیت برای بازار جهانی":"High-quality canned products for global markets",
    "شکر سفید و فله برای صنایع غذایی و صادرات":"White and bulk sugar for food industries and export",
    "طعمی غنی و کیفیتی برتر برای بازار جهانی":"Rich Flavor and Superior Quality for Global Markets",
    "مواد اولیه ممتاز برای صنایع غذایی":"Premium Ingredients for the Food Industry",
    "گلوکز و نشاسته ذرت و گندم برای صنایع غذایی":"Corn and wheat glucose and starch for the food industry",
    "لبنیات و شیر خشک":"Dairy & Milk Powder","مواد اولیه لبنی ممتاز برای بازار جهانی":"Premium dairy ingredients for global markets",
    "ماکارونی و پاستا":"Pasta & Noodles","محصولات پاستا باکیفیت برای بازار جهانی":"High-quality pasta products for global markets",
    "۱۵+":"15+","سال اعتماد":"Years of Trust","درباره بازرگانی مهاجر":"About Mohajer Trading Group",
    "ریشه در ایران،":"Rooted in Iran,","اعتماد در سراسر جهان.":"Trusted Worldwide.",
    "بازرگانی مهاجر تولیدکنندگان ممتاز ایرانی را با خریداران در سراسر جهان پیوند می‌دهد. از تأمین و کنترل کیفیت تا مستندات و لجستیک — ما تمامی زنجیره صادرات را مدیریت می‌کنیم تا شرکای تجاری ما روی رشد کسب‌وکارشان تمرکز کنند.":"Mohajer Trading Group connects leading Iranian producers with buyers around the world. From sourcing and quality control to documentation and logistics, we manage the entire export chain so our partners can focus on growing their businesses.",
    "تأمین معتبر":"Reliable Sourcing","همکاری مستقیم با تولیدکنندگان مورد اعتماد ایرانی.":"Direct partnerships with trusted Iranian producers.",
    "تضمین کیفیت":"Quality Assurance","هر محموله پیش از خروج از انبار بازرسی می‌شود.":"Every shipment is inspected before leaving the warehouse.",
    "لجستیک جهانی":"Global Logistics","ارسال و مستندسازی مطمئن به بیش از ۵۰ کشور.":"Reliable shipping and documentation to more than 50 countries.",
    "پشتیبانی اختصاصی":"Dedicated Support","تیم صادرات ۲۴/۷ آماده کمک به شما در هر مرحله.":"Our export team is ready to assist you at every step, 24/7.",
    "تجارت مطمئن، از مبدأ تا مقصد":"Reliable Trade, from Origin to Destination",
    "ما با تکیه بر شبکه تأمین‌کنندگان معتبر، کنترل دقیق کیفیت و مدیریت زنجیره صادرات، همراه مطمئن شما در تجارت بین‌المللی هستیم.":"With a trusted supplier network, rigorous quality control and export-chain management, we are your reliable partner in international trade.",
    "در تمامی محصولات":"Across Our Products","بازارهای جهانی":"Global Markets",
    "صادرات به مقاصد بین‌المللی":"Exports to International Destinations","تجربه صادرات":"Export Experience",
    "سال‌ها فعالیت در تجارت بین‌المللی":"Years of Experience in International Trade",
    "همکاری مطمئن":"Trusted Partnerships","با شرکای معتبر و تولیدکنندگان":"With Trusted Partners and Producers",
    "همکاری با ما":"Work With Us",
    "محصولات غذایی ممتاز ایرانی، با دقت انتخاب و برای تجارت بین‌المللی مطمئن آماده می‌شوند.":"Premium Iranian food products, carefully selected and prepared for reliable international trade.",
    "شرکت":"Company","داستان ما":"Our Story","خدمات مشتریان":"Customer Services",
    "پشتیبانی صادرات":"Export Support","ارسال و تحویل":"Shipping & Delivery","سوالات متداول":"Frequently Asked Questions",
    "تماس با ما":"Contact Us","محمد مهاجری":"Mohammad Mohajeri","علیرضا تهرانی":"Alireza Tehrani",
    "تلفن ثابت دفتر":"Office Landline","ایمیل رسمی":"Official Email","شبکه‌های اجتماعی":"Social Media",
    "© ۱۴۰۴ بازرگانی مهاجر — تمامی حقوق محفوظ است.":"© 2025 Mohajer Trading Group — All Rights Reserved.",
    "طراحی و توسعه اختصاصی":"Custom Design & Development",
    "منوی اصلی":"Main Menu","بستن منو":"Close Menu",
    "استعلام قیمت؛ انتقال به فرم تماس":"Request a Quote; opens the contact form",
    "صادرات مواد غذایی با کیفیت جهانی":"High-Quality Food Exports"
  });

  const EXTRA_T = Object.freeze({
    "درباره ما | تاریخچه گروه بازرگانی مهاجر":"About Us | The History of Mohajer Trading Group",
    "درباره گروه بین‌المللی بازرگانی مهاجر":"About Mohajer International Trading Group",
    "ساخته‌شده بر پایه":"Built on","تجربه":"Experience","؛ پیش‌رو با":"; Moving Forward with","اعتماد":"Trust",
    "با بیش از هفت دهه سابقه در تجارت و صادرات، گروه بین‌المللی بازرگانی مهاجر از مجموعه‌های باسابقه خراسان رضوی است که با تکیه بر اعتماد شرکای تجاری، مسیر همکاری با بازارهای جهانی را گسترش داده است.":"With more than seven decades of experience in trade and exports, Mohajer International Trading Group is one of the established business groups in Razavi Khorasan. Built on the trust of its business partners, the Group continues to expand its cooperation with global markets.",
    "در بخش مواد غذایی، تمرکز ما بر تأمین محصولات ایرانی، کنترل کیفیت و هماهنگی صادرات برای مشتریان و شرکای تجاری بین‌المللی است؛ مسیری که بر تجربه نسل‌های مختلف این خانواده تجاری استوار شده است.":"In the food division, we focus on sourcing Iranian products, quality control, and coordinating exports for international customers and business partners. This work builds on the experience of successive generations of the Mohajer business family.",
    "نسل‌های تجربه و اعتماد":"Generations of Experience and Trust","بنیان‌گذاران و ادامه‌دهندگان مسیر":"Our Founders and Those Who Carried the Vision Forward",
    "داستان بازرگانی مهاجر، روایت تلاش و تجربه چند نسل در تجارت داخلی و بین‌المللی است.":"The story of Mohajer Trading Group reflects the dedication and experience of several generations in domestic and international trade.",
    "بنیان‌گذار مجموعه":"Founder","مرحوم حاج قاسم مهاجری خراسانی":"The Late Hajj Ghasem Mohajeri Khorasani",
    "بنیان‌گذار گروه بین‌المللی بازرگانی مهاجر":"Founder of Mohajer International Trading Group",
    "ریشه فعالیت‌های تجاری این مجموعه به سال ۱۳۳۰ بازمی‌گردد؛ زمانی که مرحوم حاج قاسم مهاجری خراسانی فعالیت خود را در حوزه تجارت داخلی محصولات چرمی و کراس آغاز نمودند. ایشان با تکیه بر تجربه، دانش بازار و اصول حرفه‌ای تجارت، پایه‌های یک کسب‌وکار پایدار و موفق را بنا نهادند.":"The Group’s commercial roots date back to 1330 in the Iranian calendar, when the late Hajj Ghasem Mohajeri Khorasani began trading leather products and related goods within Iran. Drawing on his experience, market knowledge, and professional business principles, he laid the foundations for a lasting and successful enterprise.",
    "ادامه مسیر و توسعه صادرات":"Continuing the Journey and Expanding Exports","جناب آقای هاشم مهاجری خراسانی":"Mr. Hashem Mohajeri Khorasani",
    "مدیرعامل گروه بین‌المللی بازرگانی مهاجر":"Managing Director of Mohajer International Trading Group",
    "در ادامه این مسیر و از سال ۱۳۷۴، جناب آقای هاشم مهاجری خراسانی با بهره‌گیری از تجربیات ارزشمند گذشته، فعالیت‌های صادراتی مجموعه را به‌صورت تخصصی در حوزه‌هایی همچون مواد غذایی توسعه دادند و دامنه حضور ما را به بازارهای بین‌المللی گسترش دادند.":"Building on this legacy, Mr. Hashem Mohajeri Khorasani expanded the Group’s export operations from 1374 in the Iranian calendar, drawing on the experience of previous generations and developing specialist activity in areas such as food products. This work broadened the Group’s presence in international markets.",
    "OUR JOURNEY | مسیر توسعه":"OUR JOURNEY | Our Growth","تاریخچه‌ای از رشد و تعهد":"A History of Growth and Commitment",
    "از نخستین گام‌های تجارت داخلی تا توسعه صادرات محصولات غذایی و حضور در بازارهای بین‌المللی.":"From the first steps in domestic trade to food exports and a presence in international markets.",
    "آغاز فعالیت":"The Beginning","ورود به تجارت بین‌المللی":"Entering International Trade",
    "در سال ۱۳۶۶، این مجموعه وارد عرصه تجارت بین‌المللی شد و صادرات محصولات کراس و ویت‌بلو را به کشورهای ترکیه و ایتالیا آغاز کرد. این گام مهم، نقطه عطفی در توسعه فعالیت‌های بازرگانی مجموعه و ورود به بازارهای جهانی به شمار می‌آید.":"In 1366 in the Iranian calendar, the Group entered international trade and began exporting Kras and Vit-Blue products to Türkiye and Italy. This important step marked a turning point in the development of its commercial activities and its entry into global markets.",
    "توسعه صادرات با محوریت مواد غذایی":"Expanding Exports with a Focus on Food Products",
    "در ادامه این مسیر و از سال ۱۳۷۴، جناب هاشم مهاجری خراسانی با بهره‌گیری از تجربیات ارزشمند گذشته، فعالیت‌های صادراتی مجموعه را به‌صورت تخصصی در حوزه‌هایی همچون مواد غذایی توسعه دادند. در این دوره، دامنه صادرات به کشورهای متعددی از جمله افغانستان، پاکستان، ترکمنستان، تاجیکستان، قزاقستان، قرقیزستان، روسیه، امارات، ترکیه، لبنان، عراق، کانادا، انگلستان، آلمان و سومالی گسترش یافت.":"From 1374 in the Iranian calendar, Mr. Hashem Mohajeri Khorasani built on the Group’s experience and expanded its export operations, with a specialist focus on sectors such as food products. During this period, exports reached Afghanistan, Pakistan, Turkmenistan, Tajikistan, Kazakhstan, Kyrgyzstan, Russia, the United Arab Emirates, Türkiye, Lebanon, Iraq, Canada, the United Kingdom, Germany, and Somalia.",
    "توسعه در حوزه کالاهای راهبردی":"Expansion into Strategic Commodities",
    "از سال ۱۳۹۷ و همگام با نیازهای روز بازارهای جهانی، فعالیت‌های شرکت در حوزه کالاهای راهبردی توسعه یافت و صادرات محصولات فولادی و پتروشیمی نیز به سبد فعالیت‌های مجموعه افزوده شد. این رویکرد، زمینه رشد پایدار و حضور گسترده‌تر در بازارهای بین‌المللی را فراهم ساخت.":"From 1397 in the Iranian calendar, in response to the evolving needs of global markets, the Group expanded into strategic commodities and added steel and petrochemical products to its export portfolio. This approach supported sustainable growth and a broader international presence.",
    "امروز و آینده":"Today and Tomorrow",
    "امروز این مجموعه با بیش از هفت دهه سابقه در تجارت و چندین دهه تجربه موفق در صادرات، به عنوان یکی از صادرکنندگان برتر استان خراسان رضوی شناخته می‌شود و با تکیه بر اصول حرفه‌ای، کیفیت، تعهد و اعتماد متقابل، همکاری‌های تجاری خود را در سطح جهانی ادامه می‌دهد.":"Today, with more than seven decades in trade and decades of successful export experience, the Group is recognized as one of the leading exporters in Razavi Khorasan Province. It continues to build global business relationships on professionalism, quality, commitment, and mutual trust.",
    "تجربه دیروز، فرصت‌های صادراتی امروز":"Yesterday’s Experience, Today’s Export Opportunities",
    "برای تأمین محصولات غذایی ایرانی و آغاز همکاری صادراتی، با تیم بازرگانی مهاجر در ارتباط باشید.":"Contact Mohajer Trading Group to source Iranian food products and explore an export partnership.",
    "ارتباط با کارشناسان":"Talk to Our Specialists",
    "تماس با ما | بازرگانی مهاجر":"Contact Us | Mohajer Trading Group","با ما در":"Stay in","ارتباط":"Touch","باشید":"with Us",
    "ما آماده همکاری با شما در زمینه صادرات و تأمین محصولات غذایی با کیفیت به سراسر جهان هستیم.":"We are ready to work with you to source and export high-quality food products to markets around the world.",
    "ارسال پیام به ما":"Send Us a Message","مشخصات و پیام خود را بنویسید تا ایمیل شما برای ارسال به تیم ما آماده شود.":"Enter your details and message. A pre-addressed email will be prepared for you to send to our team.",
    "ارسال پیام":"Send Message","پس از ثبت فرم، برنامه ایمیل شما برای ارسال درخواست باز می‌شود.":"After you submit the form, your email application will open so you can send your inquiry.",
    "دریافت کاتالوگ محصولات":"Get the Product Catalogue","دانلود نسخه فارسی و انگلیسی":"Download the Persian and English Editions",
    "آدرس دفتر مرکزی":"Head Office Address","مشهد، میدان جانباز":"Janbaz Square, Mashhad","پاژ اداری ۲، طبقه ۳، واحد ۳۱۳":"Pajh Office Complex 2, 3rd Floor, Unit 313",
    "ساعات کاری":"Business Hours","شنبه تا پنج‌شنبه":"Saturday to Thursday","۸:۰۰ تا ۱۷:۰۰":"8:00 a.m. to 5:00 p.m.",
    "نمایش موقعیت دقیق در گوگل‌مپ":"View the Exact Location on Google Maps","تصویر شرکت":"Company Image","تلفن ثابت دفتر مرکزی":"Head Office Landline",
    "© ۱۴۰۵ بازرگانی مهاجر — تمامی حقوق محفوظ است.":"© 2026 Mohajer Trading Group — All Rights Reserved.",
    "بازگشت به صفحه اصلی":"Back to Home","انتخاب زبان کاتالوگ":"Select Catalogue Language",
    "نسخه موردنظر خود را انتخاب کنید. صفحه کاتالوگ باز می‌شود و می‌توانید آن را چاپ یا به‌صورت PDF ذخیره کنید.":"Choose your preferred edition. The catalogue will open in a new page, where you can print it or save it as a PDF.",
    "دریافت کاتالوگ فارسی":"Get the Persian Catalogue",
    "گروه‌های محصولات":"Product Categories",
    "دپارتمان‌های گروه بازرگانی مهاجر | صنایع غذایی، فولاد و پتروشیمی":"Mohajer Trading Group Departments | Food, Steel & Petrochemicals",
    "سه دپارتمان، یک مسیر جهانی":"Three Divisions, One Global Vision",
    "گروه بازرگانی مهاجر در سه حوزه تخصصی صنایع غذایی، فولاد و پتروشیمی فعالیت دارد. برای آشنایی با هر حوزه، دپارتمان مورد نظر را انتخاب کنید.":"Mohajer Trading Group operates across three specialized sectors: food, steel, and petrochemicals. Select a division to learn more.",
    "صنایع غذایی":"Food Industry","دپارتمان محصولات غذایی":"Food Products Division",
    "تأمین و صادرات مواد غذایی، محصولات بسته‌بندی و مواد اولیه برای بازارهای جهانی.":"Sourcing and exporting food products, packaged goods, and ingredients for global markets.",
    "مشاهده محصولات غذایی":"Explore Food Products","صنایع فولاد":"Steel Industry","فولاد مهاجر مبین":"Mohajer Mobin Steel",
    "بازرگانی و تأمین انواع شمش، میلگرد، ورق و مقاطع فولادی برای پروژه‌های صنعتی.":"Trading and sourcing billets, rebar, sheets, and steel sections for industrial projects.",
    "ورود به سایت فولاد":"Visit the Steel Website","صنایع پتروشیمی":"Petrochemical Industry","دپارتمان پتروشیمی":"Petrochemicals Division",
    "تأمین و تجارت مواد پایه شیمیایی و پلیمری با رویکرد بازارهای صادراتی.":"Sourcing and trading basic chemicals and polymer materials for export markets.",
    "ورود به سایت پتروشیمی":"Visit the Petrochemicals Website",
    "سه حوزه تخصصی، یک تعهد مشترک به تأمین مطمئن و تجارت بین‌المللی":"Three Specialized Sectors, One Shared Commitment to Reliable Sourcing and International Trade",
    "محصولات صادراتی | بازرگانی مهاجر":"Export Products | Mohajer Trading Group","محصولات صادراتی":"Export Products",
    "تأمین مطمئن برای بازار جهانی":"Reliable Sourcing for Global Markets","مجموعه‌ای از محصولات بازرگانی مهاجر برای بازارهای داخلی و صادراتی.":"A selection of Mohajer Trading Group products for domestic and export markets.",
    "طراوت و کیفیت برای بازارهای جهانی":"Freshness and Quality for Global Markets",
    "انواع نوشیدنی و آبمیوه؛ موجودی، ترکیبات و شرایط سفارش پس از استعلام مشخص می‌شود.":"A range of beverages and juices. Availability, ingredients, and order terms are confirmed upon inquiry.",
    "گروه محصولات":"Product Group","گزینه‌های محصولات این دسته با توجه به سفارش و موجودی قابل بررسی هستند.":"Products in this category can be reviewed according to order requirements and availability.",
    "محصول منتخب":"Featured Product","گزینه تأمین":"Supply Option","اطلاعات فنی و ویژگی‌های محصول متناسب با سفارش ارائه می‌شوند.":"Technical details and product characteristics are provided to match order requirements.",
    "تأمین سفارشی":"Custom Supply","آنالیز پس از تأیید":"Analysis Available Upon Confirmation","سفارش عمده":"Bulk Order",
    "اطلاعات و آنالیز محصولات":"Product Information and Analysis",
    "مقادیر آنالیز محصولات این دسته پس از دریافت برگه مشخصات و تأیید تولیدکننده درج خواهند شد.":"Analysis values for products in this category will be published after the manufacturer’s specification sheet has been received and verified.",
    "گرید، ترکیبات، مشخصات فنی و اطلاعات بسته‌بندی پس از دریافت اطلاعات تأییدشده اعلام می‌شوند.":"Grades, composition, technical specifications, and packaging details will be provided once verified information is available.",
    "تأمین برای بازارهای جهانی":"Supply for Global Markets","فهرست برندها و تولیدکنندگان پس از استعلام اعلام می‌شود.":"Brands and manufacturers are identified upon inquiry.",
    "برند قابل استعلام":"Brand Information Available Upon Request",
    "انتخاب زبان":"Select Language","باز کردن منو":"Open Menu","منو":"Menu","بستن منو":"Close Menu",
    "شبکه‌های اجتماعی":"Social Media","گفتگو در واتساپ":"Chat on WhatsApp","واتساپ":"WhatsApp",
    "صفحه اینستاگرام بازرگانی مهاجر":"Mohajer Trading Group on Instagram","اینستاگرام":"Instagram",
    "لینکدین؛ آدرس رسمی هنوز ثبت نشده":"LinkedIn (official page not yet available)","لینکدین — آدرس رسمی مورد نیاز":"LinkedIn (official URL pending)",
    "بازگشت به بالای صفحه":"Back to Top","بازگشت به بالا":"Back to Top",
    "بازرگانی مهاجر — صادرات محصولات غذایی ممتاز ایرانی به بازارهای جهانی":"Mohajer Trading Group — Exporting Premium Iranian Food Products Worldwide",
    "دسترسی سریع به گروه‌های محصولات":"Quick Access to Product Categories","دسترسی سریع به صفحات محصولات":"Quick Access to Product Pages",
    "مشاهده جزئیات yeast-product":"View Yeast Product Details","چهار تصویر محصولات خمیرمایه":"Four Images of Yeast Products",
    "خمیرمایه ایکس پاور":"X-Power Yeast","خمیرمایه نان مایه":"Nan Maye Yeast","بسته‌بندی دوم خمیرمایه ایکس پاور":"X-Power Yeast — Alternate Packaging",
    "خمیرمایه شتاب":"Shetab Yeast","مشاهده جزئیات product":"View Product Details","نوشیدنی رانی و میوه‌های طبیعی":"Rani Beverage and Fresh Fruit",
    "مشاهده جزئیات canned-food-product":"View Canned Foods Details","مشاهده جزئیات sugar-product":"View Sugar Details",
    "شکر سفید تصفیه‌شده و محصولات قندی":"Refined White Sugar and Sugar Products","مشاهده جزئیات tomato-paste-product":"View Tomato Paste Details",
    "مشاهده جزئیات baking-soda-product":"View Baking Soda Details","مشاهده جزئیات glucose-starch-product":"View Glucose and Starch Details",
    "محصولات گلوکز و نشاسته ذرت و گندم":"Corn and Wheat Glucose and Starch Products","مشاهده جزئیات milk-powder-product":"View Milk Powder Details",
    "مشاهده جزئیات pasta-product":"View Pasta Details","آماده‌سازی محصولات غذایی برای صادرات در انبار":"Preparing Food Products for Export at the Warehouse",
    "بررسی کیفیت و بسته‌بندی خمیرمایه":"Yeast Quality and Packaging Inspection",
    "ارسال پیام واتساپ به محمد مهاجری":"Message Mohammad Mohajeri on WhatsApp","واتساپ محمد مهاجری":"Mohammad Mohajeri on WhatsApp",
    "ارسال پیام واتساپ به علیرضا تهرانی":"Message Alireza Tehrani on WhatsApp","واتساپ علیرضا تهرانی":"Alireza Tehrani on WhatsApp",
    "معرفی سه دپارتمان گروه بازرگانی مهاجر در صنایع غذایی، فولاد و پتروشیمی و دسترسی به سایت‌های تخصصی هر بخش.":"Explore Mohajer Trading Group’s three divisions—food, steel, and petrochemicals—and access the dedicated website for each.",
    "مسیر صفحه":"Breadcrumb Navigation","گفتگو درباره محصولات غذایی در واتساپ":"Discuss Food Products on WhatsApp",
    "صنایع غذایی، دپارتمان گروه بازرگانی مهاجر":"Food Division of Mohajer Trading Group",
    "ورود به سایت فولاد (باز شدن در زبانه جدید)":"Visit the Steel Website (opens in a new tab)",
    "صنایع فولاد، دپارتمان گروه بازرگانی مهاجر":"Steel Division of Mohajer Trading Group",
    "ورود به سایت پتروشیمی (باز شدن در زبانه جدید)":"Visit the Petrochemicals Website (opens in a new tab)",
    "صنایع پتروشیمی، دپارتمان گروه بازرگانی مهاجر":"Petrochemicals Division of Mohajer Trading Group",
    "درباره گروه بازرگانی مهاجر؛ آشنایی با بنیان‌گذاران، تاریخچه فعالیت از سال ۱۳۳۰ و مسیر صادرات محصولات غذایی ایرانی به بازارهای جهانی.":"Discover Mohajer Trading Group’s founders, its history dating back to 1330 in the Iranian calendar, and its journey exporting Iranian food products to global markets.",
    "مرحوم حاج قاسم مهاجری خراسانی، بنیان‌گذار گروه بازرگانی مهاجر":"The late Hajj Ghasem Mohajeri Khorasani, founder of Mohajer Trading Group",
    "جناب آقای هاشم مهاجری خراسانی، مدیرعامل گروه بازرگانی مهاجر":"Mr. Hashem Mohajeri Khorasani, Managing Director of Mohajer Trading Group",
    "تماس با شرکت بازرگانی مهاجر - درخواست همکاری صادرات، قیمت و کاتالوگ محصولات غذایی":"Contact Mohajer Trading Group for export partnerships, quotations, and food product catalogues",
    "نام و نام خانوادگی *":"Full Name *","نام و نام خانوادگی":"Full Name","ایمیل *":"Email *","ایمیل":"Email","شماره تماس *":"Phone Number *","شماره تماس":"Phone Number",
    "توضیحات و پیام شما *":"Your Message *","توضیحات و پیام شما":"Your Message","اطلاعات تماس":"Contact Information",
    "دسترسی به کاتالوگ":"Catalogue Access","دریافت کاتالوگ محصولات فارسی و انگلیسی":"Get the Persian and English Product Catalogues",
    "ارسال پیام واتساپ به +98 915 302 8367":"Message us on WhatsApp: +98 915 302 8367",
    "ارسال پیام واتساپ به +98 915 555 1965":"Message us on WhatsApp: +98 915 555 1965",
    "تماس مستقیم با دفتر":"Call the Office Directly","تماس مستقیم":"Call Now","نقشه دفتر مرکزی در مشهد":"Map of the Head Office in Mashhad",
    "تصویر شرکت بازرگانی مهاجر":"Mohajer Trading Group Office Image",
    "معرفی گروه‌های محصولات صادراتی بازرگانی مهاجر":"Explore Mohajer Trading Group’s Export Product Categories",
    "مشاهده مشخصات محصول منتخب":"View Featured Product Specifications","تصویر موقت محصول منتخب":"Placeholder Image for Featured Product",
    "مشاهده مشخصات گزینه تأمین":"View Supply Option Specifications","تصویر موقت گزینه تأمین":"Placeholder Image for Supply Option",
    "مشاهده مشخصات سفارش عمده":"View Bulk Order Specifications","تصویر موقت سفارش عمده":"Placeholder Image for Bulk Order",
    "تصویر محصول این دسته":"Product Image for This Category","دیدن جزئیات و آنالیز نوشیدنی‌ها":"View Beverage Details and Analysis",
    "برندهای محصولات صادراتی":"Export Product Brands","برند تأمین‌کننده در انتظار تأیید":"Supplier Brand Pending Confirmation",
    "لوگوی برند نوشیدنی شماره":"Beverage Brand Logo Number",
    "بازرگانی مهاجر | صادرات محصولات غذایی":"Mohajer Trading Group | Food Exports","بازگشت به صفحه خانه":"Back to Home",
    "مرحله ۱":"Step 1","مرحله ۲":"Step 2","مرحله ۳":"Step 3","مرحله ۴":"Step 4",
    "امروز":"Today","گروه بازرگانی مهاجر":"Mohajer Trading Group","کراس":"Kras",
    "گلوکز | محصولات گلوکز و نشاسته | بازرگانی مهاجر":"Glucose | Glucose and Starch Products | Mohajer Trading Group",
    "گلوکز و نشاسته اکنون در یک صفحه مشترک نمایش داده می‌شوند.":"Glucose and starch are now presented together on one page.",
    "مشاهده صفحه محصولات گلوکز و نشاسته":"View Glucose and Starch Products",
    "نشاسته | محصولات گلوکز و نشاسته | بازرگانی مهاجر":"Starch | Glucose and Starch Products | Mohajer Trading Group",
    "۶/۴۷":"6.47","۰/۲۸":"0.28","۰/۰۱":"0.01","۳۹/۸۳":"39.83","۰/۶۱":"0.61","۰/۰۴":"0.04",
    "ELVEN | کاتالوگ محصولات فارسی":"ELVEN | Persian Product Catalogue",
    "بازگشت به تماس با ما":"Back to Contact Us","ذخیره یا چاپ PDF":"Save or Print as PDF",
    "دانلود فایل کاتالوگ":"Download Catalogue File","کاتالوگ محصولات غذایی":"Food Product Catalogue",
    "معرفی گروه‌های محصولات برای تأمین و همکاری صادراتی. برای اطلاع از برندها، گرید، مشخصات فنی و شرایط سفارش، با تیم فروش در ارتباط باشید.":"An overview of product categories available for sourcing and export partnerships. Contact our sales team for information about brands, grades, technical specifications, and ordering terms.",
    "خمیرمایه مخصوص صنایع نان و شیرینی؛ برند و مشخصات با استعلام.":"Yeast for the baking and confectionery industries; brand and specifications available upon inquiry.",
    "انواع ماکارونی در بسته‌بندی‌های متنوع؛ مشخصات با استعلام.":"A range of pasta in various package formats; specifications available upon inquiry.",
    "رب گوجه‌فرنگی در بسته‌بندی‌های مختلف؛ آنالیز با استعلام.":"Tomato paste in various package formats; analysis details available upon inquiry.",
    "مواد اولیه لبنی و شیر خشک؛ گرید و شرایط تأمین با استعلام.":"Dairy ingredients and milk powder; grades and supply terms available upon inquiry.",
    "انواع نوشیدنی‌های تجاری؛ برند و موجودی با استعلام.":"A range of commercial beverages; brands and availability confirmed upon inquiry.",
    "انواع شکر و برندهای تأمینی؛ شرایط بسته‌بندی با استعلام.":"Various types of sugar and available supply brands; packaging options available upon inquiry.",
    "گروه محصولات کنسروی؛ تنوع و بسته‌بندی با استعلام.":"Canned food products; range and packaging options available upon inquiry.",
    "بی‌کربنات سدیم برای کاربردهای مجاز صنایع غذایی؛ مشخصات با استعلام.":"Sodium bicarbonate for approved food-industry applications; specifications available upon inquiry.",
    "گلوکز و نشاسته بر پایه ذرت یا گندم؛ گرید با استعلام.":"Corn- or wheat-based glucose and starch; grades available upon inquiry.",
    "این کاتالوگ معرفی عمومی گروه‌های محصولات است. مشخصات، موجودی، قیمت، برند و مدارک فنی فقط پس از استعلام و تأیید اعلام می‌شود.":"This catalogue provides a general overview of our product categories. Specifications, availability, prices, brands, and technical documents are provided only after inquiry and confirmation.",
    "درخواست اطلاعات بیشتر":"Request More Information",
    "برای درخواست قیمت، آنالیز و اطلاعات بسته‌بندی، با ما تماس بگیرید.":"Contact us for quotations, analysis reports, and packaging information."

    "مجموعه محصولات بازرگانی مهاجر":"Mohajer Trading Group Product Collection",
    "محصولات صادراتی":"Export Products",
    "تأمین مطمئن برای بازار جهانی":"Reliable Supply for Global Markets",
    "مجموعه‌ای از محصولات بازرگانی مهاجر برای بازارهای داخلی و صادراتی.":"A selection of Mohajer Trading Group products for domestic and export markets.",
    "توجه به":"Focus on",
    "کیفیت محصول":"Product Quality",
    "گزینه‌های":"Options",
    "تأمین":"Supply",
    "مناسب بازار":"Suitable for",
    "صادراتی":"Export Markets",
    "معرفی محصولات":"Product Introduction",
    "مشاهده مجموعه":"Explore the Collection",
    "طراوت و کیفیت برای بازارهای جهانی":"Freshness and Quality for Global Markets",
    "انواع نوشیدنی و آبمیوه؛ موجودی، ترکیبات و شرایط سفارش پس از استعلام مشخص می‌شود.":"A range of beverages and juices. Availability, ingredients and ordering terms are confirmed upon inquiry.",
    "رفتن به بخش محصولات":"Go to Products",
    "مزیت‌های مجموعه":"Our Advantages",
    "محصولات متنوع":"Diverse Products",
    "برای نیازهای مختلف":"For Different Needs",
    "تولیدکنندگان معتبر":"Trusted Manufacturers",
    "توجه به کیفیت":"A Focus on Quality",
    "و مشخصات محصول":"and Product Specifications",
    "راهکارهای عرضه":"Supply Solutions",
    "برای بازار صادراتی":"for Export Markets",
    "محصولات ما":"Our Products",
    "گروه محصولات":"Product Range",
    "گزینه‌های محصولات این دسته با توجه به سفارش و موجودی قابل بررسی هستند.":"Products in this category can be reviewed based on order requirements and availability.",
    "محصول منتخب":"Selected Product",
    "برای دریافت گرید، ترکیبات و شرایط تأمین با ما تماس بگیرید.":"Contact us for grades, ingredients and supply terms.",
    "مشخصات با استعلام":"Specifications on Request",
    "بررسی کیفیت":"Quality Review",
    "گزینه تأمین":"Supply Option",
    "اطلاعات فنی و ویژگی‌های محصول متناسب با سفارش ارائه می‌شوند.":"Technical information and product features are provided according to the order.",
    "تأمین سفارشی":"Custom Supply",
    "آنالیز پس از تأیید":"Analysis Upon Confirmation",
    "سفارش عمده":"Bulk Order",
    "برای آگاهی از مشخصات و شرایط تأمین این محصول استعلام بگیرید.":"Contact us to enquire about this product’s specifications and supply terms.",
    "مشخصات سفارشی":"Custom Specifications",
    "کنترل کیفیت":"Quality Control",
    "تصویر محصول این دسته":"Product Image for This Category",
    "دیدن جزئیات و آنالیز نوشیدنی‌ها":"View Beverage Details and Analysis",
    "دیدن جزئیات":"View Details",
    "اطلاعات فنی محصول":"Product Technical Information",
    "اطلاعات و آنالیز محصولات":"Product Information and Analysis",
    "انرژی":"Energy",
    "در انتظار تأیید":"Pending Confirmation",
    "کربوهیدرات":"Carbohydrates",
    "سدیم":"Sodium",
    "فیبر":"Fibre",
    "چربی":"Fat",
    "مقادیر آنالیز محصولات این دسته پس از دریافت برگه مشخصات و تأیید تولیدکننده درج خواهند شد.":"Analysis values for this category will be published after receiving the specification sheet and confirmation from the manufacturer.",
    "معرفی و اطلاعات محصول انتخاب‌شده":"Selected Product Overview and Information",
    "گرید، ترکیبات، مشخصات فنی و اطلاعات بسته‌بندی پس از دریافت اطلاعات تأییدشده اعلام می‌شوند.":"Grade, ingredients, technical specifications and packaging details will be provided once verified information is received.",
    "برندهای محصولات صادراتی":"Export Product Brands",
    "برندهای قابل تأمین":"Available Brands",
    "تأمین برای بازارهای جهانی":"Supply for Global Markets",
    "فهرست برندها و تولیدکنندگان پس از استعلام اعلام می‌شود.":"The list of brands and manufacturers is available upon inquiry.",
    "برند تأمین‌کننده در انتظار تأیید":"Supplier Brand Pending Confirmation",
    "برند قابل استعلام":"Brand Available Upon Inquiry",
    "برند نوشیدنی شماره 1":"Beverage Brand 1",
    "برند نوشیدنی شماره 2":"Beverage Brand 2",
    "برند نوشیدنی شماره 3":"Beverage Brand 3",
    "برند نوشیدنی شماره 4":"Beverage Brand 4",
    "برند نوشیدنی شماره 5":"Beverage Brand 5",
    "برند نوشیدنی شماره 6":"Beverage Brand 6"

  });
  const T = Object.freeze(Object.assign({}, window.ElvenEnglishProductTranslations || {}, CORE_T, EXTRA_T));

  const norm = value => String(value || "").replace(/\s+/g, " ").trim();
  const latinDigits = value => String(value).replace(/[۰-۹]/g, digit => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit));
  let currentLocale = "fa";
  let originalTexts = new WeakMap();
  let translatedTexts = new WeakMap();
  let originalAttributes = new WeakMap();
  let translatedAttributes = new WeakMap();

  function translateText(node) {
    const raw = node.nodeValue || "";
    const key = norm(raw);
    if (!key || !node.parentElement || node.parentElement.closest("script,style,noscript,template,.language-picker")) return;

    let translated = Object.prototype.hasOwnProperty.call(T, key) ? T[key] : latinDigits(key);
    if (translated === key) return;
    const leading = raw.match(/^\s*/)?.[0] || "";
    const trailing = raw.match(/\s*$/)?.[0] || "";
    const next = leading + translated + trailing;
    if (next === raw) return;

    if (!originalTexts.has(node)) originalTexts.set(node, raw);
    else if (raw !== translatedTexts.get(node)) originalTexts.set(node, raw);
    translatedTexts.set(node, next);
    node.nodeValue = next;
  }

  function translateAttributes(root) {
    const names = ["aria-label","title","alt","placeholder","content","value"];
    const elements = [root, ...(root.querySelectorAll ? root.querySelectorAll("*") : [])].filter(Boolean);
    elements.forEach(el => {
      if (!el.getAttribute || (el.closest && el.closest(".language-picker"))) return;
      names.forEach(name => {
        if (!el.hasAttribute(name)) return;
        const raw = el.getAttribute(name);
        const key = norm(raw);
        const translated = Object.prototype.hasOwnProperty.call(T, key) ? T[key] : latinDigits(key);
        if (!key || translated === key || translated === raw) return;
        let saved = originalAttributes.get(el);
        if (!saved) { saved = Object.create(null); originalAttributes.set(el, saved); }
        let last = translatedAttributes.get(el);
        if (!last) { last = Object.create(null); translatedAttributes.set(el, last); }
        if (!Object.prototype.hasOwnProperty.call(saved, name)) saved[name] = raw;
        else if (raw !== last[name]) saved[name] = raw;
        last[name] = translated;
        el.setAttribute(name, translated);
      });
    });
  }

  function translateTree(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateText);
    translateAttributes(root);
  }

  function restoreTree(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      if (originalTexts.has(node)) node.nodeValue = originalTexts.get(node);
    });
    const elements = [root, ...(root.querySelectorAll ? root.querySelectorAll("*") : [])].filter(Boolean);
    elements.forEach(el => {
      const saved = originalAttributes.get(el);
      if (!saved) return;
      Object.keys(saved).forEach(name => el.setAttribute(name, saved[name]));
    });
  }

  function observeDynamicContent() {
    if (!window.MutationObserver || window.__elvenEnglishObserver) return;
    window.__elvenEnglishObserver = new MutationObserver(records => {
      if (currentLocale !== "en") return;
      records.forEach(record => {
        if (record.type === "characterData") translateText(record.target);
        record.addedNodes && record.addedNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) translateText(node);
          else if (node.nodeType === Node.ELEMENT_NODE) translateTree(node);
        });
        if (record.type === "attributes" && record.target.nodeType === Node.ELEMENT_NODE) translateAttributes(record.target);
      });
    });
    window.__elvenEnglishObserver.observe(document.documentElement, {
      subtree:true, childList:true, characterData:true, attributes:true,
      attributeFilter:["aria-label","title","alt","placeholder","content","value"]
    });
  }

  function setLanguage(locale) {
    if (locale === "en") {
      currentLocale = "en";
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      document.body.lang = "en";
      document.body.dir = "ltr";
      translateTree(document.head);
      translateTree(document.body);
      observeDynamicContent();
      return;
    }
    currentLocale = "fa";
    restoreTree(document.head);
    restoreTree(document.body);
    originalTexts = new WeakMap();
    translatedTexts = new WeakMap();
    originalAttributes = new WeakMap();
    translatedAttributes = new WeakMap();
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.body.lang = "fa";
    document.body.dir = "rtl";
  }

  window.ElvenEnglishTranslator = { setLanguage };
})();