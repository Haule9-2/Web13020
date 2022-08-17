  function change() {
            var color1 = document.getElementById("mauchu").value;
            var color2 = document.getElementById("maunen").value;
            var text = document.getElementById("text").value;
            var change = document.getElementById("content-1");
            change.innerHTML = text;
            change.style.backgroundColor = color1;
            change.style.color = color2;
        }