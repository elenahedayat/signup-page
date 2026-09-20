const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");
const terms = document.getElementById("terms");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");
const termsError = document.getElementById("terms-error");
const success = document.getElementById("success");

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function show(el, msg) {
  el.textContent = msg;
}

function clear(el) {
  el.textContent = "";
}

email.addEventListener("input", () => {
  if (email.value && !isEmail(email.value)) {
    show(emailError, "Please enter a valid email");
  } else {
    clear(emailError);
  }
});

password.addEventListener("input", () => {
  if (password.value && password.value.length < 8) {
    show(passwordError, "At least 8 characters");
  } else {
    clear(passwordError);
  }
  if (confirm.value && confirm.value !== password.value) {
    show(confirmError, "Passwords do not match");
  } else {
    clear(confirmError);
  }
});

confirm.addEventListener("input", () => {
  if (confirm.value && confirm.value !== password.value) {
    show(confirmError, "Passwords do not match");
  } else {
    clear(confirmError);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  success.hidden = true;
  let ok = true;

  if (!email.value.trim()) {
    show(emailError, "Email is required");
    ok = false;
  } else if (!isEmail(email.value)) {
    show(emailError, "Please enter a valid email");
    ok = false;
  } else {
    clear(emailError);
  }

  if (!password.value) {
    show(passwordError, "Password is required");
    ok = false;
  } else if (password.value.length < 8) {
    show(passwordError, "At least 8 characters");
    ok = false;
  } else {
    clear(passwordError);
  }

  if (!confirm.value) {
    show(confirmError, "Please confirm password");
    ok = false;
  } else if (confirm.value !== password.value) {
    show(confirmError, "Passwords do not match");
    ok = false;
  } else {
    clear(confirmError);
  }

  if (!terms.checked) {
    show(termsError, "You must agree to the terms");
    ok = false;
  } else {
    clear(termsError);
  }

  if (ok) {
    success.hidden = false;
    form.reset();
  }
});