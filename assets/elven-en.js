(function () {
  "use strict";

  const T = Object.freeze({
    "بازرگانی مهاجر — صادرات مواد غذایی":"Mohajer Trading Group — Food Exports",
    "بازرگانی مهاجر":"Mohajer Trading Group",
    "خانه":"Home","محصولات":"Products","دپارتمان‌ها":"Departments","درباره ما":"About Us","تماس":"Contact",
    "استعلام قیمت":"Request a Quote","فارسی":"Persian","فعال":"Active","در دسترس":"Available",
    "العربية":"Arabic","به‌زودی":"Coming Soon",
    "از مزرعه تا سفره جهان":"From Farm to Tables Worldwide",
    "صادرات مواد غذایی":"Food Exports","با کیفیت":"with Quality","جهانی":"Global",
    "تأمین و صادرات انواع مواد غذایی سالم و باکیفیت":"Supplying and exporting a wide range of healthy, high-quality food products",
    "به بازارهای بین‌المللی":"to international markets","با کیفیت جهانی":"with Global Quality",
    "مشاهده محصولات":"Explore Products","درخواست مشاوره":"Request a Consultation","درخواست قیمت":"Request a Quote",
    "تنوعی از طعم و کیفیت":"A Variety of Flavors and Quality","دسته‌بندی محصولات":"Product Categories",
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
    "طراحی و توسعه اختصاصی":"Designed and Developed Exclusively",
    "منوی اصلی":"Main Menu","بستن منو":"Close Menu",
    "استعلام قیمت؛ انتقال به فرم تماس":"Request a Quote; opens the contact form",
    "صادرات مواد غذایی با کیفیت جهانی":"Global-quality food exports"
  });

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
    if (!key || !node.parentElement || node.parentElement.closest("script,style,noscript,template")) return;

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
      if (!el.getAttribute) return;
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
      document.body.lang = "en";
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
    document.body.lang = "fa";
  }

  window.ElvenEnglishTranslator = { setLanguage };
})();