$(document).ready(function() {

  // open main menu

   $(".js-open-submenu").on("click", function() {

      let 
        submenu = $(".header__submenu-wrapper"),
        that    = $(this);


      if ( submenu.is(":visible") ) {
        submenu.slideUp(300);
        that.removeClass("active");
      } else {
        submenu.slideDown(300);
        that.addClass("active");
      }

   });

   // open submenus 

   $(".menu-item-has-children").on("click", function(e) {

    e.preventDefault();

    let 
      that    = $(this),
      submenu = that.find(".sub-menu");

    $(".sub-menu").fadeOut(300);
    $(".menu-item-has-children").removeClass("active");

    if ( submenu.is(":visible") ) {
      submenu.fadeOut(300);
      that.removeClass("active");
    } else {
      submenu.fadeIn(300);
      that.addClass("active");
    }

 });

 // open popup

  $(".header__btn").on("click", function() {
    $(".overlay").fadeIn(300);
    $("body").css("overflow-y", "hidden");
  });

  // close popup

  function closePopup() {

    $(".overlay").fadeOut(300);
    $("body").css("overflow-y", "auto");

  }

  $(".popup__close").on("click", function() {
    closePopup();
  });


  
	// close popup after overlay click

	$(function () {
		$(document).mouseup(function (event) {
			if ($(".overlay").is(":visible")) {
				var popup = $(".popup");
				if (!popup.is(event.target)
					&& popup.has(event.target).length === 0) {
            closePopup();
				}
			}
		});
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
            arrows: true,
            dots: true
          }
        }
      ]
    }); 



});