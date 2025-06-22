import{a as v,S as x,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const S="50870264-4cff09f0574465c81a14bcda1",q="https://pixabay.com/api/";async function g(s,t=1){const r={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en",per_page:15,page:t},{data:n}=await v(q,{params:r});return{maxPages:Math.ceil(n.totalHits/r.per_page),images:n.hits}}const f=document.querySelector(".loader"),m=document.querySelector(".btn");function p(){f.classList.remove("hidden")}function d(){f.classList.add("hidden")}function P(){y.innerHTML=""}function h(){m.classList.remove("hidden")}function $(){m.classList.add("hidden")}const y=document.querySelector(".gallery"),C=new x(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(s){const t=s.map(({webformatURL:r,largeImageURL:n,tags:e,likes:o,views:i,comments:L,downloads:w})=>`<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${e}"
    />
  </a>
  <ul>
  <li><span class="spanText">Likes</span><br>${o}</li>
  <li><span class="spanText">Views</span><br>${i}</li>
  <li><span class="spanText">Comments</span><br>${L}</li>
  <li><span class="spanText">Downloads</span><br>${w}</li>
  </ul>
</li>`).join("");y.insertAdjacentHTML("beforeend",t),C.refresh()}let a=1;const l=document.querySelector(".form");l.addEventListener("submit",T);let u;function T(s){if(s.preventDefault(),p(),P(),u=l.elements["search-text"].value.trim(),u.trim()==="")return l.reset(),d(),c.show({message:"❌ you must write something!!",backgroundColor:"red",position:"topRight"});g(u,a).then(({maxPages:t,images:r})=>{if(r.length===0)return c.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});b(r),a<=t&&(h(),console.log("my if construction")),console.log(a),console.log(t)}).catch(t=>c.show({message:`Server error : ${t}`})).finally(()=>{d(),l.reset(),a=1})}m.addEventListener("click",B);async function B(){a++,$(),p();try{const{images:s,maxPages:t}=await g(u,a);b(s);const r=document.querySelector(".gallery-item");console.log(r.getBoundingClientRect());const{height:n}=r.getBoundingClientRect();a<t&&h(),a>=t&&c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"blue",position:"topRight"}),window.scrollBy({top:n*2,behavior:"smooth"})}catch(s){console.log(s)}d()}
//# sourceMappingURL=index.js.map
