function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// console.log(getRandomHexColor());
const colorTextEl = document.querySelector(".color");
const btnChangeColorEl = document.querySelector(".change-color");

btnChangeColorEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  colorTextEl.textContent = getRandomHexColor();
  //   colorTextEl.style.backgroundColor = `${getRandomHexColor()}`;
});
