document.addEventListener("DOMContentLoaded",()=>{const params=new URLSearchParams(window.location.search);const key=params.get("product")||"Yeast Products";const products={
"Dairy & Milk Powders":{category:"Dairy & Milk Powders",description:"Premium Dairy Ingredients for Global Markets"},
"Pasta & Macaroni":{category:"Pasta & Macaroni",description:"Quality Pasta Products for Global Markets"},
"Canned Foods":{category:"Canned Foods",description:"Quality Canned Products for Global Markets"},
"Beverages & Juices":{category:"Beverages & Juices",description:"Freshness and Quality for Global Markets"},
"Glucose":{category:"Glucose",description:"High-Quality Glucose for Food Industries"},
"Corn & Wheat Starch":{category:"Corn & Wheat Starch",description:"Reliable Starch Solutions for Global Markets"},
"Tomato Paste":{category:"Tomato Paste",description:"Rich Flavor and Quality for Global Markets"},
"Baking Soda":{category:"Baking Soda",description:"Premium Baking Ingredients for Food Industries"},
"Yeast":{category:"Yeast",description:"Quality Yeast Products for Better Baking"},
"Yeast Products":{category:"Yeast Products",description:"Premium Yeast for Quality Baking Worldwide"}};const product=products[key]||products["Yeast Products"];const title=document.querySelector("#productTitle");const category=document.querySelector("#detailCategory");const description=document.querySelector("#productDescription");if(title)title.textContent=key;if(category)category.innerHTML='<i class="fas fa-leaf"></i> '+product.category;if(description)description.textContent=product.description;document.title=key+" | Mohajer Trading Group";});