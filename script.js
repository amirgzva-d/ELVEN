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

  /* Featured card: two-image crossfade slider */
  const featured=document.querySelector(".category-card--featured");
  if(featured){
    const imageArea=featured.querySelector(".category-image");
    if(imageArea){
      const featuredImages=[
        "https://res.cloudinary.com/dqhbyqftq/image/upload/v1790223610/%D8%AF%D8%B2%D9%85%D8%A7%DB%8C%D9%87_lniam0.png",
        "https://res.cloudinary.com/dqhbyqftq/image/upload/v1790223607/%D8%A7%DB%8C%DA%A9%D8%B3_%D9%BE%D8%A7%D9%88%D8%B1_ktiwap.png"
      ];
      imageArea.innerHTML=featuredImages.map((src,i)=>`<span class="featured-slide${i===0?" is-active":""}" style="background-image:url("${src}")"></span>`).join("");
      imageArea.classList.add("featured-slider");
      let current=0;
      setInterval(()=>{
        const slides=imageArea.querySelectorAll(".featured-slide");
        if(slides.length<2)return;
        slides[current].classList.remove("is-active");
        current=(current+1)%slides.length;
        slides[current].classList.add("is-active");
      },3500);
    }
  }

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

/* Featured card action — pin it to the far left-bottom corner */
