$(document).ready(() => {
    const owlCarouselBanner = $('.owl-carousel-banner')
    const owlCarouselCertificate = $('.owl-carousel-certificate')
    const mainNav = $('#main-nav')
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

    owlCarouselCertificate.owlCarousel({
        // stagePadding: 50,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            1440: {
                items: 4,
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



    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        if(scroll > screen.height){
            if(!mainNav.hasClass('background-blue')){
                mainNav.addClass('background-blue')
            }
        }else{
            if(mainNav.hasClass('background-blue')){
                mainNav.removeClass('background-blue')
            }
        }
    });
})