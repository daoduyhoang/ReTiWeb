"use strict";

$('.slide-card').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [, "<i class='fas fa-chevron-right duannoibat-btn-next fa-2x'></i>"],
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
  dots: true
}); // mat bang du an

$(document).ready(function () {
  $('.ground-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.ground-slider-bottom' // autoplay: true,
    // autoplaySpeed: 2000,

  });
  $('.ground-slider-bottom').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.ground-slider-top',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });
}); // chi tiet du an

$(document).ready(function () {
  $('.chitietduan-slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.chitietduan-slider-bottom' // autoplay: true,
    // autoplaySpeed: 2000,

  });
  $('.chitietduan-slider-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.chitietduan-slider-top',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: true
  });
}); //start slide khách hàng của Reti

$('.khachHangCuaReti-slide').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ["<i class='fas fa-chevron-left duannoibat-btn-prev fa-2x'></i>", "<i class='fas fa-chevron-right duannoibat-btn-next fa-2x'></i>"],
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
    1000: {
      items: 1
    }
  },
  dots: false
}); //end slide khach hang cua reti
// $('#slider-main').owlCarousel({
//     items: 1,
//     loop: true,
//     nav: false,
//     nestedItemSelector: 'slide-card',
//     margin: 10,
//     responsive: {
//         480: {
//             items: 2
//         },
//         678: {
//             items: 4
//         },
//         960: {
//             items: 5
//         },
//         1200: {
//             items: 6
//         }
//     }
// });