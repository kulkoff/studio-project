$(document).ready(function() {
    
    //Верхнее меню - мобильное
    $(".btn__menu").click(function() {
	   $(this).toggleClass("btn__menu--active");
     $(".main-nav").toggleClass("main-nav--mobile-opened");
    });
    //Карусель
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });
 });