$(function(){
  $('.carousel.carousel-slider').carousel({full_width: true});
});

(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('#textarea1').trigger('autoresize');
  }); // end of document ready
  // Sticky Header

$(window).scroll(function() {

    if ($(window).scrollTop() > 150) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }

    if ($(window).scrollTop() > 150) {
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

    if ($(window).scrollTop() > 650) {
        $('#programmer-job').removeClass('welcome-hide');
    } else {
        $('#programmer-job').addClass('welcome-hide');
    }
    
    if ($(window).scrollTop() > 900) {
        $('.projects-welcome-section').removeClass('welcome-hide');
    } else {
        $('.projects-welcome-section').addClass('welcome-hide');
    }

    var navheight = $('.main_h').height();

    if ($(window).scrollTop() >= $('#bio-section').offset().top-navheight) {
      $('.biography').addClass('lock-section');
      $('.biography').addClass('lock-bio');
      $('.biography').css('top', navheight);
    } else{
      $('.biography').removeClass('lock-section');
      $('.biography').removeClass('lock-bio');
    }
    if ($(window).scrollTop() >= $('#projects-section').offset().top-navheight) {
      $('.proyectos').addClass('lock-section');
      $('.proyectos').css('top', navheight);
    } else{
      $('.proyectos').removeClass('lock-section');
    }

    if ($(window).scrollTop() >= $('#contacts-section').offset().top-navheight) {
      $('.contacts-section').addClass('lock-section');
      $('.contacts-section').css('top', navheight);
    } else {
      $('.contacts-section').removeClass('lock-section');
    }
});

// $('.card').mouseover(function(){
//   $(this).addClass('hover-project');
// });
// $('.card').mouseout(function(){
//   $(this).removeClass('hover-project');
// });

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
    var navheight = $('.main_h').height();
    var target = $(id).offset().top - navheight;
    $('html, body').animate({
        scrollTop: target
    }, 400);
    event.preventDefault();
});
})(jQuery); // end of jQuery name space
