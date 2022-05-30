const inputPasswordEl = document.getElementById("password");
const inputUsernameEl = document.getElementById("username");
const backgroundEl = document.getElementById("background");
const textErrorPassword = document.getElementById("textErrorPassword");
const textErrorUsername = document.getElementById("textErrorUsername");
const formLogin = document.getElementById("formLogin");

let validUsername = false;
let validPassword = false;
//Funções
function validInputClasses(input) {
  input.classList.remove("border-red-500");
  input.classList.add("border-green-500");
}

function invalidInputClasses(input) {
  input.classList.add("border-red-500");
  input.classList.remove("border-green-500");
}
function successAlert() {
  Swal.fire({
    position: "absolute",
    icon: "success",
    title: "Campos Válidos",
    showConfirmButton: false,
    timer: 1500,
  });
}
function errorAlert() {
  Swal.fire({
    position: "absolute",
    icon: "error",
    title: "Oops...",
    text: "Verifique os campos",
  });
}
//Listeners
inputPasswordEl.addEventListener("input", (e) => {
  let totalCaracteres = e.target.value.length;

  let blur = 20 - totalCaracteres * 2;

  backgroundEl.style.filter = `blur(${blur}px)`;

  if (totalCaracteres >= 10) {
    validInputClasses(inputPasswordEl);
    textErrorPassword.innerHTML = "";
    validPassword = true;
  } else {
    invalidInputClasses(inputPasswordEl);
    textErrorPassword.innerHTML =
      "Please choose a valid password (min length 10)";
    validPassword = false;
  }
});

inputUsernameEl.addEventListener("input", (e) => {
  let username = e.target.value;

  console.log(typeof username);
  let regex = /^joao123$/i;
  let regex2 = /^teste$/i;

  if (regex.test(username) || regex2.test(username)) {
    validInputClasses(inputUsernameEl);
    textErrorUsername.innerHTML = "";
    validUsername = true;
  } else {
    invalidInputClasses(inputUsernameEl);
    textErrorUsername.innerHTML = "Please choose a valid username";
    validUsername = false;
  }
});

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validPassword && validUsername) {
    successAlert();
  } else {
    errorAlert();
  }
});
