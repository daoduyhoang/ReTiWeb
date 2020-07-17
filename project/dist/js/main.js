"use strict";

//start slide du an noi bat
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
// SLIDER CARD

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
});
$(".js-range-slider").ionRangeSlider(); //start slide khách hàng của Reti
// $('.khachHangCuaReti-slide').owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   navText: ["<i class='fas fa-chevron-left duannoibat-btn-prev fa-2x'></i>", "<i class='fas fa-chevron-right duannoibat-btn-next fa-2x'></i>"],
//   responsive: {
//     0: {
//       items: 1
//     },
//     480: {
//       items: 1
//     },
//     576: {
//       items: 1
//     },
//     768: {
//       items: 1
//     },
//     992: {
//       items: 1
//     },
//     1000: {
//       items: 1
//     }
//   },
//   dots: false
// });
//end slide khach hang cua reti
// TIEN ICH

$(".btn-mobile-utilities a").click(function () {
  var parent = $(this).parents('.utilities');
  var child = parent.children('.utilities-content');
  child.toggleClass('show-item');
  console.log(child);
}); // FLITER

$(".btn-control .btn-filter").click(function () {
  if ($(this).siblings('.control-table').hasClass("active")) {
    $(this).siblings('.control-table').removeClass("active");
    $(this).removeClass('active');
  } else {
    $('.control-table').removeClass("active");
    $('.btn-control .btn-filter').removeClass("active");
    $(this).siblings('.control-table').addClass("active");
    $(this).addClass("active");
  }
});

var refreshBtn = function refreshBtn(btn, checked) {
  var buttonRefresh = document.querySelectorAll(btn);
  var checkedBox = Array.from(document.querySelectorAll(checked));

  if (buttonRefresh.length !== 1) {
    $(btn).click(function (e) {
      var asda = $(this).parents(checked);
      var dsw = asda[0].querySelectorAll('[type=checkbox]');

      for (var _i = 0; _i < dsw.length; _i++) {
        dsw[_i].checked = false;
      }
    });
  } else {
    buttonRefresh = buttonRefresh[0];
    buttonRefresh.addEventListener('click', function (e) {
      e.preventDefault();

      for (var _i2 = 0; _i2 < checkedBox.length; _i2++) {
        checkedBox[_i2].checked = false;
      }
    });
  }
};

refreshBtn('#delete-filter', '.control-table [type=checkbox]');
refreshBtn('#refresh-fileter', '.control-table [type=checkbox]');
refreshBtn('.btn-delete', '.control-table'); //============================
// TOGGLE MAP LIST PROJECT

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

ip.addEventListener('click', function () {
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
});
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
}

function myFunction(x) {
  var searchBtm = jQuery('.header-search');
  var searchPlh = jQuery('.header-search input');

  if (x.matches) {
    // Reponsive Header
    jQuery('.header').addClass('header-mobile');
    jQuery('.header-mobile [class*="header-logo-box-"]').click(function (e) {
      e.preventDefault();
      jQuery('.header-main-box').toggleClass('active');
    });
    jQuery('.header-menu-box').append(searchBtm);
    searchPlh.attr('placeholder', 'Nhập tên dự án cần tìm kiếm');
    $(document).ready(function () {
      $(".has-menu-btn-show").on("click", function () {
        if ($(this).parent().hasClass("active")) {
          $(this).parent().removeClass("active");
        } else {
          $(".has-menu-drp").removeClass("active");
          $(this).parent().addClass("active");
        }
      });
    });

    var appendMenuDrd = function appendMenuDrd(idMain, idAppend) {
      var getParentIdMain = idMain.parent();
      var getChildMenu;
    };

    jQuery('.bottom-show-menu').click(function (e) {
      jQuery('.menu-phanloai').addClass('active');
      jQuery('.menu-phanloai').removeClass('close-animt');
    }); //======================
    // Reponsive Filter

    $('#filter-control').addClass('filter-control-mobile');
    $('.justify-content-end').removeClass('row'); //==================
  } else {
    // Header
    jQuery('.header').removeClass('header-mobile');
    jQuery('.header-bottom-box').append(searchBtm);
    searchPlh.attr('placeholder', 'Nhập tên dự án hoặc khu vực bạn muốn tìm');
    jQuery('.bottom-show-menu').click(function (e) {
      e.preventDefault();
      jQuery('.bottom-show-menu').toggleClass('active');
      jQuery('.menu-dropdown').toggleClass('active');
    }); //===================
    // Filter 

    $('#filter-control').removeClass('filter-control-mobile');
    $('.justify-content-end').addClass('row'); //================
  }
}

var x = window.matchMedia("(max-width: 850px)");
myFunction(x);
x.addListener(myFunction); //======================