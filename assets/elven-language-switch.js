(function () {
  "use strict";
  function setup() {
    const menu = document.querySelector(".language-menu");
    if (!menu || menu.dataset.localeSwitchReady === "1") return;
    menu.dataset.localeSwitchReady = "1";
    menu.addEventListener("click", function (event) {
      const option = event.target.closest("[data-language]");
      if (!option) return;
      const selected = option.dataset.language;
      const isArabic = document.documentElement.lang === "ar" || location.pathname.split("/").includes("ar");
      if ((selected === "ar" && !isArabic) || (selected === "fa" && isArabic)) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const current = location.pathname.split("/").pop() || "index.html";
        let destination;
        if (isArabic) {
          destination = current === "catalog.html" ? "/catalog-fa.html" : "/" + current;
        } else {
          destination = current === "catalog-fa.html" ? "/ar/catalog.html" : "/ar/" + current;
        }
        location.assign(destination + location.search + location.hash);
      }
    }, true);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setup, { once: true });
  else setup();
})();