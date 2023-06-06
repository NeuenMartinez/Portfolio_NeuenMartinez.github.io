$(document).ready(function() {
    // No se ejecutará en dispositivos móviles
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      $('body').on({
        'mousemove': function(e) {
          console.clear();
          let clientX = e.originalEvent.clientX;
          let clientY = e.originalEvent.clientY;
          $('#cursor').css({
            'left': (clientX - 40) + 'px',
            'top': (clientY - 40) + 'px'
          });
        }
      });
    } else {
      // Desactivar puntero en dispositivos móviles
      $('#cursor').hide();
    }
  });