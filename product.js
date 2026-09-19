document.addEventListener("DOMContentLoaded",()=>{
  const params=new URLSearchParams(window.location.search);
  const key=params.get("product") || "Food & Beverages";
  const products={
    "Food & Beverages":{category:"Food Products",description:"Premium food and beverage products carefully sourced from trusted Iranian producers and prepared for international markets.",image:"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790848/file_00000000597c81f589a9c22488b94062_im7vpl.webp"},
    "Dairy Products":{category:"Dairy Products",description:"Selected dairy products prepared for reliable international supply and distribution.",image:"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790985/file_00000000069081f59dd1062c306b79d6_xswabn.webp"},
    "Baking & Bakery":{category:"Baking & Bakery",description:"Bakery products and ingredients selected for consistent quality and export requirements.",image:"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790985/file_00000000131c81f5b9ae3db5698b2353_veutq9.webp"},
    "Ingredients":{category:"Ingredients",description:"High-quality ingredients for food manufacturers and international production needs.",image:"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790436/file_00000000a02c81f592a0694cdd0fa0f7_ksfqoc.png"},
    "Tomato Products":{category:"Tomato Products",description:"Tomato products selected for rich taste, dependable quality and export supply.",image:"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790848/file_00000000597c81f589a9c22488b94062_im7vpl.webp"},
    "Sweeteners":{category:"Sweeteners",description:"Sweetener products suitable for industrial, food-service and manufacturing applications.",image:"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790985/file_00000000069081f59dd1062c306b79d6_xswabn.webp"},
    "Oils & Fats":{category:"Oils & Fats",description:"Selected oils and fats for food manufacturers and professional buyers.",image:"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790985/file_00000000131c81f5b9ae3db5698b2353_veutq9.webp"},
    "Personal Care":{category:"Personal Care",description:"Everyday personal care products sourced with attention to quality and dependable supply.",image:"https://res.cloudinary.com/dqhbyqftq/image/upload/v1789790436/file_00000000a02c81f592a0694cdd0fa0f7_ksfqoc.png"}
  };
  const product=products[key] || products["Food & Beverages"];
  const title=document.querySelector("#productTitle");
  const category=document.querySelector("#detailCategory");
  const description=document.querySelector("#productDescription");
  const image=document.querySelector("#productImage");
  if(title) title.textContent=key;
  if(category) category.innerHTML='<i class="fas fa-leaf"></i> '+product.category;
  if(description) description.textContent=product.description;
  if(image){image.src=product.image;image.alt=key;}
  document.title=key+" | Mohajer Trading Group";
});
