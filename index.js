import{a as m,S as f,i as l}from"./assets/vendor-dNBuWDsd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function y(a){return m.get("https://pixabay.com/api/",{params:{key:"54828579-b719dea7318382c6ddac3285f",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(console.error(t),[]))}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const s=a.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:o,comments:d,downloads:p})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${e}"
    />
  </a>
  <ul class="image-descr">
    <li class="item">
      <p class="descr">Likes</p>
      <p class="value">${r}</p>
    </li>
    <li class="item">
      <p class="descr">Views</p>
      <p class="value">${o}</p>
    </li>
    <li class="item">
      <p class="descr">Comments</p>
      <p class="value">${d}</p>
    </li>
    <li class="item">
      <p class="descr">Downloads</p>
      <p class="value">${p}</p>
    </li>
  </ul>
</li>`).join("");n.insertAdjacentHTML("beforeend",s),g.refresh()}function L(){n.innerHTML=""}function b(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",S);function S(a){a.preventDefault();const s=u.elements["search-text"].value.trim();s!==""&&(L(),b(),y(s).then(t=>{if(t.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t)}).catch(t=>{l.error({message:"Something went wrong. Please try again!",position:"topRight"})}).finally(()=>{v()}))}
//# sourceMappingURL=index.js.map
