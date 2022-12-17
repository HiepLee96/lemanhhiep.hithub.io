
//Swiper Aniamate ADS SLIDE SECTION
var swiper = new Swiper(".ads-slides", {
    loop: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
  });

  var swiper = new Swiper(".books-slides", {
    slidesPerView: 6.5,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    enteredSlides: true,
    autoplay: {
          delay: 10000,
          disableOnInteraction: false,
    },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 5,
        },
        1024: {
          slidesPerView: 6.5,
        },
      },
  });