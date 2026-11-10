(function () {
  "use strict";

  function getSiteBasePath() {
    const marker = "/assets/elven-language-switch.js";
    const tag = Array.from(document.scripts).find(function (item) {
      try { return new URL(item.src, location.href).pathname.endsWith(marker); }
      catch (_) { return false; }
    });
    if (!tag) return "";
    const pathname = new URL(tag.src, location.href).pathname;
    return pathname.slice(0, pathname.lastIndexOf(marker)).replace(/\/+$/, "");
  }

  function setup() {
    const menu = document.querySelector(".language-menu");
    if (!menu || menu.dataset.localeSwitchReady === "1") return;
    menu.dataset.localeSwitchReady = "1";

    menu.addEventListener("click", function (event) {
      const option = event.target.closest("[data-language]");
      if (!option) return;

      const selected = option.dataset.language;
      if (!["fa", "ar", "en"].includes(selected)) return;

      // Never navigate when a language option is visibly marked as unavailable.
      if (option.getAttribute("aria-disabled") === "true" || option.hasAttribute("disabled")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      const basePath = getSiteBasePath();
      const pathname = location.pathname;
      const localPath = basePath && pathname.startsWith(basePath + "/")
        ? pathname.slice(basePath.length)
        : pathname;
      const segments = localPath.split("/").filter(Boolean);
      const prefix = ["ar", "en"].includes(segments[0]) ? segments[0] : "fa";
      const current = (prefix === "fa" ? segments : segments.slice(1)).join("/") || "index.html";

      // The English edition currently has full counterparts only for these pages.
      // Keep other product-detail pages in their original language until their
      // same-layout English versions are published, rather than sending visitors to 404s.
      const englishPagesReady = new Set([
        "index.html", "about.html", "contact.html", "departments.html", "product.html"
      ]);
      const isCatalogPage = ["catalog.html", "catalog-fa.html", "catalog-en.html"].includes(current);
      if (selected === "en" && !englishPagesReady.has(current) && !isCatalogPage) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      if (prefix === selected) {
        menu.closest(".language-picker")?.classList.remove("is-open");
        return;
      }

      let target;
      if (current === "catalog.html" || current === "catalog-fa.html" || current === "catalog-en.html") {
        if (selected === "fa") target = "catalog-fa.html";
        else if (selected === "ar") target = "ar/catalog.html";
        else target = "catalog-en.html";
      } else {
        target = selected === "fa" ? current : selected + "/" + current;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign(basePath + "/" + target + location.search + location.hash);
    }, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();
