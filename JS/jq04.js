 $(document).ready(function () {
            $("div").click(function () {
                var color = $(this).css("background-color");
                var output;
                switch (color) {
                    case "rgb(0, 0, 255)":
                        output = "Màu xanh dương ";
                        break;
                    case "rgb(255, 0, 0)":
                        output = "Màu đỏ ";
                        break;
                    case "rgb(255, 0, 255)":
                        output = "Màu Tím ";
                        break;
                    case "rgb(0, 255, 0)":
                        output = "Màu xanh lá ";
                        break;

                }
                $("#kq").html("Màu bạn chọn là : " + output + " : " + color);
                $("#kq").css({ "color": color, "font-size": "2em" })
            });
        });