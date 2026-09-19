document.addEventListener("DOMContentLoaded",()=>{
  const clear=document.querySelector("[data-clear]");
  clear?.addEventListener("click",()=>{
    document.querySelectorAll(".filters input[type=checkbox]").forEach(i=>i.checked=false);
  });

  document.querySelector("[data-apply]")?.addEventListener("click",e=>{
    const b=e.currentTarget,old=b.innerHTML;
    b.innerHTML="Filters Applied ✓";
    setTimeout(()=>b.innerHTML=old,1200);
  });

  document.querySelector("[data-search]")?.addEventListener("click",()=>{
    document.querySelector("#products")?.scrollIntoView({behavior:"smooth"});
  });

  const nav=document.querySelector(".nav");
  document.querySelector("[data-menu]")?.addEventListener("click",()=>{
    nav?.classList.toggle("mobile-open");
  });

  const cards=document.querySelectorAll(".category-card[data-product]");

  cards.forEach(card=>{
    const name=card.dataset.product || "Product Details";
    const url="product.html?product="+encodeURIComponent(name.replace(/&amp;/g,"&"));
    const detailsLink=card.querySelector(".product-details-link");
    if(detailsLink) detailsLink.href=url;
    card.addEventListener("click",e=>{
      if(e.target.closest("a")) return;
      window.location.href=url;
    });
    card.addEventListener("keydown",e=>{
      if(e.key==="Enter" || e.key===" "){e.preventDefault();window.location.href=url;}
    });
  });
});
