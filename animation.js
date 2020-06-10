const box = document.getElementById("container");
const caja = document.getElementById("box");

box.addEventListener("animationiteration", () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  caja.style.backgroundColor = "#" + randomColor;
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor2;
});
