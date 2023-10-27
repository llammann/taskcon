let body = document.querySelector("body");
let name_inp = document.querySelector(".name input");
let surname_inp = document.querySelector(".surname input");
let email_inp = document.querySelector(".email input");
let cpassword_inp = document.querySelector(".cpassword input");
let rpassword_inp = document.querySelector(".rpassword input");
let submit_btn = document.querySelector(".container button");
// Gender
let gender_1 = document.querySelector("#male");
let gender_2 = document.querySelector("#female");
let genders_arr = document.createElement("array");

genders_arr = [];
genders_arr.push(gender_1.value, gender_2.value);
// console.log(genders_arr);

// Hobbies
let hobby_1 = document.querySelector(".hobbies #hobby1");
let hobby_2 = document.querySelector(".hobbies #hobby2");
let hobby_3 = document.querySelector(".hobbies #hobby3");
let hobbies_arr = document.createElement("array");
let hobbies = document.createElement("array");

hobbies_arr = [];
hobbies = [];
hobbies_arr.push(hobby_1.value, hobby_2.value, hobby_3.value);
// console.log(hobbies_arr);

// Cities
let city_1 = document.querySelector(".cities #city1");
let city_2 = document.querySelector(".cities #city2");
let city_3 = document.querySelector(".cities #city3");
let city_4 = document.querySelector(".cities #city4");
let cities_arr = document.createElement("array");
let cities = document.createElement("array");

cities_arr = [];
cities_arr = [];
cities_arr.push(city_1.value, city_2.value, city_3.value, city_4.value);
// console.log(cities_arr);

// STUDENT_ARR
let student_arr = document.createElement("array");

let id = document.createElement("p");
id = 0;

submit_btn.addEventListener("click", function () {
  let student_obj = document.createElement("object");

  student_obj = {
    id: "id",
    name: "name",
    surname: "surname",
    age: "age",
    gender: "gender",
    hobbies: "hobbies",
    city: "city",
    cpassword_inp: "cpassword_inp",
    rpassword_inp: "rpassword_inp",
  };
  hobbies_arr.forEach((element) => {
    if (element.checked) {
      hobbies.push(element);
    }
  });
  genders_arr.forEach((element) => {
    if (element.checked) {
      student_obj.gender = element;
    }
  });
  cities_arr.forEach((element) => {
    if (element.checked) {
      student_obj.city = element;
    }
  });

  student_obj.id = id++;
  student_obj.name = name_inp;
  student_obj.surname = surname_inp;
  student_obj.email = email_inp;
  student_obj.cpassword_inp = cpassword_inp;
  student_obj.rpassword_inp = rpassword_inp;

  student_arr.push(student_obj);
  console.log(student_arr);
});

// student_arr.push(student_obj);
// console.log(student_arr);
