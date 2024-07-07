let submitBtn = document.querySelector("#submitBtn");
let nameError = document.querySelector("#nameError");
let emailError = document.querySelector("#emailError");
let passError = document.querySelector("#passError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateName() && validateEmail() && validatePass()) {
    alert("Form Submitted Successfully");
  }
});

function validateName() {
  let name = document.querySelector("#name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  nameError.innerHTML = " ";
  nameError.previousElementSibling.classList.add("fa-check");
  return true;
}

function validateEmail() {
  let email = document.querySelector("#email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter valid email";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  emailError.innerHTML = " ";
  emailError.previousElementSibling.classList.add("fa-check");
  return true;
}
function validatePass() {
  let password = document.querySelector("#password").value;
  if (password.length == 0) {
    passError.innerHTML = "Password is required";
    passError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passError.innerHTML =
      "Password should contain 1 Uppercase,1 Lowecase, 1 Digit & 1 Alpabet";
    passError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  passError.innerHTML = "";
  passError.previousElementSibling.classList.add("fa-check");
  return true;
}
