// SwiperInit.jsx
import { useEffect } from 'preact/hooks';
import Swiper from 'swiper';
import { Grid, Mousewheel, Navigation, Pagination } from 'swiper/modules';

Swiper.use([Grid, Mousewheel, Navigation, Pagination]);

export default function SwiperInit() {
  useEffect(() => {
    new Swiper('.my-grid-swiper', {
        modules: [Grid, Pagination],
      grid: {
        rows: 2,
        fill: 'row',
      },
      slidesPerView: 3,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // 手機（<=640px）
        0: {
          grid: {
            rows: 1,
            fill: 'row',
          },
          slidesPerView: 1,
        }
      }
    });
    }, []);

  return null;
}
