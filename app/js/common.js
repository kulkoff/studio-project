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
        navRewind:false,
        margin:10,
        lazyLoad: true,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });  
    //Кнопка скрыть-раскрыть
    $(".offer__more").click(function(){
        $(this).parent().next(".offer__main").children(".offer__list").toggleClass("offer__list--active");
        $(this).children(".offer__shower--opened").toggleClass("offer__shower--opened-active");
        if($(this).children(".offer__shower--opened").hasClass("offer__shower--opened-active")) 
        {
            $(this).children(".offer__shower--closed").css("display","none")            
            $(this).children(".offer__shower--opened").css("display","inline")
        }
        else
        {
            $(this).children(".offer__shower--opened").css("display","");
            $(this).children(".offer__shower--closed").css("display","inline");
        }

    })
 });