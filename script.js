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
});