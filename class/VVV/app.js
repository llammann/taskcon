let students = [
  {
    id: 1,
    name: "asmar",
    age: 19,
    kesr: false,
    hobbies: ["shopping", "restoran", "travel"],
    password: {
      email: "asmar@mail.com",
      pass: "12345",
      memmbers: {
        qardas: "qardas",
      },
    },
  },
  {
    id: 2,
    name: "shanana",
    age: 20,
    kesr: true,
    hobbies: ["kitab", "resm"],
    password: {
      email: "shana@mail.com",
      pass: "123456",
      memmbers: {
        qardas: "qardas",
      },
    },
  },
  {
    id: 3,
    name: "nicat",
    age: 21,
    kesr: false,
    password: {
      email: "nicat@mail.com",
      pass: "1234569",
    },
  },
  {
    id: 4,
    name: "ayan",
    age: 22,
    kesr: true,
    hobbies: ["mahni oxumaq", "mahni qulaq asmaq"],
    password: {
      email: "ayan@mail.com",
      pass: "123456",
      memmbers: {
        qardas: "qardas",
        baci: "baci",
      },
    },
  },
];

// 1
let arr1 = students.map((elem) => {
  return elem.name;
});

console.log(arr1);

// 2

let arr2 = students.map((elem) => {
  if (elem.kesr) {
    return elem.name;
  }
});

console.log(arr2);

// 3

let arr3 = students.map((elem) => {
  if (elem.password?.memmbers?.baci) {
    return elem.name;
  }
});

console.log(arr3);

// 4;

let ages = 0;
// let arr4 = students.map((elem) => {
//   ages += elem.age;

//   return ages;
// });

// console.log(arr4);

students.forEach((element) => {
  return (ages += element.age);
});

console.log(ages);
