// ===== Swiper imports (npm) =====
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination, Autoplay]);

/* ======================================================
   ADVANTAGES
   mobile: 1 slide
   desktop: 3 slides
   arrows: YES
   autoplay: YES
====================================================== */
const advantagesSwiper = new Swiper('.advantages-swiper', {
  spaceBetween: 16,
  speed: 600,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.advantages-next',
    prevEl: '.advantages-prev',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
  },

  slidesPerView: 1,
});

/* ======================================================
   REVIEWS
   mobile ONLY
   1 slide center + 2 sides
   pagination: YES
   autoplay: YES
====================================================== */
let reviewsSwiper = null;

function initReviewsSwiper() {
  if (window.innerWidth <= 768 && !reviewsSwiper) {
    reviewsSwiper = new Swiper('.reviews-swiper', {
      slidesPerView: 1.2,
      centeredSlides: true,
      spaceBetween: 20,
      speed: 500,
      loop: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

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
   mobile ONLY
   arrows bottom
   autoplay: YES
====================================================== */
let similarSwiper = null;

function initSimilarSwiper() {
  if (window.innerWidth <= 768 && !similarSwiper) {
    similarSwiper = new Swiper('.similar-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 500,
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

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
