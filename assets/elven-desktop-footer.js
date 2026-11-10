/* ELVEN — shared desktop footer structure and social row.
   Runs before the mobile footer enhancer; keeps each page's existing colors. */
(function () {
  'use strict';

  var whatsappIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-4A8.1 8.1 0 1 1 20.1 11.7Z"/><path d="M9 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .5-.3 1.2-.8 1.5-.5.4-1.1.6-1.8.5-1.1-.2-2.4-.8-3.7-2-1.1-1-2-2.3-2.2-3.4-.2-.9.1-1.7.4-2.1Z"/></svg>';
  var instagramIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
  var linkedinIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="5" cy="4.7" r="1.6" fill="currentColor"/><rect x="3.3" y="9.3" width="3.4" height="11.7" rx=".45" fill="currentColor"/><path d="M10.4 21V9.3h3.4v1.55c.7-1.07 1.8-1.65 3.35-1.65 2.55 0 3.65 1.5 3.65 4.2V21h-3.55v-6.92c0-1.28-.34-1.9-1.44-1.9-1.18 0-2.01.85-2.01 2.3V21z" fill="currentColor"/></svg>';

  function socialMarkup() {
    return [
      '<span class="footer-social-caption">شبکه‌های اجتماعی</span>',
      '<a class="footer-social-link footer-social-link--whatsapp footer-social-link--whatsapp-primary" href="https://wa.me/989153028367" target="_blank" rel="noopener noreferrer" aria-label="واتساپ محمد مهاجری" title="واتساپ محمد مهاجری">' + whatsappIcon + '</a>',
      '<a class="footer-social-link footer-social-link--whatsapp footer-social-link--whatsapp-secondary" href="https://wa.me/989155551965" target="_blank" rel="noopener noreferrer" aria-label="واتساپ علیرضا تهرانی" title="واتساپ علیرضا تهرانی">' + whatsappIcon + '</a>',
      '<a class="footer-social-link footer-social-link--instagram" href="https://www.instagram.com/mohajer_trading_group?dlrf=NXNwN2F2NjR3enRj" target="_blank" rel="noopener noreferrer" aria-label="صفحه اینستاگرام بازرگانی مهاجر" title="اینستاگرام">' + instagramIcon + '</a>',
      '<span class="footer-social-link footer-social-link--linkedin" role="img" aria-label="لینکدین؛ آدرس رسمی هنوز ثبت نشده" title="لینکدین — آدرس رسمی مورد نیاز">' + linkedinIcon + '</span>'
    ].join('');
  }

  function contactFooterMarkup() {
    return [
      '<div class="footer-container">',
        '<div class="footer-brand-block">',
          '<a class="footer-logo" href="/index.html" aria-label="بازگشت به صفحه اصلی">',
            '<span class="footer-logo-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z"/><path d="M12 21V11"/><path d="M9 14l3-3 3 3"/></svg></span>',
            '<span class="footer-logo-text"><strong>بازرگانی مهاجر</strong><small>MOHAJER TRADING GROUP</small></span>',
          '</a>',
          '<p>محصولات غذایی ممتاز ایرانی، با دقت انتخاب و برای تجارت بین‌المللی مطمئن آماده می‌شوند.</p>',
        '</div>',
        '<div class="footer-col"><h4>شرکت</h4><ul>',
          '<li><a href="about.html">درباره ما</a></li>',
          '<li><a href="about.html">داستان ما</a></li>',
          '<li><a href="index.html#products">محصولات</a></li>',
          '<li><a href="departments.html">دپارتمان‌ها</a></li>',
          '<li><a href="contact.html">تماس</a></li>',
        '</ul></div>',
        '<div class="footer-col"><h4>خدمات مشتریان</h4><ul>',
          '<li><a href="contact.html">درخواست قیمت</a></li>',
          '<li><a href="contact.html">پشتیبانی صادرات</a></li>',
          '<li><a href="contact.html">ارسال و تحویل</a></li>',
          '<li><a href="contact.html">سوالات متداول</a></li>',
        '</ul></div>',
        '<div class="footer-col"><h4>تماس با ما</h4>',
          '<div class="footer-contact-item footer-contact-item--phone"><div><strong><a href="tel:+989153028367">09153028367</a></strong><small>محمد مهاجری</small></div></div>',
          '<div class="footer-contact-item footer-contact-item--phone"><div><strong><a href="tel:+989155551965">09155551965</a></strong><small>علیرضا تهرانی</small></div></div>',
          '<div class="footer-contact-item footer-contact-item--landline"><div><strong><a href="tel:+985137057126" dir="ltr">+98 513 705 7126</a></strong><small>تلفن ثابت دفتر</small></div></div>',
          '<div class="footer-contact-item footer-contact-item--email"><div><strong><a href="mailto:info@mohajer-food.com">info@mohajer-food.com</a></strong><small>ایمیل رسمی</small></div></div>',
          '<div class="footer-social-links" role="group" aria-label="شبکه‌های اجتماعی">' + socialMarkup() + '</div>',
        '</div>',
      '</div>',
      '<div class="footer-bottom"><div>© ۱۴۰۴ بازرگانی مهاجر — تمامی حقوق محفوظ است.</div><div class="designer">طراحی و توسعه اختصاصی</div></div>'
    ].join('');
  }

  function ensureBackToTop() {
    if (window.matchMedia && !window.matchMedia('(min-width: 901px)').matches) return;
    if (document.querySelector('.back-top, .elven-desktop-back-top')) return;

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'elven-desktop-back-top';
    button.setAttribute('aria-label', 'بازگشت به بالای صفحه');
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    var update = function () {
      button.classList.toggle('is-visible', window.scrollY > 240);
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    document.body.appendChild(button);
  }

  function localizedHomeUrl() {
    var segments = (window.location.pathname || '/').split('/').filter(Boolean);
    var locale = segments.length && /^(ar|en)$/i.test(segments[0]) ? '/' + segments[0].toLowerCase() : '';
    return locale + '/index.html';
  }

  function closeNavigationMenu(link) {
    var header = link.closest('header');
    var nav = link.closest('nav');
    if (nav) nav.classList.remove('mobile-open', 'is-open', 'elven-mobile-drawer-portal');
    var backdrop = header && header.querySelector('.mobile-menu-backdrop');
    if (backdrop) {
      backdrop.classList.remove('is-visible', 'elven-mobile-backdrop-portal');
      backdrop.setAttribute('aria-hidden', 'true');
    }
    if (header) {
      header.querySelectorAll('[data-menu], #menuToggle, #contactNavToggle, .mobile-toggle').forEach(function (toggle) {
        toggle.classList.remove('is-open', 'active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    }
    document.body.classList.remove('menu-drawer-open', 'pd-menu-open');
    document.documentElement.classList.remove('menu-drawer-open');
  }

  function bindHomeMenuNavigation() {
    if (window.__ELVEN_HOME_MENU_NAVIGATION_FIX__) return;
    window.__ELVEN_HOME_MENU_NAVIGATION_FIX__ = true;

    document.addEventListener('click', function (event) {
      var target = event.target;
      if (target && target.nodeType !== 1) target = target.parentElement;
      if (!target || typeof target.closest !== 'function') return;

      var link = target.closest('header nav a, header .nav a, header .main-nav a, #primaryNav a, #siteNav a');
      if (!link) return;

      var label = (link.textContent || '').replace(/\\s+/g, ' ').trim();
      var navTarget = (link.getAttribute('data-nav-target') || '').toLowerCase();
      var i18nTarget = (link.getAttribute('data-i18n') || '').toLowerCase();
      var isHomeLink = navTarget === 'home' || i18nTarget === 'navhome' ||
        /^(خانه|صفحه اصلی|الرئيسية|home)$/i.test(label);
      if (!isHomeLink) return;

      event.preventDefault();
      closeNavigationMenu(link);

      var destination = new URL(localizedHomeUrl() + '#home', window.location.origin);
      if (destination.pathname === window.location.pathname) {
        if (window.history && window.history.replaceState) {
          window.history.replaceState(window.history.state, '', destination.pathname + destination.hash);
        }
        var homeSection = document.querySelector('main#home, #home');
        if (homeSection) homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.assign(destination.href);
      }
    }, true);
  }

  function normalizeSiteNavigationLinks() {
    var home = localizedHomeUrl();
    var homeTarget = home + '#home';
    var productsTarget = home + '#products';
    var homeLabels = /^(خانه|صفحه اصلی|الرئيسية|home)$/i;
    var productLabels = /^(محصولات|المنتجات|products)$/i;

    document.querySelectorAll('header a.brand, header a.site-logo, header .logo a').forEach(function (link) {
      link.setAttribute('href', home);
      if (!link.hasAttribute('aria-label')) link.setAttribute('aria-label', 'بازگشت به صفحه اصلی');
    });

    document.querySelectorAll('header nav a, header .nav a, header .main-nav a').forEach(function (link) {
      var label = (link.textContent || '').replace(/\s+/g, ' ').trim();
      var target = (link.getAttribute('data-nav-target') || '').toLowerCase();
      var href = link.getAttribute('href') || '';
      if (target === 'home' || homeLabels.test(label) || /#home$/.test(href)) {
        link.setAttribute('href', homeTarget);
      } else if (target === 'products' || productLabels.test(label) || /#products$/.test(href)) {
        link.setAttribute('href', productsTarget);
      }
    });

    document.querySelectorAll('footer .footer-logo').forEach(function (logo) {
      if (logo.tagName.toLowerCase() !== 'a') {
        var link = document.createElement('a');
        link.className = logo.className;
        link.setAttribute('aria-label', 'بازگشت به صفحه اصلی');
        while (logo.firstChild) link.appendChild(logo.firstChild);
        logo.parentNode.replaceChild(link, logo);
        logo = link;
      }
      logo.setAttribute('href', home);
      logo.setAttribute('aria-label', 'بازگشت به صفحه اصلی');
    });

    document.querySelectorAll('footer a').forEach(function (link) {
      var label = (link.textContent || '').replace(/\s+/g, ' ').trim();
      var href = link.getAttribute('href') || '';
      if (homeLabels.test(label) || href.endsWith('index.html#home')) {
        link.setAttribute('href', homeTarget);
      } else if (productLabels.test(label) || href.endsWith('index.html#products')) {
        link.setAttribute('href', productsTarget);
      }
    });
  }

  function init() {
    /* Give the dedicated contact page the same four-column desktop footer.
       Keep its original classes so the approved mobile footer remains in control on phones. */
    var compactContactFooter = document.querySelector('footer.site-foot.contact-page-expanded-footer');
    if (compactContactFooter && !compactContactFooter.querySelector('.footer-container')) {
      compactContactFooter.classList.add('site-footer');
      compactContactFooter.innerHTML = contactFooterMarkup();
    }

    document.querySelectorAll('footer.site-footer .footer-social-links').forEach(function (row) {
      row.innerHTML = socialMarkup();
      row.setAttribute('role', 'group');
      row.setAttribute('aria-label', 'شبکه‌های اجتماعی');
    });

    normalizeSiteNavigationLinks();
    bindHomeMenuNavigation();
    ensureBackToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
