 // function PrintResult(str) {
    //     document.getElementById('outPut').value = str;
    // }
    var array = Array(0);
    function CreateArray() {
        var length = parseInt(document.getElementById('arrayLength').value);
        array = Array.from({ length: length }, () => Math.floor(Math.random() * length));
        console.log(array);
        // PrintResult("Mảng ban đầu: [" + array + "]");
        document.getElementById("create").innerHTML = "Mảng ban đầu là : " + array;
    }

    function compareAsc(a, b) {
        return a - b;
    }
    function compareDesc(a, b) {
        return b - a;
    }

    function AscSort() {
        var AscSortedArray = array.sort(compareAsc);
        console.log(AscSortedArray);
        // PrintResult("Mảng tăng dần: [" + AscSortedArray + "]");
        document.getElementById("create1").innerHTML = "Mảng tăng dần : " + AscSortedArray;
    }
    function DescSort() {
        var DescSortedArray = array.sort(compareDesc);
        console.log(DescSortedArray);
        // PrintResult("Mảng giảm dần: [" + DescSortedArray + "]");
        document.getElementById("create2").innerHTML = "Mảng giảm dần : " + DescSortedArray;
    }