 $(document).ready(function () {
            $("#btn1").click(function () {
                $("  tbody tr:nth-child(odd)").addClass("red");
            });
            $("#btn2").click(function () {
                $("  tbody tr:nth-child(odd)").removeClass();
            });
        });