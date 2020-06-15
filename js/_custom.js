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
        $("[data-slide=" + 1 + "]").addClass("active");
      },
    },
  });

  galleryTop.on("slideChange", function () {
    $(".intro__map__item").removeClass("active");
    $("[data-slide=" + galleryTop.activeIndex + "]").addClass("active");
    if (galleryTop.activeIndex == 5) {
      $(".intro__map__item").removeClass("active");
      $("[data-slide=" + 1 + "]").addClass("active");
    }

    if (galleryTop.activeIndex == 0) {
      $(".intro__map__item").removeClass("active");
      $("[data-slide=" + 4 + "]").addClass("active");
    }
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

    if ($(this).data("slide") == "1") {
      galleryTop.slideTo(1, 1000);
    } else if ($(this).data("slide") == "2") {
      galleryTop.slideTo(2, 1000);
    } else if ($(this).data("slide") == "3") {
      galleryTop.slideTo(3, 1000);
    } else if ($(this).data("slide") == "4") {
      galleryTop.slideTo(4, 1000);
    }
  });

  // Modal Window
  $(".modal__close").on("click", function () {
    $(".modal__mask").hide(500);
  });

  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      $(".modal__mask").hide(500);
    }
  });

  $(document).mouseup(function (e) {
    let modalctr = $(".modal__mask");
    let modal = $(".modal__window");
    if (!modal.is(e.target) && modal.has(e.target).length === 0) {
      modalctr.hide();
    }
  });

  $(".projects__link").on("click", function (event) {
    event.preventDefault();
    $(".modal__mask").show(500);
  });

  // Detail New
  var newsdetailhumbs = new Swiper(".newsdetail-thumbs", {
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var newsdetailTop = new Swiper(".newsdetail-top", {
    spaceBetween: 4,
    navigation: {
      nextEl: ".newsdetail__next",
      prevEl: ".newsdetail__prev",
    },
    thumbs: {
      swiper: newsdetailhumbs,
    },
    pagination: {
      el: ".newsdetail__progress",
      type: "progressbar",
    },
    breakpoints: {
      1199: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1.1,
      },
    },
  });

  // News List
  $(".newslist__shormore").on("click", function (event) {
    event.preventDefault();
    $(this).hide();
    $(".newslist__item--special").removeClass("hidden");
    $(".newslist__nav--tablet .intro__nav__item").removeClass("hidden");
  });
});
