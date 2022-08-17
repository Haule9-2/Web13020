$(document).ready(function () {
  $("img")
    .mouseover(function () {
      $(this).animate({
        width: "+=100px",
        height: "+=100px",
      });
    })
    .mouseout(function () {
      $(this).animate({
        width: "200px",
        height: "150px",
      });
    });
});
