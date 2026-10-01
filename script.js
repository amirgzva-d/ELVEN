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

  /* Track the visible page section without measuring every section on every scroll frame. */
  const sections=[
    {id:"home",el:document.getElementById("home")},
    {id:"products",el:document.getElementById("products")},
    {id:"contact",el:document.getElementById("contact")}
  ].filter(item=>item.el);

  const header=document.querySelector(".header");
  let headerScrolled=false;
  const updateHeaderOnScroll=()=>{
    const next=window.scrollY>24;
    if(next===headerScrolled)return;
    headerScrolled=next;
    header?.classList.toggle("is-scrolled",next);
  };
  window.addEventListener("scroll",updateHeaderOnScroll,{passive:true});
  updateHeaderOnScroll();

  if("IntersectionObserver" in window){
    const sectionObserver=new IntersectionObserver(entries=>{
      const visible=entries
        .filter(entry=>entry.isIntersecting)
        .sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if(visible.length){
        const section=sections.find(item=>item.el===visible[0].target);
        if(section)setActiveNav(section.id);
      }
    },{
      root:null,
      rootMargin:"-96px 0px -62% 0px",
      threshold:0
    });
    sections.forEach(item=>sectionObserver.observe(item.el));
  }

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
    const url=name==="Yeast Products" ? "yeast-product.html" : "product.html?product="+encodeURIComponent(name.replace(/&amp;/g,"&"));
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
