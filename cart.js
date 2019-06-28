$(document).ready(function(){
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  $('input[type="checkbox"]').on('change', function() {
    $(this).closest('div').find('.headingtext').toggle(!this.checked);

    });
  
})();
