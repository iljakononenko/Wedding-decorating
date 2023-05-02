$(document).ready(function () {
  fixHeader();

  $("nav .nav-link, .call-to-action-button").on("click", function (e) {
    let target = $(this).attr("data-link");

    if (window.location.pathname.includes("gallery")) {
      if (target != "gallery") {
        window.location.href = window.location.pathname.replace("gallery", "");
      }
    } else {
      if (target == "gallery") {
        window.location.href = window.location.pathname + "gallery";
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

  fixServicesHeaderHeight();

  $(window).on("resize", fixServicesHeaderHeight);
});

function fixHeader() {
  $("header").removeClass("d-none");

  $("#header-fixer").css("paddingTop", $("header").outerHeight());

  $(window).resize(function () {
    $("#header-fixer").css("paddingTop", $("header").outerHeight());
  });
}

function fixServicesHeaderHeight() {
  if ($(window).outerWidth() > 768) {
    let maxHeight = 0;
    $(".decoration-header").each(function (elem) {
      if ($(this).outerHeight() > maxHeight) {
        maxHeight = $(this).outerHeight();
      }
    });

    $(".decoration-header").css("min-height", maxHeight);
  } else {
    $(".decoration-header").css("min-height", "inherit");
  }
}
