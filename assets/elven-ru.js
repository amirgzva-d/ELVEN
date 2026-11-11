(function () {
  "use strict";

  const T = Object.create(null);
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