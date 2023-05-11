// Swiper 7.4.1
import Swiper from './vendor/swiper';

const initCoachesSwiper = () => {
  const coachesSwiper = new Swiper('.swiper--coaches', { // eslint-disable-line

    direction: 'horizontal',
    loop: true,

    initialSlide: 0,


    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

  });
};

const initReviewsSwiper = () => {

  const reviewsSwiper = new Swiper('.swiper--reviews', { // eslint-disable-line

    direction: 'horizontal',
    autoHeight: true,
    spaceBetween: 56,
    initialSlide: 0,
    slidesPerView: 1,

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
  });
};


initReviewsSwiper();
initCoachesSwiper();
