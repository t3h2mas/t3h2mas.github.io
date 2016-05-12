$(document).ready(function() {
  $('#mail').on('click', function {
    $('#hide').toggleClass('hidden');
    $('html, body').animate({ scrollTop: $(document).height() }, 'fast');
  });
});
