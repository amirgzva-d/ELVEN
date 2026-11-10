/* ELVEN mobile reference footer — independent of existing desktop footer. */
(function(){
  'use strict';
  var phoneIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7 10.3a16 16 0 0 0 6.7 6.7l1.9-2a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 1.8z"/></svg>';
  var mailIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>';
  var pinIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M19 10c0 5.1-7 11.2-7 11.2S5 15.1 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.1" fill="currentColor" stroke="none"/></svg>';
  var arrowIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 18-6-6 6-6"/></svg>';
  var brandIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z"/><path d="M12 21V11"/><path d="M9 14l3-3 3 3"/></svg>';
  function localizedHomeUrl(){
    var segments=(window.location.pathname||'/').split('/').filter(Boolean);
    var locale=segments.length&&/^(ar|en)$/i.test(segments[0])?'/'+segments[0].toLowerCase():'';
    return locale+'/index.html';
  }
  function init(){
    var homeHref=localizedHomeUrl();
    var productsHref=homeHref+'#products';
    document.querySelectorAll('footer.site-footer, footer.site-foot.contact-page-expanded-footer, footer.catalog-contact-footer').forEach(function(footer){
      if(footer.classList.contains('has-elven-mobile-reference-footer'))return;
      var panel=document.createElement('section');
      panel.className='elven-mobile-reference-footer';
      panel.setAttribute('dir','rtl');
      panel.setAttribute('aria-label','اطلاعات و راه‌های ارتباطی شرکت');
      panel.innerHTML=[
        '<div class="elven-mobile-reference-brand">',
          '<a class="elven-mobile-reference-identity" href="'+homeHref+'" aria-label="بازگشت به صفحه اصلی" style="color:inherit;text-decoration:none"><span class="elven-mobile-reference-brand-icon">'+brandIcon+'</span>',
          '<span class="elven-mobile-reference-brand-name"><strong>بازرگانی مهاجر</strong><small>MOHAJER TRADING GROUP</small></span></a>',
          '<p>تأمین و صادرات انواع مواد غذایی ایرانی<br>با کیفیت برای بازارهای جهانی</p>',
        '</div>',
        '<nav class="elven-mobile-reference-links" aria-label="صفحات اصلی سایت">',
          '<a href="'+homeHref+'#home"><span>صفحه اصلی</span>'+arrowIcon+'</a>',
          '<a href="'+productsHref+'"><span>محصولات</span>'+arrowIcon+'</a>',
          '<a href="about.html"><span>درباره ما</span>'+arrowIcon+'</a>',
          '<a href="contact.html"><span>تماس با ما</span>'+arrowIcon+'</a>',
        '</nav>',
        '<address class="elven-mobile-reference-contact">',
          '<a class="elven-mobile-person-contact" href="https://wa.me/989153028367" target="_blank" rel="noopener noreferrer" aria-label="پیام در واتساپ به محمد مهاجری، +98 915 302 8367">'+
            '<span class="elven-mobile-person-details"><strong>محمد مهاجری</strong><bdi dir="ltr">+98 915 302 8367</bdi></span>'+"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.55 0 .2 5.35.2 11.93c0 2.1.55 4.16 1.6 5.98L.1 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.55-8.43ZM12.14 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 0 1 2.91 7.04c0 5.49-4.46 9.95-9.95 9.95Zm5.46-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.23 5.12 4.53.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z\"/></svg>"+'</a>',
          '<a class="elven-mobile-person-contact" href="https://wa.me/989155551965" target="_blank" rel="noopener noreferrer" aria-label="پیام در واتساپ به علیرضا تهرانی، +98 915 555 1965">'+
            '<span class="elven-mobile-person-details"><strong>علیرضا تهرانی</strong><bdi dir="ltr">+98 915 555 1965</bdi></span>'+"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M20.52 3.48A11.8 11.8 0 0 0 12.13 0C5.55 0 .2 5.35.2 11.93c0 2.1.55 4.16 1.6 5.98L.1 24l6.25-1.64a11.9 11.9 0 0 0 5.78 1.48h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.55-8.43ZM12.14 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.85 9.85 0 0 1-1.52-5.26c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.16 1.04 7.04 2.92a9.9 9.9 0 0 1 2.91 7.04c0 5.49-4.46 9.95-9.95 9.95Zm5.46-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.47.13-.62.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.23 5.12 4.53.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35Z\"/></svg>"+'</a>',
          '<a class="elven-mobile-meta-contact elven-mobile-landline" href="tel:+985137057126"><span class="elven-mobile-meta-icon">'+phoneIcon+'</span><span class="elven-mobile-meta-copy"><small>تلفن ثابت</small><bdi dir="ltr">+98 513 705 7126</bdi></span></a>',
          '<a class="elven-mobile-meta-contact elven-mobile-email" href="mailto:info@mohajer-food.com"><span class="elven-mobile-meta-icon">'+mailIcon+'</span><span class="elven-mobile-meta-copy"><small>ایمیل</small><bdi dir="ltr">info@mohajer-food.com</bdi></span></a>',
        '</address>',
        '<div class="elven-mobile-reference-social" aria-label="شبکه‌های اجتماعی"></div>',
        '<div class="elven-mobile-reference-address"><span class="elven-mobile-address-icon">'+pinIcon+'</span><span class="elven-mobile-address-copy"><small>نشانی دفتر مرکزی</small><bdi>مشهد، میدان جانباز، پاژ اداری ۲، طبقه ۳، واحد ۳۱۳</bdi></span></div>',
        '<div class="elven-mobile-reference-bottom">',
          '<div class="elven-mobile-reference-world"><span>صادرات به سراسر جهان</span></div>',
          '<small>© ۱۴۰۵ بازرگانی مهاجر — تمامی حقوق محفوظ است.</small>',
        '</div>'
      ].join('');
      var originalSocial=footer.querySelector('.footer-social-links');
      var container=panel.querySelector('.elven-mobile-reference-social');
      if(originalSocial){
        var mobileSocial=document.createElement('div');
        mobileSocial.className='footer-social-links';
        mobileSocial.setAttribute('role','group');
        mobileSocial.setAttribute('aria-label','شبکه‌های اجتماعی');

        var whatsappIcon='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L4 20l1.2-4A8.1 8.1 0 1 1 20.1 11.7Z"/><path d="M9 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .5-.3 1.2-.8 1.5-.5.4-1.1.6-1.8.5-1.1-.2-2.4-.8-3.7-2-1.1-1-2-2.3-2.2-3.4-.2-.9.1-1.7.4-2.1Z"/></svg>';
        var instagramIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>';
        var linkedinIcon='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="5" cy="4.7" r="1.6" fill="currentColor"/><rect x="3.3" y="9.3" width="3.4" height="11.7" rx=".45" fill="currentColor"/><path d="M10.4 21V9.3h3.4v1.55c.7-1.07 1.8-1.65 3.35-1.65 2.55 0 3.65 1.5 3.65 4.2V21h-3.55v-6.92c0-1.28-.34-1.9-1.44-1.9-1.18 0-2.01.85-2.01 2.3V21z" fill="currentColor"/></svg>';

        var whatsappPrimary=document.createElement('a');
        whatsappPrimary.className='footer-social-link footer-social-link--whatsapp footer-social-link--whatsapp-primary';
        whatsappPrimary.href='https://wa.me/989153028367';
        whatsappPrimary.target='_blank';
        whatsappPrimary.rel='noopener noreferrer';
        whatsappPrimary.setAttribute('aria-label','واتساپ محمد مهاجری');
        whatsappPrimary.title='واتساپ محمد مهاجری';
        whatsappPrimary.innerHTML=whatsappIcon;

        var whatsappSecondary=document.createElement('a');
        whatsappSecondary.className='footer-social-link footer-social-link--whatsapp footer-social-link--whatsapp-secondary';
        whatsappSecondary.href='https://wa.me/989155551965';
        whatsappSecondary.target='_blank';
        whatsappSecondary.rel='noopener noreferrer';
        whatsappSecondary.setAttribute('aria-label','واتساپ علیرضا تهرانی');
        whatsappSecondary.title='واتساپ علیرضا تهرانی';
        whatsappSecondary.innerHTML=whatsappIcon;

        var instagramLink=document.createElement('a');
        instagramLink.className='footer-social-link footer-social-link--instagram';
        instagramLink.href='https://www.instagram.com/mohajer_trading_group?dlrf=NXNwN2F2NjR3enRj';
        instagramLink.target='_blank';
        instagramLink.rel='noopener noreferrer';
        instagramLink.setAttribute('aria-label','صفحه اینستاگرام بازرگانی مهاجر');
        instagramLink.title='اینستاگرام';
        instagramLink.innerHTML=instagramIcon;

        var linkedinLink=document.createElement('span');
        linkedinLink.className='footer-social-link footer-social-link--linkedin';
        linkedinLink.setAttribute('role','img');
        linkedinLink.setAttribute('aria-label','لینکدین؛ آدرس رسمی هنوز ثبت نشده');
        linkedinLink.title='لینکدین — آدرس رسمی مورد نیاز';
        linkedinLink.innerHTML=linkedinIcon;

        /* DOM order is reversed by the RTL flex row to match the reference:
           Instagram, LinkedIn, WhatsApp, WhatsApp from left to right. */
        mobileSocial.appendChild(whatsappPrimary);
        mobileSocial.appendChild(whatsappSecondary);
        mobileSocial.appendChild(linkedinLink);
        mobileSocial.appendChild(instagramLink);
        container.appendChild(mobileSocial);
      } else container.remove();
      footer.appendChild(panel);
      footer.classList.add('has-elven-mobile-reference-footer');
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
