const container = document.getElementById("container");

for (let i = 2; i < 10; i++) {
  let div = document.createElement("div");
  container.appendChild(div);
  for (let j = 2; j < 10; j++) {
    let para = document.createElement("p");
    para.textContent = `${i} * ${j} = ${i * j}`;
    div.appendChild(para);
  }
}
