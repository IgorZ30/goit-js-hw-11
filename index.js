import{a as p,S as m,i as f}from"./assets/vendor-dNBuWDsd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function y(a){return p.get("https://pixabay.com/api/",{params:{key:"54828579-b719dea7318382c6ddac3285f",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error(r),[]))}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const s=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:o,comments:u,downloads:d})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${e}"
    />
  </a>
  <ul class="image-descr">
    <li class="item">
      <p class="descr">Likes</p>
      <p class="value">${t}</p>
    </li>
    <li class="item">
      <p class="descr">Views</p>
      <p class="value">${o}</p>
    </li>
    <li class="item">
      <p class="descr">Comments</p>
      <p class="value">${u}</p>
    </li>
    <li class="item">
      <p class="descr">Downloads</p>
      <p class="value">${d}</p>
    </li>
  </ul>
</li>`).join("");l.insertAdjacentHTML("beforeend",s),h.refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const n=document.querySelector(".form");n.addEventListener("submit",S);function S(a){a.preventDefault();const s=n.elements["search-text"].value.trim();s!==""&&(L(),b(),y(s).then(r=>{if(v(),r.length===0){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r)}))}
//# sourceMappingURL=index.js.map
