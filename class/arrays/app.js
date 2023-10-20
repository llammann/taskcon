let my_array = [
  {
    name: "John",
    age: 25,
  },
  {
    name: "Jane",
    age: 21,
  },
  {
    name: "Emma",
    age: 45,
  },
  {
    name: "Lola",
    age: 19,
  },
];

let max = my_array[0].age;
let min = my_array[0].age;
let result = 0;
my_array.forEach((acc, elem) => {
  if (elem.age > max) {
    max = elem.age;
  }

  if (elem.age < min) {
    min = elem.age;
  }
});
result = max - min;

console.log([min, max, result]);
