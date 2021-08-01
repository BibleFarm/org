// BEGIN swiperRootWithMenu
      var menuButton = document.querySelector('.menu-button');
      var openMenu = function () {
        swiperRootWithMenu.slidePrev();
      };
      var swiperRootWithMenu = new Swiper('.swiperRootWithMenu', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        slideToClickedSlide: true,
        on: {
          slideChangeTransitionStart: function () {
            var slider = this;
            if (slider.activeIndex === 0) {
              menuButton.classList.add('cross');
              // required because of slideToClickedSlide
              menuButton.removeEventListener('click', openMenu, true);
            } else {
              menuButton.classList.remove('cross');
            }
          },
          slideChangeTransitionEnd: function () {
            var slider = this;
            if (slider.activeIndex === 1) {
              menuButton.addEventListener('click', openMenu, true);
            }
          },
        },
      });
// END swiperRootWithMenu


      var swiperScrollContainer = new Swiper(".swiperScrollContainer", {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        mousewheel: true,
      });
