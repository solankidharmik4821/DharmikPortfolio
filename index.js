$(".navbar .nav-link").on("click", function(){
  $(".navbar").find(".active").removeClass("active");
  $(this).addClass("active");
});

new Typewriter('#typewriter', {
    strings: ['Data Scienentist', '.Net Developer'],
    autoStart: true,
    loop: true,
    delay: 75,
});

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  breakpoints: {  
    '480': {
      slidesPerView: 2,
      spaceBetween: 30,},
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


AOS.init();

// 'pie' is class name div
const circle = new CircularProgressBar("pie");
circle.initial();


