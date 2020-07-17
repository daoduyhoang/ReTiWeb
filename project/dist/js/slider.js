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
});