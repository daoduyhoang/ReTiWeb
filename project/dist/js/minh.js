"use strict";

var getLiMenu = Array.from(document.querySelectorAll('.menu-drd-level-1 .menu-drd-item'));

for (var i = 0; i < getLiMenu.length; i++) {
  var ads = getLiMenu[i];
  var wfaf = ads.getAttribute('class');
  var qwe = wfaf.split(' ');
  ads.addEventListener('click', function () {
    var sibling = getSiblings(this);

    for (var j = 0; j < sibling.length; j++) {
      sibling[j].classList.remove('active');
    }

    this.classList.add('active');
  });
}

var getSiblings = function getSiblings(elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild; // Loop through each sibling and push to the array

  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }

    sibling = sibling.nextSibling;
  }

  return siblings;
};

var clickShowMenu = function clickShowMenu(idClick, idShow) {
  var clickToShow = document.getElementById(idClick);
  var showDown = document.getElementById(idShow);
  clickToShow.addEventListener('click', function () {
    var adwd = Array.from(document.querySelectorAll('.menu-style'));

    for (var _i = 0; _i < adwd.length; _i++) {
      adwd[_i].classList.remove('active');
    }

    showDown.classList.add('active');
  });
};

clickShowMenu('show-noibat', 'noibat');
clickShowMenu('show-loaihinhbds', 'loaihinhbds');
clickShowMenu('show-khuvuc', 'khuvuc');
var childMenu = Array.from(document.querySelectorAll('.menu-child-menu ul'));

for (var _i2 = 0; _i2 < childMenu.length; _i2++) {
  var sdaw = childMenu[_i2];
  var qwfst = childMenu[_i2].children;

  if (qwfst.length > 10) {
    var anhggf = qwfst[10].parentElement;
    anhggf.classList.add('menu-style-2-child-flex');
  }

  console.log(qwfst);
}

jQuery('.bottom-show-menu').click(function (e) {
  e.preventDefault();
  jQuery('.menu-dropdown').toggleClass('active');
}); //==================