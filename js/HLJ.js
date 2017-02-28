var fadedout = false;

document.getElementById('path3643').addEventListener('webkitAnimationEnd', function(event) {
  $('.title-tint').addClass('fade-out');
  fadedout = true;
}, false );

$('.title-tint')[0].addEventListener('webkitTransitionEnd', function(event) {

    if(fadedout==true){
      $('.title-tint').removeClass('fade-out');
      $('.title-tint').addClass('vid-fade-in');
      $('#drone-footage').toggle();
      $('#drone-footage').get(0).play();
      fadedout = false
    }

}, false );
