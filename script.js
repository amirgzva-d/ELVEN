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

  const modal=document.querySelector("#productModal");
  const title=document.querySelector("#productModalTitle");
  const category=document.querySelector("#detailCategory");
  const desc=document.querySelector("#detailDescription");
  const image=document.querySelector("#detailProductImage");
  const cartCount=document.querySelector(".cart-button span");
  const cards=document.querySelectorAll(".category-card[data-product]");

  const productImages={
    "Food & Beverages":"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790848/file_00000000597c81f589a9c22488b94062_im7vpl.webp",
    "Dairy Products":"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790985/file_00000000069081f59dd1062c306b79d6_xswabn.webp",
    "Baking & Bakery":"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790985/file_00000000131c81f5b9ae3db5698b2353_veutq9.webp",
    "Ingredients":"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790436/file_00000000a02c81f592a0694cdd0fa0f7_ksfqoc.png",
    "Tomato Products":"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790848/file_00000000597c81f589a9c22488b94062_im7vpl.webp",
    "Sweeteners":"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790985/file_00000000069081f59dd1062c306b79d6_xswabn.webp",
    "Oils & Fats":"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790985/file_00000000131c81f5b9ae3db5698b2353_veutq9.webp",
    "Personal Care":"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790436/file_00000000a02c81f592a0694cdd0fa0f7_ksfqoc.png"
  };

  const openProduct=card=>{
    if(!modal)return;
    const name=card.dataset.product || card.querySelector("h3")?.textContent?.trim() || "Product Details";
    title.textContent=name;
    category.textContent=name;
    desc.textContent=name+" — carefully selected for international markets, with export-focused sourcing, packaging and quality standards.";
    if(image && productImages[name]) image.src=productImages[name];
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden","false");
    document.body.classList.add("modal-open");
  };

  const closeProduct=()=>{
    modal?.classList.remove("is-open");
    modal?.setAttribute("aria-hidden","true");
    document.body.classList.remove("modal-open");
  };

  cards.forEach(card=>{
    card.addEventListener("click",e=>{
      if(e.target.closest("a")) return;
      openProduct(card);
    });
    card.addEventListener("keydown",e=>{
      if(e.key==="Enter" || e.key===" "){e.preventDefault();openProduct(card)}
    });
  });

  document.querySelectorAll("[data-close-product]").forEach(el=>el.addEventListener("click",closeProduct));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeProduct()});

  document.querySelectorAll("[data-detail-tab]").forEach(tab=>{
    tab.addEventListener("click",()=>{
      document.querySelectorAll("[data-detail-tab]").forEach(x=>x.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  document.querySelector("[data-add-quote]")?.addEventListener("click",()=>{
    const current=Number(cartCount?.textContent||0)+1;
    if(cartCount) cartCount.textContent=current;
  });
});