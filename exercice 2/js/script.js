const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const createIngrediendCard = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.textContent = el;

  return liEl;
});
ulEl.append(...createIngrediendCard);
