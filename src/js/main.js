$(document).ready(function() {

  // open mob menu

  console.log("run")

   $(".js-open-submenu").on("click", function() {

      let 
        submenu = $(".header__submenu-wrapper"),
        that    = $(this);


      if ( submenu.is(":visible") ) {
        submenu.slideUp(300);
        that.removeClass("active");
        console.log("visible");
      } else {
        submenu.slideDown(300);
        that.addClass("active");
        console.log("hidden");
      }

   });

  // banner slider

  $('.banner__slider').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      fade: true,
      cssEase: 'linear',
      appendDots: $(".banner__dots"),
      prevArrow: $(".banner-prev"),
      nextArrow: $(".banner-next"),
      responsive: [
        {
          breakpoint: 2500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    }); 



});