$(document).ready(function () {
    AOS.init();

    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        autoplay:true,
        autoplayTimeout:1200,
        autoplayHoverPause:true
    })
})