$("document").ready(function() {
  $(".btn-blue").click(function() {
    $("body").toggleClass("blue-bg");
    $(this).siblings().toggle();
    $(".blueHidden").slideToggle();
  });

  $(".btn-green").click(function() {
    $("body").toggleClass("green-bg");
    $(this).siblings().toggle();
    $(".greenHidden").slideToggle();
  });

  $(".btn-orange").click(function() {
    $("body").toggleClass("orange-bg");
    $(this).siblings().toggle();
    $(".orangeHidden").slideToggle();
  });
});
