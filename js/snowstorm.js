(function($){
  $.fn.snow = function(options){
      var $flake = $('<div id="snowbox" />').css({'position': 'absolute','z-index':'9999', 'top': '-50px', 'cursor': 'pointer'}).html('❄'),
          documentHeight  = $(document).height(),
          documentWidth   = $(document).width(),
          defaults = {
              minSize     : 10,
              maxSize     : 20,
              newOn       : 1000,
              flakeColor  : "#99ccff" /* 自定义雪花颜色，淡蓝色 */
          },
          options = $.extend({}, defaults, options);
      var interval= setInterval( function(){
          var startPositionLeft = Math.random() * documentWidth - 100,
              startOpacity = 0.5 + Math.random(),
              sizeFlake = options.minSize + Math.random() * options.maxSize,
              endPositionTop = documentHeight - 200,
              endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
              durationFall = documentHeight * 10 + Math.random() * 5000;
          $flake.clone().appendTo('body').css({
              left: startPositionLeft,
              opacity: startOpacity,
              'font-size': sizeFlake,
              color: options.flakeColor
          }).animate({
              top: endPositionTop,
              left: endPositionLeft,
              opacity: 0.2
          }, durationFall, 'linear', function(){
              $(this).remove()
          });
      }, options.newOn);
  };
})(jQuery);
