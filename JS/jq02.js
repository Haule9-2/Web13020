$(document).ready(function () {
  $("#btn").click(function () {
    let date1 = $("#dayform").val();
    let date2 = $("#dayto").val();
    date1 = new Date(date1);
    date2 = new Date(date2);
    let re = (date2.getTime() - date1.getTime()) / (3600 * 24 * 1000);
    if (re>0)
    $("#kq").text("Kết quả " + re + " ngày ");
    else{
    $("#kq").text("Ngày đến vui lòng chọn sau ngày bắt đầu ");

    }
  });
});
