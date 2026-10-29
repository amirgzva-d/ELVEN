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
