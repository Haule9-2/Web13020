$(document).ready(function () {
  $(" .container div").mouseenter(function () {
    $(this)
      .animate({
        width: "+=150px",
        fontSize: "+=8em",
      })
      .mouseout(function () {
        $(this).animate({
          width: "305px",
          fontSize: "3em",
        });
      });
  });
});
