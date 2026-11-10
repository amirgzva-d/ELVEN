/* English translations for individual ELVEN product pages. */
(function(){
"use strict";
if(document.documentElement.lang!=="en") return;
const T={};
const normalize=v=>String(v||"").replace(/\s+/g," ").trim();
const digits=v=>v.replace(/[۰-۹٠-٩]/g,ch=>{const s="۰۱۲۳۴۵۶۷۸۹٠١٢٣٤٥٦٧٨٩";return String(s.indexOf(ch)%10);});
function translate(node){
 if(!node||node.nodeType!==Node.TEXT_NODE) return;
 const raw=node.nodeValue||"", key=normalize(raw); if(!key) return;
 let value=T[key],m;
 if(!value && (m=key.match(/^مرحله\s+(\d+)$/))) value="Step "+m[1];
 if(!value && (m=key.match(/^خمیر مایه خشک فوری شتاب مایه\s+(.+)$/))) value="Shetab Mayeh Instant Dry Yeast "+digits(m[1]);
 if(!value && (m=key.match(/^خمیر مایه خشک فوری دزمایه گلد\s+(.+)$/))) value="Dezmayeh Gold Instant Dry Yeast "+digits(m[1]);
 if(!value && (m=key.match(/^خمیر مایه نان مایه\s+(.+)$/))) value="Nan Mayeh Instant Dry Yeast "+digits(m[1]);
 if(!value && (m=key.match(/^جدول آنالیز آزمایشگاهی و ترکیبات (.+)$/))) value="Laboratory Analysis and Composition – "+(T[m[1]]||m[1]);
 if(!value && (m=key.match(/^شرایط نگهداری و انبارداری (.+)$/))) value="Storage and Warehousing Conditions – "+(T[m[1]]||m[1]);
 if(!value && (m=key.match(/^نحوه مصرف خمیر مایه (.+)$/))) value="How to Use Yeast – "+(T[m[1]]||m[1]);
 const leading=raw.match(/^\s*/)?.[0]||"", trailing=raw.match(/\s*$/)?.[0]||"";
 if(value) node.nodeValue=leading+value+trailing;
 else {const converted=digits(raw);if(converted!==raw)node.nodeValue=converted;}
}
function attrs(root){const names=["aria-label","title","alt","placeholder","content"];const els=[root,...(root.querySelectorAll?root.querySelectorAll("*"):[])].filter(Boolean);els.forEach(el=>names.forEach(n=>{if(!el.getAttribute||!el.hasAttribute(n))return;const k=normalize(el.getAttribute(n));if(T[k])el.setAttribute(n,T[k]);}));}
function walk(root){if(!root)return;if(root.nodeType===Node.TEXT_NODE){translate(root);return;}if(root.nodeType!==Node.ELEMENT_NODE)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];while(w.nextNode())nodes.push(w.currentNode);nodes.forEach(translate);attrs(root);}
function init(){walk(document.body);if(window.MutationObserver&&!window.__elvenEnglishProductObserver){window.__elvenEnglishProductObserver=new MutationObserver(records=>records.forEach(rec=>{if(rec.type==="characterData")translate(rec.target);if(rec.addedNodes)rec.addedNodes.forEach(walk);if(rec.type==="attributes")attrs(rec.target);}));window.__elvenEnglishProductObserver.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["aria-label","title","alt","placeholder","content"]});}}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();