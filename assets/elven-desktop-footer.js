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
          '<div class="footer-logo">',
            '<span class="footer-logo-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z"/><path d="M12 21V11"/><path d="M9 14l3-3 3 3"/></svg></span>',
            '<span class="footer-logo-text"><strong>بازرگانی مهاجر</strong><small>MOHAJER TRADING GROUP</small></span>',
          '</div>',
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

    ensureBackToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
