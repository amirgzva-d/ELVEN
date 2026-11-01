/* Mobile reveal; safe fallback: without JavaScript data remains visible. */
(()=>{
 const section=document.querySelector('.mobile-nutrition-preview');
 const button=section?.querySelector('.mobile-nutrition-toggle');
 const label=button?.querySelector('.mobile-nutrition-toggle__label');
 if(!section || !button || !label)return;
 const more=section.querySelector(':scope > .product-detail');
 function setOpen(value){
  section.classList.toggle('is-open',value);
  button.setAttribute('aria-expanded',String(value));
  button.setAttribute('aria-label',(value?'بستن جزئیات ':'دیدن جزئیات ')+(section.dataset.nutritionLabel||'محصول'));
  label.textContent=value?'بستن جزئیات':'دیدن جزئیات';
  if(more)more.open=value;
 }
 section.classList.add('is-enhanced');
 setOpen(false);
 button.addEventListener('click',()=>setOpen(!section.classList.contains('is-open')));
})();
