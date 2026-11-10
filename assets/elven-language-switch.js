(function () {
  "use strict";

  function getSiteBasePath() {
    // Derive the site's deployment base from this script's own URL.
    // Custom domains resolve to ""; project Pages URLs keep "/ELVEN".
    const marker = "/assets/elven-language-switch.js";
    const tag = Array.from(document.scripts).find(function (item) {
      try {
        return new URL(item.src, location.href).pathname.endsWith(marker);
      } catch (_) {
        return false;
      }
    });
    if (!tag) return "";
    const path = new URL(tag.src, location.href).pathname;
    return path.slice(0, path.lastIndexOf(marker)).replace(/\/+$/, "");
  }

  function setup() {
    const menu = document.querySelector(".language-menu");
    if (!menu || menu.dataset.localeSwitchReady === "1") return;
    menu.dataset.localeSwitchReady = "1";

    menu.addEventListener("click", function (event) {
      const option = event.target.closest("[data-language]");
      if (!option) return;

      const selected = option.dataset.language;
      const basePath = getSiteBasePath();
      const pathname = location.pathname;
      const localPath = basePath && pathname.startsWith(basePath + "/")
        ? pathname.slice(basePath.length)
        : pathname;

      const segments = localPath.split("/").filter(Boolean);
      const pathIsArabic = segments[0] === "ar";
      const isArabic = document.documentElement.lang === "ar" || pathIsArabic;

      if (!((selected === "ar" && !isArabic) || (selected === "fa" && isArabic))) return;

      const pageSegments = pathIsArabic ? segments.slice(1) : segments;
      const current = pageSegments.length ? pageSegments.join("/") : "index.html";
      let destination;

      if (isArabic) {
        destination = current === "catalog.html" ? "catalog-fa.html" : current;
      } else {
        destination = current === "catalog-fa.html" ? "ar/catalog.html" : "ar/" + current;
      }

      event.preventDefault();
      event.stopImmediatePropagation();
      location.assign(basePath + "/" + destination + location.search + location.hash);
    }, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();
