let counterValue = 0;

const counterEl = document.querySelector("#value");

const decrementValue = document.querySelector(
  "button[data-action='decrement']"
);
const incrementValue = document.querySelector(
  "button[data-action='increment']"
);
decrementValue.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
incrementValue.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
// console.log(counterEl.textContent);
