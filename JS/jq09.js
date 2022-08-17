$(document).ready(function () {
  $("#mauchu").change(function () {
    $("#content").css("color", $(this).val());
  });
  $("li").click(function () {
    console.log("clicked");
    $("p#content").text($(this).text());
  });
  $("#normal").change(function () {
    $("p#content").removeClass("shadow");
  });
  $("#shadow").change(function () {
    $("p#content").addClass("shadow");
  });
});
