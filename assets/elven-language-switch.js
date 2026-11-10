(function () {
  "use strict";
  if (new URLSearchParams(location.search).has("__elvenTranslationSource")) return;

  const SUPPORTED = new Set(["fa", "ar"]);
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
      return "ar/catalog.html";
    }
    return (locale === "fa" ? "" : "ar/") + current;
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
      if (/^\/en\//i.test(pathname)) pathname = pathname.replace(/^\/en\//i, "/");
      if (/^\/catalog-en\.html$/i.test(pathname)) pathname = "/catalog-fa.html";

      // Keep home/logo links in the visitor's chosen language.
      if (pathname === "/index.html" || pathname === "/") {
        pathname = "/" + pathFor(route.locale, "index.html");
      } else if (isOldDomain && route.locale !== "fa" && !/^\/(en|ar)\//.test(pathname)) {
        pathname = "/" + route.locale + pathname;
      }
      target = new URL((base || "") + pathname + target.search + target.hash, location.origin);
      if (anchor.href !== target.href) anchor.setAttribute("href", target.href);
    };
    document.querySelectorAll("a[href]").forEach(normalize);
    // Re-check the destination at click time as well, including links created by other scripts.
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
    const base = route.basePath || "";
    let pagePath = location.pathname.slice(base.length);
    while (pagePath.startsWith("/")) pagePath = pagePath.slice(1);
    if (!pagePath) pagePath = "index.html";
    const canonicalUrl = new URL((base ? base + "/" : "/") + pagePath, location.origin);
    canonicalUrl.search = "";
    canonicalUrl.hash = "";
    document.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang]').forEach(function (link) {
      const rel = (link.getAttribute("rel") || "").toLowerCase();
      const lang = (link.getAttribute("hreflang") || "").toLowerCase();
      let path = pagePath;
      const withoutLocale = pagePath.startsWith("en/") || pagePath.startsWith("ar/") ? pagePath.slice(3) : pagePath;
      if (rel === "alternate" && (lang === "fa" || lang === "x-default")) path = withoutLocale;
      if (rel === "alternate" && lang === "en") { link.remove(); return; }
      if (rel === "alternate" && lang === "ar") path = "ar/" + withoutLocale;
      const isCatalog = pagePath === "catalog-fa.html" || pagePath === "catalog-en.html" || pagePath === "ar/catalog.html";
      if (isCatalog) {
        if (lang === "fa" || lang === "x-default") path = "catalog-fa.html";
        if (lang === "en") { link.remove(); return; }
        if (lang === "ar") path = "ar/catalog.html";
      }
      link.href = new URL((base ? base + "/" : "/") + path, location.origin).href;
    });
    document.querySelectorAll('meta[property="og:url"], meta[name="twitter:url"]').forEach(function (meta) {
      meta.setAttribute("content", canonicalUrl.href);
    });
  }

  function updatePicker(locale) {
    const picker = document.getElementById("languagePicker");
    if (!picker) return;
    const names = { fa: "فارسی", ar: "العربية" };
    picker.querySelectorAll('[data-language="en"]').forEach(function (option) { option.remove(); });
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
        document.documentElement.dir = "rtl";
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

    if (route.locale === "en") {
      document.documentElement.style.visibility = "hidden";
      location.replace(urlFor("fa", route.current).href);
      return;
    }
    const locale = route.locale;
    document.documentElement.lang = locale;
    document.documentElement.dir = "rtl";
    if (preferred) saveLocale(preferred);
    updatePicker(locale);
    normalizeInternalLinks();
    normalizeCanonicalMetadata();
    bindPicker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();