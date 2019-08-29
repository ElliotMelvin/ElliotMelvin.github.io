$(document).ready(function() {
  // remove underline on selected page on navbar
  $(".nav-link").on('mouseenter', function() {
      $('.homepage-link').removeClass('active-link');
  });
  $(".nav-link").on('mouseleave', function() {
        $('.homepage-link').addClass('active-link');
  });

  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 400) { // If page is scrolled more than 50px
      $('#myBtn').fadeIn(200); // Fade in the arrow
      $('#myBtn').addClass('animated fadeInRight');
    } else {
      $('#myBtn').fadeOut(10); // Else fade out the arrow
    }
  });
  $('#myBtn').click(function() { // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0 // Scroll to top of body
    }, 500);
  });

  // when page is reloaded it will take user to the top
  $(document).ready(function() {
    setTimeout( function () {
    $('body, html').stop().animate({ scrollTop: 0 }, 100);
}, 500);

  });

  })();
