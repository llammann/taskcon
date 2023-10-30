let body = document.querySelector("body");
let my_btn = document.querySelector(".my_btn");
localStorage.setItem("value", "true");

my_btn.addEventListener("click", function () {
  //   console.log("hii");
  if (this.classList == "btn btn-dark mt-3") {
    this.classList = "btn btn-light mt-3";
    body.style.backgroundColor = "black";
    localStorage.setItem("value", "true");
    this.textContent = "Light mode";
  } else {
    this.classList = "btn btn-dark mt-3";
    body.style.backgroundColor = "white";
    localStorage.setItem("value", "false");
    this.textContent = "Dark mode";
  }
});

document.addEventListener("DOMcontentLoaded", function () {
  let button = this.closest("button");
  if (JSON.parse(localStorage.getItem("value"))) {
    body.style.backgroundColor = "black";
    button.classList = "btn btn-light mt-3";
    this.textContent = "Dark mode";

    console.log("bye b");
  } else {
    button.classList = "btn btn-dark mt-3";
    body.style.backgroundColor = "white";
    this.textContent = "Light mode";
  }
});
