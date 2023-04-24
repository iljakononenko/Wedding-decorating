$(document).ready(function () {
  fixHeader();
});

function fixHeader() {
  $("header").removeClass("d-none");

  $("#header-fixer").css("paddingTop", $("header").outerHeight() / 2);

  $(window).resize(function () {
    $("#header-fixer").css("paddingTop", $("header").outerHeight() / 2);
  });
}
