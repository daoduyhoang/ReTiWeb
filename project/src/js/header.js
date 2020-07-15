
let getLiMenu = Array.from(document.querySelectorAll('.menu-drd-level-1 .menu-drd-item'));

for (let i = 0; i < getLiMenu.length; i++) {
    let ads = getLiMenu[i];
    let wfaf = ads.getAttribute('class');
    let qwe = wfaf.split(' ');
    ads.addEventListener('click', function () {
        let sibling = getSiblings(this);
        for (let j = 0; j < sibling.length; j++) {
            sibling[j].classList.remove('active');
        }
        this.classList.add('active');
    })
}
var getSiblings = function (elem) {

    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }

    return siblings;

};




let clickShowMenu = function (idClick, idShow) {
    let clickToShow = document.getElementById(idClick);
    let showDown = document.getElementById(idShow);

    clickToShow.addEventListener('click', function () {
        let adwd = Array.from(document.querySelectorAll('.menu-style'));
        for (let i = 0; i < adwd.length; i++) {
            adwd[i].classList.remove('active');
        }
        showDown.classList.add('active');
    })
}
clickShowMenu('show-noibat', 'noibat');
clickShowMenu('show-loaihinhbds', 'loaihinhbds');
clickShowMenu('show-khuvuc', 'khuvuc');

let childMenu = Array.from(document.querySelectorAll('.menu-child-menu ul'));
for (let i = 0; i < childMenu.length; i++) {
    let sdaw = childMenu[i];
    let qwfst = childMenu[i].children;
    if (qwfst.length > 10) {
        let anhggf = qwfst[10].parentElement;
        anhggf.classList.add('menu-style-2-child-flex');
    }
}

jQuery('.menu-drd-level-1 > li > a').click(function (e) {
    e.preventDefault();
})



//==================

// Menu phan loai mobile
let getMenuHTML = document.querySelector('.menu-dropdown > .menu-drd-level-1').innerHTML;
jQuery('.menu-phanloai .menu-drop').append(getMenuHTML);
let appendToMenuMobile = function(idMain, idAppend) {
    let stringAew = '.menu-phanloai ' + idMain;
    let getParentIdMain = jQuery(stringAew).parent();
    let dsaw = document.querySelector(idAppend).children[0].innerHTML;
    getParentIdMain.append(dsaw);
};
appendToMenuMobile('#show-noibat', '#noibat');
appendToMenuMobile('#show-loaihinhbds', '#loaihinhbds');
appendToMenuMobile('#show-khuvuc', '#khuvuc');

jQuery('.menu-phanloai .menu-drd-item.has-drop > a').append('<i class="fas fa-chevron-down"></i>');


$(document).ready(function () {
    $(".menu-phanloai li.has-drop > a").on("click", function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
        } else {
            $(this).parent().siblings('.has-drop').removeClass("active");
            $(this).parent().addClass("active");
        }
    });
});
jQuery('.menu-phanloai .close-menu').click(function(e) {
    e.preventDefault();
    jQuery('.menu-phanloai').removeClass('active');
})

//==============


function myFunction(x) {
    let searchBtm = jQuery('.header-search');
    let searchPlh = jQuery('.header-search input');
    if (x.matches) {
        jQuery('.header').addClass('header-mobile');
        jQuery('.header-mobile [class*="header-logo-box-"]').click(function (e) {
            e.preventDefault();
            jQuery('.header-main-box').toggleClass('active');
        })
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
        var appendMenuDrd = function(idMain, idAppend) {
            let getParentIdMain = idMain.parent();
            let getChildMenu 
        }
        jQuery('.bottom-show-menu').click(function (e){
            jQuery('.menu-phanloai').addClass('active');
        });
    } else {
        jQuery('.header').removeClass('header-mobile');
        jQuery('.header-bottom-box').append(searchBtm);
        searchPlh.attr('placeholder', 'Nhập tên dự án hoặc khu vực bạn muốn tìm');
        jQuery('.bottom-show-menu').click(function (e) {
            e.preventDefault();
            jQuery('.bottom-show-menu').toggleClass('active')
            jQuery('.menu-dropdown').toggleClass('active')
        })
    }
}

var x = window.matchMedia("(max-width: 850px)");
myFunction(x);
x.addListener(myFunction);