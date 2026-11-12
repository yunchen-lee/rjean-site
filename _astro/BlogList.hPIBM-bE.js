import{d as p,y as l}from"./hooks.module.DKr0xz_Z.js";import{u as r}from"./jsxRuntime.module.N7e_s17M.js";import"./preact.module.CMz4SUKz.js";function _({title:i,img:a,desc:t,url:o,badge:e="",tags:c=[],target:s="_blank",date:h}){const g=typeof a=="string"?a:a?.src,m=typeof a=="object"&&a?.alt?a.alt:i;return r("div",{class:"workshop-card",children:[r("a",{href:o,target:s,class:"workshop-card__link",children:r("div",{class:"workshop-card__inner",children:[r("div",{class:"workshop-card__media",children:r("img",{src:g,alt:m,class:"workshop-card__image",loading:"lazy",decoding:"async"})}),r("div",{class:"workshop-card__body",children:[r("h1",{class:"workshop-card__title",children:i}),r("p",{class:"workshop-card__description",children:t}),r("p",{class:"workshop-card__meta",children:h})]})]})}),r("style",{children:`
        .workshop-card {
          border-bottom: 1px solid #000;
        }

        .workshop-card__link {
          display: block;
          color: inherit;
          transition:
            transform 0.5s ease,
            opacity 0.5s ease;
        }

        .workshop-card__link:hover {
          transform: translateY(-2px);
          opacity: 0.75;
          color: inherit;
        }

        .workshop-card__inner {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          align-items: flex-start;
          padding: 1rem 0 2.5rem;
        }

        .workshop-card__media {
          width: 100%;
        }

        .workshop-card__image {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          object-position: center;
          background: var(--color-placeholder);
        }

        .workshop-card__body {
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
          min-width: 0;
        }

        .workshop-card__title {
          margin: 0;
          font-size: var(--font-size-card-title);
          font-weight: 700;
          line-height: var(--line-height-card-title);
        }

        .workshop-card__description {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          margin: 0;
          font-size: var(--font-size-card-body);
          line-height: var(--line-height-card-body);
          color: var(--color-text);
        }

        .workshop-card__meta {
          margin: 0;
          font-size: var(--font-size-card-meta);
          line-height: var(--line-height-card-meta);
          color: var(--color-text-alt);
        }

        @media screen and (min-width: 425px) {
          .workshop-card__inner {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 1rem;
            align-items: start;
          }

          .workshop-card__media {
            width: 80%;
          }
        }
      `})]})}const d="blog-visibleCount-v1",k=20,n=20;function b({posts:i}){const[a,t]=p(n);l(()=>{try{const e=parseInt(localStorage.getItem(d)||"",10);Number.isNaN(e)||t(Math.min(Math.max(e,n),i.length))}catch{}},[i.length]),l(()=>{try{localStorage.setItem(d,String(a))}catch{}},[a]),l(()=>{a>i.length&&t(i.length)},[i.length,a]);const o=()=>{t(e=>Math.min(e+k,i.length))};return r("div",{children:[r("div",{class:"grid grid-cols-1 gap-8",children:i.slice(0,a).map((e,c)=>r(_,{title:e.data.title,img:e.data.previewCover??e.data.cover,desc:e.data.description,url:`/blog/${e.id}`,target:"_self",tags:e.data.tags,date:e.data.date.toISOString().split("T")[0]},e.id??c))}),a<i.length&&r("div",{class:"flex mt-6 font-medium text-gray-800 hover:text-gray-400",children:r("button",{onClick:o,children:[r("span",{class:"text-lg","aria-hidden":"true",children:"↓"}),"  Load more..."]})})]})}export{b as default};
