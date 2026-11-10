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

    const englishPagesReady = new Set([
      "index.html", "about.html", "contact.html", "departments.html", "product.html",
      "yeast-product.html", "pasta-product.html", "baking-soda-product.html",
      "canned-food-product.html", "glucose-starch-product.html",
      "milk-powder-product.html", "sugar-product.html", "tomato-paste-product.html"
    ]);

    const basePath = getSiteBasePath();
    const pathname = location.pathname;
    const localPath = basePath && pathname.startsWith(basePath + "/")
      ? pathname.slice(basePath.length)
      : pathname;
    const segments = localPath.split("/").filter(Boolean);
    const prefix = ["ar", "en"].includes(segments[0]) ? segments[0] : "fa";
    const current = (prefix === "fa" ? segments : segments.slice(1)).join("/") || "index.html";
    const englishReady = englishPagesReady.has(current);
    const englishOption = menu.querySelector('[data-language="en"]');

    // Make English available only when a matching English page really exists.
    if (englishReady && englishOption) {
      englishOption.classList.remove("is-coming");
      englishOption.setAttribute("aria-disabled", "false");
      const status = englishOption.querySelector(".language-status");
      if (status) status.textContent = prefix === "ar" ? "متاح" : prefix === "en" ? "Active" : "در دسترس";

      if (prefix === "en") {
        englishOption.classList.add("is-current");
        englishOption.setAttribute("role", "menuitemradio");
        englishOption.setAttribute("aria-checked", "true");
        const persianOption = menu.querySelector('[data-language="fa"]');
        if (persianOption) {
          persianOption.classList.remove("is-current");
          persianOption.setAttribute("role", "menuitem");
          persianOption.removeAttribute("aria-checked");
          persianOption.setAttribute("aria-disabled", "false");
          const persianStatus = persianOption.querySelector(".language-status");
          if (persianStatus) persianStatus.textContent = "Switch";
        }
      }
    }

    menu.addEventListener("click", function (event) {
      const option = event.target.closest("[data-language]");
      if (!option) return;

      const selected = option.dataset.language;
      if (!["fa", "ar", "en"].includes(selected)) return;

      if (option.getAttribute("aria-disabled") === "true" || option.hasAttribute("disabled")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      const isCatalogPage = ["catalog.html", "catalog-fa.html", "catalog-en.html"].includes(current);
      if (selected === "en" && !englishReady && !isCatalogPage) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }

      if (prefix === selected) {
        menu.closest(".language-picker")?.classList.remove("is-open");
        return;
      }

      let target;
      if (isCatalogPage) {
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