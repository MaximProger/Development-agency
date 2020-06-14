$(document).ready(function () {
  // Intro Slider
  var galleryTop = new Swiper(".intro__slider", {
    spaceBetween: 4,
    loop: true,
    navigation: {
      nextEl: ".intro__next",
      prevEl: ".intro__prev",
    },
    on: {
      init: function () {
        $(
          "[data-slide=" +
            $(".intro__slide.swiper-slide-active").attr("id") +
            "]"
        ).addClass("active");
        console.log($(".intro__slide.swiper-slide-active").attr("id"));
      },
    },
  });

  galleryTop.on("slideChange", function () {
    $(".intro__map__item").removeClass("active");
    let slideId = $(".intro__slide.swiper-slide-active").attr("id");
    $(
      "[data-slide=" + $(".intro__slide.swiper-slide-active").attr("id") + "]"
    ).addClass("active");
    console.log(slideId);
  });

  // Employees Slider
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

    if ($(this).data("slide") === "introSlide-1") {
      $(".intro__slider .swiper-wrapper").css(
        "transform",
        "translate3d(-100vw, 0px, 0px)"
      );
    } else if ($(this).data("slide") === "introSlide-2") {
      $(".intro__slider  .swiper-wrapper").css(
        "transform",
        "translate3d(-200vw, 0px, 0px)"
      );
    } else if ($(this).data("slide") === "introSlide-3") {
      $(".intro__slider  .swiper-wrapper").css(
        "transform",
        "translate3d(-300vw, 0px, 0px)"
      );
    } else if ($(this).data("slide") === "introSlide-4") {
      $(".intro__slider  .swiper-wrapper").css(
        "transform",
        "translate3d(-400vw, 0px, 0px)"
      );
    }
  });
});
