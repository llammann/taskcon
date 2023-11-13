// let btn = document.querySelector("#button");
// let name = document.querySelector("#fname");
// let surname = document.querySelector("#lname");

// btn.addEventListener("click", function (e) {
//   console.log(name.value);
//   console.log(surname.value);
//   e.preventDefault();
// });

// TASK 1

// #region

// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let counter = document.querySelector(".counter");

// counter.textContent = 0;

// btn2.addEventListener("click", function () {
//   counter.textContent++;
// });

// btn1.addEventListener("click", function () {
//   counter.textContent--;
//   if (counter == 0) {
//     btn1.style.background = "red";
//     btn1.setAttribute("disabled", true);
//   }
// });

// #endregion

// TASK 2

// #region

let input = document.querySelector("#search");
let error = document.querySelector("p");
error.style.display = none;

input.addEventListener("keyup", function () {
  if (input.value.length < 5) {
    error.style.display = block;
  }
});
// #endregion

//TASK 3
