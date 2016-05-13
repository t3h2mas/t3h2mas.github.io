$(document).ready(function() {
  $('#mail').on('click', function () {
    $('#hide').toggleClass('hidden');
    $('body').css('overflow-y', 'hidden');
    $('body').stop().animate({ scrollTop: $(document).height() - $(window).height() }, 300);
    $('body').css('overflow-y', 'auto');
  });
});
