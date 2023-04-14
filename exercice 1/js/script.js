const liCatogoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liCatogoriesEl.length}`);
liCatogoriesEl.forEach((categories) => {
  console.log(`Category: ${categories.querySelector("h2").textContent}`);
  console.log(`Elements: ${categories.querySelectorAll("li").length}`);
});
