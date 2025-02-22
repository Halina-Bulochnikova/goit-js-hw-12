import{a as u,i as l,S as y}from"./assets/vendor-WLD9_8QG.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="48746428-ca8ddb89bc4c4cb9194f35bec",g="https://pixabay.com/api/";async function f(s,o=1,n=40){try{const t=await u.get(g,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:n}});if(t.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.data}catch(t){throw l.error({title:"Error",message:t.message||"Something went wrong. Please try again!",position:"topRight"}),t}}function h(s){const o=document.querySelector(".gallery"),n=s.hits.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item">
            <img src="${e.webformatURL}" alt="${e.tags}" />
            <div class="info">
                <p>Likes</p>
                <p>Views</p>
                <p>Comments</p>
                <p>Downloads</p>
                <span>${e.likes}</span>
                <span>${e.views}</span>
                <span>${e.comments}</span>
                <span>${e.downloads}</span>
            </div>
        </a>
    `).join("");o.insertAdjacentHTML("beforeend",n),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("#search-form"),o=document.querySelector(".loader"),n=document.querySelector(".gallery"),t=document.createElement("button");t.textContent="Load more",t.classList.add("load-more"),document.body.appendChild(t),t.style.display="none";let e="",r=1;const a=40;s.addEventListener("submit",async i=>{if(i.preventDefault(),e=s.elements.searchQuery.value.trim(),!e){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}n.innerHTML="",r=1,t.style.display="none",await c()}),t.addEventListener("click",async()=>{r++,await c()});async function c(){o.style.display="block";try{const i=await f(e,r,a);h(i);const d=document.querySelectorAll(".gallery-item");if(d.length>0){const p=d[0].getBoundingClientRect().height;window.scrollBy({top:p*2,behavior:"smooth"})}r*a>=i.totalHits?(t.style.display="none",l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):t.style.display="block"}catch(i){console.error(i)}o.style.display="none"}});
//# sourceMappingURL=index.js.map
