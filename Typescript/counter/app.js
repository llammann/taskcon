console.log("first");
var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var count = document.querySelector(".count");
var counter = 0;
minus === null || minus === void 0 ? void 0 : minus.addEventListener("click", function () {
    //   console.log("minus");
    count.textContent = String(--counter);
});
plus === null || plus === void 0 ? void 0 : plus.addEventListener("click", function () {
    //   console.log("plus");
    count.textContent = String(++counter);
});
