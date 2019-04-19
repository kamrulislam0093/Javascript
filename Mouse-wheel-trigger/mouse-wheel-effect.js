jQuery(function($){
  
  $('body').on('mousewheel DOMMouseScroll', function(e){
    if(typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
      if(e.originalEvent.detail > 0) {
        console.log('Down');
      } else if(e.originalEvent.detail < 0){
          console.log('Up');
      }
    } else if (typeof e.originalEvent.wheelDelta == 'number') {
      if(e.originalEvent.wheelDelta < 0) {
          console.log('Down');
      } else if(e.originalEvent.wheelDelta > 0) {
          console.log('Up');
      }
    }
  });

});

