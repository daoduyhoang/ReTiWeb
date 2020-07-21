var pram = 1;
var statusRemove = 0;
$('#big').bind('mousewheel', function (e) {
    // e.preventdefault()
    if (e.originalEvent.deltaY < 0) {
        e.preventDefault();
        if (pram === 1) {
            $('.mapify-holder').removeClass('scale-2');
            $('.mapify-holder').addClass('scale-15');
            $(".mapify-holder").draggable();
            pram = 2;
            statusRemove = 1;
            console.log(pram + "-" + statusRemove)
        }
        else if (pram === 2) {
            $('.mapify-holder').addClass('scale-2');
            $('.mapify-holder').removeClass('scale-15');
            pram = 3;
            statusRemove = 2;
            console.log(pram + "-" + statusRemove)
        }
        else if (pram === 3) {
            $('.mapify-holder').addClass('scale-3');
            $('.mapify-holder').removeClass('scale-2');
            pram = 4;
            statusRemove = 3;
            console.log(pram + "-" + statusRemove)
        }
    }
    else if (e.originalEvent.deltaY > 0) {
        e.preventDefault();
        if (statusRemove == 1) {
            $('.mapify-holder').removeClass('scale-15');
            pram = 1;
            statusRemove = 0;
            // $(".mapify-holder").draggable('destroy');
            console.log(pram + "-" + statusRemove)
        }
        else if (statusRemove == 2) {
            $('.mapify-holder').addClass('scale-15');
            $('.mapify-holder').removeClass('scale-2');
            $('.mapify-holder').removeClass('scale-3');
            statusRemove = 1;
            pram = 2;
            console.log(pram + "-" + statusRemove)
        }
        else if (statusRemove == 3) {
            $('.mapify-holder').addClass('scale-2');
            $('.mapify-holder').removeClass('scale-3');
            $('.mapify-holder').removeClass('scale-15');
            statusRemove = 2;
            console.log(pram + "-" + statusRemove)
        }
    }

});