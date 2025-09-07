import { useState } from "preact/hooks";
import RectangleCard from "./RectangleCard.jsx";

export default function WorkshopList({ posts }) {
  const [visibleCount, setVisibleCount] = useState(2);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  return (
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {posts.slice(0, visibleCount).map((post) => (
          <RectangleCard
            title={post.data.title}
            img={post.data.cover}
            desc={post.data.description}
            url={`/workshops/${post.id}`}
            target="_self"
            tags={post.data.tags}
            date={post.data.date.toISOString().split("T")[0]}
          />
        ))}
      </div>

      {visibleCount < posts.length && (
        <div class="flex mt-6 font-medium text-gray-800 hover:text-gray-400">
          <button
            onClick={loadMore}
            class=""
          >
            ↓  &nbsp; Load more...
          </button>
        </div>
      )}
    </div>
  );
}
