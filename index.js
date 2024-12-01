import{i as p,S as g}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function y(i=BASE_URL,r={}){return fetch(i,r).then(l=>l.ok?l.json():new Error("Error!"))}function o(i="Error"){p.error({position:"topRight",message:i})}function m(i){return i.map(({webformatURL:r,largeImageURL:l,tags:s,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
            <a
              class="gallery-link"
              href="${l}"
            >
              <img
                class="gallery-image"
                src="${r}"
                alt="${s}"
                width="360"
              />
              <ul class="gallery-card-list">
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Likes</p>
                    <p class="gallery-card-list-info-text">${e}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Views</p>
                    <p class="gallery-card-list-info-text">${t}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Comments</p>
                    <p class="gallery-card-list-info-text">${a}</p>
                  </div>
                </li>
                <li>
                  <div class="gallery-card-list-info">
                    <p class="gallery-card-list-info-title">Downloads</p>
                    <p class="gallery-card-list-info-text">${u}</p>
                  </div>
                </li>
              </ul>
            </a>
          </li>`).join("")}const h="47390664-00e9f6e051e23aada86cf3665",L="https://pixabay.com/api/";let n=new URLSearchParams({key:h,image_type:"photo",orientation:"horizontal",safesearch:!0});const f=document.querySelector(".form"),c=document.querySelector(".loader"),d=document.querySelector(".gallery"),v={captionDelay:250,captionType:"attr",captionsData:"alt",captionPosition:"bottom"},S=new g(".gallery a",v);f.addEventListener("submit",b);function b(i){i.preventDefault(),n.set("q",i.target.elements.search.value),c.hidden=!1,y(`${L}?${n}`).then(r=>{if(!r.hits.length){d.innerHTML="",o("Sorry, there are no images matching your search query. Please try again!");return}d.insertAdjacentHTML("afterbegin",m(r.hits)),S.refresh()}).catch(r=>o(r.message)).finally(()=>c.hidden=!0),f.reset()}
//# sourceMappingURL=index.js.map
