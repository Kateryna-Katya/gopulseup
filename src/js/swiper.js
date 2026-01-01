// ===== Swiper imports (npm) =====
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Реєстрація модулів
Swiper.use([Navigation, Pagination, Autoplay]);

/* ======================================================
   ADVANTAGES
   mobile: 1 slide
   desktop (1440): 3 slides
   arrows: YES
   slider: ALWAYS
====================================================== */
const advantagesSwiper = new Swiper('.advantages-swiper', {
  spaceBetween: 16,
  speed: 600,

  navigation: {
    nextEl: '.advantages-next',
    prevEl: '.advantages-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    1440: {
      slidesPerView: 3,
    },
  },
});

/* ======================================================
   REVIEWS
   mobile: 1 slide
   desktop: NO slider (destroy)
   pagination: YES (custom bullets)
====================================================== */
let reviewsSwiper = null;

function initReviewsSwiper() {
  if (window.innerWidth <= 768 && !reviewsSwiper) {
    reviewsSwiper = new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 500,

      pagination: {
        el: '.reviews-pagination',
        clickable: true,
      },
    });
  }

  if (window.innerWidth > 768 && reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }
}

/* ======================================================
   SIMILAR
   mobile: 1 slide
   arrows: BOTTOM
   desktop: NO slider (destroy)
====================================================== */
let similarSwiper = null;

function initSimilarSwiper() {
  if (window.innerWidth <= 768 && !similarSwiper) {
    similarSwiper = new Swiper('.similar-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 500,

      navigation: {
        nextEl: '.similar-next',
        prevEl: '.similar-prev',
      },
    });
  }

  if (window.innerWidth > 768 && similarSwiper) {
    similarSwiper.destroy(true, true);
    similarSwiper = null;
  }
}

/* ======================================================
   INIT
====================================================== */
function initSwipers() {
  initReviewsSwiper();
  initSimilarSwiper();
}

window.addEventListener('load', initSwipers);
window.addEventListener('resize', initSwipers);
