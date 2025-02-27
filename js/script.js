//depoimentos
const swiper = new Swiper('.swiper-feedback', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    
    pagination: {
        el: '.swiper-feedback .swiper-pagination',
        clickable: true,
        
    },
    
    navigation: {
        nextEl: '.swiper-feedback .swiper-button-next',
        prevEl: '.swiper-feedback .swiper-button-prev',
    },
    on: {
        init: function () {
          document.querySelector(".swiper-pagination").style.bottom = "-6px";
        }
    }
 });

 //Cursos
const swiperOne = new Swiper('.swiper-blog', {
    breakpoints: {
             0: {
                 slidesPerView: 1
             },
             992: {
                 slidesPerView: 2
             },
             1024: {
                 slidesPerView: 3
             }
    },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-blog .swiper-pagination',
      clickable: true,
    },
});