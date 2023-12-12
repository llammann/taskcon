console.log("first");
let minus = document.querySelector<HTMLButtonElement>(".minus");
let plus = document.querySelector<HTMLButtonElement>(".plus");
let count = document.querySelector<HTMLSpanElement>(".count")!;
let counter: number = 0;

minus?.addEventListener("click", () => {
  //   console.log("minus");
  count.textContent = String(--counter);
});

plus?.addEventListener("click", () => {
  //   console.log("plus");
  count.textContent = String(++counter);
});


