
let getLiMenu = Array.from(document.querySelectorAll('.menu-drd-level-1 .menu-drd-item'));

for(let i = 0; i < getLiMenu.length; i++) {
    let ads = getLiMenu[i];
    let wfaf = ads.getAttribute('class');
    let qwe = wfaf.split(' ');
    ads.addEventListener('click', function() {
        let sibling = getSiblings(this);
        for(let j = 0; j < sibling.length; j++) {
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

    clickToShow.addEventListener('click', function() {
        let adwd = Array.from(document.querySelectorAll('.menu-style'));
        for(let i = 0; i < adwd.length; i++) {
            adwd[i].classList.remove('active');
        }
        showDown.classList.add('active');
    })
}
clickShowMenu('show-noibat', 'noibat');
clickShowMenu('show-loaihinhbds', 'loaihinhbds');
clickShowMenu('show-khuvuc', 'khuvuc');

let childMenu = Array.from(document.querySelectorAll('.menu-child-menu ul'));
for(let i = 0; i < childMenu.length; i++) {
    let sdaw = childMenu[i];
    let qwfst = childMenu[i].children;
    if(qwfst.length > 10) {
        let anhggf = qwfst[10].parentElement;
        anhggf.classList.add('menu-style-2-child-flex');
    }
    console.log(qwfst);
}

jQuery('.bottom-show-menu').click(function(e) {
    e.preventDefault();
    jQuery('.menu-dropdown').toggleClass('active')
})




//==================