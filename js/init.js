(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
  // Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');

    } else {
        $('.main_h').removeClass('sticky');

    }

    if ($(window).scrollTop() > 250) {
        $('.welcome-message').removeClass('welcome-hide');
        $('.hero').addClass('blur-image');
    } else {
        $('.welcome-message').addClass('welcome-hide');
        $('.hero').removeClass('blur-image');
    }

    if ($(window).scrollTop() > 400) {
        $('#army-job').removeClass('welcome-hide');

    } else {
        $('#army-job').addClass('welcome-hide');
    }

    if ($(window).scrollTop() > 480) {
        $('#college-job').removeClass('welcome-hide');
    } else {
        $('#college-job').addClass('welcome-hide');
    }

    if ($(window).scrollTop() > 590) {
        $('#marketer-job').removeClass('welcome-hide');
    } else {
        $('#marketer-job').addClass('welcome-hide');
    }

    if ($(window).scrollTop() > 680) {
        $('#programmer-job').removeClass('welcome-hide');
    } else {
        $('#programmer-job').addClass('welcome-hide');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 40;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 400);
    event.preventDefault();
});
})(jQuery); // end of jQuery name space
