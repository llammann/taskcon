// #region TASK 1

// let input = prompt("Enter the string");
// alert(`${input.replace("_", "-")}`);

// #endregion

// #region TASK 2

// let input = prompt("Enter the string");

// getlowercased = (string) => {
//   return string.toLowerCase();
// };

// alert(getlowercased(input));

// #endregion

// #region #region TASK 3

// let input = prompt("Enter the string");

// const onlyletters = function (string) {
//   return string.trim();
// };

// alert(`${onlyletters(input).split("")}`);

// #endregion

// #region TASK 4

// let input = prompt("Enter the string");

// lowercased_dashed_text = (string) => {
//   return string.toLowerCase().replace(" ", "-");
// };

// alert(lowercased_dashed_text(input));

// #endregion

// #region TASK 5

// let input = prompt("Enter the string");

// function firstletter(string) {
//   return string[0].toUpperCase() + string.slice(1);
// }
// alert(firstletter(input));

// #endregion

// #region TASK 6

// let input = prompt("Enter the string");

// const count_uppercased = function (string) {
//   let count = 0;
//   for (i = 0; i < string.length; i++) {
//     if (string[i] == string[i].toUpperCase() && string[i] != " ") {
//       count++;
//     }
//   }
//   return count;
// };

// alert(count_uppercased(input));

// #endregion

// #region TASK 7

// function IsFound(text,word) {
//     let result = {
//         IsFound: false,
//         index: -1
//     }
//     if (text.toLowerCase().trim().includes(word.toLowerCase().trim())) {
//         result.IsFound = true;
//         result.index =  text.indexOf(word);
//     }
//     return result;
// }
// console.log(IsFound('hello world','apple'));

// #endregion

// #region TASK 8

// function Human(first, last, age, eyecolor) {
//     this.name = "name";
//     this.surname = "surname";
//     this.birthYear = birthYear;
//     this.birthCity = "birthCity";
//     this.nationality = "nationality";
//     fullName(){
//         return name + surname
//     }
//   }

// #region TASK Product

class Product {
  #costPrice;
  constructor(
    name,
    costPrice,
    salePrice,
    isDiscounted = false,
    discountPercantage = 0
  ) {
    this.name = name;
    this.costPrice = costPrice;
    this.salePrice = salePrice;
    this.isDiscounted = isDiscounted;
    this.discointPercantage = discountPercantage;
  }
  getProfit() {
    if (this.isdiscounted) {
      let gelir =
        (this.salePrice * (100 - this.discountPercantage)) / 100 -
        this.costPrice;
    }
  }
}
let product_1 = new Product("cola", 50, true, 30);

console.log(product_1.getProfit());
