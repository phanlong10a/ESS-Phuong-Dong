$(document).ready(() => {
    const owlCarouselBanner = $('.owl-carousel-banner')
    const owlCarouselCertificate = $('.owl-carousel-certificate')
    const ourActivitiesCarousel = $('.our-activities-carousel')

    owlCarouselBanner.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false
    });
    // 
    ourActivitiesCarousel.owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            1024: {
                items: 3,
            },
            768: {
                items: 2,
            },
            425: {
                items: 1,
            }
        }
    });
    // custom btn owl our-activities
    $('.custom-next-btn-activities').click(function () {
        ourActivitiesCarousel.trigger('next.owl.carousel');
    })
    $('.custom-prev-btn-activities').click(function () {
        ourActivitiesCarousel.trigger('prev.owl.carousel', [300]);
    })
    // 
    $('.custom-next-btn-banner').click(function () {
        owlCarouselBanner.trigger('next.owl.carousel');
    })
    $('.custom-prev-btn-banner').click(function () {
        owlCarouselBanner.trigger('prev.owl.carousel', [300]);
    })

    owlCarouselCertificate.owlCarousel({
        // stagePadding: 50,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            1440:{
                items:4,
            },
            1024: {
                items: 3,
            },
            768: {
                items: 2,
            },
            425: {
                items: 1,
            }
        }
    })
})