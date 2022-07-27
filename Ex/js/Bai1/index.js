const button = document.querySelector(".btn-login");
const inputUsername = document.querySelector(".u-input");
const inputPassword = document.querySelector(".p-input");

button.addEventListener("click", function () {
  if (inputPassword.value === "" || inputUsername.value === "") {
    alert("Invalid sername or password");
  } else {
    alert("Welcome to world of JavaScript");
  }
});
