import { useEffect, useState } from 'preact/hooks';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);  // 捲動超過指定高度後顯示此按鈕
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      class={`cursor-pointer fixed bottom-6 left-6 w-12 h-12 rounded-full bg-white text-white text-xl flex items-center justify-center shadow-lg transition-opacity duration-300 z-50  ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Back to Top" 
      style={{ WebkitAppearance: 'none', appearance: 'none', backgroundColor: '#ffffffff' }}
    >
    <img src="/assets/arrow.svg" alt="Back to Top" class="w-6 h-6" />
    </button>
  );
}
