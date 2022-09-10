import { accounts, loggedInAccount, setLoggedInAccount } from "../app.js";
import { generateAccountDisplay } from "./addUI.js";

let loginForm = document.querySelector(".login-form");
let loginEmailInput = document.querySelector(".login-email-input");
let loginEmailError = document.querySelector(".login-email-error");
let loginEmailContainer = document.querySelector(".login-email-container");
let loginPasswordInput = document.querySelector(".login-password-input");
let loginPasswordError = document.querySelector(".login-password-error");
let loginPasswordContainer = document.querySelector(
  ".login-password-container"
);
let loginBtn = document.querySelector(".login-btn");

function findAccount(email) {
  let foundAccount = null;
  for (let account of accounts) {
    if (email === account.email) {
      foundAccount = account;
    }
  }
  return foundAccount;
}

function handleEmailError(account) {
  if (!account) {
    loginEmailContainer.classList.add("input-error");
    loginEmailError.textContent = "This email does not have an account";
  } else {
    loginEmailContainer.classList.remove("input-error");
    loginEmailError.textContent = "";
  }
}

function checkIfPasswordMatches(account) {
  if (loginPasswordInput.value === account.password) {
    loginPasswordContainer.classList.remove("input-error");
    loginPasswordError.textContent = "";
    setLoggedInAccount(account);
  } else if (!account) {
    loginPasswordError.textContent = "Please enter a valid email";
    loginPasswordContainer.add("input-error");
  } else {
    loginPasswordContainer.classList.add("input-error");
    loginPasswordError.textContent = "This password is incorrect";
  }
}

function authenticateLoginInfo() {
  let account = findAccount(loginEmailInput.value);
  handleEmailError(account);
  checkIfPasswordMatches(account);

  //check if email exist
  //loop through all accounts and check for account whos .email === the input email
  // if email doesn't exist add the input-error class and make the error span text 'This email does not have an account.
}

loginForm.addEventListener("submit", function (event) {
  authenticateLoginInfo();
  generateAccountDisplay();
  event.preventDefault();
});

export default function renderLoginFormValidation() {}

// add and remove input-error from container class tobe redd
