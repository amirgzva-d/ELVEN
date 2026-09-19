document.addEventListener("DOMContentLoaded",()=>{
  const clear=document.querySelector("[data-clear]");
  clear?.addEventListener("click",()=>{
    document.querySelectorAll(".filters input[type=checkbox]").forEach(i=>i.checked=false);
    const range=document.querySelector(".range"); if(range){range.value=range.min; document.querySelector("[data-price]").textContent="$0";}
  });
  const range=document.querySelector(".range");
  range?.addEventListener("input",()=>document.querySelector("[data-price]").textContent="$"+Number(range.value).toLocaleString());
  document.querySelector("[data-apply]")?.addEventListener("click",e=>{
    const b=e.currentTarget; const old=b.innerHTML; b.innerHTML="Filters Applied ✓"; setTimeout(()=>b.innerHTML=old,1300);
  });
  document.querySelector("[data-search]")?.addEventListener("click",()=>document.querySelector("#products")?.scrollIntoView({behavior:"smooth"}));
  document.querySelector("[data-menu]")?.addEventListener("click",()=>document.querySelector(".nav")?.classList.toggle("mobile-open"));
});