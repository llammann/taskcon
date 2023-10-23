let button = document.querySelector("button");
let box = document.querySelector(".box");

button.addEventListener("click", function () {
  if (box.style.backgroundColor == "red") {
    box.style.backgroundColor = "yellow";
    box.style.width = "300px";
    box.style.height = "300px";
    box.children[0].textContent = "BIG";
  } else {
    box.style.backgroundColor = "red";
    box.style.width = "200px";
    box.style.height = "200px";
    box.children[0].textContent = "SMALL";
  }
});
