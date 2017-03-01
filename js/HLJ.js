$( document ).ready(function() {
  var fadedout = false;
  $('.map-outline-path').css('animation', 'dash 3s linear forwards');

  $('#path3643')[0].addEventListener('webkitAnimationEnd', function(event) {
    $('.title-tint').addClass('fade-out');
    fadedout = true;
  }, false );

  $('.title-tint')[0].addEventListener('webkitTransitionEnd', function(event) {
      if(fadedout==true){
        $('.title-tint').removeClass('fade-out');
        $('.title-tint').addClass('vid-fade-in');
        $('#drone-footage').toggle();
        $('#drone-footage')[0].play();
        fadedout = false
      };
  }, false );

  $('#MainOutline')[0].addEventListener('webkitAnimationEnd', function(event) {
    $('.province-path').css('animation', 'dash 3s linear forwards')
  }, false );

  $('.province-path')[0].addEventListener('webkitAnimationEnd', function(event) {
    $('.color-path').css('animation', 'dash 2s linear forwards')
  }, false );
}); //end of document ready function
