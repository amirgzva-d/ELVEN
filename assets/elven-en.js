/* English text support for dynamically inserted site controls and mobile footer. */
(function () {
  "use strict";
  if (document.documentElement.lang !== "en") return;

  const T = {
    "اطلاعات و راه‌های ارتباطی شرکت":"Company Information and Contact Details",
    "بازرگانی مهاجر":"Mohajer Trading Group",
    "تأمین و صادرات انواع مواد غذایی ایرانی":"Sourcing and exporting Iranian food products",
    "با کیفیت برای بازارهای جهانی":"for global markets, with a focus on quality",
    "صفحات اصلی سایت":"Main Site Pages",
    "صفحه اصلی":"Home",
    "محصولات":"Products",
    "درباره ما":"About Us",
    "تماس با ما":"Contact Us",
    "پیام در واتساپ به محمد مهاجری، +98 915 302 8367":"Send a WhatsApp message to Mohammad Mohajeri, +98 915 302 8367",
    "پیام در واتساپ به علیرضا تهرانی، +98 915 555 1965":"Send a WhatsApp message to Alireza Tehrani, +98 915 555 1965",
    "محمد مهاجری":"Mohammad Mohajeri",
    "علیرضا تهرانی":"Alireza Tehrani",
    "تلفن ثابت":"Office Phone",
    "ایمیل":"Email",
    "شبکه‌های اجتماعی":"Social Media",
    "نشانی دفتر مرکزی":"Head Office Address",
    "مشهد، میدان جانباز، پاژ اداری ۲، طبقه ۳، واحد ۳۱۳":"Paj Administrative Complex 2, 3rd Floor, Unit 313, Janbaz Square, Mashhad",
    "صادرات به سراسر جهان":"Exporting Worldwide",
    "© ۱۴۰۵ بازرگانی مهاجر — تمامی حقوق محفوظ است.":"© 2026 Mohajer Trading Group. All rights reserved.",
    "بازگشت به بالا":"Back to Top",
    "باز کردن منو":"Open Menu",
    "بستن منو":"Close Menu",
    "فیلتر محصولات":"Filter Products",
    "پاک کردن همه":"Clear All",
    "دسته‌بندی محصول":"Product Category",
    "غذا و نوشیدنی":"Food & Beverages",
    "لبنیات":"Dairy",
    "پخت و نانوایی":"Baking & Bakery",
    "مواد اولیه":"Raw Materials",
    "کالای مصرفی":"Consumer Goods",
    "سایر":"Other",
    "زیر دسته":"Subcategory",
    "جزئیات محصول":"Product Details",
    "درخواست قیمت":"Request a Quote",
    "استعلام قیمت":"Request a Quote",
    "منوی اصلی":"Main Menu",
    "انتخاب زبان":"Select Language",
    "واتساپ":"WhatsApp",
    "صفحه اینستاگرام بازرگانی مهاجر":"Mohajer Trading Group on Instagram",
    "اینستاگرام":"Instagram",
    "لینکدین؛ آدرس رسمی هنوز ثبت نشده":"LinkedIn; official URL not yet provided",
    "لینکدین — آدرس رسمی مورد نیاز":"LinkedIn — official URL required"
  };

  const normalize = value => String(value || "").replace(/\s+/g, " ").trim();

  function translateNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const raw = node.nodeValue || "";
    const key = normalize(raw);
    if (!key || !Object.prototype.hasOwnProperty.call(T, key)) return;
    const leading = raw.match(/^\s*/)?.[0] || "";
    const trailing = raw.match(/\s*$/)?.[0] || "";
    node.nodeValue = leading + T[key] + trailing;
  }

  function translateAttributes(root) {
    const names = ["aria-label", "title", "alt", "placeholder", "content"];
    const elements = [root, ...(root.querySelectorAll ? root.querySelectorAll("*") : [])].filter(Boolean);
    elements.forEach(el => names.forEach(name => {
      if (!el.getAttribute || !el.hasAttribute(name)) return;
      const value = el.getAttribute(name);
      const key = normalize(value);
      if (Object.prototype.hasOwnProperty.call(T, key)) el.setAttribute(name, T[key]);
    }));
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) translateNode(root);
    else if (root.nodeType === Node.ELEMENT_NODE) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(translateNode);
      translateAttributes(root);
      if (root.matches && root.matches(".elven-mobile-reference-footer")) {
        root.setAttribute("dir", "ltr");
      }
      if (root.querySelectorAll) {
        root.querySelectorAll(".elven-mobile-reference-footer").forEach(el => el.setAttribute("dir", "ltr"));
      }
    }
  }

  function init() {
    translateTree(document.body);
    if (window.MutationObserver && !window.__elvenEnglishObserver) {
      window.__elvenEnglishObserver = new MutationObserver(records => {
        records.forEach(record => {
          if (record.type === "characterData") translateNode(record.target);
          record.addedNodes && record.addedNodes.forEach(node => translateTree(node));
          if (record.type === "attributes" && record.target.nodeType === 1) translateAttributes(record.target);
        });
      });
      window.__elvenEnglishObserver.observe(document.documentElement, {
        subtree: true, childList: true, characterData: true,
        attributes: true, attributeFilter: ["aria-label", "title", "alt", "placeholder", "content"]
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
