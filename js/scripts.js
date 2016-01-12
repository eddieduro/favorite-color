$("document").ready(function() {
  $(".btn-blue").click(function() {
    $("body").toggleClass("blue-bg");
    $(".btn-orange, .btn-green, .blueHidden").toggle();
  });

  $(".btn-green").click(function() {
    $("body").toggleClass("green-bg");
    $(".btn-orange, .btn-blue, .greenHidden").toggle();
  });

  $(".btn-orange").click(function() {
    $("body").toggleClass("orange-bg");
    $(".btn-green, .btn-blue, .orangeHidden").toggle();
  });
});
