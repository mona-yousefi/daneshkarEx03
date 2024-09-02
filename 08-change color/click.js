let box1 = document.getElementById("btn1");
let box2 = document.getElementById("btn2");
let box3 = document.getElementById("btn3");

box1.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  box1.style.backgroundColor = "rgb" + "(" + c1 + "," + c2 + "," + c3 + ")";
});
box2.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  box2.style.backgroundColor = "rgb" + "(" + c1 + "," + c2 + "," + c3 + ")";
});
box3.addEventListener("click", function () {
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  box3.style.backgroundColor = "rgb" + "(" + c1 + "," + c2 + "," + c3 + ")";
});
