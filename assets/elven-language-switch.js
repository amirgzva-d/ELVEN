(function () {
  "use strict";

  const SUPPORTED = new Set(["fa", "en", "ar"]);
  const STORAGE_KEY = "elvenLanguagePreferenceV2";
  const OLD_HOSTS = new Set(["mohajer-foodstuff.com", "www.mohajer-foodstuff.com"]);
  const AR_TRANSLATOR_VERSION = "20261111-inpage-ar-v4";
  const EN_TRANSLATOR_VERSION = "20261110-inpage-en-v2";
  const EN_PRODUCTS_VERSION = "20261110-product-map-v1";
  let route;
  let activeLocale = "fa";
  let translatorLoading = false;
  let englishTranslatorLoading = false;
  const translatorCallbacks = [];
  const englishTranslatorCallbacks = [];

  function getBasePath() {
    const marker = "/assets/elven-language-switch.js";
    const tag = Array.from(document.scripts).find(function (item) {
      try { return new URL(item.src, location.href).pathname.endsWith(marker); }
      catch (_) { return false; }
    });
    if (!tag) return "";
    const path = new URL(tag.src, location.href).pathname;
    return path.slice(0, path.lastIndexOf(marker)).replace(/\/+$/, "");
  }

  function getRoute() {
    const basePath = getBasePath();
    let pathname = location.pathname;
    if (basePath && pathname === basePath) pathname = "/";
    else if (basePath && pathname.startsWith(basePath + "/")) pathname = pathname.slice(basePath.length);
    const parts = pathname.split("/").filter(Boolean);
    let legacyLocale = "";
    if (parts[0] === "ar" || parts[0] === "en") legacyLocale = parts.shift();
    let current = parts.join("/") || "index.html";
    const isEnglishCatalog = /^catalog-en\.html$/i.test(current);
    if (/^catalog(?:-fa|-en)?\.html$/i.test(current) || /^catalog\.html$/i.test(current)) current = "catalog-fa.html";
    return { basePath, current, legacyLocale, isEnglishCatalog };
  }

  function saveLocale(locale) {
    if (!SUPPORTED.has(locale)) return;
    try { localStorage.setItem(STORAGE_KEY, locale); } catch (_) {}
    const cookie = STORAGE_KEY + "=" + locale + "; path=/; max-age=31536000; SameSite=Lax; Secure";
    document.cookie = cookie + "; Domain=.mohajer-foodstuff.com";
    if (!document.cookie.includes(STORAGE_KEY + "=" + locale)) document.cookie = cookie;
  }

  function readSavedLocale() {
    const match = document.cookie.match(new RegExp("(?:^|; )" + STORAGE_KEY + "=([^;]*)"));
    const cookieLocale = match ? decodeURIComponent(match[1]) : "";
    if (SUPPORTED.has(cookieLocale)) return cookieLocale;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.has(saved)) return saved;
    } catch (_) {}
    return "";
  }

  function readLocale() { return readSavedLocale() || "fa"; }

  function normalizeInternalLinks() {
    const normalize = function (anchor) {
      const raw = anchor.getAttribute("href");
      if (!raw || raw.startsWith("#") || /^(mailto:|tel:|javascript:|data:)/i.test(raw)) return;
      let target;
      try { target = new URL(raw, location.href); } catch (_) { return; }
      const isOldDomain = OLD_HOSTS.has(target.hostname.toLowerCase());
      const isSameOrigin = target.origin === location.origin;
      if (!isOldDomain && !isSameOrigin) return;
      const base = route.basePath || "";
      let pathname = target.pathname;
      if (base && pathname === base) pathname = "/";
      else if (base && pathname.startsWith(base + "/")) pathname = pathname.slice(base.length);
      else if (!isOldDomain && base) return;
      pathname = pathname.replace(/^\/(?:ar|en)(?=\/)/i, "");
      if (!pathname.startsWith("/")) pathname = "/" + pathname;
      if (!pathname || pathname === "/") pathname = "/index.html";
      if (/^\/catalog(?:-en)?\.html$/i.test(pathname) || /^\/catalog\.html$/i.test(pathname)) pathname = "/catalog-fa.html";
      const normalized = new URL(base + pathname + target.search + target.hash, location.origin);
      if (anchor.href !== normalized.href) anchor.setAttribute("href", normalized.href);
    };
    document.querySelectorAll("a[href]").forEach(normalize);
    if (!window.__elvenInternalLinkClickGuard) {
      window.__elvenInternalLinkClickGuard = true;
      document.addEventListener("click", function (event) {
        const anchor = event.target && event.target.closest ? event.target.closest("a[href]") : null;
        if (anchor) normalize(anchor);
      }, true);
    }
    if (window.MutationObserver && !window.__elvenInternalLinkObserver) {
      window.__elvenInternalLinkObserver = new MutationObserver(function (records) {
        records.forEach(function (record) {
          if (record.type === "attributes") normalize(record.target);
          record.addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;
            if (node.matches && node.matches("a[href]")) normalize(node);
            if (node.querySelectorAll) node.querySelectorAll("a[href]").forEach(normalize);
          });
        });
      });
      window.__elvenInternalLinkObserver.observe(document.body, {
        subtree: true, childList: true, attributes: true, attributeFilter: ["href"]
      });
    }
  }

  function normalizeCanonicalMetadata() {
    const canonicalUrl = new URL(location.pathname, location.origin);
    canonicalUrl.search = "";
    canonicalUrl.hash = "";
    document.querySelectorAll('link[rel="canonical"]').forEach(link => { link.href = canonicalUrl.href; });
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(link => link.remove());
    document.querySelectorAll('meta[property="og:url"], meta[name="twitter:url"]').forEach(meta => meta.setAttribute("content", canonicalUrl.href));
  }

  function updatePicker(locale) {
    const picker = document.getElementById("languagePicker");
    if (!picker) return;
    const names = { fa: "فارسی", en: "English", ar: "العربية" };
    // Keep the language menu labels and status wording fixed in every locale.
    // Only the selected-language highlight/status changes when the visitor switches language.
    const statusText = { active: "فعال", inactive: "تغییر" };
    const current = picker.querySelector(".language-current");
    if (current) current.textContent = names[locale];
    picker.querySelectorAll("[data-language]").forEach(function (option) {
      const language = option.dataset.language;
      if (!SUPPORTED.has(language)) { option.remove(); return; }
      const active = language === locale;
      const label = option.querySelector("span:not(.language-flag):not(.language-status)");
      const status = option.querySelector(".language-status");
      if (label) label.textContent = names[language];
      if (status) status.textContent = active ? statusText.active : statusText.inactive;
      option.classList.remove("is-coming");
      option.classList.toggle("is-current", active);
      option.setAttribute("role", active ? "menuitemradio" : "menuitem");
      option.setAttribute("aria-checked", active ? "true" : "false");
      option.setAttribute("aria-disabled", "false");
    });
  }

  function loadArabicTranslator(hideUntilReady, callback) {
    if (window.ElvenArabicTranslator) { if (callback) callback(true); return; }
    if (callback) translatorCallbacks.push(callback);
    if (translatorLoading) return;
    translatorLoading = true;
    if (hideUntilReady) document.documentElement.style.visibility = "hidden";
    const script = document.createElement("script");
    script.src = (route.basePath || "") + "/assets/elven-ar.js?v=" + AR_TRANSLATOR_VERSION;
    script.async = true;
    script.onload = function () {
      translatorLoading = false;
      document.documentElement.style.visibility = "";
      translatorCallbacks.splice(0).forEach(done => done(!!window.ElvenArabicTranslator));
    };
    script.onerror = function () {
      translatorLoading = false;
      document.documentElement.style.visibility = "";
      translatorCallbacks.splice(0).forEach(done => done(false));
    };
    document.head.appendChild(script);
  }

  function loadEnglishTranslator(hideUntilReady, callback) {
    if (window.ElvenEnglishTranslator && window.ElvenEnglishProductTranslations) {
      if (callback) callback(true);
      return;
    }
    if (callback) englishTranslatorCallbacks.push(callback);
    if (englishTranslatorLoading) return;
    englishTranslatorLoading = true;
    if (hideUntilReady) document.documentElement.style.visibility = "hidden";

    function loadCoreTranslator() {
      const script = document.createElement("script");
      script.src = (route.basePath || "") + "/assets/elven-en.js?v=" + EN_TRANSLATOR_VERSION;
      script.async = true;
      script.onload = function () {
        englishTranslatorLoading = false;
        document.documentElement.style.visibility = "";
        englishTranslatorCallbacks.splice(0).forEach(done => done(!!window.ElvenEnglishTranslator));
      };
      script.onerror = function () {
        englishTranslatorLoading = false;
        document.documentElement.style.visibility = "";
        englishTranslatorCallbacks.splice(0).forEach(done => done(false));
      };
      document.head.appendChild(script);
    }

    if (window.ElvenEnglishProductTranslations) {
      loadCoreTranslator();
      return;
    }

    const productScript = document.createElement("script");
    productScript.src = (route.basePath || "") + "/assets/elven-en-products.js?v=" + EN_PRODUCTS_VERSION;
    productScript.async = true;
    productScript.onload = loadCoreTranslator;
    productScript.onerror = loadCoreTranslator;
    document.head.appendChild(productScript);
  }

  function applyLocale(locale, initial) {
    if (!SUPPORTED.has(locale)) return;
    activeLocale = locale;
    saveLocale(locale);

    if (locale === "en") {
      if (window.ElvenArabicTranslator) window.ElvenArabicTranslator.setLanguage("fa");
      updatePicker("en");
      document.documentElement.lang = "en";
      if (window.ElvenYeastPageTranslator) {
        window.ElvenYeastPageTranslator.setLanguage("en");
        loadEnglishTranslator(!!initial, function (loaded) {
          if (activeLocale !== "en") return;
          if (loaded && window.ElvenEnglishTranslator) {
            window.ElvenEnglishTranslator.setLanguage("en");
          }
        });
        return;
      }
      loadEnglishTranslator(!!initial, function (loaded) {
        if (activeLocale !== "en") return;
        if (loaded && window.ElvenEnglishTranslator) {
          window.ElvenEnglishTranslator.setLanguage("en");
        } else {
          activeLocale = "fa";
          saveLocale("fa");
          document.documentElement.lang = "fa";
          document.documentElement.dir = "rtl";
          if (window.ElvenYeastPageTranslator) window.ElvenYeastPageTranslator.setLanguage("fa");
          updatePicker("fa");
        }
      });
      return;
    }

    if (locale === "ar") {
      if (window.ElvenEnglishTranslator) window.ElvenEnglishTranslator.setLanguage("fa");
      if (window.ElvenYeastPageTranslator) window.ElvenYeastPageTranslator.setLanguage("fa");
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
      updatePicker("ar");
      loadArabicTranslator(!!initial, function (loaded) {
        if (activeLocale !== "ar") return;
        if (loaded && window.ElvenArabicTranslator) {
          window.ElvenArabicTranslator.setLanguage("ar");
        } else {
          activeLocale = "ar";
          saveLocale("ar");
          document.documentElement.lang = "ar";
          document.documentElement.dir = "rtl";
          updatePicker("ar");
        }
      });
      return;
    }

    if (window.ElvenEnglishTranslator) window.ElvenEnglishTranslator.setLanguage("fa");
    if (window.ElvenYeastPageTranslator) window.ElvenYeastPageTranslator.setLanguage("fa");
    if (window.ElvenArabicTranslator) window.ElvenArabicTranslator.setLanguage("fa");
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    updatePicker("fa");
  }

  function bindPicker() {
    const menu = document.querySelector(".language-menu");
    const picker = document.getElementById("languagePicker");
    if (!menu || menu.dataset.localeSwitchReady === "1") return;
    menu.dataset.localeSwitchReady = "1";
    menu.addEventListener("click", function (event) {
      const option = event.target && event.target.closest ? event.target.closest("[data-language]") : null;
      if (!option) return;
      const selected = option.dataset.language;
      if (!SUPPORTED.has(selected)) return;
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      if (picker) {
        picker.classList.remove("is-open");
        const trigger = picker.querySelector(".language-trigger");
        if (trigger) trigger.setAttribute("aria-expanded", "false");
      }
      if (selected !== activeLocale) applyLocale(selected, false);
      else updatePicker(selected);
    }, true);
  }

  function setup() {
    if (location.hostname.toLowerCase() === "mohajer-foodstuff.com") {
      const canonical = new URL(location.href);
      canonical.hostname = "www.mohajer-foodstuff.com";
      location.replace(canonical.href);
      return;
    }
    route = getRoute();
    const savedLocale = readSavedLocale();
    if ((route.legacyLocale === "ar" || route.legacyLocale === "en") && savedLocale === "fa") {
      const target = new URL((route.basePath || "") + "/" + route.current, location.origin);
      target.search = location.search;
      target.hash = location.hash;
      if (target.pathname !== location.pathname) { location.replace(target.href); return; }
    }
    bindPicker();
    normalizeInternalLinks();
    const initialLocale = savedLocale || (route.legacyLocale === "ar" ? "ar" : route.legacyLocale === "en" ? "en" : "fa");
    applyLocale(initialLocale, true);
    if (!window.__elvenLanguageStorageSync) {
      window.__elvenLanguageStorageSync = true;
      window.addEventListener("storage", function (event) {
        if (event.key !== STORAGE_KEY || !SUPPORTED.has(event.newValue)) return;
        applyLocale(event.newValue, false);
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup, { once: true });
  else setup();
})();