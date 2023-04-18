const liCatogoriesEl = document.querySelector("#categories");
const countCategories = [...liCatogoriesEl.children];
// console.log(countCategories);
console.log(`Number of categories: ${countCategories.length}`);

countCategories.forEach((categories) => {
  console.log(`Category: ${categories.firstElementChild.textContent}`);
  console.log(`Elements: ${categories.lastElementChild.children.length}`);
});
