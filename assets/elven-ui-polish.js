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
  var pinIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
  var arrowIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 18-6-6 6-6"/></svg>';
  var globeIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-3 3-3 15 0 18M12 3c3 3 3 15 0 18"/></svg>';
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
          '<a href="tel:+989153028367">'+phoneIcon+'<bdi dir="ltr">+98 915 302 8367</bdi></a>',
          '<a href="tel:+989155551965">'+phoneIcon+'<bdi dir="ltr">+98 915 555 1965</bdi></a>',
          '<a href="tel:+985137057126">'+phoneIcon+'<bdi dir="ltr">+98 513 705 7126</bdi></a>',
          '<a href="mailto:info@mohajer-food.com">'+mailIcon+'<bdi dir="ltr">info@mohajer-food.com</bdi></a>',
          '<div class="elven-mobile-reference-address">'+pinIcon+'<span>مشهد، میدان جانباز، پاژ اداری ۲، طبقه ۳، واحد ۳۱۳</span></div>',
        '</address>',
        '<div class="elven-mobile-reference-social" aria-label="شبکه‌های اجتماعی"></div>',
        '<div class="elven-mobile-reference-bottom">',
          '<div class="elven-mobile-reference-world">'+globeIcon+'<span>صادرات به سراسر جهان</span>'+globeIcon+'</div>',
          '<small>© ۱۴۰۵ بازرگانی مهاجر — تمامی حقوق محفوظ است.</small>',
        '</div>'
      ].join('');
      var originalSocial=footer.querySelector('.footer-social-links');
      var container=panel.querySelector('.elven-mobile-reference-social');
      if(originalSocial){var socialCopy=originalSocial.cloneNode(true);container.appendChild(socialCopy);}
      else container.remove();
      footer.appendChild(panel);
      footer.classList.add('has-elven-mobile-reference-footer');
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
