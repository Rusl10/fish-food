//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
            // comment
            /* use for build navigation arrows */
            /* let arrowLeft = document.createElement('div');
             let arrowRight = document.createElement('div');
             arrowLeft.classList.add('swiper-button-prev');
             arrowRight.classList.add('swiper-button-next');
             slider.appendChild(arrowLeft);
             slider.appendChild(arrowRight);*/
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) {}

let slider_about = new Swiper('.about__slider', {
    /*
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    */
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // comment
    /* При добавлении slidesPerColumn подрубаем autoHeight, иначе не будет доставать высоты колонкам */
    autoHeight: true,
    speed: 800,
    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,
    // Dotts
    //pagination: {
    //  el: '.slider-quality__pagging',
    //  clickable: true,
    //},
    // Arrows
    navigation: {
        nextEl: '.about__more .more__item_next',
        prevEl: '.about__more .more__item_prev',
    },
    /*
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1268: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    */
    on: {
        lazyImageReady: function() {
            ibg();
        },
        // comment
        /* add if we change kind of bullets on resize. One of breakpounts must contain
        pagination: {
            dynamicBullets: true,
        }, construction */
        /*breakpoint: function(swiper) {
            if (!swiper.pagination) {
                document.querySelector('.example').classList.remove('swiper-pagination-bullets-dynamic')
            }

        }*/
    }
    // And if we need scrollbar
    //scrollbar: {
    //  el: '.swiper-scrollbar',
    //},
});

// comment код для реинициализации слайдера при ресайзе окна
// var swiper = null;

// function initSwiper() {
//     console.log(1)
//     if (swiper) {
//         swiper.destroy();
//     }

//     swiper = new Swiper('.mainslider__body', {
//         /*
//         effect: 'fade',
//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//         },
//         */
//         observer: true,
//         observeParents: true,
//         //height: 770,
//         slidesPerView: 3,
//         slidesPerColumn: 2,
//         spaceBetween: 30,

//         //autoHeight: true,
//         speed: 800,
//         //touchRatio: 0,
//         //simulateTouch: false,
//         //loop: true,
//         //preloadImages: false,
//         //lazy: true,
//         // Dotts

//         // Arrows
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.mainslider__dotts',
//             clickable: true,
//             dynamicBullets: true,
//         },
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 0,
//                 autoHeight: true,
//             },
//             768: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//             },
//             992: {
//                 slidesPerView: 3,
//                 spaceBetween: 20,
//             },
//             1268: {
//                 slidesPerView: 4,
//                 spaceBetween: 30,
//             },
//             320: {
//                 slidesPerView: 1,
//                 slidesPerColumn: 1,
//                 autoHeight: true,

//             },
//             561: {
//                 slidesPerView: 2,
//                 pagination: {

//                     dynamicBullets: true,
//                 },
//             },
//             992: {
//                 slidesPerView: 3,
//             }
//         },

//         on: {
//             lazyImageReady: function() {
//                 ibg();
//             }

//         }
//         // And if we need scrollbar
//         //scrollbar: {
//         //  el: '.swiper-scrollbar',
//         //},
//     });

// }

// var timer;

// window.addEventListener('resize', function() {
//     if (timer) {
//         clearTimeout(timer);
//     }

//     timer = setTimeout(initSwiper, 200);
// });

// initSwiper();