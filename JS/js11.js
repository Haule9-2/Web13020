function zoompic() {
  var checkimg = document.getElementsByName("zoom");
  var zoomimg = -1;
  for (var i = 0; i < checkimg.length; i++) {
    if (checkimg[i].checked) {
      zoomimg = checkimg[i].value;
      break;
    } else continue;
  }
  if (zoomimg == "0") {
    document.getElementById("rec").style.width = "10%";
  } else if (zoomimg == "1") {
    document.getElementById("rec").style.width = "25%";
  } else if (zoomimg == "2") {
    document.getElementById("rec").style.width = "50%";
  }
}
