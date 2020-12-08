
!(function ($) {

    /* Slider-6 */   
    function avoSlider6($scope, $) {
        $scope.find('.avo-slider.style-6').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myparallax  = myData.parallax;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;

            var parallaxSlider;
            var parallaxSliderOptions = {
                speed       : myspeed,
                autoplay    : myautoplay,
                parallax    : myparallax,
                loop        : myloop,
                pagination  : {
                    el: '.slider-prlx .parallax-slider .swiper-pagination',
                    clickable: true
                },
                on: {
                    init: function () {
                        var swiper = this;
                        for ( var i = 0; i < swiper.slides.length; i++ ) {
                            $( swiper.slides[i] ).find( '.bg-img' ).attr({ 'data-swiper-parallax': 0.75 * swiper.width });
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.slider .parallax-slider .swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },
                navigation: {
                    nextEl: '.slider-prlx .parallax-slider .next-ctrl',
                    prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
                }
            };
            parallaxSlider = new Swiper( '.slider-prlx .parallax-slider', parallaxSliderOptions );
        });
    }
    /* Slider-7 */ 
    function avoSlider7($scope, $) {
        $scope.find('.avo-slider.style-7').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myparallax  = myData.parallax;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;

            var parallaxSlider;
            var parallaxSliderOptions = {
                speed       : myspeed,
                autoplay    : myautoplay,
                parallax    : myparallax,
                loop        : myloop,
                pagination  : {
                    el: '.slider-prlx .parallax-slider .swiper-pagination',
                    clickable: true
                },
                on: {
                    init: function () {
                        var swiper = this;
                        for ( var i = 0; i < swiper.slides.length; i++ ) {
                            $( swiper.slides[i] ).find( '.bg-img' ).attr({ 'data-swiper-parallax': 0.75 * swiper.width });
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.slider .parallax-slider .swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },
                navigation: {
                    nextEl: '.slider-prlx .parallax-slider .next-ctrl',
                    prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
                }
            };
            parallaxSlider = new Swiper( '.slider-prlx .parallax-slider', parallaxSliderOptions );
        });
    }

    /* Slider-8 */ 
    function avoSlider8($scope, $) {
        $scope.find('.avo-slider.style-8').each(function () {
            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;
            var swiperBusImgOptions = {
                speed       : myspeed,
                loop        : myloop,
                slidesPerView: 1,
                spaceBetween: 0,
                effect: 'fade',
                autoplay    : myautoplay,
                navigation: {
                    nextEl: '.slider-bus .next-ctrl',
                    prevEl: '.slider-bus .prev-ctrl'
                }
            };
            var swiperBusContentOptions = {
                speed       : myspeed,
                loop        : myloop,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay    : myautoplay,
                pagination: {
                    el: '.slider-bus .swiper-pagination',
                    type: 'fraction',
                },
            };
            swiperBusImg = new Swiper( '.slider-bus .swiper-img', swiperBusImgOptions);
            swiperBusContent = new Swiper( '.slider-bus .swiper-content', swiperBusContentOptions);
        });
    }
    /* Slider-10 */ 
    function avoSlider10($scope, $) {  
        $scope.find('.avo-slider-10').each(function () {

            var mySlider    = $( this );
            var myData      = mySlider.data( 'slider-settings' );
            var myspeed     = myData.speed;
            var myarrows    = myData.arrows;
            var myparallax  = myData.parallax;
            var myautoplay  = myData.autoplay;
            var myloop      = myData.loop;

            var parallaxSlider;
            var parallaxSliderOptions = {
                speed: myspeed,
                autoplay: myautoplay,
                parallax: myparallax,
                loop: myloop,

                on: {
                    init: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            $(swiper.slides[i])
                                .find('.bg-img')
                                .attr({
                                    'data-swiper-parallax': 0.75 * swiper.width
                                });
                        }
                    },
                    resize: function () {
                        this.update(); 
                    }
                },

                pagination: {
                    el: '.slider-prlx .parallax-slider .swiper-pagination',
                    dynamicBullets: true,
                    clickable: true
                },

                navigation: {
                    nextEl: '.slider-prlx .parallax-slider .next-ctrl',
                    prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
                }
            };
            parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);
        });
    }

   /* Portfolio-6 */ 
    function avoPortfolio6($scope, $) {
        $scope.find('.portfolio.style-6').each(function () {
            var mySlider    = $( this );
            var swiperPortfolioOptions = {
                speed       : 1000,
                loop        : true,
                slidesPerView: 1,
                spaceBetween: 0,
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 0 
                    }
                },
                pagination: {
                    el: '.caroul .swiper-pagination',
                    type: 'progressbar',
                },

                navigation: {
                    nextEl: '.caroul .swiper-button-next',
                    prevEl: '.caroul .swiper-button-prev'
                },
            };
            swiperBusImg = new Swiper( '.caroul .swiper-container', swiperPortfolioOptions);
        });
    }
   /* Showcase-1 */ 
    function avoShowcase1($scope, $) {
        $scope.find('.showcase.style-1').each(function () {
            var parallaxShowCase; 
            var parallaxShowCaseOptions = {
                speed: 1000,
                autoplay: true,
                parallax: true,
                mousewheel: true,
                loop: true,
                on: {
                    init: function () {
                        var swiper = this;
                        for (var i = 0; i < swiper.slides.length; i++) {
                            $(swiper.slides[i])
                                .find('.bg-img')
                                .attr({
                                    'data-swiper-parallax': 0.75 * swiper.width
                                });
                        }
                    },
                    resize: function () {
                        this.update();
                    }
                },
                pagination: {
                    el: '.showcase-full .parallax-slider .swiper-pagination',
                    type: 'fraction',
                    clickable: true
                },

                navigation: {
                    nextEl: '.showcase-full .parallax-slider .next-ctrl',
                    prevEl: '.showcase-full .parallax-slider .prev-ctrl'
                },
            };
            parallaxShowCase= new Swiper( '.showcase-full .parallax-slider', parallaxShowCaseOptions);
        });
    }
   /* Team-4 */ 
    function avoTeam4() {

        $('.team .team-container').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '.team .prev',
            nextArrow: '.team .next',
            dots: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    jQuery(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', avoSlider6);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', avoSlider7);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', avoSlider8);
        elementorFrontend.hooks.addAction('frontend/element_ready/dsc-slider.default', avoSlider10);
        elementorFrontend.hooks.addAction('frontend/element_ready/avo-portfolio.default', avoPortfolio6);
        elementorFrontend.hooks.addAction('frontend/element_ready/avo-showcase.default', avoShowcase1);
        elementorFrontend.hooks.addAction('frontend/element_ready/avo-team.default', avoTeam4);

    });

})(jQuery);
