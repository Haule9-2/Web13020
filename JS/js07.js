let arr;
        let input;

        function SaveS1() {
            input = document.getElementById("str1").value;
        }

        function Print(s) {
            document.getElementById("str1").value = s;
        }

        function Reset() {
            Print(input);
        }

        function Normalize() {
            arr = input.split(" ");
            console.log(arr);

            let kq = "";
            let temp = "";

            for (let i = 0; i < arr.length; i++) {
                temp = arr[i].toLowerCase();
                if (temp != "") {
                    temp = temp.substr(0, 1).toUpperCase() + temp.substr(1, temp.length - 1);
                    console.log(temp);
                    kq += temp + " ";
                }
                else
                    continue;
            }
            Print(kq);
        }

        function ReplaceS2ToS3() {
            let S2 = document.getElementById("str2").value.trim();
            let S3 = document.getElementById("str3").value.trim();

            let newArray = input.split(" ");
            let result = "";

            for (let index = 0; index < newArray.length; index++) {
                if (newArray[index].toLowerCase() == S2.trim().toLowerCase()) {
                    newArray[index] =    S3;
                }

                result += newArray[index] + " ";
            }

            Print(result);
        }

        function InsertS2ToS1() {
            let position = parseInt(document.getElementById("position").value);
            let S2 = document.getElementById("str2").value.trim();

            let currentS1 = document.getElementById("str1").value;
            console.log(currentS1);

            currentS1 = currentS1.slice(0, position) + S2 + currentS1.slice(position);
            // ABS2CDE
            Print(currentS1);
        }
  
        function DeleteS2FromS1() {
            let S2 = document.getElementById("str2").value.trim();

            let currentS1 = document.getElementById("str1").value;
            console.log(currentS1);
            let indexOfWordToDelete = currentS1.indexOf(S2);

            currentS1 = currentS1.slice(0, indexOfWordToDelete) + currentS1.slice(indexOfWordToDelete + S2.length);
     
            Print(currentS1);
        }
        function resver() {
            arr = input.split(" ");
            console.log(arr);

            let kq = '';
            let temp = "";
            for (let i = arr.length - 1; i >= 0; i--) {
                kq = arr[i].trim() + " ";
                console.log(kq);
            }
            Print(kq);
        }
