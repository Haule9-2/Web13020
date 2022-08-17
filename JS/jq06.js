  $(document).ready(function () {
            $("#btnleft").click(function () {
                $("div").animate({ left: '0' }, 1000);
            });
            $("#btnright").click(function () {
                var left = window.innerWidth - $("div").width();
                $("div").animate({
                    left: left
                }, 1000)
            });
            $("#btnup").click(function () {
                $("div").animate({ top: '0' }, 1000);
            });
            $("#btndown").click(function () {
                var top = window.innerHeight - $("div").height();
                $("div").animate({
                    top: top
                }, 1000)
            });
        });