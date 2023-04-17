const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e.currentTarget);

  const emailEl = formEl.elements.email;
  const passworEl = formEl.elements.password;
  if (emailEl.value === "" || passworEl.value === "") {
    alert("Please, enter your info");
  } else {
    const obj = {
      email: emailEl.value,
      passwor: passworEl.value,
    };
    console.log(obj);
  }
});
