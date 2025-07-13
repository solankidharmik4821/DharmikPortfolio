
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none"
})

$(".navbar .nav-link").on("click", function(){
  $(".navbar").find(".active").removeClass("active");
  $(this).addClass("active");
});

new Typewriter('#typewriter', {
    strings: ['UI/UX Designer', 'Full-Stack Developer'],
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


function send() {
 let fname = document.getElementById("fname").value;
 let lname = document.getElementById("lname").value;
 let mail = document.getElementById("mail").value;
 let msg = document.getElementById("msg").value;

  emailjs.send("service_y9yajl3", "template_c32jilo",  {
    from_name: "Admin",
    to_name: fname +' '+lname,
    message: msg,
    from_email: mail,
  },"lwvsxuBuPuY1jzTqm").then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
    },
    function (err) {
      console.log('FAILED...', err);
    },
  );

  alert("Thank you for showing your interest.");
}

AOS.init();

// 'pie' is class name div
const circle = new CircularProgressBar("pie");
circle.initial();

(function(){
  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY",
  });
})();

