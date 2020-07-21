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
});
//end slide du an noi bat

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
})
var owl = $('.partner-reti');
owl.owlCarousel();
// Go to the next item
$('.btn-next').click(function () {
  owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.btn-prev').click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger('prev.owl.carousel', [300]);
})

// let rangeSlide = jQuery('.js-range-slider');
// if (rangeSlide) {
//   jQuery('.js-range-slider').ionRangeSlider();
// }


// TIEN ICH

$(".btn-mobile-utilities a").click(function () {
  var parent = $(this).parents('.utilities');
  var child = parent.children('.utilities-content');
  child.toggleClass('show-item');
  console.log(child);

});


// FLITER

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

var refreshBtn = function (btn, checked) {
  let buttonRefresh = document.querySelectorAll(btn);
  let checkedBox = Array.from(document.querySelectorAll(checked));

  if (buttonRefresh.length !== 1) {
    $(btn).click(function (e) {
      var asda = $(this).parents(checked);
      var dsw = asda[0].querySelectorAll('[type=checkbox]');
      for (let i = 0; i < dsw.length; i++) {
        dsw[i].checked = false;
      }
    })

  } else {
    buttonRefresh = buttonRefresh[0];
    buttonRefresh.addEventListener('click', function (e) {
      e.preventDefault();
      for (let i = 0; i < checkedBox.length; i++) {
        checkedBox[i].checked = false;
      }
    })
  }

}

refreshBtn('#delete-filter', '.control-table [type=checkbox]');
refreshBtn('#refresh-fileter', '.control-table [type=checkbox]');
refreshBtn('.btn-delete', '.control-table');

jQuery('#showBoLoc').click(function (e) {
  e.preventDefault();
  jQuery('.filter-control-mobile').addClass('active');
})

jQuery('#close-filter').click(function (e) {
  e.preventDefault();
  jQuery('.filter-control-mobile').removeClass('active');
  jQuery('.filter-control-mobile').addClass('close-animt');
})

//============================


// $(document).ready(function () {
//   $('.ground-slider-top').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     fade: false,
//     asNavFor: '.ground-slider-bottom',
//     // autoplay: true,
//     // autoplaySpeed: 2000,
//   });
//   $('.ground-slider-bottom').slick({
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     asNavFor: '.ground-slider-top',
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true,
//     arrows: false,
//   });
// });

// MATBANGDUAN
var btn = document.querySelectorAll('.tab ul .tab-item');
var tabs = document.querySelectorAll(".content-tab-item");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    for (var i = 0; i < btn.length; i++) {
      btn[i].classList.remove('active-tab');
    }
    this.classList.add('active-tab');
    //tinh vi tri
    var btnActive = this;
    var j = 0;
    for (j = 0; btnActive = btnActive.previousElementSibling; j++) { };
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active-item');
      tabs[j].classList.add('active-item');
    }
  });
}
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
  dots: true
});

// BẢNG SẢN PHẨM


var btnActiveTab = document.querySelectorAll('.list-tab li');
var tabItem = document.querySelectorAll(".tab-items");
for (var i = 0; i < btnActiveTab.length; i++) {
  btnActiveTab[i].addEventListener("click", function () {
    for (var i = 0; i < btnActiveTab.length; i++) {
      btnActiveTab[i].classList.remove('active-table-tab');
    }
    this.classList.add('active-table-tab');
    //tinh vi tri
    var active = this;
    var j = 0;
    for (j = 0; active = active.previousElementSibling; j++) { };
    for (var i = 0; i < tabItem.length; i++) {
      tabItem[i].classList.remove('active-item-table');
      tabItem[j].classList.add('active-item-table');
    }
  });
}



function myFunction(x) {
  var searchBtm = jQuery('.header-search');
  var searchPlh = jQuery('.header-search input');

  if (x.matches) {

    // Reponsive Header
    jQuery('.header').addClass('header-mobile');
    jQuery('.header-mobile .header-logo-box i.fas').click(function (e) {
      // e.preventDefault();
      jQuery('.header-main-box').toggleClass('active');
      jQuery('.header-mobile').toggleClass('full-height');
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
    });
    //======================

    // Reponsive Filter
    $('#filter-control').addClass('filter-control-mobile');
    $('.justify-content-end').removeClass('row');
    //==================

    // Progress
    let progressStatus = Array.from(document.querySelectorAll('.progress-status'));
    let barPer = document.querySelector('.progress-per');
    let ecs = 0;
    progressStatus.forEach((el, inx) => {
      let cdas = ecs += 17;
      cdas = cdas -= 17;
      el.style.top = cdas + '%';
      setInterval(function () {
        var getHeight = parseFloat(barPer.dataset.progress);
        for (var i = 0; i <= getHeight; i++) {
          barPer.style.height = i + '%';
          let daw = parseFloat(el.style.top);
          if (i >= daw) {
            el.classList.add('active');
          }
        }
      }, 500);
    });

  } else {
    // Header
    jQuery('.header').removeClass('header-mobile');
    jQuery('.header-bottom-box').append(searchBtm);
    searchPlh.attr('placeholder', 'Nhập tên dự án hoặc khu vực bạn muốn tìm');
    jQuery('.bottom-show-menu').click(function (e) {
      e.preventDefault();
      jQuery('.bottom-show-menu').toggleClass('active');
      jQuery('.menu-dropdown').toggleClass('active');
    });
    //===================

    // Filter 
    $('#filter-control').removeClass('filter-control-mobile');
    $('.justify-content-end').addClass('row');
    //================

    // Progress
    let progressStatus = Array.from(document.querySelectorAll('.progress-status'));
    let barPer = document.querySelector('.progress-per');
    let ecs = 7;
    progressStatus.forEach((el, inx) => {
      let cdas = ecs += 11;
      cdas = cdas -= 11;
      el.style.left = cdas + '%';
      setInterval(function () {
        var getWidth = parseFloat(barPer.dataset.progress);
        for (var i = 0; i <= getWidth; i++) {
          barPer.style.width = i + '%';
          let daw = parseFloat(el.style.left);
          if (i >= daw) {
            el.classList.add('active');
          }
        }
      }, 500);
    });

  }
}

var x = window.matchMedia("(max-width: 850px)");
myFunction(x);
x.addListener(myFunction);



//======================


// TOGGLE MAP LIST PROJECT
var ip = document.getElementById('view-map');
var map = document.getElementById('map');
var showMap = true;
var pj = document.querySelector('.list-project-map');

var card = document.getElementsByClassName('card-media-768');
var newClassCard = ''
var oddClassCard = ''
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
if (ip) {
  ip.addEventListener('click', function () {
    var oddClass = pj.getAttribute('class');
    var newClass = oddClass + " col-8";
    if (showMap) {
      map.style.display = 'block';
      pj.classList.add('col-8');
      setAttributeCard()
      showMap = false;
    }
    else if (showMap === false) {
      map.style.display = 'none';
      pj.classList.remove('col-8');
      backAttributeCard()
      showMap = true;
    }
  });
}







