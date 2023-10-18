class Human {
  #birthYear;
  constructor(name, surname, birthYear, birthPlace) {
    this.name = this.name;
    this.surname = surname;
    this.#birthYear = birthYear;
    this.birthPlace = birthPlace;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
  getAge() {
    const d = new Date();
    return d.getFullYear() - this.#birthYear;
  }
  //   static age(human.human1[age],Human.human2[age]) {
  //     if(human1[age]>human2[age]){
  //         return
  //     }
  //   }

  get age() {
    return this.getAge();
  }

  get fullname() {
    return this.getFullName();
  }
}

let human1 = new Human("Nicol", "Anderson", 1990, "Tokyo");
console.log(human1.age);
console.log(human1.getAge());

class User extends Human {
  isLogged = false;
  constructor(
    name,
    surname,
    birthYear,
    birthPlace,
    username,
    email,
    password = this.birthPlace.slice(0, 2).toUppercase + this.birthYear
  ) {
    super(name, surname, birthYear, birthPlace);
    this.username = surname;
    this.email = email;
    this.password = password;
    this.isLogged = isLogged;
  }

  login(username, password) {
    if (this.username == username && this.password == password) {
      alert(`welcome back ${this.name.getFullName()}`);
      isLogged = true;
    } else {
      return alert(``);
    }
  }

  logout(isLogged) {
    if (isLogged) {
      alert(`you logged out succesfully`);
      isLogged = false;
    } else {
      alert(`you didn't login`);
    }
  }
}

// let human1 = new Human("Nicol", "Anderson", 1990, "Tokyo");
let user1 = new User(
  "Lee",
  "Van",
  1998,
  "New-York",
  "lee",
  "lee@gmail.com",
  "lee123",
  true
);

user1.login("lee", "lee123");
console.log(user1.logout());
