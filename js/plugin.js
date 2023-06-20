const swiper = new Swiper('.swiper', {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
    },
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});