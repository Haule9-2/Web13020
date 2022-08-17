document.querySelector("form").addEventListener("submit", (e) => {
  let operator = document.forms[0]["button"].value;
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  e.preventDefault();
  document.getElementById("result").innerText = eval(a + operator + b);
});
