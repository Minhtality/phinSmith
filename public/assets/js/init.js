(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();


  }); // end of document ready
  //carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false,
    dist: -100

  });

})(jQuery); // end of jQuery name space

$('.carousel.carousel-slider').carousel({ fullWidth: true, indicators: true });
var autoplay = true;
setInterval(function () { if (autoplay) $('.carousel.carousel-slider').carousel('next'); }, 4500);
$('.carousel.carousel-slider').hover(function () { autoplay = false; }, function () { autoplay = true; });