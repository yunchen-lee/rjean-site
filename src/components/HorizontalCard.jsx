// src/components/HorizontalCard.jsx
export default function HorizontalCard({
  title,
  img,
  desc,
  url,
  badge = "",
  tags = [],
  target = "_blank",
  date,
}) {
  const imageSrc = typeof img === "string" ? img : img?.src;
  const imageAlt = (typeof img === "object" && img?.alt) ? img.alt : title;

  return (
    <div class="mb-5 bg-base-100 rounded-sm hover:bg-gray-50 transition ease-in-out hover:scale-[101%] hover:opacity-80 ">
      <a href={url} target={target}>
        <div class="hero-content grid gap-6 grid-cols-4 lg:grid-cols-4 gap-4">
          <div class="col-span-3 md:col-span-3 my-2 flex flex-col">
            <h1 class="text-base/5 mb-2 lg:mb-0 lg:text-lg/6 font-bold lg:line-clamp-1">
              {title}
            </h1>

            <p class="my-2 text-xs lg:text-sm line-clamp-2">{desc}</p>

            {/* 只有在 lg: 時顯示日期，如果要開啟可以取消註解 */}
            {/* <p class="text-xs text-gray-400 mt-auto">{date}</p> */}

            <p class="text-xs lg:text-sm text-gray-400">
              {(tags || []).join(", ")}
            </p>
          </div>

          <div>
            <img
              src={imageSrc}
              alt={imageAlt}
              class="w-full aspect-[2/1] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </a>
    </div>
  );
}
