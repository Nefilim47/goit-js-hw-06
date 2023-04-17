const inputEl = document.querySelector("#validation-input");
// const inputLengthEl = document.querySelector("[data-length]");

inputEl.addEventListener("blur", (event) => {
  //   console.log(inputEl.value.length);
  if (inputEl.value.length === Number(inputEl.getAttribute("data-length"))) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
