function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let colors = getRandomHexColor();


const colorButton = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const colorBody = document.querySelector("body");

colorButton.addEventListener("click", (e) => {
  colorBody.style.background = colors;
  spanColor.textContent = colors;
  console.log(e)
});
