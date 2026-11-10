(function () {
  "use strict";

  // Translation-source pages are loaded invisibly only to borrow their text.
  // Never initialize another language switcher inside that source frame.
  if (new URLSearchParams(location.search).has("__elvenTranslationSource")) return;

  const SUPPORTED = new Set(["fa", "en", "ar"]);
  const ENGLISH_PAGES = new Set([
    "index.html", "about.html", "contact.html", "departments.html", "product.html",
    "yeast-product.html", "pasta-product.html", "baking-soda-product.html",
    "canned-food-product.html", "glucose-starch-product.html",
    "milk-powder-product.html", "sugar-product.html", "tomato-paste-product.html"
  ]);
  const STORAGE_KEY = "elvenLanguagePreference";
  let currentLocale = "fa";
  let requestId = 0;
  let sourceFrame = null;

  function getSiteBasePath() {
    const marker = "/assets/elven-language-switch.js";
    const tag = Array.from(document.scripts).find(function (item) {
      try {
        return new URL(item.src, location.href).pathname.endsWith(marker);
      } catch (_) {
        return false;
      }
    });
    if (!tag) return "";
    const pathname = new URL(tag.src, location.href).pathname;
    return pathname.slice(0, pathname.lastIndexOf(marker)).replace(/\/+$/, "");
  }

  function getRoute() {
    const basePath = getSiteBasePath();
    const pathname = location.pathname;
    const localPath = basePath && pathname.startsWith(basePath + "/")
      ? pathname.slice(basePath.length + 1)
      : pathname.replace(/^\/+/, "");
    const segments = localPath.split("/").filter(Boolean);
    let prefix = "fa";

    if (segments[0] === "ar" || segments[0] === "en") {
      prefix = segments.shift();
    }

    const current = segments.join("/") || "index.html";
    const isCatalog = /(^|\/)catalog(?:-fa|-en)?\.html$/i.test(localPath);
    const catalogLocale = /catalog-en\.html$/i.test(localPath)
      ? "en"
      : /catalog-fa\.html$/i.test(localPath) ? "fa" : prefix;

    return {
      basePath: basePath,
      current: current,
      prefix: isCatalog ? catalogLocale : prefix,
      isCatalog: isCatalog
    };
  }

  function getSourcePath(locale, route) {
    if (route.isCatalog) {
      return {
        fa: "catalog-fa.html",
        en: "catalog-en.html",
        ar: "ar/catalog.html"
      }[locale];
    }
    if (locale === "fa") return route.current;
    return locale + "/" + route.current;
  }

  function collectVisibleTextNodes(root) {
    const nodes = [];
    const walker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, noscript, template")) continue;
      if ((node.nodeValue || "").trim()) nodes.push(node);
    }
    return nodes;
  }

  function collectVisibleElements(root) {
    return Array.from(root.querySelectorAll("*")).filter(function (element) {
      return !element.matches("script, style, noscript, template");
    });
  }

  function ensureSourceFrame() {
    if (sourceFrame && sourceFrame.isConnected) return sourceFrame;

    sourceFrame = document.createElement("iframe");
    sourceFrame.id = "elven-language-text-source";
    sourceFrame.title = "";
    sourceFrame.tabIndex = -1;
    sourceFrame.setAttribute("aria-hidden", "true");
    sourceFrame.setAttribute("data-elven-internal", "language-text-source");
    sourceFrame.style.cssText = [
      "position:fixed",
      "inset:0",
      "width:100vw",
      "height:100vh",
      "border:0",
      "visibility:hidden",
      "pointer-events:none",
      "z-index:-1"
    ].join(";");
    document.body.appendChild(sourceFrame);
    return sourceFrame;
  }

  function updateLanguageMenu(locale, englishReady) {
    const menu = document.querySelector(".language-menu");
    if (!menu) return;

    const englishOption = menu.querySelector('[data-language="en"]');
    if (englishOption) {
      englishOption.classList.toggle("is-coming", !englishReady);
      englishOption.setAttribute("aria-disabled", englishReady ? "false" : "true");
    }

    menu.querySelectorAll("[data-language]").forEach(function (option) {
      const language = option.dataset.language;
      if (!SUPPORTED.has(language)) return;

      const active = language === locale;
      option.classList.toggle("is-current", active);
      if (language !== "en" || englishReady) option.classList.remove("is-coming");
      option.setAttribute("aria-disabled", language === "en" && !englishReady ? "true" : "false");

      if (active) {
        option.setAttribute("role", "menuitemradio");
        option.setAttribute("aria-checked", "true");
      } else {
        option.setAttribute("role", "menuitem");
        option.removeAttribute("aria-checked");
      }
    });
  }

  function copyLanguageText(sourceDocument) {
    if (!sourceDocument || !sourceDocument.body || !document.body) return false;

    const liveElements = collectVisibleElements(document.body);
    const sourceElements = collectVisibleElements(sourceDocument.body);

    // The source pages are expected to have the same DOM. Refuse to copy if
    // the structure differs, rather than risk putting text in the wrong place.
    if (liveElements.length !== sourceElements.length) return false;
    for (let i = 0; i < liveElements.length; i += 1) {
      if (liveElements[i].tagName !== sourceElements[i].tagName) return false;
    }

    const liveText = collectVisibleTextNodes(document.body);
    const sourceText = collectVisibleTextNodes(sourceDocument.body);
    if (liveText.length !== sourceText.length) return false;

    for (let i = 0; i < liveText.length; i += 1) {
      liveText[i].nodeValue = sourceText[i].nodeValue;
    }

    const translatableAttributes = ["aria-label", "title", "alt", "placeholder"];
    for (let i = 0; i < liveElements.length; i += 1) {
      const live = liveElements[i];
      const source = sourceElements[i];

      translatableAttributes.forEach(function (name) {
        if (source.hasAttribute(name)) live.setAttribute(name, source.getAttribute(name));
      });

      // Translate submit/button labels without overwriting user-entered values.
      if (
        source.hasAttribute("value") &&
        /^(INPUT|BUTTON)$/.test(source.tagName) &&
        (source.tagName === "BUTTON" || /^(submit|button|reset)$/i.test(source.type || ""))
      ) {
        live.setAttribute("value", source.getAttribute("value"));
      }
    }

    if (sourceDocument.title) document.title = sourceDocument.title;
    const sourceDescription = sourceDocument.querySelector('meta[name="description"]');
    const liveDescription = document.querySelector('meta[name="description"]');
    if (sourceDescription && liveDescription) {
      liveDescription.setAttribute("content", sourceDescription.getAttribute("content") || "");
    }

    return true;
  }

  function closeMenu() {
    const picker = document.querySelector(".language-picker");
    const trigger = picker && picker.querySelector(".language-trigger");
    picker && picker.classList.remove("is-open");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
  }

  function applyLanguage(locale, route, englishReady) {
    if (!SUPPORTED.has(locale)) return Promise.resolve(false);
    if (locale === "en" && !englishReady) return Promise.resolve(false);
    if (locale === currentLocale) {
      closeMenu();
      return Promise.resolve(true);
    }

    const sourcePath = getSourcePath(locale, route);
    if (!sourcePath) return Promise.resolve(false);

    const id = ++requestId;
    const frame = ensureSourceFrame();
    const query = location.search
      ? location.search + "&__elvenTranslationSource=1"
      : "?__elvenTranslationSource=1";
    const sourceUrl = route.basePath + "/" + sourcePath + query;

    return new Promise(function (resolve) {
      let finished = false;
      const finish = function (success) {
        if (finished) return;
        finished = true;
        frame.onload = null;
        frame.onerror = null;

        if (id !== requestId) {
          resolve(false);
          return;
        }

        if (success) {
          document.documentElement.setAttribute("lang", locale);
          currentLocale = locale;
          updateLanguageMenu(locale, englishReady);
          try { localStorage.setItem(STORAGE_KEY, locale); } catch (_) {}
          closeMenu();
        }
        resolve(success);
      };

      frame.onload = function () {
        let success = false;
        try {
          success = copyLanguageText(frame.contentDocument);
        } catch (_) {
          success = false;
        }
        finish(success);
      };
      frame.onerror = function () {
        finish(false);
      };
      frame.src = sourceUrl;
    });
  }

  function setup() {
    const menu = document.querySelector(".language-menu");
    if (!menu || menu.dataset.localeSwitchReady === "1") return;
    menu.dataset.localeSwitchReady = "1";

    const route = getRoute();
    const englishReady = route.isCatalog || ENGLISH_PAGES.has(route.current);
    const explicitLocale = route.prefix;
    let preferredLocale = explicitLocale;

    // Keep an explicitly selected language as visitors move between pages,
    // including when the current URL is under /ar/ or /en/.
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.has(saved)) preferredLocale = saved;
    } catch (_) {}

    currentLocale = explicitLocale;
    updateLanguageMenu(explicitLocale, englishReady);

    menu.addEventListener("click", function (event) {
      const option = event.target.closest("[data-language]");
      if (!option) return;

      const selected = option.dataset.language;
      if (!SUPPORTED.has(selected)) return;

      if (selected === "en" && !englishReady) {
        event.preventDefault();
        event.stopImmediatePropagation();
        closeMenu();
        return;
      }

      event.preventDefault();
      event.stopImmediatePropagation();

      applyLanguage(selected, route, englishReady);
    }, true);

    if (preferredLocale !== explicitLocale) {
      applyLanguage(preferredLocale, route, englishReady);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();