let box = $(".box");
box.click(() => {
  $("body").mousemove(function (e) {
    let valueX = e.pageX;
    let valueY = e.pageY;

    box.css({
      transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
    });
  });
});
$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // key left, right, up, and down
      box.finish().animate({
        left: "-=10",
      });
      break;
    case 38: // key up
      box.finish().animate({
        top: "-=10",
      });
      break;
    case 39: // key right
      box.finish().animate({
        left: "+=10",
      });
      break;
    case 40: // key down
      box.finish().animate({
        top: "+=10",
      });
      break;
  }
});
