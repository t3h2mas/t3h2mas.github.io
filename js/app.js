$(document).ready(function() {
  $('#mail').on('click', function () {
    $('#hide').toggleClass('hidden');
    $('body').stop().animate({ scrollTop: $(document).height() - $(window).height() }, 300);
  });
});
