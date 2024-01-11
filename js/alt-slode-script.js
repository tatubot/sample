// 

window.onload = function () {
    const swiper2 = new Swiper(".swiper2", {
      speed: 600,
      spaceBetween: 0,
      centeredSlides: true,
      loop: false,
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
      slidesPerView: 3,
      breakpoints: {
        786: {
            slidesPerView: 6,

        },
    },

    });
  }