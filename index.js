import{a as v,S as x,i as c}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const S="50870264-4cff09f0574465c81a14bcda1",P="https://pixabay.com/api/";async function p(s,t=1){const o={key:S,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en",per_page:15,page:t},{data:a}=await v(P,{params:o});return{maxPages:Math.ceil(a.totalHits/o.per_page),images:a.hits}}const f=document.querySelector(".loader"),m=document.querySelector(".btn");function h(){f.classList.remove("hidden")}function d(){f.classList.add("hidden")}function $(){y.innerHTML=""}function g(){m.classList.remove("hidden")}function q(){m.classList.add("hidden")}const y=document.querySelector(".gallery"),T=new x(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:i,comments:L,downloads:w})=>`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${e}"
    />
  </a>
  <ul>
  <li><span class="spanText">Likes</span><br>${r}</li>
  <li><span class="spanText">Views</span><br>${i}</li>
  <li><span class="spanText">Comments</span><br>${L}</li>
  <li><span class="spanText">Downloads</span><br>${w}</li>
  </ul>
</li>`).join("");y.insertAdjacentHTML("beforeend",t),T.refresh()}let n=1;const l=document.querySelector(".form");l.addEventListener("submit",C);let u;function C(s){if(s.preventDefault(),h(),$(),u=l.elements["search-text"].value.trim(),u.trim()==="")return l.reset(),d(),c.show({message:"❌ you must write something!!",backgroundColor:"red",position:"topRight"});p(u,n).then(({maxPages:t,images:o})=>{if(o.length===0)return c.show({message:"❌ Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",position:"topRight"});b(o),n<=t&&g()}).catch(t=>c.show({message:`Server error : ${t}`})).finally(()=>{d(),l.reset(),n=1})}m.addEventListener("click",M);async function M(){n++,q(),h();try{const{images:s,maxPages:t}=await p(u,n);b(s);const o=document.querySelector(".gallery-item"),{height:a}=o.getBoundingClientRect();n<t&&g(),n>=t&&c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"blue",position:"topRight"}),window.scrollBy({top:a*2,behavior:"smooth"})}catch(s){c.show({message:`Server error : ${s.message}`})}d()}
//# sourceMappingURL=index.js.map
