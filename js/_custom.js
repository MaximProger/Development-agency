// Intro Slider
// var galleryThumbs = new Swiper(".intro__thumbs", {
//   spaceBetween: 4,
//   slidesPerView: 4,
//   //   loop: true,
//   //   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
var galleryTop = new Swiper(".intro__slider", {
  spaceBetween: 4,
  loop: true,
  navigation: {
    nextEl: ".intro__next",
    prevEl: ".intro__prev",
  },
  // thumbs: {
  //   swiper: galleryThumbs,
  // },
});

// Employees Slider
// var swiper = new Swiper(".employees__container", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   loop: true,
//   navigation: {
//     nextEl: ".employees__next",
//     prevEl: ".employees__prev",
//   },
//   pagination: {
//     el: ".employees__progress",
//     type: "progressbar",
//   },
//   breakpoints: {
//     1199: {
//       slidesPerView: 4,
//     },
//     767: {
//       slidesPerView: 3,
//     },
//     320: {
//       slidesPerView: 1.3,
//     },
//   },
// });

$(".employees__container").each(function () {
  let $this = $(this);

  new Swiper($this, {
    grabCursor: true,
    freeMode: true,
    pagination: {
      el: ".employees__progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".employees__next",
      prevEl: ".employees__prev",
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
      },
      767: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 1.3,
      },
    },
  });
});

// Project Slider
// var projectsSlider = new Swiper(".projects__container", {
//   slidesPerView: 2.6,
//   spaceBetween: 30,
//   loop: true,
//   navigation: {
//     nextEl: ".projects__next",
//     prevEl: ".projects__prev",
//   },
//   pagination: {
//     el: ".projects__progress",
//     type: "progressbar",
//   },
//   breakpoints: {
//     1199: {
//       slidesPerView: 2.6,
//     },
//     767: {
//       slidesPerView: 2.6,
//     },
//     320: {
//       slidesPerView: 1.2,
//     },
//   },
// });

$(".projects__container").each(function () {
  let $this = $(this);

  new Swiper($this, {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    freeMode: true,
    breakpoints: {
      1199: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1.2,
      },
    },
    navigation: {
      nextEl: ".projects__next",
      prevEl: ".projects__prev",
    },
    pagination: {
      el: ".projects__progress",
      type: "progressbar",
    },
  });
});

// Burger menu
$(".header__burger").on("click", function () {
  $(this).toggleClass("active");
  $(".header__nav").toggleClass("active");
  $(".header").toggleClass("active");
});

// Show more -- Agency
$(".agency__link").on("click", function (event) {
  event.preventDefault();
  $(this).hide();
  $(".agency__text").removeClass("hidden");
});

// Intro Map
$(".intro__map__item").on("click", function () {
  $(".intro__map__item").removeClass("active");
  $(this).addClass("active");
  $(".intro__slide").removeClass("swiper-slide-active");
  // if ($(this).data("slide") === "#introSlide-1") {
  //   $(".intro__slider .swiper-wrapper").css(
  //     "transform",
  //     "translate3d(-99.2vw, 0px, 0px)"
  //   );
  // } else if ($(this).data("slide") === "#introSlide-2") {
  //   $(".intro__slider  .swiper-wrapper").css(
  //     "transform",
  //     "translate3d(-198.4vw, 0px, 0px)"
  //   );
  // } else if ($(this).data("slide") === "#introSlide-3") {
  //   $(".intro__slider  .swiper-wrapper").css(
  //     "transform",
  //     "translate3d(-297.5vw, 0px, 0px)"
  //   );
  // } else if ($(this).data("slide") === "#introSlide-4") {
  //   $(".intro__slider  .swiper-wrapper").css(
  //     "transform",
  //     "translate3d(-396.7vw, 0px, 0px)"
  //   );
  if ($(this).data("slide") === "#introSlide-1") {
    $(".intro__slider .swiper-wrapper").css(
      "transform",
      "translate3d(-100vw, 0px, 0px)"
    );
  } else if ($(this).data("slide") === "#introSlide-2") {
    $(".intro__slider  .swiper-wrapper").css(
      "transform",
      "translate3d(-200vw, 0px, 0px)"
    );
  } else if ($(this).data("slide") === "#introSlide-3") {
    $(".intro__slider  .swiper-wrapper").css(
      "transform",
      "translate3d(-300vw, 0px, 0px)"
    );
  } else if ($(this).data("slide") === "#introSlide-4") {
    $(".intro__slider  .swiper-wrapper").css(
      "transform",
      "translate3d(-400vw, 0px, 0px)"
    );
  }
});
