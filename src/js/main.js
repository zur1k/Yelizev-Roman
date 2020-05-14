$(function () {

    // slider 
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: false,
        infinite: true,
    });

    // menu
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    }); 
    $(".nav-menu__link").on("click", function(event) {
        event.preventDefault();

        $("#nav_toggle").toggleClass("active");
        $("#nav").toggleClass("active");

    }); 

    //  
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': false,
        'disableScrolling':true,
        'showImageNumberLabel':false
     
    });

    //   tab-bar 

    $(".tab-item").not(":first").hide();
    $(".tab-wrapper .tab").click(function() {
        $(".tab-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    // планое перемещение 
    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1700);
    });

    // contact bar for scroll

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
    
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
    
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };
    
    $(window).on('scroll', function() {
        if ($('.footer').isInViewport()) {
            $('.fixed').addClass('hide');
        } else {
            $('.fixed').removeClass('hide');
        }
    });
    
});