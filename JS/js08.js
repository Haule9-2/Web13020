function Stastic() {
  var s = document.getElementById("string").value;
  var arr = s.split(" ");
  var word = 0;
  var arrkq = []; // mang chua ket qua;
  for (var i = 0; i <= 128; i++) {
    arrkq[i] = 0;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].trim() != "") console.log(arr[i].trim());
    word++;
  }
  var result = "Characters : " + s.length + "<br>" + "Word:" + word + "<br>";
  document.getElementById("kq").innerHTML = result;
  // count your character
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= "a" && s.charCodeAt(i) <= z) {
      arrkq[s.charCodeAt(i) - 32]++; // dem chu in hoa
    } else arrkq[s.charCodeAt(i)]++; // chu con lai nha
  }
  // count
  for (var i = 0; i < arrkq.length; i++) {
    if (arrkq[i] > 0)
      result +=
        "Character ' " + String.fromCharCode(i) + " ' : " + arrkq[i] + "<br>";
  }
  document.getElementById("kq").innerHTML = result;
}
