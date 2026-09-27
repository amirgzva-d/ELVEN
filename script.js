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
  const navLinks=document.querySelectorAll(".nav a[data-nav-target]");

  /* Reference-style active navigation: click = active underline + smooth scroll. */
  const setActiveNav=(target)=>{
    navLinks.forEach(link=>{
      link.classList.toggle("active",link.dataset.navTarget===target);
    });
  };

  navLinks.forEach(link=>{
    link.addEventListener("click",e=>{
      const target=link.dataset.navTarget;
      const section=document.getElementById(target);
      e.preventDefault();
      setActiveNav(target);
      if(section) section.scrollIntoView({behavior:"smooth",block:"start"});
      nav?.classList.remove("mobile-open");
    });
  });

  const sections=[
    {id:"home",el:document.getElementById("home")},
    {id:"products",el:document.getElementById("products")},
    {id:"about",el:document.getElementById("about")},
    {id:"contact",el:document.getElementById("contact")}
  ].filter(item=>item.el);

  const updateActiveOnScroll=()=>{
    if(!sections.length)return;
    const markerY=window.scrollY+window.innerHeight*0.35;
    let active=sections[0].id;
    sections.forEach(item=>{
      if(item.el.offsetTop<=markerY) active=item.id;
    });
    setActiveNav(active);
  };

  const header=document.querySelector(".header");
  const updateHeaderOnScroll=()=>{
    header?.classList.toggle("is-scrolled",window.scrollY>24);
  };
  window.addEventListener("scroll",updateHeaderOnScroll,{passive:true});
  updateHeaderOnScroll();

  window.addEventListener("scroll",updateActiveOnScroll,{passive:true});
  updateActiveOnScroll();
  document.querySelector("[data-menu]")?.addEventListener("click",()=>{
    nav?.classList.toggle("mobile-open");
  });

  /* Featured card: premium two-image carousel — isolated to the featured card */
  const featured=document.querySelector(".category-card--featured");
  if(featured){
    const imageArea=featured.querySelector(".featured-slider");
    if(imageArea){
      const slides=imageArea.querySelectorAll(".featured-slide");
      let current=0;

      const switchSlide=()=>{
        if(slides.length!==2)return;
        const next=current===0?1:0;
        slides[current].classList.remove("is-active");
        slides[next].classList.add("is-active");
        current=next;
      };

      /* Keep each image visible for 4.2 seconds. */
      setInterval(switchSlide,4200);
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
