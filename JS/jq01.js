$("#btn").click(()=>{
    console.log("clicked")
    if ($("#name").val() != "")
      $(".value").append(`<li>` + $("#name").val() + `</li>`);
    $("#name").val("")
});