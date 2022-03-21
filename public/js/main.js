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