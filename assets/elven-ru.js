(function () {
  "use strict";

  const T = Object.create(null);
  Object.assign(T, {
    "بازرگانی مهاجر — صادرات مواد غذایی":"Торговая группа «Мохаджер» — экспорт продуктов питания",
    "بازرگانی مهاجر":"Торговая группа «Мохаджер»",
    "خانه":"Главная",
    "محصولات":"Продукция",
    "دپارتمان‌ها":"Подразделения",
    "درباره ما":"О компании",
    "تماس":"Контакты",
    "استعلام قیمت":"Запросить цену",
    "فارسی":"Персидский",
    "فعال":"Активен",
    "در دسترس":"Доступно",
    "حذف":"Удалить",
    "العربية":"Арабский",
    "به‌زودی":"Скоро",
    "از مزرعه تا سفره جهان":"От фермы к столу — по всему миру",
    "صادرات مواد غذایی با کیفیت جهانی":"Экспорт продуктов питания высшего качества",
    "۱۳۳۰":"1951",
    "۱۳۶۶":"1987",
    "۱۳۷۴":"1995",
    "۱۳۹۷":"2018",
    "صادرات مواد غذایی":"Экспорт продуктов питания",
    "با کیفیت":"высокого качества",
    "جهانی":"по всему миру",
    "تأمین و صادرات انواع مواد غذایی سالم و باکیفیت":"Поставка и экспорт широкого ассортимента качественных и полезных продуктов питания",
    "به بازارهای بین‌المللی":"на международные рынки",
    "با کیفیت جهانی":"высокое качество для мировых рынков",
    "مشاهده محصولات":"Посмотреть продукцию",
    "درخواست مشاوره":"Запросить консультацию",
    "درخواست قیمت":"Запросить цену",
    "تنوعی از طعم و کیفیت":"Разнообразие вкусов и неизменное качество",
    "دسته‌بندی محصولات":"Категории продукции",
    "۹ گروه":"9 категорий",
    "محصولات غذایی":"Продукты питания",
    "مشاهده همه محصولات":"Посмотреть всю продукцию",
    "ماکارونی":"Макаронные изделия",
    "خمیرمایه":"Дрожжи",
    "کنسروجات":"Консервы",
    "گلوکز و نشاسته":"Глюкоза и крахмал",
    "نوشیدنی‌ها":"Напитки",
    "رب گوجه‌فرنگی":"Томатная паста",
    "شکر":"Сахар",
    "شیر خشک":"Сухое молоко",
    "جوش شیرین":"Пищевая сода",
    "فیلتر محصولات":"Фильтр товаров",
    "پاک کردن همه":"Сбросить всё",
    "دسته‌بندی محصول":"Категория товара",
    "غذا و نوشیدنی":"Продукты питания и напитки",
    "لبنیات":"Молочная продукция",
    "پخت و نانوایی":"Выпечка и хлебопечение",
    "مواد اولیه":"Сырьё",
    "کالای مصرفی":"Потребительские товары",
    "سایر":"Другое",
    "زیر دسته":"Подкатегория",
    "رب گوجه":"Томатная паста",
    "شیرین‌کننده‌ها":"Подсластители",
    "روغن و چربی":"Масла и жиры",
    "مراقبت شخصی":"Средства личной гигиены",
    "خانگی":"Товары для дома",
    "جزئیات محصول":"Информация о продукте",
    "نوشیدنی‌ها و آبمیوه‌ها":"Напитки и соки",
    "محصولات نوشیدنی‌ها و آبمیوه‌ها":"Напитки и соки",
    "برای دریافت مشخصات، تصویر اختصاصی، برند و شرایط تأمین هر مورد، استعلام بگیرید.":"Чтобы получить характеристики, фотографии, информацию о брендах и условиях поставки, отправьте запрос.",
    "مشخصات و آنالیز نوشیدنی‌ها و آبمیوه‌ها":"Характеристики и анализ напитков и соков",
    "تأمین نوشیدنی‌ها و آبمیوه‌ها برای بازارهای جهانی":"Поставка напитков и соков на мировые рынки",
    "اطلاعات اختصاصی نوشیدنی انرژی‌زا شامل مشخصات فنی، ترکیبات، بسته‌بندی و برند پس از استعلام و دریافت مدارک معتبر درج خواهد شد.":"Технические характеристики, состав, упаковка и бренд энергетического напитка будут указаны после запроса и получения подтверждённых документов.",
    "رانی":"Rani",
    "نوشیدنی انرژی‌زا":"Энергетический напиток",
    "نوشیدنی تخم‌شربتی":"Напиток с семенами базилика",
    "نوشیدنی گازدار":"Газированный напиток",
    "اطلاعات اختصاصی رانی شامل مشخصات فنی، ترکیبات، بسته‌بندی و برند پس از استعلام و دریافت مدارک معتبر درج خواهد شد.":"Технические характеристики, состав, упаковка и бренд напитка Rani будут указаны после запроса и получения подтверждённых документов.",
    "اطلاعات اختصاصی نوشیدنی تخم‌شربتی شامل مشخصات فنی، ترکیبات، بسته‌بندی و برند پس از استعلام و دریافت مدارک معتبر درج خواهد شد.":"Технические характеристики, состав, упаковка и бренд напитка с семенами базилика будут указаны после запроса и получения подтверждённых документов.",
    "اطلاعات اختصاصی نوشیدنی گازدار شامل مشخصات فنی، ترکیبات، بسته‌بندی و برند پس از استعلام و دریافت مدارک معتبر درج خواهد شد.":"Технические характеристики, состав, упаковка и бренд газированного напитка будут указаны после запроса и получения подтверждённых документов.",
    "اعداد و نتایج آنالیز نوشیدنی انرژی‌زا پس از دریافت برگه مشخصات تأییدشده درج خواهند شد.":"Значения и результаты анализа энергетического напитка будут опубликованы после получения утверждённого технического паспорта.",
    "اعداد و نتایج آنالیز رانی پس از دریافت برگه مشخصات تأییدشده درج خواهند شد.":"Значения и результаты анализа напитка Rani будут опубликованы после получения утверждённого технического паспорта.",
    "اعداد و نتایج آنالیز نوشیدنی تخم‌شربتی پس از دریافت برگه مشخصات تأییدشده درج خواهند شد.":"Значения и результаты анализа напитка с семенами базилика будут опубликованы после получения утверждённого технического паспорта.",
    "اعداد و نتایج آنالیز نوشیدنی گازدار پس از دریافت برگه مشخصات تأییدشده درج خواهند شد.":"Значения и результаты анализа газированного напитка будут опубликованы после получения утверждённого технического паспорта.",
    "انتخاب نوشیدنی انرژی‌زا و مشاهده مشخصات":"Выбрать энергетический напиток и посмотреть характеристики",
    "انتخاب رانی و مشاهده مشخصات":"Выбрать Rani и посмотреть характеристики",
    "انتخاب نوشیدنی تخم‌شربتی و مشاهده مشخصات":"Выбрать напиток с семенами базилика и посмотреть характеристики",
    "انتخاب نوشیدنی گازدار و مشاهده مشخصات":"Выбрать газированный напиток и посмотреть характеристики",
    "تصویر نوشیدنی انرژی‌زا":"Изображение энергетического напитка",
    "تصویر رانی":"Изображение напитка Rani",
    "تصویر نوشیدنی تخم‌شربتی":"Изображение напитка с семенами базилика",
    "تصویر نوشیدنی گازدار":"Изображение газированного напитка",
    "مشخصات، تصاویر اختصاصی و شرایط سفارش پس از دریافت اطلاعات تأییدشده تکمیل می‌شوند.":"Характеристики, фотографии и условия заказа будут добавлены после получения подтверждённой информации.",
    "نوشیدنی‌ها و آبمیوه‌ها | بازرگانی مهاجر":"Напитки и соки | Торговая группа «Мохаджер»",
    "معرفی و استعلام نوشیدنی‌ها و آبمیوه‌ها | بازرگانی مهاجر":"Напитки и соки — информация и запрос поставки | Торговая группа «Мохаджер»",
    "برندهای نوشیدنی‌ها و آبمیوه‌ها":"Бренды напитков и соков",
    "عکس مشخصات و آنالیز نوشیدنی‌ها و آبمیوه‌ها":"Изображение характеристик и анализа напитков и соков",
    "بستن جزئیات و آنالیز نوشیدنی‌ها":"Закрыть сведения и анализ напитков",
    "بستن جزئیات":"Закрыть подробную информацию",
    "تازگی و کیفیت برای بازارهای جهانی":"Свежесть и качество для мировых рынков",
    "کنسروها":"Консервы",
    "محصولات کنسروی باکیفیت برای بازار جهانی":"Качественные консервированные продукты для мировых рынков",
    "شکر سفید و فله برای صنایع غذایی و صادرات":"Белый и сахарный песок для пищевой промышленности и экспорта",
    "طعمی غنی و کیفیتی برتر برای بازار جهانی":"Насыщенный вкус и превосходное качество для мировых рынков",
    "مواد اولیه ممتاز برای صنایع غذایی":"Высококачественное сырьё для пищевой промышленности",
    "گلوکز و نشاسته ذرت و گندم برای صنایع غذایی":"Кукурузная и пшеничная глюкоза и крахмал для пищевой промышленности",
    "لبنیات و شیر خشک":"Молочная продукция и сухое молоко",
    "مواد اولیه لبنی ممتاز برای بازار جهانی":"Высококачественные молочные ингредиенты для мировых рынков",
    "ماکارونی و پاستا":"Макаронные изделия и паста",
    "محصولات پاستا باکیفیت برای بازار جهانی":"Качественные макаронные изделия для мировых рынков",
    "۱۵+":"15+",
    "سال اعتماد":"лет доверия",
    "درباره بازرگانی مهاجر":"О торговой группе «Мохаджер»",
    "ریشه در ایران،":"Наши корни — в Иране,",
    "اعتماد در سراسر جهان.":"доверие — во всём мире.",
    "بازرگانی مهاجر تولیدکنندگان ممتاز ایرانی را با خریداران در سراسر جهان پیوند می‌دهد. از تأمین و کنترل کیفیت تا مستندات و لجستیک — ما تمامی زنجیره صادرات را مدیریت می‌کنیم تا شرکای تجاری ما روی رشد کسب‌وکارشان تمرکز کنند.":"Торговая группа «Мохаджер» соединяет ведущих иранских производителей с покупателями по всему миру. Мы управляем всей экспортной цепочкой — от закупки и контроля качества до документации и логистики, — чтобы наши партнёры могли сосредоточиться на развитии своего бизнеса.",
    "تأمین معتبر":"Надёжные поставки",
    "همکاری مستقیم با تولیدکنندگان مورد اعتماد ایرانی.":"Прямое сотрудничество с проверенными иранскими производителями.",
    "تضمین کیفیت":"Гарантия качества",
    "هر محموله پیش از خروج از انبار بازرسی می‌شود.":"Каждая партия проходит проверку перед отправкой со склада.",
    "لجستیک جهانی":"Международная логистика",
    "ارسال و مستندسازی مطمئن به بیش از ۵۰ کشور.":"Надёжная доставка и оформление документов для более чем 50 стран.",
    "پشتیبانی اختصاصی":"Персональная поддержка",
    "تیم صادرات ۲۴/۷ آماده کمک به شما در هر مرحله.":"Наша экспортная команда готова помочь вам на каждом этапе круглосуточно.",
    "تجارت مطمئن، از مبدأ تا مقصد":"Надёжная торговля от отправителя до получателя",
    "ما با تکیه بر شبکه تأمین‌کنندگان معتبر، کنترل دقیق کیفیت و مدیریت زنجیره صادرات، همراه مطمئن شما در تجارت بین‌المللی هستیم.":"Благодаря сети надёжных поставщиков, строгому контролю качества и управлению экспортной цепочкой мы становимся вашим надёжным партнёром в международной торговле.",
    "در تمامی محصولات":"Во всех категориях продукции",
    "بازارهای جهانی":"Мировые рынки",
    "صادرات به مقاصد بین‌المللی":"Экспорт в разные страны мира",
    "تجربه صادرات":"Опыт экспорта",
    "سال‌ها فعالیت در تجارت بین‌المللی":"Многолетний опыт международной торговли",
    "همکاری مطمئن":"Надёжное партнёрство",
    "با شرکای معتبر و تولیدکنندگان":"С проверенными партнёрами и производителями",
    "همکاری با ما":"Сотрудничайте с нами",
    "محصولات غذایی ممتاز ایرانی، با دقت انتخاب و برای تجارت بین‌المللی مطمئن آماده می‌شوند.":"Высококачественные иранские продукты питания тщательно отбираются и готовятся к надёжным поставкам на международные рынки.",
    "شرکت":"Компания",
    "داستان ما":"Наша история",
    "خدمات مشتریان":"Служба поддержки клиентов",
    "پشتیبانی صادرات":"Поддержка экспорта",
    "ارسال و تحویل":"Доставка",
    "سوالات متداول":"Часто задаваемые вопросы",
    "تماس با ما":"Связаться с нами",
    "محمد مهاجری":"Мохаммад Мохаджери",
    "علیرضا تهرانی":"Алиреза Техрани",
    "تلفن ثابت دفتر":"Рабочий телефон офиса",
    "ایمیل رسمی":"Официальная электронная почта",
    "شبکه‌های اجتماعی":"Социальные сети",
    "© ۱۴۰۴ بازرگانی مهاجر — تمامی حقوق محفوظ است.":"© 2025 Торговая группа «Мохаджер». Все права защищены.",
    "طراحی و توسعه اختصاصی":"Индивидуальный дизайн и разработка"
  });

  const E = Object.create(null);
  const norm = value => String(value || "").replace(/\s+/g, " ").trim();
  const westernDigits = value => String(value || "").replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d)).replace(/[٠-٩]/g, d => "٠١٢٣٤٥٦٧٨٩".indexOf(d));

  function translateDynamic(key) {
    const digits = westernDigits(key);
    if (/^[۰-۹٠-٩0-9]+$/u.test(key)) return digits;
    let match;
    if ((match = key.match(/^لوگوی برند نوشیدنی شماره\s*(\d+)$/u))) return "Логотип бренда напитка №" + match[1];
    if ((match = key.match(/^برند نوشیدنی شماره\s*(\d+)$/u))) return "Бренд напитка №" + match[1];
    if ((match = key.match(/^خمیر مایه خشک فوری ایکس پاور\s*(.+)$/u))) return "Дрожжи быстродействующие сухие X-Power — " + translateWeight(match[1]);
    if ((match = key.match(/^خمیر مایه خشک فوری شتاب مایه\s*(.+)$/u))) return "Дрожжи быстродействующие сухие Shetab Mayeh — " + translateWeight(match[1]);
    if ((match = key.match(/^خمیر مایه خشک فوری دزمایه گلد\s*(.+)$/u))) return "Дрожжи быстродействующие сухие Dezmayeh Gold — " + translateWeight(match[1]);
    if ((match = key.match(/^خمیر مایه نان مایه\s*(.+)$/u))) return "Дрожжи Nan Mayeh — " + translateWeight(match[1].replace(/\s*\(.*?\)\s*/gu, ""));
    return digits !== key ? digits : null;
  }

  function translateWeight(value) {
    return westernDigits(value)
      .replace(/کیلوگرم|کیلو گرم|کیلو/gu, "кг")
      .replace(/گرم/gu, "г")
      .replace(/\s+/g, " ")
      .trim();
  }

  function translateValue(value) {
    const key = norm(value);
    if (!key) return null;
    if (Object.prototype.hasOwnProperty.call(T, key)) return T[key];
    if (Object.prototype.hasOwnProperty.call(E, key)) return E[key];
    return translateDynamic(key);
  }

  function translateObject(value) {
    if (typeof value === "string") return translateValue(value) || value;
    if (Array.isArray(value)) return value.map(translateObject);
    if (value && typeof value === "object") {
      const result = {};
      Object.keys(value).forEach(key => { result[key] = translateObject(value[key]); });
      return result;
    }
    return value;
  }

  let currentLocale = "fa";
  let originalTexts = new WeakMap();
  let translatedTexts = new WeakMap();
  let originalAttributes = new WeakMap();
  let translatedAttributes = new WeakMap();
  const touchedTextNodes = new Set();
  const touchedAttributeElements = new Set();

  function rememberText(node, raw, translated) {
    if (!originalTexts.has(node)) touchedTextNodes.add(node);
    if (!originalTexts.has(node) || raw !== translatedTexts.get(node)) originalTexts.set(node, raw);
    translatedTexts.set(node, translated);
  }

  function rememberAttribute(el, name, raw, translated) {
    let saved = originalAttributes.get(el);
    if (!saved) {
      saved = Object.create(null);
      originalAttributes.set(el, saved);
      touchedAttributeElements.add(el);
    }
    let last = translatedAttributes.get(el);
    if (!last) {
      last = Object.create(null);
      translatedAttributes.set(el, last);
    }
    if (!Object.prototype.hasOwnProperty.call(saved, name) || raw !== last[name]) saved[name] = raw;
    last[name] = translated;
  }

  function translateNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const raw = node.nodeValue || "";
    const key = norm(raw);
    if (!key || !node.parentElement || node.parentElement.closest("script,style,noscript,template,.language-picker")) return;
    const translated = translateValue(key);
    if (translated === null || translated === key) return;
    const leading = raw.match(/^\s*/)?.[0] || "";
    const trailing = raw.match(/\s*$/)?.[0] || "";
    const next = leading + translated + trailing;
    if (next !== raw) {
      rememberText(node, raw, next);
      node.nodeValue = next;
    }
  }

  function translateAttributes(root) {
    const names = ["aria-label", "title", "alt", "placeholder", "content", "value"];
    const elements = [root, ...(root.querySelectorAll ? root.querySelectorAll("*") : [])].filter(Boolean);
    elements.forEach(el => {
      if (el.closest && el.closest(".language-picker")) return;
      names.forEach(name => {
        if (!el.hasAttribute || !el.hasAttribute(name)) return;
        const raw = el.getAttribute(name);
        const key = norm(raw);
        if (!key) return;
        const translated = translateValue(key);
        if (translated === null || translated === key) return;
        rememberAttribute(el, name, raw, translated);
        el.setAttribute(name, translated);
      });
    });
  }

  function translateTree(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateNode);
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

  function clearSnapshots() {
    originalTexts = new WeakMap();
    translatedTexts = new WeakMap();
    originalAttributes = new WeakMap();
    translatedAttributes = new WeakMap();
    touchedTextNodes.clear();
    touchedAttributeElements.clear();
  }

  function observeDynamicContent() {
    if (!window.MutationObserver || window.__elvenRussianObserver) return;
    window.__elvenRussianObserver = new MutationObserver(records => {
      if (currentLocale !== "ru") return;
      records.forEach(record => {
        if (record.type === "characterData") translateNode(record.target);
        if (record.addedNodes) record.addedNodes.forEach(node => {
          if (node.nodeType === Node.TEXT_NODE) translateNode(node);
          else if (node.nodeType === Node.ELEMENT_NODE) translateTree(node);
        });
        if (record.type === "attributes" && record.target.nodeType === Node.ELEMENT_NODE) translateAttributes(record.target);
      });
    });
    window.__elvenRussianObserver.observe(document.documentElement, {
      subtree: true, childList: true, characterData: true, attributes: true,
      attributeFilter: ["aria-label", "title", "alt", "placeholder", "content", "value"]
    });
  }

  function setLanguage(locale) {
    if (locale === "ru") {
      currentLocale = "ru";
      document.documentElement.lang = "ru";
      document.documentElement.dir = "ltr";
      if (document.body) {
        document.body.lang = "ru";
        document.body.dir = "ltr";
      }
      translateTree(document.head);
      translateTree(document.body);
      observeDynamicContent();
      return;
    }
    currentLocale = "fa";
    restoreTree(document.head);
    restoreTree(document.body);
    clearSnapshots();
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    if (document.body) {
      document.body.lang = "fa";
      document.body.dir = "rtl";
    }
  }

  window.ElvenRussianTranslator = { setLanguage, translateValue, translateObject };
  if (document.readyState !== "loading" && document.documentElement.lang === "ru") setLanguage("ru");
})();