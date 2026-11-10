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

      const basePath = getSiteBasePath();
      const pathname = location.pathname;
      const localPath = basePath && pathname.startsWith(basePath + "/")
        ? pathname.slice(basePath.length)
        : pathname;
      const segments = localPath.split("/").filter(Boolean);
      const prefix = ["ar", "en"].includes(segments[0]) ? segments[0] : "fa";
      const current = (prefix === "fa" ? segments : segments.slice(1)).join("/") || "index.html";
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
