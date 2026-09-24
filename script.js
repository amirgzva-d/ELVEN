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

  /* Featured card: use the complete image as the card background.
     The text remains readable on the left while the image fills the full card. */
  const featured=document.querySelector(".category-card--featured");
  if(featured){
    const style=document.createElement("style");
    style.textContent=`
      .category-card--featured{
        display:block !important;
        min-height:280px;
        position:relative;
        overflow:hidden;
        isolation:isolate;
      }
      .category-card--featured .category-image{
        position:absolute !important;
        inset:0 !important;
        width:100% !important;
        height:100% !important;
        min-height:0 !important;
        margin:0 !important;
        background-size:cover !important;
        background-position:center center !important;
        z-index:0;
      }
      .category-card--featured::after{
        content:"";
        position:absolute;
        inset:0;
        z-index:1;
        pointer-events:none;
        background:linear-gradient(90deg,
          rgba(7,91,77,1) 0%,
          rgba(7,91,77,.98) 27%,
          rgba(7,91,77,.86) 39%,
          rgba(7,91,77,.48) 54%,
          rgba(7,91,77,.12) 70%,
          rgba(7,91,77,0) 100%
        );
      }
      .category-card--featured .featured-copy{
        position:relative !important;
        z-index:2 !important;
        width:45%;
        height:100%;
        min-height:280px;
      }
      @media (max-width:900px){
        .category-card--featured .featured-copy{width:58%;}
      }
      @media (max-width:600px){
        .category-card--featured .featured-copy{width:72%;}
      }
    `;
    document.head.appendChild(style);
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
