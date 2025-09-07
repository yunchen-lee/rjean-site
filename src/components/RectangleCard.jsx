// src/components/RectangleCard.jsx
export default function RectangleCard({
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
  const imageAlt = typeof img === "object" && img?.alt ? img.alt : title;

  return (
    <div class="mb-0 bg-base-100 hover:bg-gray-50 transition ease-in-out hover:scale-[101%] hover:opacity-80 border-1 border-gray-300 border-solid">
      <a href={url} target={target}>
        <div class="hero-content grid gap-2 grid-row-3 lg:grid-row-3">
          <div>
            <img
              src={imageSrc}
              alt={imageAlt}
              class="w-full aspect-[2/1] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="row-span-2 lg:row-span-2 mx-4 mt-2 mb-4 flex flex-col">
            <h1 class="text-base/5 mb-2 lg:mb-0 lg:text-lg/6 font-bold lg:line-clamp-1">
              {title}
            </h1>
            <p class="text-xs text-gray-400">{(tags || []).join(", ")}</p>

            <p class="my-2 text-xs line-clamp-2">{desc}</p>

            {/* 只有在 lg: 顯示日期（可依需求保留/移除） */}
            <p class="hidden lg:block text-xs text-gray-400 mt-auto">{date}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
