console.log("hi b");

interface IHuman {
  name: string;
  surname: string;
  age: number;
  getInfo: () => void;
}

abstract class Human implements IHuman {
  private _name;
  private _surname;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this._name = name;
    this._surname = surname;
    this.age = age;

    if (age > 0) {
      this.age = age;
    } else {
      this.age = 0;
    }
  }

  //   getters setters
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  get fullName() {
    return this._name + " " + this._surname;
  }

  // methods
  getInfo(): void {
    console.log(`${this.fullName} is ${this.age} years old`);
  }
}

enum Position {
  front = "frontend",
  back = "backend",
  ceo = "ceo",
}

interface IEmployee<Skills> {
  salary: number;
  skills: Skills;
  position: Position;
}

class Employee extends Human implements IEmployee<string[]> {
  salary: number;
  skills: string[];
  position: Position;

  constructor(
    name: string,
    surname: string,
    age: number,
    salary: number,
    skills: string[],
    position: Position
  ) {
    super(name, surname, age);
    this.salary = salary;
    this.skills = skills;
    this.position = position;
  }
}

// STUDENT

interface IStudent<Hobbies> {
  groupName: string;
  hobbies: Hobbies;
  GPA: number;
  hasPassed: () => boolean;
}

class Student extends Human implements IStudent<string[]> {
  groupName;
  hobbies: string[];
  private _GPA: number;

  constructor(
    name: string,
    surname: string,
    age: number,
    groupName: string,
    hobbies: string[],
    GPA: number
  ) {
    super(name, surname, age);
    this.groupName = groupName;
    this.hobbies = hobbies;
    if (GPA < 0 || GPA > 100) {
      this._GPA = 0;
    } else {
      this._GPA = GPA;
    }
  }

  public get GPA() {
    return this._GPA;
  }

  public set GPA(grade: number) {
    if (grade >= 0 && grade <= 100) {
      this._GPA = grade;
    }
  }

  hasPassed(): boolean {
    if (this._GPA < 50) {
      return false;
    } else {
      return true;
    }
  }
}

const student1 = new Student(
  "laman",
  "nazirli",
  20,
  "bf203",
  ["drawing", "music"],
  99
);

// console.log(student1)
// console.log(student1.fullName)
// student1.getInfo();
const employee1 = new Employee(
  "barni",
  "bean",
  25,
  2222,
  ["working", "dying"],
  Position.back
);

// console.log(employee1)

// HTMLL

let form = document.querySelector(".form");
let nameValue = document.querySelector(".name");
let surnameValue = document.querySelector(".surname");
let ageValue = document.querySelector(".age");
let selectOption = document.querySelector<HTMLSelectElement>("#selectOption")!;
let selectedOption = selectOption.value;
console.log(selectedOption);

interface studentobj {
  name: string;
  surname: string;
  age: number;
}

let StudentObj: object = {
  name,
  surname,
  age,
  groupName,
};
form?.addEventListener("submit", function () {});
