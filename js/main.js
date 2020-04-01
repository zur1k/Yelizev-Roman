$(function () {

    // slider 
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 4500,
        infinite: true,
    });

    // menu
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

    }); 

    //  
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
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
        $('body,html').animate({scrollTop: top}, 1500);
    });
    
});