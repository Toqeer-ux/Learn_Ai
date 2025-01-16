// Home Page Owl Carousel
var homeOwl = $('.home-carousel');
homeOwl.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
            stagePadding: 30,
        },
        600: {
            items: 2
        },
        960: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
});
homeOwl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        homeOwl.trigger('next.owl');
    } else {
        homeOwl.trigger('prev.owl');
    }
    e.preventDefault();
});

// Other Page Owl Carousel
var otherOwl = $('.other-carousel');
otherOwl.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
            stagePadding: 30,
        },
        600: {
            items: 2
        },
        960: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});