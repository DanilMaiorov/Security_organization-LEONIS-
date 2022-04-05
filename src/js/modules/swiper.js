export const sliderSwiper = () => {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 50,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: '.arrow-next',
          prevEl: '.arrow-prev',
        },
        breakpointsInverse: true,
        breakpoints: {
            375:  {
            slidesPerView: 1,

            },
            576: {
            slidesPerView: 2,
            },
        },
      });
};