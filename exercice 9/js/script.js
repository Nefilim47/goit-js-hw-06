function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// console.log(getRandomHexColor());
const colorTextEl = document.querySelector(".color");
const btnChangeColorEl = document.querySelector(".change-color");

btnChangeColorEl.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTextEl.textContent = color;
  //   colorTextEl.style.backgroundColor = `${getRandomHexColor()}`;
});
