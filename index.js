import{a as x,S as v,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S="50870264-4cff09f0574465c81a14bcda1",P="https://pixabay.com/api/";async function g(o,t=1){const s={key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en",per_page:15,page:t},{data:a}=await x(P,{params:s});return{maxPages:Math.ceil(a.totalHits/s.per_page),images:a.hits}}const p=document.querySelector(".loader"),m=document.querySelector(".btn");function f(){p.classList.remove("hidden")}function u(){p.classList.add("hidden")}function $(){y.innerHTML=""}function h(){m.classList.remove("hidden")}function q(){m.classList.add("hidden")}const y=document.querySelector(".gallery"),T=new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:L,downloads:w})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${e}"
    />
  </a>
  <ul>
  <li><span class="spanText">Likes</span><br>${r}</li>
  <li><span class="spanText">Views</span><br>${i}</li>
  <li><span class="spanText">Comments</span><br>${L}</li>
  <li><span class="spanText">Downloads</span><br>${w}</li>
  </ul>
</li>`).join("");y.insertAdjacentHTML("beforeend",t),T.refresh()}let n=1;const d=document.querySelector(".form");d.addEventListener("submit",C);let l;async function C(o){if(o.preventDefault(),f(),$(),l=d.elements["search-text"].value.trim(),l==="")return u(),c.show({message:"❌ you must write something!!",backgroundColor:"red",position:"topRight"});try{n=1;const{images:t,maxPages:s}=await g(l,n);if(t.length===0)return c.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});b(t),n<s&&h()}catch(t){c.show({message:`Server error : ${t.message}`})}u(),d.reset()}m.addEventListener("click",M);async function M(){n++,q(),f();try{const{images:o,maxPages:t}=await g(l,n);b(o);const s=document.querySelector(".gallery-item"),{height:a}=s.getBoundingClientRect();n<t&&h(),n>=t&&c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"blue",position:"topRight"}),window.scrollBy({top:a*2,behavior:"smooth"})}catch(o){c.show({message:`Server error : ${o.message}`})}u()}
//# sourceMappingURL=index.js.map
