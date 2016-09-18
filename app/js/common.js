$(document).ready(function() {
    
    //Верхнее меню - мобильное
    $(".btn__menu").click(function() {
	   $(this).toggleClass("btn__menu--active");
     $(".main-nav").toggleClass("main-nav--mobile-opened");
    });
    //Карусель
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:false,
        center:true,
        nav:true,
        margin:10,
        lazyLoad: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });  
 });