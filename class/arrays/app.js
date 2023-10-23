// #region TASK

// let my_array = [
//   {
//     name: "John",
//     age: 25,
//   },
//   {
//     name: "Jane",
//     age: 21,
//   },
//   {
//     name: "Emma",
//     age: 45,
//   },
//   {
//     name: "Lola",
//     age: 19,
//   },
// ];

// let max = my_array[0].age;
// let min = my_array[0].age;
// let result = 0;
// my_array.forEach((acc, elem) => {
//   if (elem.age > max) {
//     max = elem.age;
//   }

//   if (elem.age < min) {
//     min = elem.age;
//   }
// });
// result = max - min;

// console.log([min, max, result]);

// #endregion

// #reigon TASK 1
// capitalize

// String.prototype.myCapitalize = function () {
//   return this[0].toUpperCase() + this.slice(1);
// };

// let input = prompt("Enter string");
// console.log(input.myCapitalize());

// #region TASK 2
// isBlank

// String.prototype.myIsblank = function () {
//   if (this == "") {
//     return false;
//   }
//   return this.split("").every((element) => element === " ");
// };

// let input = prompt("Enter string");
// console.log(input.myIsblank());

// #endregion

// #region TASK 3
// concat

// String.prototype.myConcat = function (string) {
//   return this + string;
// };

// let input1 = prompt("Enter string");
// let input2 = prompt("Enter string");

// console.log(input1.myConcat(input2));

// #endregion

// #region TASK 4
// replace

// String.prototype.myReplace = function (first, last) {
//   let new_str;
//   // new_str.length = this.slice(i).length + last.length;
//   for (let j = 0; j <= this.length; j++) {
//     new_str.length = this.slice(j).length + last.length;
//   }
//   new_str = this;
//   let result = "";
//   for (i = 0; i < new_str.length; i++) {
//     if (new_str[i] === first) {
//       // result += new_str.slice(0, i) + last + new_str.slice(i + last.length);
//       result += splice(i, first.length, last);
//       break;
//     }
//   }
//   return result;
// };

// let input = prompt("Enter string");
// let letter_1 = prompt("Enter letter_1");
// let letter_2 = prompt("Enter letter_2");
// console.log(input.myReplace(letter_1, letter_2));

// #endregion

// 1 234 56;
// 1 23  56
// s ddd em;
//  i
// 1 23 45
// s el em

// let str5 = "salam";
// console.log(str5[6]);

String.prototype.myReplace = function (first, last) {
  let new_str;
  // new_str.length = this.slice(i).length + last.length;
  for (let j = 0; j <= this.length; j++) {
    new_str.length = this.slice(j).length + last.length;
  }
  new_str = this;
  let result = "";
  for (i = 0; i < new_str.length; i++) {
    if (new_str[i] === first) {
      // result += new_str.slice(0, i) + last + new_str.slice(i + last.length);
      result += splice(i, first.length, last);
      break;
    }
  }
  return result;
};

let input = prompt("Enter string");
let letter_1 = prompt("Enter letter_1");
let letter_2 = prompt("Enter letter_2");
console.log(input.myReplace(letter_1, letter_2));
