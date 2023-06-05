$("#hamburger-toggle").click(function () {
  $("#main-menu").slideToggle(250);
});

// hides the dropdown menu on page resize
$(window).on("resize", function () {
  $("#main-menu").fadeOut(125);
});
