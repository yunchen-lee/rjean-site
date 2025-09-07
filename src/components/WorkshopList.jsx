import { useState, useEffect } from "preact/hooks";
import RectangleCard from "./RectangleCard.jsx";

const STORAGE_KEY = "workshops-visibleCount-v1";
const STEP = 2;
const MIN = 2;

export default function WorkshopList({ posts }) {
  const [visibleCount, setVisibleCount] = useState(MIN);

  // 初次載入：從 localStorage 還原
  useEffect(() => {
    try {
      const saved = parseInt(localStorage.getItem(STORAGE_KEY) || "", 10);
      if (!Number.isNaN(saved)) {
        setVisibleCount(Math.min(Math.max(saved, MIN), posts.length));
      }
    } catch {}
  }, [posts.length]);

  // 同步到 localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(visibleCount));
    } catch {}
  }, [visibleCount]);

  // 若文章數變動，避免超出
  useEffect(() => {
    if (visibleCount > posts.length) {
      setVisibleCount(posts.length);
    }
  }, [posts.length, visibleCount]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + STEP, posts.length));
  };

  return (
    <div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {posts.slice(0, visibleCount).map((post, idx) => (
          <RectangleCard
            key={post.id ?? idx}
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
          <button onClick={loadMore}>
            <span aria-hidden="true">↓</span>&nbsp; Load more...
          </button>
        </div>
      )}
    </div>
  );
}
