$(document).ready(() => {
    const owlCarouselBanner = $('.owl-carousel-banner')
    const owlCarouselCertificate = $('.owl-carousel-certificate')
    const ourActivitiesCarousel = $('.our-activities-carousel')
    const owlCarouselOurCustomers = $('.owl-carousel-our-customers')
    const owlJobVacancies = $('.owl-job-vacancies')
    const owlCarouselOurClients = $('.owl-carousel-our-clients')

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



    owlJobVacancies.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 15,
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
            }, 0: { items: 1 }
        }
    })
    $('.custom-next-btn-job-vacancies').click(function () {
        owlJobVacancies.trigger('next.owl.carousel');
    })
    $('.custom-prev-btn-job-vacancies').click(function () {
        owlJobVacancies.trigger('prev.owl.carousel', [300]);
    })



    owlCarouselOurClients.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 15,
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
            }, 0: { items: 1 },
        }
    })

    $('.custom-next-btn-our-customers').click(function () {
        owlCarouselOurClients.trigger('next.owl.carousel');
    })
    $('.custom-prev-btn-our-customers').click(function () {
        owlCarouselOurClients.trigger('prev.owl.carousel', [300]);
    })


    owlCarouselOurCustomers.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 15,
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
            }, 0: { items: 1 }
        }
    })

    $('.custom-next-btn-our-customers').click(function () {
        owlCarouselOurCustomers.trigger('next.owl.carousel');
    })
    $('.custom-prev-btn-our-customers').click(function () {
        owlCarouselOurCustomers.trigger('prev.owl.carousel', [300]);
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
            }, 0: { items: 1 }
        }
    })
    ourActivitiesCarousel.owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: false,
        margin: 15,
        responsive: {
            1440: {
                items: 4
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
    });
    // custom btn owl our-activities
    $('.custom-next-btn-activities').click(function () {
        ourActivitiesCarousel.trigger('next.owl.carousel');
    })
    $('.custom-prev-btn-activities').click(function () {
        ourActivitiesCarousel.trigger('prev.owl.carousel', [300]);
    })


})

$(document).ready(() => {
    const mainNav = $('#main-nav');

    window.addEventListener("scroll", (event) => {
        let scroll = this.scrollY;
        if (scroll > screen.height) {
            if (!mainNav.hasClass('background-blue')) {
                mainNav.addClass('background-blue')
            }
        } else {
            if (mainNav.hasClass('background-blue')) {
                mainNav.removeClass('background-blue')
            }
        }
    });
})