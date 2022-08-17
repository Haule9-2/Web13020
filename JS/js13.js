 function drawChart() {
            var xValues = document.getElementById("txtData").value.split(",");
            var yValues =[];
            for(i = 0; i < xValues.length; i++)
                yValues[i] = Number(xValues[i]);
            var barColors = [];
            for(i = 0; i < xValues.length; i++)
                barColors[i] ="rgb("+Math.floor(Math.random()*300)%256 +
                "," + Math.floor(Math.random()*300)%256 +
                "," + Math.floor(Math.random()*300)%256 + ")";
            new Chart("canvas", {
                type: "pie",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: "Pie Chart"
                    }
                }
            });
        }