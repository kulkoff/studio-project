$(document).ready(function() {
    
    //раскрытие описания у тепловина
    $(".btn__menu").click(function() {
	   $(this).toggleClass("btn__menu--active");
     $(".main-nav").toggleClass("main-nav--mobile-opened");
     $(".main-nav").fadeIn(400);
    });
  });