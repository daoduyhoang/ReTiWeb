var pram = 1;
var statusRemove = 0;

$('#big').bind('mousewheel', function (e) {
    e.preventDefault()
    if (e.originalEvent.deltaY < 0) {
        zoomMap.zoomUp();
    }
    else if (e.originalEvent.deltaY > 0) {
        zoomMap.zoomDown();
    }
});

var up = document.querySelector('.up-map');
var down = document.querySelector('.down-map');
up.onclick = function () {
    zoomMap.zoomUp();
}
down.onclick = function () {
    zoomMap.zoomDown();
}

const zoomMap = {
    scaleMap: function(val) {
        $('.mapify-holder').css('transform', 'scale(' + val + ')');
    },
    zoomUp: function() {
        if (pram === 1) {
            this.scaleMap(1.5);
            $(".mapify-holder").draggable();
            $('mapify-popOver').css('transform', 'scale(1)');
            $('#big').css('overflow', 'hidden');
            pram = 2;
            statusRemove = 1;
        }
        else if (pram === 2) {
            this.scaleMap(2);
            pram = 3;
            statusRemove = 2;
        }
        else if (pram === 3) {
            this.scaleMap(3);
            pram = 4;
            statusRemove = 3;
        }
    },
    zoomDown: function() {
        if (statusRemove == 1) {
            this.scaleMap(1);
            pram = 1;
            statusRemove = 0;
            $(".mapify-holder").draggable('destroy');
            $('#big').css('overflow', 'unset');
            $(".mapify-holder").css('left', 0);
            $(".mapify-holder").css('top', 0);
        }
        else if (statusRemove == 2) {
            this.scaleMap(1.5);
            statusRemove = 1;
            pram = 2;
        }
        else if (statusRemove == 3) {
            this.scaleMap(2);
            statusRemove = 2;
        }
    }
}
