/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/account.js":
/*!********************************!*\
  !*** ./src/modules/account.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Account)
/* harmony export */ });
class Account {
  constructor(name, email, country, zipcode, password) {
    this.name = name;
    this.email = email;
    this.country = country;
    this.zipcode = zipcode;
    this.password = password;
  }
}


/***/ }),

/***/ "./src/modules/addUI.js":
/*!******************************!*\
  !*** ./src/modules/addUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderUI)
/* harmony export */ });
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

//Functionality to switch between login form or signup form

function renderUI() {
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
}


/***/ }),

/***/ "./src/modules/signUpFormValidation.js":
/*!*********************************************!*\
  !*** ./src/modules/signUpFormValidation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderFormValidation)
/* harmony export */ });
/* harmony import */ var _account_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.js */ "./src/modules/account.js");


let signUpForm = document.querySelector(".signup-form");
let loginForm = document.querySelector(".login-form");
let signupUsername = document.querySelector(".signup-username-input");
let signupUsernameError = document.querySelector(".signup-username-error");
let signupUsernameContainer = document.querySelector(".signup-username");
let signupEmail = document.querySelector(".signup-email-input");
let signupEmailError = document.querySelector(".signup-email-error");
let signupEmailContainer = document.querySelector(".signup-email");
let signupCountry = document.querySelector(".signup-country-input");
let signupCountryError = document.querySelector(".signup-country-error");
let signupCountryContainer = document.querySelector(".signup-country");
let signupZip = document.querySelector(".signup-zipcode-input");
let signupZipError = document.querySelector(".signup-zipcode-error");
let signupZipContainer = document.querySelector(".signup-zipcode");
let signupPassword = document.querySelector(".signup-password-input");
let signupPasswordError = document.querySelector(".signup-password-error");
let signupPasswordContainer = document.querySelector(".signup-password");
let signupConfirm = document.querySelector(".signup-confirm-input");
let signupConfirmError = document.querySelector(".signup-confirm-error");
let signupConfirmContainer = document.querySelector(".signup-confirm");
let submitBtn = document.querySelector(".create-account-btn");

function handleMissingValue(inputElement, errorElement) {
  if (inputElement.validity.valueMissing) {
    errorElement.textContent = "*This field is required";
  }
}

function validateUsername() {
  if (signupUsername.validity.valueMissing) {
    signupUsernameError.textContent = "*This field is required";
  } else if (signupUsername.validity.patternMismatch) {
    signupUsernameError.textContent = "Please enter only letters.";
  }
  signupUsernameContainer.classList.add("input-error");
}

