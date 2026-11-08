/* ELVEN UI polish v1 — existing menus/cards remain authoritative. */
(function(){
'use strict';
function init(){
  var header=document.querySelector('#siteHeader, .site-header');
  var nav=document.getElementById('siteNav')||document.getElementById('primaryNav');
  var toggle=document.getElementById('menuToggle')||(header&&header.querySelector('[data-menu]'));
  if(nav&&toggle){
    if(!toggle.hasAttribute('type'))toggle.setAttribute('type','button');
    if(!toggle.hasAttribute('aria-controls')&&nav.id)toggle.setAttribute('aria-controls',nav.id);
    function isOpen(){return nav.classList.contains('is-open')||nav.classList.contains('mobile-open')}
    function sync(){var open=isOpen();toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'بستن منو':'باز کردن منو')}
    function close(){if(!isOpen())return;nav.classList.remove('is-open','mobile-open');sync()}
    sync();
    document.addEventListener('click',function(event){
      var target=event.target;
      if(!(target instanceof Element))return;
      if(toggle.contains(target)){sync();return}
      if(nav.contains(target)){if(target.closest('a'))close();return}
      if(isOpen())close();
    });
    document.addEventListener('keydown',function(event){
      if(event.key==='Escape'&&isOpen()){close();toggle.focus({preventScroll:true})}
    });
    window.addEventListener('resize',function(){
      if(isOpen()&&getComputedStyle(toggle).display==='none')close();
    },{passive:true});
  }
  document.addEventListener('keydown',function(event){
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    var target=event.target;
    if(!(target instanceof Element))return;
    var tab=target.closest('button.tab-btn,button.pd-tab');
    if(!tab||!tab.parentElement)return;
    var tabs=Array.from(tab.parentElement.querySelectorAll('button.tab-btn,button.pd-tab')).filter(function(item){return !item.disabled&&item.offsetParent!==null});
    if(tabs.length<2)return;
    var current=tabs.indexOf(tab);if(current===-1)return;
    var next;
    if(event.key==='Home')next=0;
    else if(event.key==='End')next=tabs.length-1;
    else{
      var rtl=getComputedStyle(tab).direction==='rtl';
      var backwards=event.key===(rtl?'ArrowRight':'ArrowLeft');
      next=(current+(backwards?-1:1)+tabs.length)%tabs.length;
    }
    event.preventDefault();tabs[next].focus({preventScroll:true});tabs[next].click();
  });
  document.querySelectorAll('.partner-logo img,.brand-card img').forEach(function(img){
    if(!img.hasAttribute('decoding'))img.setAttribute('decoding','async');
    if(!img.hasAttribute('loading'))img.setAttribute('loading','lazy');
  });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
})();


/* ELVEN SMART IMAGE FIT v2 — scoped, dynamically updated product imagery. */
(function(){
'use strict';
var bgSel='.category-card:not(.category-card--featured) .category-image:not(.featured-slider):not(.combined-ingredient-image), .category-card .combined-ingredient-image > span, .product-card .product-image';
var imgSel='.canned-type-card .canned-type-photo > img, .brand-product-card .brand-product-image > img';
function bgFit(el){
 if(!el||el.classList.contains('elven-card-bg-fit'))return;
 var background=getComputedStyle(el).backgroundImage;
 if(!background||background==='none')return;
 var match=background.match(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/i);
 if(!match)return;
 el.style.setProperty('--elven-card-fit-image',match[0]);
 el.classList.add('elven-card-bg-fit');
}
function photoFit(img){
 if(!(img instanceof HTMLImageElement))return;
 var box=img.parentElement;
 if(!box||!box.matches('.canned-type-card .canned-type-photo, .brand-product-card .brand-product-image'))return;
 var src=img.currentSrc||img.getAttribute('src');
 if(!src)return;
 box.style.setProperty('--elven-card-fit-image','url('+JSON.stringify(src)+')');
 box.classList.add('elven-card-photo-fit');
}
function apply(root){
 if(!(root instanceof Element||root instanceof Document))return;
 if(root instanceof Element){
   if(root.matches(bgSel))bgFit(root);
   if(root.matches(imgSel))photoFit(root);
 }
 root.querySelectorAll(bgSel).forEach(bgFit);
 root.querySelectorAll(imgSel).forEach(photoFit);
}
function init(){
 apply(document);
 new MutationObserver(function(records){
   records.forEach(function(m){
     if(m.type==='attributes'){
       if(m.target instanceof HTMLImageElement)photoFit(m.target);
     }else m.addedNodes.forEach(function(node){if(node.nodeType===1)apply(node)});
   });
 }).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['src','srcset']});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
})();


/* ELVEN mobile reference footer — independent of existing desktop footer. */
(function(){
  'use strict';
  var phoneIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.1 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L7 10.3a16 16 0 0 0 6.7 6.7l1.9-2a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 1.8z"/></svg>';
  var mailIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>';
  var pinIcon='<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path class="elven-pin-solid" d="M12 2.25a7.25 7.25 0 0 0-7.25 7.25c0 5.08 6.33 11.55 6.6 11.82a.9.9 0 0 0 1.3 0c.27-.27 6.6-6.74 6.6-11.82A7.25 7.25 0 0 0 12 2.25Zm0 10.1a2.85 2.85 0 1 1 0-5.7 2.85 2.85 0 0 1 0 5.7Z"/></svg>';
  var arrowIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 18-6-6 6-6"/></svg>';
  var brandIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z"/><path d="M12 21V11"/><path d="M9 14l3-3 3 3"/></svg>';
  function init(){
    document.querySelectorAll('footer.site-footer, footer.site-foot.contact-page-expanded-footer').forEach(function(footer){
      if(footer.classList.contains('has-elven-mobile-reference-footer'))return;
      var panel=document.createElement('section');
      panel.className='elven-mobile-reference-footer';
      panel.setAttribute('dir','rtl');
      panel.setAttribute('aria-label','اطلاعات و راه‌های ارتباطی شرکت');
      panel.innerHTML=[
        '<div class="elven-mobile-reference-brand">',
          '<div class="elven-mobile-reference-identity"><span class="elven-mobile-reference-brand-icon">'+brandIcon+'</span>',
          '<span class="elven-mobile-reference-brand-name"><strong>بازرگانی مهاجر</strong><small>MOHAJER TRADING GROUP</small></span></div>',
          '<p>تأمین و صادرات انواع مواد غذایی ایرانی<br>با کیفیت برای بازارهای جهانی</p>',
        '</div>',
        '<nav class="elven-mobile-reference-links" aria-label="صفحات اصلی سایت">',
          '<a href="index.html"><span>صفحه اصلی</span>'+arrowIcon+'</a>',
          '<a href="index.html#products"><span>محصولات</span>'+arrowIcon+'</a>',
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
        var socialCopy=originalSocial.cloneNode(true);
        var socialItems=Array.from(socialCopy.querySelectorAll('.footer-social-link'));
        var linkedIn=socialItems.find(function(item){return item.classList.contains('footer-social-link--linkedin');});
        var instagram=socialItems.find(function(item){return item.classList.contains('footer-social-link--instagram');});
        var whatsapp=socialItems.find(function(item){return item.title==='واتساپ'||item.getAttribute('aria-label')==='گفتگو در واتساپ';});
        [linkedIn,instagram,whatsapp].forEach(function(item){if(item) socialCopy.appendChild(item);});
        container.appendChild(socialCopy);
      } else container.remove();
      footer.appendChild(panel);
      footer.classList.add('has-elven-mobile-reference-footer');
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
