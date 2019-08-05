$(document).ready(function() {
  // remove underline on selected page on navbar
  $(".nav-link").on('mouseenter', function() {
      $('.homepage-link').removeClass('active-link');
  });
  $(".nav-link").on('mouseleave', function() {
        $('.homepage-link').addClass('active-link');
  });


  })();
