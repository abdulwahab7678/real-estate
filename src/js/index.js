import"@fortawesome/fontawesome-free/css/all.css"
// import"swiper/swiper-bundle.css"
// import"swiper/swiper-bundle.min.css"
// import"swiper/swiper-bundle.min.js"

var swiper = new Swiper(".slider-1 .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoHeight: true,
  // autoplay: {
  //   delay: 1000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".slider-1 .swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slider-home .mySwiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
   
    navigation: {
      nextEl: ".slider-home .right-arrow",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        }
    }
  });
var swiper = new Swiper(".slider-2 .mySwiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
   
    navigation: {
      nextEl: ".slider-2 .right-arrow",
    },
    breakpoints: {
        425: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.7,
          spaceBetween: 16,
        }
    }
  });




  // $(window).resize(function(){
  //   If($(window).width(0)<425);{
  //    $('.slider-2 .swiper-wrapper').removeClass('swiper-wrapper');
  //   }
  //  });



  var home = document.querySelector(".main .home")
  var ditailBuilding = document.querySelector(".main .detail-building")
  var homeCardBtn = document.querySelectorAll(".main .home-card-btn").length;
  var btnArrow = document.querySelector(".main .btn-arrow")

for (var i = 0; i < homeCardBtn; i++){
document.querySelectorAll(".home-card-btn")
[i].addEventListener("click", function(){
  ditailBuilding.style.cssText="display:block"
  home.style.cssText="display:none"
})
}
function funcHome(){
  ditailBuilding.style.cssText="display:none"
  home.style.cssText="display:block"
}
btnArrow.addEventListener("click", funcHome)

  // function funcDitailBuil(){
   
  // }
  // homeCardBtn.addEventListener("click", funcDitailBuil) 
   