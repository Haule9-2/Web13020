let currentTime = new Date();
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  let date2 = new Date(document.getElementById("dob").value);
  console.log(currentTime.getFullYear());
  console.log(date2.getFullYear());
  // if document.getElementById("name").value != "";
  if (document.getElementById("name").value != "") {
    document.getElementById("value").innerHTML = `Chao mung ban ${
      document.getElementById("name").value
    } \n Ban la: ${
      document.querySelector('input[name="gender"]:checked').value
    } \n Mat khau ban co ${
      document.getElementById("pass").value.length
    } \n Tuoi cua ban la: ${
      currentTime.getFullYear() - date2.getFullYear()
    } \n Van de ban quan tam la ${document.getElementById("select").value} \n`;
  }
});
