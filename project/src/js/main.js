$('.partner-reti').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
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
//start slide du an noi bat
$('.slide-card-duannoibat').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText:["<i class='fas fa-chevron-left duannoibat-btn-prev'></i>","<i class='fas fa-chevron-right duannoibat-btn-next'></i>"],
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