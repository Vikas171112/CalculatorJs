let calcBtn = document.querySelectorAll(".grid-item");
let inputfield = document.querySelector(".calc-container input");
let string = "";
console.log(inputfield);
Array.from(calcBtn);
console.log(calcBtn);
calcBtn.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      inputfield.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      inputfield.value = string;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      inputfield.value = string;
    } else {
      string += e.target.innerHTML;
      inputfield.value = string;
    }
  });
});