function validateUsernameInputListener() {
  signupUsername.addEventListener("input", function () {
    if (signupUsername.validity.valid) {
      //reset text content and class
      signupUsernameError.textContent = "";
      signupUsernameContainer.classList.remove("input-error");
    } else {
      validateUsername();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function validateEmail() {
  handleMissingValue(signupEmail, signupEmailError);
  if (signupEmail.validity.typeMismatch) {
    signupEmailError.textContent = "Please enter a valid email address";
  }
  signupEmailContainer.classList.add("input-error");
}

function validateEmailInputListener() {
  signupEmail.addEventListener("input", function () {
    if (signupEmail.validity.valid) {
      //reset text content and class
      signupEmailError.textContent = "";
      signupEmailContainer.classList.remove("input-error");
    } else {
      validateEmail();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function validateCountry() {
  handleMissingValue(signupCountry, signupCountryError);
  if (signupCountry.validity.patternMismatch) {
    signupCountryError.textContent = "Please enter a valid country";
  }
  signupCountryContainer.classList.add("input-error");
}

function validateCountryInputListener() {
  signupCountry.addEventListener("input", function () {
    if (signupCountry.validity.valid) {
      //reset text content and class
      signupCountryError.textContent = "";
      signupCountryContainer.classList.remove("input-error");
    } else {
      validateCountry();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function validateZipCode() {
  handleMissingValue(signupZip, signupZipError);
  if (signupZip.validity.typeMismatch) {
    signupZipError.textContent = "Please enter a valid zip code";
  }
  signupZipContainer.classList.add("input-error");
}

function validateZipCodeInputListener() {
  signupZip.addEventListener("input", function () {
    if (signupZip.validity.valid) {
      //reset text content and class
      signupZipError.textContent = "";
      signupZipContainer.classList.remove("input-error");
    } else {
      validateZipCode();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function validatePassword() {
  handleMissingValue(signupPassword, signupPasswordError);
  if (signupPassword.validity.patternMismatch) {
    signupPasswordError.textContent =
      "Password must be 8 characters long, contain atleast one lowercase letter, one uppercase letter, one number and one special character";
  }
  signupPasswordContainer.classList.add("input-error");
}

function validatePasswordInputListener() {
  signupPassword.addEventListener("input", function () {
    if (signupPassword.validity.valid) {
      //reset text content and class
      signupPasswordError.textContent = "";
      signupPasswordContainer.classList.remove("input-error");
    } else {
      validatePassword();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}

function checkPasswordMatch() {
  return signupConfirm.value === signupPassword.value;
}

function validateConfirm() {
  handleMissingValue(signupConfirm, signupConfirmError);
  if (!checkPasswordMatch()) {
    signupConfirmError.textContent = "Passwords do not match";
  }

  signupConfirmContainer.classList.add("input-error");
}

function validateConfirmInputListener() {
  signupConfirm.addEventListener("input", function () {
    if (signupConfirm.validity.valid && checkPasswordMatch()) {
      //reset text content and class
      signupConfirmError.textContent = "";
      signupConfirmContainer.classList.remove("input-error");
    } else {
      validateConfirm();
      // set the text content to display the error and add a class to the container to show its invalid
    }
  });
}
// pp

function checkInputValidity() {
  let inputs = signUpForm.querySelectorAll("input");
  let valid = true;
  inputs.forEach(function (curr) {
    if (!curr.validity.valid) {
      valid = false;
    }
  });

  return valid;
  // let valid = true;
  // signupUsername.validity.valid;
  // signupEmail.validity.valid;
  // signupCountry.validity.valid;
  // signupZip.validity.valid;
  // signupPassword.validity.valid;
  // signupConfirm.validity.valid;
}

function registerAccount() {
  let name = signupUsername.value;
  let email = signupEmail.value;
  let country = signupCountry.value;
  let zip = signupZip.value;
  let password = signupPassword.value;

  let newAccount = new _account_js__WEBPACK_IMPORTED_MODULE_0__["default"](name, email, country, zip, password);
  console.log(newAccount);
}

function validateSignUpForm() {
  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const isValid = checkInputValidity();

    if (!isValid) return;

    registerAccount();
  });
}

function renderFormValidation() {
  console.log("here");
  validateUsernameInputListener();
  validateEmailInputListener();
  validateCountryInputListener();
  validateZipCodeInputListener();
  validatePasswordInputListener();
  validateConfirmInputListener();
  validateSignUpForm();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_signUpFormValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/signUpFormValidation.js */ "./src/modules/signUpFormValidation.js");
/* harmony import */ var _modules_addUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addUI.js */ "./src/modules/addUI.js");



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

function validateLoginData() {}

function renderAccountPage() {}

//checks if login data is valid then renders a page based on the data of the account
loginBtn.addEventListener("click", function () {
  if (validateLoginData) {
    renderAccountPage();
  }
});

(0,_modules_addUI_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_signUpFormValidation_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

//add boxshadow to forms and remove blue border line maybe change background

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDZEQUFRO0FBQ1IsNEVBQW9COztBQUVwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hY2NvdW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9hZGRVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2lnblVwRm9ybVZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBlbWFpbCwgY291bnRyeSwgemlwY29kZSwgcGFzc3dvcmQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgICB0aGlzLmNvdW50cnkgPSBjb3VudHJ5O1xuICAgIHRoaXMuemlwY29kZSA9IHppcGNvZGU7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG59XG4iLCJsZXQgbG9naW5QYXNzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLXBhc3N3b3JkLWlucHV0XCIpO1xubGV0IGxvZ2luUGFzc1JldmVhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tcGFzc3dvcmQtcmV2ZWFsXCIpO1xubGV0IGxvZ2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1idG5cIik7XG5sZXQgbmF2TG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWJ0bi1uYXZcIik7XG5sZXQgbmF2U2lnblVwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtYnRuLW5hdlwiKTtcbmxldCBsb2dpblNpbmdVcExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLXNpZ251cC1saW5rXCIpO1xubGV0IGFscmVhZHlBY2NvdW50TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxyZWFkeS1hY2NvdW50LWxpbmtcIik7XG5sZXQgc2lnblVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLWZvcm1cIik7XG5sZXQgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1mb3JtXCIpO1xubGV0IHNpZ251cFVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtdXNlcm5hbWUtaW5wdXRcIik7XG5sZXQgc2lnbnVwVXNlcm5hbWVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLXVzZXJuYW1lLWVycm9yXCIpO1xubGV0IHNpZ251cFVzZXJuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtdXNlcm5hbWVcIik7XG5cbi8vRnVuY3Rpb25hbGl0eSB0byBzd2l0Y2ggYmV0d2VlbiBsb2dpbiBmb3JtIG9yIHNpZ251cCBmb3JtXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclVJKCkge1xuICBmdW5jdGlvbiByZW5kZXJMb2dpbkZvcm0oKSB7XG4gICAgbG9naW5Gb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgc2lnblVwRm9ybS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2lnblVwRm9ybSgpIHtcbiAgICBsb2dpbkZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBzaWduVXBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICAvL0xpc3RlbnMgZm9yIGxvZ2luIGxpbmsgb3IgYnV0dG9uIGNsaWNrc1xuICBuYXZMb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVuZGVyTG9naW5Gb3JtKTtcbiAgYWxyZWFkeUFjY291bnRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW5kZXJMb2dpbkZvcm0pO1xuXG4gIC8vTGlzdGVucyBmb3Igc2lnbnVwIGxpbmsgb3IgYnV0dG9uIGNsaWNrc1xuICBuYXZTaWduVXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclNpZ25VcEZvcm0pO1xuICBsb2dpblNpbmdVcExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbmRlclNpZ25VcEZvcm0pO1xufVxuIiwiaW1wb3J0IEFjY291bnQgZnJvbSBcIi4vYWNjb3VudC5qc1wiO1xuXG5sZXQgc2lnblVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLWZvcm1cIik7XG5sZXQgbG9naW5Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1mb3JtXCIpO1xubGV0IHNpZ251cFVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtdXNlcm5hbWUtaW5wdXRcIik7XG5sZXQgc2lnbnVwVXNlcm5hbWVFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLXVzZXJuYW1lLWVycm9yXCIpO1xubGV0IHNpZ251cFVzZXJuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtdXNlcm5hbWVcIik7XG5sZXQgc2lnbnVwRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1lbWFpbC1pbnB1dFwiKTtcbmxldCBzaWdudXBFbWFpbEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtZW1haWwtZXJyb3JcIik7XG5sZXQgc2lnbnVwRW1haWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1lbWFpbFwiKTtcbmxldCBzaWdudXBDb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtY291bnRyeS1pbnB1dFwiKTtcbmxldCBzaWdudXBDb3VudHJ5RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1jb3VudHJ5LWVycm9yXCIpO1xubGV0IHNpZ251cENvdW50cnlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1jb3VudHJ5XCIpO1xubGV0IHNpZ251cFppcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLXppcGNvZGUtaW5wdXRcIik7XG5sZXQgc2lnbnVwWmlwRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC16aXBjb2RlLWVycm9yXCIpO1xubGV0IHNpZ251cFppcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lnbnVwLXppcGNvZGVcIik7XG5sZXQgc2lnbnVwUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1wYXNzd29yZC1pbnB1dFwiKTtcbmxldCBzaWdudXBQYXNzd29yZEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtcGFzc3dvcmQtZXJyb3JcIik7XG5sZXQgc2lnbnVwUGFzc3dvcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1wYXNzd29yZFwiKTtcbmxldCBzaWdudXBDb25maXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtY29uZmlybS1pbnB1dFwiKTtcbmxldCBzaWdudXBDb25maXJtRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1jb25maXJtLWVycm9yXCIpO1xubGV0IHNpZ251cENvbmZpcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1jb25maXJtXCIpO1xubGV0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLWFjY291bnQtYnRuXCIpO1xuXG5mdW5jdGlvbiBoYW5kbGVNaXNzaW5nVmFsdWUoaW5wdXRFbGVtZW50LCBlcnJvckVsZW1lbnQpIHtcbiAgaWYgKGlucHV0RWxlbWVudC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIipUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSgpIHtcbiAgaWYgKHNpZ251cFVzZXJuYW1lLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHNpZ251cFVzZXJuYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIipUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XG4gIH0gZWxzZSBpZiAoc2lnbnVwVXNlcm5hbWUudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgc2lnbnVwVXNlcm5hbWVFcnJvci50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGVudGVyIG9ubHkgbGV0dGVycy5cIjtcbiAgfVxuICBzaWdudXBVc2VybmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZXJyb3JcIik7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWVJbnB1dExpc3RlbmVyKCkge1xuICBzaWdudXBVc2VybmFtZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaWdudXBVc2VybmFtZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgLy9yZXNldCB0ZXh0IGNvbnRlbnQgYW5kIGNsYXNzXG4gICAgICBzaWdudXBVc2VybmFtZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIHNpZ251cFVzZXJuYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnB1dC1lcnJvclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVVc2VybmFtZSgpO1xuICAgICAgLy8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgdG8gZGlzcGxheSB0aGUgZXJyb3IgYW5kIGFkZCBhIGNsYXNzIHRvIHRoZSBjb250YWluZXIgdG8gc2hvdyBpdHMgaW52YWxpZFxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoKSB7XG4gIGhhbmRsZU1pc3NpbmdWYWx1ZShzaWdudXBFbWFpbCwgc2lnbnVwRW1haWxFcnJvcik7XG4gIGlmIChzaWdudXBFbWFpbC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpIHtcbiAgICBzaWdudXBFbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCI7XG4gIH1cbiAgc2lnbnVwRW1haWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWVycm9yXCIpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsSW5wdXRMaXN0ZW5lcigpIHtcbiAgc2lnbnVwRW1haWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2lnbnVwRW1haWwudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIC8vcmVzZXQgdGV4dCBjb250ZW50IGFuZCBjbGFzc1xuICAgICAgc2lnbnVwRW1haWxFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBzaWdudXBFbWFpbENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaW5wdXQtZXJyb3JcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlRW1haWwoKTtcbiAgICAgIC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIGRpc3BsYXkgdGhlIGVycm9yIGFuZCBhZGQgYSBjbGFzcyB0byB0aGUgY29udGFpbmVyIHRvIHNob3cgaXRzIGludmFsaWRcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvdW50cnkoKSB7XG4gIGhhbmRsZU1pc3NpbmdWYWx1ZShzaWdudXBDb3VudHJ5LCBzaWdudXBDb3VudHJ5RXJyb3IpO1xuICBpZiAoc2lnbnVwQ291bnRyeS52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcbiAgICBzaWdudXBDb3VudHJ5RXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGNvdW50cnlcIjtcbiAgfVxuICBzaWdudXBDb3VudHJ5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1lcnJvclwiKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb3VudHJ5SW5wdXRMaXN0ZW5lcigpIHtcbiAgc2lnbnVwQ291bnRyeS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaWdudXBDb3VudHJ5LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAvL3Jlc2V0IHRleHQgY29udGVudCBhbmQgY2xhc3NcbiAgICAgIHNpZ251cENvdW50cnlFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBzaWdudXBDb3VudHJ5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnB1dC1lcnJvclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVDb3VudHJ5KCk7XG4gICAgICAvLyBzZXQgdGhlIHRleHQgY29udGVudCB0byBkaXNwbGF5IHRoZSBlcnJvciBhbmQgYWRkIGEgY2xhc3MgdG8gdGhlIGNvbnRhaW5lciB0byBzaG93IGl0cyBpbnZhbGlkXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVaaXBDb2RlKCkge1xuICBoYW5kbGVNaXNzaW5nVmFsdWUoc2lnbnVwWmlwLCBzaWdudXBaaXBFcnJvcik7XG4gIGlmIChzaWdudXBaaXAudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XG4gICAgc2lnbnVwWmlwRXJyb3IudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIHppcCBjb2RlXCI7XG4gIH1cbiAgc2lnbnVwWmlwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1lcnJvclwiKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVaaXBDb2RlSW5wdXRMaXN0ZW5lcigpIHtcbiAgc2lnbnVwWmlwLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNpZ251cFppcC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgLy9yZXNldCB0ZXh0IGNvbnRlbnQgYW5kIGNsYXNzXG4gICAgICBzaWdudXBaaXBFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBzaWdudXBaaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImlucHV0LWVycm9yXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVppcENvZGUoKTtcbiAgICAgIC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIGRpc3BsYXkgdGhlIGVycm9yIGFuZCBhZGQgYSBjbGFzcyB0byB0aGUgY29udGFpbmVyIHRvIHNob3cgaXRzIGludmFsaWRcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKCkge1xuICBoYW5kbGVNaXNzaW5nVmFsdWUoc2lnbnVwUGFzc3dvcmQsIHNpZ251cFBhc3N3b3JkRXJyb3IpO1xuICBpZiAoc2lnbnVwUGFzc3dvcmQudmFsaWRpdHkucGF0dGVybk1pc21hdGNoKSB7XG4gICAgc2lnbnVwUGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9XG4gICAgICBcIlBhc3N3b3JkIG11c3QgYmUgOCBjaGFyYWN0ZXJzIGxvbmcsIGNvbnRhaW4gYXRsZWFzdCBvbmUgbG93ZXJjYXNlIGxldHRlciwgb25lIHVwcGVyY2FzZSBsZXR0ZXIsIG9uZSBudW1iZXIgYW5kIG9uZSBzcGVjaWFsIGNoYXJhY3RlclwiO1xuICB9XG4gIHNpZ251cFBhc3N3b3JkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1lcnJvclwiKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZElucHV0TGlzdGVuZXIoKSB7XG4gIHNpZ251cFBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNpZ251cFBhc3N3b3JkLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAvL3Jlc2V0IHRleHQgY29udGVudCBhbmQgY2xhc3NcbiAgICAgIHNpZ251cFBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgc2lnbnVwUGFzc3dvcmRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImlucHV0LWVycm9yXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVBhc3N3b3JkKCk7XG4gICAgICAvLyBzZXQgdGhlIHRleHQgY29udGVudCB0byBkaXNwbGF5IHRoZSBlcnJvciBhbmQgYWRkIGEgY2xhc3MgdG8gdGhlIGNvbnRhaW5lciB0byBzaG93IGl0cyBpbnZhbGlkXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hlY2tQYXNzd29yZE1hdGNoKCkge1xuICByZXR1cm4gc2lnbnVwQ29uZmlybS52YWx1ZSA9PT0gc2lnbnVwUGFzc3dvcmQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29uZmlybSgpIHtcbiAgaGFuZGxlTWlzc2luZ1ZhbHVlKHNpZ251cENvbmZpcm0sIHNpZ251cENvbmZpcm1FcnJvcik7XG4gIGlmICghY2hlY2tQYXNzd29yZE1hdGNoKCkpIHtcbiAgICBzaWdudXBDb25maXJtRXJyb3IudGV4dENvbnRlbnQgPSBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIjtcbiAgfVxuXG4gIHNpZ251cENvbmZpcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImlucHV0LWVycm9yXCIpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbmZpcm1JbnB1dExpc3RlbmVyKCkge1xuICBzaWdudXBDb25maXJtLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNpZ251cENvbmZpcm0udmFsaWRpdHkudmFsaWQgJiYgY2hlY2tQYXNzd29yZE1hdGNoKCkpIHtcbiAgICAgIC8vcmVzZXQgdGV4dCBjb250ZW50IGFuZCBjbGFzc1xuICAgICAgc2lnbnVwQ29uZmlybUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIHNpZ251cENvbmZpcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImlucHV0LWVycm9yXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZUNvbmZpcm0oKTtcbiAgICAgIC8vIHNldCB0aGUgdGV4dCBjb250ZW50IHRvIGRpc3BsYXkgdGhlIGVycm9yIGFuZCBhZGQgYSBjbGFzcyB0byB0aGUgY29udGFpbmVyIHRvIHNob3cgaXRzIGludmFsaWRcbiAgICB9XG4gIH0pO1xufVxuLy8gcHBcblxuZnVuY3Rpb24gY2hlY2tJbnB1dFZhbGlkaXR5KCkge1xuICBsZXQgaW5wdXRzID0gc2lnblVwRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gIGxldCB2YWxpZCA9IHRydWU7XG4gIGlucHV0cy5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyKSB7XG4gICAgaWYgKCFjdXJyLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhbGlkO1xuICAvLyBsZXQgdmFsaWQgPSB0cnVlO1xuICAvLyBzaWdudXBVc2VybmFtZS52YWxpZGl0eS52YWxpZDtcbiAgLy8gc2lnbnVwRW1haWwudmFsaWRpdHkudmFsaWQ7XG4gIC8vIHNpZ251cENvdW50cnkudmFsaWRpdHkudmFsaWQ7XG4gIC8vIHNpZ251cFppcC52YWxpZGl0eS52YWxpZDtcbiAgLy8gc2lnbnVwUGFzc3dvcmQudmFsaWRpdHkudmFsaWQ7XG4gIC8vIHNpZ251cENvbmZpcm0udmFsaWRpdHkudmFsaWQ7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQWNjb3VudCgpIHtcbiAgbGV0IG5hbWUgPSBzaWdudXBVc2VybmFtZS52YWx1ZTtcbiAgbGV0IGVtYWlsID0gc2lnbnVwRW1haWwudmFsdWU7XG4gIGxldCBjb3VudHJ5ID0gc2lnbnVwQ291bnRyeS52YWx1ZTtcbiAgbGV0IHppcCA9IHNpZ251cFppcC52YWx1ZTtcbiAgbGV0IHBhc3N3b3JkID0gc2lnbnVwUGFzc3dvcmQudmFsdWU7XG5cbiAgbGV0IG5ld0FjY291bnQgPSBuZXcgQWNjb3VudChuYW1lLCBlbWFpbCwgY291bnRyeSwgemlwLCBwYXNzd29yZCk7XG4gIGNvbnNvbGUubG9nKG5ld0FjY291bnQpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNpZ25VcEZvcm0oKSB7XG4gIHNpZ25VcEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlzVmFsaWQgPSBjaGVja0lucHV0VmFsaWRpdHkoKTtcblxuICAgIGlmICghaXNWYWxpZCkgcmV0dXJuO1xuXG4gICAgcmVnaXN0ZXJBY2NvdW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJGb3JtVmFsaWRhdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuICB2YWxpZGF0ZVVzZXJuYW1lSW5wdXRMaXN0ZW5lcigpO1xuICB2YWxpZGF0ZUVtYWlsSW5wdXRMaXN0ZW5lcigpO1xuICB2YWxpZGF0ZUNvdW50cnlJbnB1dExpc3RlbmVyKCk7XG4gIHZhbGlkYXRlWmlwQ29kZUlucHV0TGlzdGVuZXIoKTtcbiAgdmFsaWRhdGVQYXNzd29yZElucHV0TGlzdGVuZXIoKTtcbiAgdmFsaWRhdGVDb25maXJtSW5wdXRMaXN0ZW5lcigpO1xuICB2YWxpZGF0ZVNpZ25VcEZvcm0oKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlckZvcm1WYWxpZGF0aW9uIGZyb20gXCIuL21vZHVsZXMvc2lnblVwRm9ybVZhbGlkYXRpb24uanNcIjtcbmltcG9ydCByZW5kZXJVSSBmcm9tIFwiLi9tb2R1bGVzL2FkZFVJLmpzXCI7XG5cbmxldCBsb2dpblBhc3NJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tcGFzc3dvcmQtaW5wdXRcIik7XG5sZXQgbG9naW5QYXNzUmV2ZWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1wYXNzd29yZC1yZXZlYWxcIik7XG5sZXQgbG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWJ0blwiKTtcbmxldCBuYXZMb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tYnRuLW5hdlwiKTtcbmxldCBuYXZTaWduVXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC1idG4tbmF2XCIpO1xubGV0IGxvZ2luU2luZ1VwTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tc2lnbnVwLWxpbmtcIik7XG5sZXQgYWxyZWFkeUFjY291bnRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbHJlYWR5LWFjY291bnQtbGlua1wiKTtcbmxldCBzaWduVXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtZm9ybVwiKTtcbmxldCBsb2dpbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWZvcm1cIik7XG5sZXQgc2lnbnVwVXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC11c2VybmFtZS1pbnB1dFwiKTtcbmxldCBzaWdudXBVc2VybmFtZUVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXAtdXNlcm5hbWUtZXJyb3JcIik7XG5sZXQgc2lnbnVwVXNlcm5hbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZ251cC11c2VybmFtZVwiKTtcblxuLy9GdW5jdGlvbmFsaXR5IHRvIHJldmVhbCBwYXNzd29yZCBpbiBsb2dpbiBmb3JtXG5sb2dpblBhc3NSZXZlYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKFxuICAgIGxvZ2luUGFzc1JldmVhbC5zcmMgPT09XG4gICAgXCJodHRwOi8vMTI3LjAuMC4xOjU1MDEvUHJvcGVydHklMjBNYW5hZ2VyL2Fzc2V0cy9leWUtc2xhc2gtcmVndWxhci5zdmdcIlxuICApIHtcbiAgICBsb2dpblBhc3NSZXZlYWwuc3JjID0gXCJhc3NldHMvZXllLXJlZ3VsYXIuc3ZnXCI7XG4gICAgbG9naW5QYXNzSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB9IGVsc2Uge1xuICAgIGxvZ2luUGFzc1JldmVhbC5zcmMgPSBcImFzc2V0cy9leWUtc2xhc2gtcmVndWxhci5zdmdcIjtcbiAgICBsb2dpblBhc3NJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVMb2dpbkRhdGEoKSB7fVxuXG5mdW5jdGlvbiByZW5kZXJBY2NvdW50UGFnZSgpIHt9XG5cbi8vY2hlY2tzIGlmIGxvZ2luIGRhdGEgaXMgdmFsaWQgdGhlbiByZW5kZXJzIGEgcGFnZSBiYXNlZCBvbiB0aGUgZGF0YSBvZiB0aGUgYWNjb3VudFxubG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKHZhbGlkYXRlTG9naW5EYXRhKSB7XG4gICAgcmVuZGVyQWNjb3VudFBhZ2UoKTtcbiAgfVxufSk7XG5cbnJlbmRlclVJKCk7XG5yZW5kZXJGb3JtVmFsaWRhdGlvbigpO1xuXG4vL2FkZCBib3hzaGFkb3cgdG8gZm9ybXMgYW5kIHJlbW92ZSBibHVlIGJvcmRlciBsaW5lIG1heWJlIGNoYW5nZSBiYWNrZ3JvdW5kXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=