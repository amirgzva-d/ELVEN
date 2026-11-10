(function () {
  "use strict";

  if (new URLSearchParams(location.search).has("__elvenTranslationSource")) return;

  const SUPPORTED = new Set(["fa", "ar"]);
  const STORAGE_KEY = "elvenLanguagePreference";
  const OLD_HOSTS = new Set(["mohajer-foodstuff.com", "www.mohajer-foodstuff.com"]);
  const AR_TRANSLATOR_VERSION = "20261110-inpage-ar-v1";
  let route;
  let activeLocale = "fa";

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
    if (/^catalog(?:-fa|-en)?\.html$/i.test(current) || /^catalog\.html$/i.test(current)) {
      current = "catalog-fa.html";
    }

    return { basePath, current, legacyLocale, isEnglishCatalog };
  }

  function pageUrl() {
    const target = new URL((route.basePath || "") + "/" + route.current, location.origin);
    target.search = location.search;
    target.hash = location.hash;
    return target;
  }

  function saveLocale(locale) {
    if (!SUPPORTED.has(locale)) return;
    try { localStorage.setItem(STORAGE_KEY, locale); } catch (_) {}
    document.cookie = STORAGE_KEY + "=" + locale + "; path=/; max-age=31536000; SameSite=Lax";
  }

  function readLocale() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.has(saved)) return saved;
    } catch (_) {}
    const match = document.cookie.match(new RegExp("(?:^|; )" + STORAGE_KEY + "=([^;]*)"));
    const cookieLocale = match ? decodeURIComponent(match[1]) : "";
    return SUPPORTED.has(cookieLocale) ? cookieLocale : "fa";
  }

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
      if (/^\/catalog(?:-en)?\.html$/i.test(pathname) || /^\/catalog\.html$/i.test(pathname)) {
        pathname = "/catalog-fa.html";
      }

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

    document.querySelectorAll('link[rel="canonical"]').forEach(function (link) {
      link.href = canonicalUrl.href;
    });
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(function (link) {
      link.remove();
    });
    document.querySelectorAll('meta[property="og:url"], meta[name="twitter:url"]').forEach(function (meta) {
      meta.setAttribute("content", canonicalUrl.href);
    });
  }

  function updatePicker(locale) {
    const picker = document.getElementById("languagePicker");
    if (!picker) return;

    const names = { fa: "فارسی", ar: "العربية" };
    const current = picker.querySelector(".language-current");
    if (current) current.textContent = names[locale];

    picker.querySelectorAll("[data-language]").forEach(function (option) {
      const language = option.dataset.language;
      if (!SUPPORTED.has(language)) {
        option.remove();
        return;
      }
      const active = language === locale;
      const label = option.querySelector("span:not(.language-flag):not(.language-status)");
      const status = option.querySelector(".language-status");
      if (label) label.textContent = names[language];
      if (status) status.textContent = active ? (locale === "ar" ? "مفعّلة" : "فعال") : (locale === "ar" ? "التبديل" : "تغییر");
      option.classList.toggle("is-current", active);
      option.setAttribute("role", active ? "menuitemradio" : "menuitem");
      option.setAttribute("aria-checked", active ? "true" : "false");
      option.setAttribute("aria-disabled", "false");
    });
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

      saveLocale(selected);
      if (picker) {
        picker.classList.remove("is-open");
        const trigger = picker.querySelector(".language-trigger");
        if (trigger) trigger.setAttribute("aria-expanded", "false");
      }

      if (selected !== activeLocale) location.reload();
      else updatePicker(selected);
    }, true);
  }

  function loadArabicTranslator() {
    document.documentElement.style.visibility = "hidden";

    const script = document.createElement("script");
    script.src = (route.basePath || "") + "/assets/elven-ar.js?v=" + AR_TRANSLATOR_VERSION;
    script.async = true;
    script.onload = function () {
      document.documentElement.style.visibility = "";
    };
    script.onerror = function () {
      document.documentElement.style.visibility = "";
    };
    document.head.appendChild(script);
  }

  function setup() {
    route = getRoute();

    if (route.legacyLocale || route.isEnglishCatalog) {
      const saved = readLocale();
      if (route.legacyLocale === "ar") saveLocale("ar");
      else if (!saved) saveLocale("fa");
      location.replace(pageUrl().href);
      return;
    }

    activeLocale = readLocale();
    document.documentElement.lang = activeLocale;
    document.documentElement.dir = "rtl";

    updatePicker(activeLocale);
    normalizeInternalLinks();
    normalizeCanonicalMetadata();
    bindPicker();

    if (activeLocale === "ar") loadArabicTranslator();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();