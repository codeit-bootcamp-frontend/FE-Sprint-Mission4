const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById(
  "passwordConfirmation"
);

function showError(input, errorMessageId) {
  const error = document.getElementById(errorMessageId);
  error.style.display = "block";
  input.style.border = "1px solid #f74747";
  input.setAttribute("aria-invalid", "true");
}

function resetError(input, errorMessageId) {
  const error = document.getElementById(errorMessageId);
  error.style.display = "none";
  input.style.border = "none";
  input.removeAttribute("aria-invalid");
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateEmailField() {
  const emailValue = emailInput.value.trim();

  resetError(emailInput, "emailEmptyError");
  resetError(emailInput, "emailInvalidError");

  if (!emailValue) {
    showError(emailInput, "emailEmptyError");
  } else if (!isValidEmail(emailValue)) {
    showError(emailInput, "emailInvalidError");
  }
}

function validateNicknameField() {
  resetError(nicknameInput, "nicknameEmptyError");
  if (!nicknameInput.value.trim()) {
    showError(nicknameInput, "nicknameEmptyError");
  }
}

function validatePasswordField() {
  resetError(passwordInput, "passwordEmptyError");
  resetError(passwordInput, "passwordInvalidError");

  if (!passwordInput.value.trim()) {
    showError(passwordInput, "passwordEmptyError");
  } else if (passwordInput.value.trim().length < 8) {
    showError(passwordInput, "passwordInvalidError");
  }
}

function validatePasswordConfirmationField() {
  resetError(passwordConfirmationInput, "passwordConfirmError");

  if (passwordInput.value.trim() !== passwordConfirmationInput.value.trim()) {
    showError(passwordConfirmationInput, "passwordConfirmError");
  }
}

emailInput.addEventListener("focusout", validateEmailField);
nicknameInput.addEventListener("focusout", validateNicknameField);
passwordInput.addEventListener("focusout", validatePasswordField);
passwordConfirmationInput.addEventListener(
  "focusout",
  validatePasswordConfirmationField
);
