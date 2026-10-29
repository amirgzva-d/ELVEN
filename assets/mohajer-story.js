/* Mohajer heritage: progressive scroll-reveal effects without blocking content. */
(function(){
  'use strict';
  function init(){
    var story=document.querySelector('.mh-story');
    if(!story)return;
    var items=Array.prototype.slice.call(story.querySelectorAll('[data-mh-reveal]'));
    if(!items.length||!('IntersectionObserver' in window))return;
    if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    var observer=new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('mh-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.08,rootMargin:'0px 0px 35px 0px'});
    items.forEach(function(item){observer.observe(item)});
    story.classList.add('mh-motion-ready');
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',init,{once:true});
  }else init();
})();
