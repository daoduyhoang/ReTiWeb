"use strict";

$('.partner-reti').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  stagePadding: 4,
  autoplay: true,
  autoplayTimeout: 6000,
  items: 4,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    992: {
      items: 4
    },
    1000: {
      items: 4
    }
  },
  dots: false
});
var owl = $('.partner-reti');
owl.owlCarousel(); // Go to the next item

$('.btn-next').click(function () {
  owl.trigger('next.owl.carousel');
}); // Go to the previous item

$('.btn-prev').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
}); //start slide du an noi bat

$('.slide-card-duannoibat').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: ["<i class='fas fa-chevron-left duannoibat-btn-prev'></i>", "<i class='fas fa-chevron-right duannoibat-btn-next'></i>"],
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
      items: 2
    },
    1000: {
      items: 2
    }
  },
  dots: false
}); //end slide du an noi bat

$(".js-range-slider").ionRangeSlider(); //start slide khách hàng của Reti

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
// TIEN ICH

$(".btn-mobile-utilities a").click(function () {
  var parent = $(this).parents('.utilities');
  var child = parent.children('.utilities-content');
  child.toggleClass('show-item');
  console.log(child);
}); // FLITER

$(".btn-control .btn-filter").on("click", function () {
  if ($(this).siblings('.control-table').hasClass("active")) {
    $(this).siblings('.control-table').removeClass("active");
    $(this).removeClass('active');
  } else {
    $('.control-table').removeClass("active");
    $('.btn-control .btn-filter').removeClass("active");
    $(this).siblings('.control-table').addClass("active");
    $(this).addClass("active");
  }
}); // TOGGLE MAP LIST PROJECT

var ip = document.getElementById('view-map');
var map = document.getElementById('map');
var showMap = true;
var pj = document.querySelector('.list-project-map');
var card = document.getElementsByClassName('card-media-768');
var newClassCard = '';
var oddClassCard = '';

for (var i = 0; i < card.length; i++) {
  oddClassCard = card[i].getAttribute('class');
  newClassCard = oddClassCard.replace(/col-4/g, "col-6");
}

function setAttributeCard() {
  for (var i = 0; i < card.length; i++) {
    card[i].setAttribute('class', newClassCard);
  }
}

function backAttributeCard() {
  for (var i = 0; i < card.length; i++) {
    card[i].setAttribute('class', oddClassCard);
  }
}

ip.onclick = function () {
  var oddClass = pj.getAttribute('class');
  var newClass = oddClass + " col-8";

  if (showMap) {
    map.style.display = 'block';
    pj.classList.add('col-8');
    setAttributeCard();
    showMap = false;
  } else if (showMap === false) {
    map.style.display = 'none';
    pj.classList.remove('col-8');
    backAttributeCard();
    showMap = true;
  }
};

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
}); // MATBANGDUAN

var btn = document.querySelectorAll('.tab ul .tab-item');
var tabs = document.querySelectorAll(".content-tab-item");

for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    for (var i = 0; i < btn.length; i++) {
      btn[i].classList.remove('active-tab');
    }

    this.classList.add('active-tab'); //tinh vi tri

    var btnActive = this;
    var j = 0;

    for (j = 0; btnActive = btnActive.previousElementSibling; j++) {}

    ;

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-item');
      tabs[j].classList.add('active-item');
    }
  });
} // SLIDER CARD


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
  dots: false
});