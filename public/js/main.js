$(document).ready(() => {
    const owlCarouselBanner = $('.owl-carousel-banner')
    owlCarouselBanner.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false
    });
    $('.custom-next-btn-banner').click(function () {
        owlCarouselBanner.trigger('next.owl.carousel');
    })
    $('.custom-prev-btn-banner').click(function () {
        owlCarouselBanner.trigger('prev.owl.carousel', [300]);
    })
})


$(document).ready(() => {
    const owlCarouselOurCustomers = $('.owl-carousel-our-customers')
    owlCarouselOurCustomers.owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        margin: 50,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    $('.custom-next-btn-banner').click(function () {
        owlCarouselOurCustomers.trigger('next.owl.carousel');
    })
    $('.custom-prev-btn-banner').click(function () {
        owlCarouselOurCustomers.trigger('prev.owl.carousel', [300]);
    })
})