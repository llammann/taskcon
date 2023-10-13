// #region TASk 1

// let input = window.prompt("Enter arr");
// const arr = input.split(" ");
// let max = arr[0];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > max && arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
// }

// #endregion

// #region EMPLOYEES

// let employee_quantity = Number(window.prompt("Enter employee quantity"));
// while (isNaN(employee_quantity) || employee_quantity == "") {
//   let employee_quantity = Number(window.prompt("Enter employee quantity"));
// }

// let employees= new Array()
// for(i=0; i<employee_quantity; i++) {
//     let.employee_name=window.prompt(`enter #${i+1} employee name`)
// }
// employees.push(employee)

// #endregion

let employees = [];
let emp1 = {
  fullname: "Adam Sandler",
  salary: 100,
  department: "IT",
  age: 20,
  isMarried: false,
  isMale: true,
};
let emp2 = {
  fullname: "Joe Biden",
  salary: 900,
  department: "HR",
  age: 30,
  isMarried: true,
  isMale: true,
};
let emp3 = {
  fullname: "Patrisha Medvedov",
  salary: 3000,
  department: "IT",
  age: 61,
  isMarried: false,
  isMale: false,
};
employees.push(emp1, emp2, emp3);
console.log(employees);

//  #region TASK 1

// let salary = 0;
// for (i = 0; i < employees.length; i++) {
//   salary += employees[i].salary;
// }
// let average_salary = salary / i;
// console.log(`average salary: ${average_salary}`);

// #endregion

//  #region TASK 2

// let male_count = 0;
// for (i = 0; i < employees.length; i++) {
//   male_count += employees[i].isMale;
// }
// console.log(`average salary: ${male_count}`);

// #endregion

// #region TASK 3

// for (i = 0; i < employees.length; i++) {
//   if (employees[i].age > 60) {
//     employees.splice(i, 1);
//   }
// }
// console.log(employees);

// #endregion

// #region TASK 4

// for (i = 0; i < employees.length; i++) {
//   if (employees[i].isMarried == true) {
//     window.alert(employees[i].fullname);
//   }
// }

// #endregion

// #region TASK 5

// for (i = 0; i < employees.length; i++) {
//   if (employees[i].salary < 1000) {
//     employees[i].salary += 500;
//   }
// }
// console.log(employees);

// #endregion

// #region TASK 6

// let it_department = new Array();
// for (i = 0; i < employees.length; i++) {
//   if (employees[i].department == "IT") {
//     it_department.push(employees[i]);
//   }
// }
// console.log(it_department);

// #endregion

// #region TASK 7

// let max_salary = employees[0];
// for (i = 0; i < employees.length; i++) {
//   if (employees[i].department == "IT" && max < employees[i].salary) {
//     lucky_man = employees[i].fullname;
//   }
// }
// alert(lucky_man);

// #endregion
