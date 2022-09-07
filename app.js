let loginPassInput = document.querySelector(".login-password-input");
let loginPassReveal = document.querySelector(".login-password-reveal");
let loginBtn = document.querySelector(".login-btn");
let navLoginBtn = document.querySelector(".login-btn-nav");
let navSignUpBtn = document.querySelector(".signup-btn-nav");
let loginSingUpLink = document.querySelector(".login-signup-link");
let alreadyAccountLink = document.querySelector(".already-account-link");
let signUpForm = document.querySelector(".signup-form");
let loginForm = document.querySelector(".login-form");

//Functionality to reveal password in login form
loginPassReveal.addEventListener("click", function () {
  if (
    loginPassReveal.src ===
    "http://127.0.0.1:5501/Property%20Manager/assets/eye-slash-regular.svg"
  ) {
    loginPassReveal.src = "assets/eye-regular.svg";
    loginPassInput.type = "text";
  } else {
    loginPassReveal.src = "assets/eye-slash-regular.svg";
    loginPassInput.type = "password";
  }
});

//Functionality to switch between login form or signup form

function renderLoginForm() {
  loginForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
}

function renderSignUpForm() {
  loginForm.classList.add("hidden");
  signUpForm.classList.remove("hidden");
}

//Listens for login link or button clicks
navLoginBtn.addEventListener("click", renderLoginForm);
alreadyAccountLink.addEventListener("click", renderLoginForm);

//Listens for signup link or button clicks
navSignUpBtn.addEventListener("click", renderSignUpForm);
loginSingUpLink.addEventListener("click", renderSignUpForm);

function validateLoginData() {}

function renderAccountPage() {}

//checks if login data is valid then renders a page based on the data of the account
loginBtn.addEventListener("click", function () {
  if (validateLoginData) {
    renderAccountPage();
  }
});

//add boxshadow to forms and remove blue border line maybe change background
