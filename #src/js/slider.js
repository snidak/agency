const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
    breakpoints: {
          796: {
            slidesPerView: 2,
          }
    }
});
  
    