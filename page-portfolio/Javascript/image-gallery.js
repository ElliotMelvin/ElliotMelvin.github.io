
$(document).ready(function($) {
(function() {
  $('.gallery-link').magnificPopup({
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.find('figcaption').text() || item.el.attr('title');
      }
    },
    zoom: {
      enabled: true
    },
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      tCounter: ''
    },
    disableOn: function() {
      return $(window).width() > 0;
    }
  });

}).call(this);
});
