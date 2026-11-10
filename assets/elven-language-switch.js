(function () {
  "use strict";
  if (new URLSearchParams(location.search).has("__elvenTranslationSource")) return;

  const SUPPORTED = new Set(["fa", "en", "ar"]);
  const STORAGE_KEY = "elvenLanguagePreference";
  const OLD_HOSTS = new Set(["mohajer-foodstuff.com", "www.mohajer-foodstuff.com"]);
  let route;

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
    let path = location.pathname;
    if (basePath && path.startsWith(basePath + "/")) path = path.slice(basePath.length + 1);
    else path = path.replace(/^\/+/, "");
    const parts = path.split("/").filter(Boolean);
    let locale = "fa";
    if (parts[0] === "en" || parts[0] === "ar") locale = parts.shift();
    const current = parts.join("/") || "index.html";
    const isCatalog = /(^|\/)catalog(?:-fa|-en)?\.html$/i.test(current);
    return { basePath, current, locale, isCatalog };
  }

  function pathFor(locale, current) {
    if (route.isCatalog) {
      if (locale === "fa") return "catalog-fa.html";
      if (locale === "en") return "catalog-en.html";
      return "ar/catalog.html";
    }
    return (locale === "fa" ? "" : locale + "/") + current;
  }

  function urlFor(locale, current) {
    const url = new URL((route.basePath || "") + "/" + pathFor(locale, current), location.origin);
    url.search = location.search;
    url.hash = location.hash;
    return url;
  }

  function saveLocale(locale) {
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
    return SUPPORTED.has(cookieLocale) ? cookieLocale : "";
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

      let pathname = target.pathname;
      const base = route.basePath || "";
      if (base && pathname.startsWith(base + "/")) pathname = pathname.slice(base.length);
      if (!pathname || pathname === "/") pathname = "/index.html";

      // Keep home/logo links in the visitor's chosen language.
      if (pathname === "/index.html" || pathname === "/") {
        pathname = "/" + pathFor(route.locale, "index.html");
      } else if (isOldDomain && route.locale !== "fa" && !/^\/(en|ar)\//.test(pathname)) {
        pathname = "/" + route.locale + pathname;
      }
      target = new URL((base || "") + pathname + target.search + target.hash, location.origin);
      anchor.setAttribute("href", target.href);
    };
    document.querySelectorAll("a[href]").forEach(normalize);
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

  function updatePicker(locale) {
    const picker = document.getElementById("languagePicker");
    if (!picker) return;
    const names = { fa: "فارسی", en: "English", ar: "العربية" };
    const current = picker.querySelector(".language-current");
    if (current) current.textContent = names[locale];
    picker.querySelectorAll("[data-language]").forEach(function (option) {
      const active = option.dataset.language === locale;
      option.classList.toggle("is-current", active);
      if (active) {
        option.setAttribute("role", "menuitemradio");
        option.setAttribute("aria-checked", "true");
      } else {
        option.setAttribute("role", "menuitem");
        option.removeAttribute("aria-checked");
      }
      option.setAttribute("aria-disabled", option.dataset.language === "ru" ? "true" : "false");
    });
  }

  function bindPicker() {
    const menu = document.querySelector(".language-menu");
    const picker = document.getElementById("languagePicker");
    if (!menu || menu.dataset.localeSwitchReady === "1") return;
    menu.dataset.localeSwitchReady = "1";
    menu.addEventListener("click", function (event) {
      const option = event.target.closest("[data-language]");
      if (!option) return;
      const selected = option.dataset.language;
      if (!SUPPORTED.has(selected)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      saveLocale(selected);
      const trigger = picker && picker.querySelector(".language-trigger");
      if (picker) picker.classList.remove("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      const target = urlFor(selected, route.current);
      if (target.href !== location.href) location.assign(target.href);
      else {
        document.documentElement.lang = selected;
        document.documentElement.dir = selected === "en" ? "ltr" : "rtl";
        updatePicker(selected);
      }
    }, true);
  }

  function setup() {
    route = getRoute();
    const preferred = readLocale();
    if (preferred && preferred !== route.locale) {
      // Avoid showing the wrong language while restoring the visitor's choice.
      document.documentElement.style.visibility = "hidden";
      location.replace(urlFor(preferred, route.current).href);
      return;
    }

    const locale = route.locale;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "en" ? "ltr" : "rtl";
    if (preferred) saveLocale(preferred);
    updatePicker(locale);
    normalizeInternalLinks();
    bindPicker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();