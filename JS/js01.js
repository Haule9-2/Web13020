const Name = document.getElementById("name");
const DOB = document.getElementById("dob");
const Value = document.getElementById("value");
const submit = document.getElementById("submit-btn");
let currentTime = new Date();
let year = currentTime.getFullYear();

submit.addEventListener("click", function () {
    if (DOB.value < 1900 || DOB.value >= year)
      return Value.textContent = "Nam sinh khong hop le!"; 
      
    Value.textContent = "Ban " + Name.value + " nam nay da " + (year - DOB.value) + " roii!";
})
