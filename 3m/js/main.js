const mb = new Swiper(".mb", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  }
});

const vision_list = new Swiper('.vision_list', {
  loop: true,

  autoplay: {
    delay: 3000, //2500 =2.5초 , 슬라이드 대기 시간
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const news_list = new Swiper('.news_list', {
  loop: true,

  slidesPerView: 3,
  spaceBetween: 50,

  autoplay: {
    delay: 3000, //2500 =2.5초 , 슬라이드 대기 시간
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

const brand_list = new Swiper('.brand_list', {
  loop: true,

  slidesPerView: 6,
  spaceBetween: 50,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000, //2500 =2.5초 , 슬라이드 대기 시간
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
