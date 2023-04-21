$(document).ready(function () {
  $("#header-fixer").css("paddingTop", $("header").outerHeight() / 2);

  $(window).resize(function () {
    $("#header-fixer").css("paddingTop", $("header").outerHeight() / 2);
  });
});
