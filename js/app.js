$(document).ready(function() {
  $('#mail').on('click', function () {
    $('#hide').toggleClass('hidden');
    $('body').animate({ scrollTop: $(document).height() - $(window).height() }, 'fast');
  });
});
