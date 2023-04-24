$(document).ready(function () {
  fixHeader();

  $("nav .nav-link").on("click", function (e) {
    let target = $(this).attr("data-link");

    if (window.location.pathname.includes("index")) {
      if (target == "gallery") {
        window.location.href = window.location.pathname.replace(
          "index",
          "gallery"
        );
      }
    } else {
      if (target != "gallery") {
        window.location.href = window.location.pathname.replace(
          "gallery",
          "index"
        );
      }
    }

    target = "#" + target;
    let additional_padding = 120;

    if (window.innerWidth > 768) {
      additional_padding = 60;
    }

    $("html, body").animate(
      {
        scrollTop: $(target).offset().top - additional_padding,
      },
      0
    );
  });
});

function fixHeader() {
  $("header").removeClass("d-none");

  $("#header-fixer").css("paddingTop", $("header").outerHeight());

  $(window).resize(function () {
    $("#header-fixer").css("paddingTop", $("header").outerHeight());
  });
}
