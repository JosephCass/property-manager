import { loggedInAccount } from "../app.js";

let loginPassInput = document.querySelector(".login-password-input");
let loginPassReveal = document.querySelector(".login-password-reveal");
let loginBtn = document.querySelector(".login-btn");
let navLoginBtn = document.querySelector(".login-btn-nav");
let navSignUpBtn = document.querySelector(".signup-btn-nav");
let loginSingUpLink = document.querySelector(".login-signup-link");
let alreadyAccountLink = document.querySelector(".already-account-link");
let signUpForm = document.querySelector(".signup-form");
let loginForm = document.querySelector(".login-form");
let signupUsername = document.querySelector(".signup-username-input");
let signupUsernameError = document.querySelector(".signup-username-error");
let signupUsernameContainer = document.querySelector(".signup-username");
let navAccountDisplay = document.querySelector(".nav-account-display");
let defaultNavDisplay = document.querySelector(".navbar");
let navProfileName = document.querySelector(".nav-account-name");
let navProfileIcon = document.querySelector(".nav-account-logo");
let siteDescription = document.querySelector(".site-description");
let belowArrowImg = document.querySelector(".main-below-img");
//Functionality to switch between login form or signup form

function generateAccountDisplay() {
  defaultNavDisplay.classList.add("hidden");
  navAccountDisplay.classList.remove("hidden");
  signUpForm.classList.add("hidden");
  siteDescription.classList.add("hidden");
  belowArrowImg.classList.add("hidden");
  navProfileName.textContent = loggedInAccount.name;
}

function renderLoginForm() {
  loginForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
}

function renderSignUpForm() {
  loginForm.classList.add("hidden");
  signUpForm.classList.remove("hidden");
}

export default function renderUI() {
  //Listens for login link or button clicks
  navLoginBtn.addEventListener("click", renderLoginForm);
  alreadyAccountLink.addEventListener("click", renderLoginForm);

  //Listens for signup link or button clicks
  navSignUpBtn.addEventListener("click", renderSignUpForm);
  loginSingUpLink.addEventListener("click", renderSignUpForm);
}

export { generateAccountDisplay };
