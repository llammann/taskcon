// let obj = {
//   name: "name",
//   surname: "surname",
//   age: "age",
// };

// function concat(obj) {
//   return obj.name + " " + obj.surname + " " + obj.age;
// }
// let me = {
//   name: "laman",
//   surname: "nazirli",
//   age: 19,
// };
// console.log(concat(me));

// #region TASK 1

// let input = Number(window.prompt("Enter the number"));
// // let count = 0;
function IsPrime(input) {
  if (input == 1) {
    return 0;
  } else {
    for (i = 1; i <= input; i++) {
      if (input % i == 0) count++;
    }
    if (count > 2) {
      return false;
    } else {
      return true;
    }
  }
}
// console.log(IsPrime(input));

// #endregion

// #region TASK 2

let arr = Number(window.prompt("Enter the array"));
let count = 0;

function PrimeQuantity(arr) {
  for (i = 0; i < arr.length; i++) {
    if (IsPrime(arr[i])) {
      count++;
    }
    return count;
  }
}

console.log(PrimeQuantity(arr));

// #endregion

// #region TASK 3

// let brand = window.prompt("enter brand");
// let model = window.prompt("enter model");
// let year = window.prompt("enter year");
// let mileage = Number(window.prompt("enter mileage"));
// let fuelfor1KM = Number(window.prompt("enter fuelfor1KM"));
// let fuelcapacity = Number(window.prompt("enter fuelcapacity"));
// let currentfuel = Number(window.prompt("enter currentfuel"));

// let addition = Number(window.prompt("enter addition"));

// let car = {
//   brand: "brand",
//   model: "model",
//   year: "year",
//   mileage: mileage,
//   fuelfor1KM: fuelfor1KM,
//   fuelcapacity: fuelcapacity,
//   currentfuel: currentfuel,
// };

// function increaseFuel(addition) {
//   if (addition > fuelcapacity) {
//     alert("elave olunan benzin coxdur");
//   } else {
//     currentfuel = addition + fuelcapacity;
//     alert(currentfuel);
//   }
// }
