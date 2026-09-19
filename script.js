document.addEventListener("DOMContentLoaded",()=>{
  const clear=document.querySelector("[data-clear]");
  clear?.addEventListener("click",()=>{
    document.querySelectorAll(".filters input[type=checkbox]").forEach(i=>i.checked=false);
  });
  document.querySelector("[data-apply]")?.addEventListener("click",e=>{
    const b=e.currentTarget,old=b.innerHTML;b.innerHTML="Filters Applied ✓";setTimeout(()=>b.innerHTML=old,1300);
  });
  document.querySelector("[data-search]")?.addEventListener("click",()=>document.querySelector("#products")?.scrollIntoView({behavior:"smooth"}));
  document.querySelector("[data-menu]")?.addEventListener("click",()=>document.querySelector(".nav")?.classList.toggle("mobile-open"));
  const modal=document.querySelector("#productModal");
  const productTitle=document.querySelector("#productModalTitle");
  const productCategory=document.querySelector("#detailCategory");
  const productDesc=document.querySelector("#detailDescription");
  const productCards=document.querySelectorAll(".category-card[data-product]");
  const closeProduct=()=>{modal?.classList.remove("is-open");modal?.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open")};
  const openProduct=(card)=>{
    if(!modal)return;
    const title=card.querySelector("h3")?.textContent?.trim() || "Product Details";
    const category=card.querySelector(".pill")?.textContent?.trim() || "Food Products";
    productTitle.textContent=title;
    productCategory.textContent=category;
    productDesc.textContent=title+" — carefully selected for international markets, with export-focused sourcing and quality standards.";
    modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");
  };
  productCards.forEach(card=>{
    card.addEventListener("click",e=>{
      if(e.target.closest("a"))return;
      openProduct(card);
    });
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openProduct(card)}});
  });
  document.querySelectorAll("[data-close-product]").forEach(el=>el.addEventListener("click",closeProduct));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProduct()});
  document.querySelectorAll("[data-detail-tab]").forEach(tab=>tab.addEventListener("click",()=>{
    document.querySelectorAll("[data-detail-tab]").forEach(x=>x.classList.remove("active"));
    tab.classList.add("active");
  }));

});