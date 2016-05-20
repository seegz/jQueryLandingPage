$(document).ready(function(){
  new WOW().init();
    $(window).on("scroll", function() {
        var scrollDistance = $(window).scrollTop();

        // using an if/then statement
        // start with : if scroll distance is greater than 50 // scrolltop already knows you mean px.

        if (scrollDistance > 50) {

          $("#mainNav").removeClass("affix-top").addClass("affix");
        } else {
          $("#mainNav").removeClass("affix").addClass("affix-top");
        }

    });
// When the navbar links are clicked, animate a page scroll down to that anchor.
    $(document).on("click", ".page-scroll", function (event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
// Use Bootstrap scrollspy to change the navbar links on scroll.
    $('body').scrollspy({ target: '#mainNav' });

});
