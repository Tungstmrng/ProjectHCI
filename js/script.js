document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector("#show-login");
  const closeButton = document.querySelector(".forms .close-button");
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const birthDate = document.getElementById("birthdaytime");
  const genderInputs = document.getElementsByName("gender");
  const termsCheckbox = document.getElementById("vehicle1");

  if (loginButton) {
    loginButton.addEventListener("click", () => {
      console.log("Button Clicked");
      document.querySelector(".forms").classList.add("active");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      console.log("Close Button Clicked");
      document.querySelector(".forms").classList.remove("active");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateInputs()) {
        console.log("Form submitted successfully!");
        alert("Registration successful!");
        form.reset();
        document.querySelector(".forms").classList.remove("active");

        clearSuccessMessages();
      }
    });
  }

  function setError(element, message) {
    const inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector(".error");

    if (!errorDisplay) {
      errorDisplay = document.createElement("div");
      errorDisplay.classList.add("error");
      inputControl.appendChild(errorDisplay);
    }

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    // inputControl.classList.remove("success");
  }

  function setSuccess(element) {
    const inputControl = element.parentElement;
    let errorDisplay = inputControl.querySelector(".error");

    if (errorDisplay) {
      errorDisplay.innerText = "";
    }

    inputControl.classList.remove("error");
    // inputControl.classList.add("success");
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateInputs() {
    let isValid = true;

    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const birthDateValue = birthDate.value.trim();
    const genderSelected = Array.from(genderInputs).some(
      (input) => input.checked
    );

    if (emailValue === "") {
      setError(email, "Email is required");
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      setError(email, "Provide a valid email address");
      isValid = false;
    } else {
      setSuccess(email);
    }

    if (usernameValue === "") {
      setError(username, "Full name is required");
      isValid = false;
    } else {
      setSuccess(username);
    }

    if (birthDateValue === "") {
      setError(birthDate, "Birth date is required");
      isValid = false;
    } else {
      setSuccess(birthDate);
    }

    // Gender Validation
    const genderError = document.getElementById("gender-error");
    if (!genderSelected) {
      if (!genderError) {
        const errorDiv = document.createElement("div");
        errorDiv.id = "gender-error";
        errorDiv.classList.add("error");
        genderInputs[0].parentElement.appendChild(errorDiv);
      }
      isValid = false;
      document.getElementById("gender-error").innerText =
        "Please select a gender";
    } else {
      if (genderError) genderError.innerText = "";
    }

    // Terms Checkbox Validation
    const termsError = document.getElementById("terms-error");
    if (!termsCheckbox.checked) {
      if (!termsError) {
        const errorDiv = document.createElement("div");
        errorDiv.id = "terms-error";
        errorDiv.classList.add("error");
        termsCheckbox.parentElement.appendChild(errorDiv);
      }
      document.getElementById("terms-error").innerText =
        "You must accept the terms and conditions";
      isValid = false;
    } else {
      if (termsError) termsError.innerText = "";
    }

    return isValid;
  }

  function clearSuccessMessages() {
    document
      .querySelectorAll(".error")
      .forEach((error) => (error.innerText = ""));
    document
      .querySelectorAll("input")
      .forEach((input) => input.classList.remove("error"));
  }
});

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
