const inputEl = document.querySelectorAll(".form-box input");

function showError(inputId, message) {
  const input = document.querySelector(`#${inputId}`);
  const errorText = document.querySelector(`#${inputId} ~ .error-text`);

  input.classList.add("border-red-500", "focus:ring-red-500");

  if (errorText) {
    errorText.textContent = message;
  }
}

function hideError(inputId) {
  const input = document.querySelector(`#${inputId}`);
  const errorText = document.querySelector(`#${inputId} ~ .error-text`);

  input.classList.remove("border-red-500", "focus:ring-red-500");

  if (errorText) {
    errorText.textContent = "";
  }
}

inputEl.forEach((input) => {
  input.addEventListener("input", () => {
    const id = input.id;
    const value = input.value.trim();

    if (id === "username") {
      if (value === "") {
        showError(id, "Username cannot be blank");
      } else {
        hideError(id);
      }
    }

    if (id === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value === "") {
        showError(id, "Email cannot be blank");
      } else if (!emailRegex.test(value)) {
        showError(id, "Invalid email format");
      } else {
        hideError(id);
      }
    }

    if (id === "password") {
      if (value === "") {
        showError(id, "Password cannot be blank");
      } else {
        hideError(id);
      }
    }

    if (id === "confirmPassword") {
      const passwordValue = document.querySelector("#password").value.trim();
      if (value === "") {
        showError(id, "Please confirm your password");
      } else if (value !== passwordValue) {
        showError(id, "Passwords do not match");
      } else {
        hideError(id);
      }
    }
  });
});
