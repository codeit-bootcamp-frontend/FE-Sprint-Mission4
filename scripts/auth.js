const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById(
  "passwordConfirmation"
);

const emailEmptyError = document.getElementById("emailEmptyError");
const emailInvalidError = document.getElementById("emailInvalidError");
const nicknameEmptyError = document.getElementById("nicknameEmptyError");
const passwordEmptyError = document.getElementById("passwordEmptyError");
const passwordInvalidError = document.getElementById("passwordInvalidError");
const passwordConfirmError = document.getElementById("passwordConfirmError");

emailInput.addEventListener("focusout", validateEmailField);
nicknameInput.addEventListener("focusout", validateNicknameField);
passwordInput.addEventListener("focusout", validatePasswordField);
passwordConfirmationInput.addEventListener(
  "focusout",
  validatePasswordConfirmationField
);

function validateEmailField() {
  const emailValue = emailInput.value.trim();

  emailEmptyError.style.display = "none";
  emailInvalidError.style.display = "none";
  emailInput.style.border = "none";

  if (!emailValue) {
    emailEmptyError.style.display = "block";
    emailInput.style.border = "1px solid #f74747";
  } else if (!isValidEmail(emailValue)) {
    emailInvalidError.style.display = "block";
    emailInput.style.border = "1px solid #f74747";
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateNicknameField() {
  nicknameEmptyError.style.display = "none";
  nicknameInput.style.border = "none";

  if (!nicknameInput.value.trim()) {
    nicknameEmptyError.style.display = "block";
    nicknameInput.style.border = "1px solid #f74747";
  }
}

function validatePasswordField() {
  passwordEmptyError.style.display = "none";
  passwordInvalidError.style.display = "none";
  passwordInput.style.border = "none";

  if (!passwordInput.value.trim()) {
    passwordEmptyError.style.display = "block";
    passwordInput.style.border = "1px solid #f74747";
  } else if (passwordInput.value.trim().length < 8) {
    passwordInvalidError.style.display = "block";
    passwordInput.style.border = "1px solid #f74747";
  }
}

function validatePasswordConfirmationField() {
  passwordConfirmError.style.display = "none";
  passwordConfirmationInput.style.border = "none";

  if (passwordInput.value.trim() !== passwordConfirmationInput.value.trim()) {
    passwordConfirmError.style.display = "block";
    passwordConfirmationInput.style.border = "1px solid #f74747";
  }
}
