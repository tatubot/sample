// 

window.onload = function () {
  const swiper = new Swiper(".swiper", {
    speed: 600,
    effect: 'coverflow',
    coverflowEffect: {
      /* 角度 */
      rotate: 30,
      /* 影非表示 */
      slideShadows: false,
  },
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: { // 自動再生
      delay: 1500, // 1秒後に次のスライド（初期値：3000）
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    breakpoints: {
      786: {
          slidesPerView: 3,
          effect: 'coverflow',
      },
  },
  });

  const swiper2 = new Swiper(".swiper2", {
    speed: 600,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false, 
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    breakpoints: {
      500: {
          slidesPerView: 4,

      },
  },
  });

  const swiper3 = new Swiper(".swiper3", {
    speed: 600,
    spaceBetween: 200,
    centeredSlides: true,
    loop: true,
    autoplay: { // 自動再生
      delay: 1500, // 1秒後に次のスライド（初期値：3000）
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    breakpoints: {
      786: {
          slidesPerView: 3,
          effect: 'coverflow',
      },
  },
  });

  const swiper4 = new Swiper(".swiper4", {
    speed: 600,
    spaceBetween: 5,
    loop: true,
    autoplay: { // 自動再生
      delay: 1500, // 1秒後に次のスライド（初期値：3000）
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
  grid: {
    rows: 2,
  },
    breakpoints: {
      786: {
          slidesPerView: 4,
          grid:{
            rows: 1,
          },
      },
  },
  });
}