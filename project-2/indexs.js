let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");
let stringe = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      stringe = eval(stringe);
      input.value = stringe;
    } else if (e.target.innerHTML == "AC") {
      stringe = "";
      input.value = stringe;
    } else if (e.target.innerHTML == "DEL") {
      stringe = stringe.substring(0, stringe.length - 1);
      input.value = stringe;
    } else {
      stringe += e.target.innerHTML;
      input.value = stringe;
    }
  });
});
