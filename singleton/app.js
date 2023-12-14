var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hi b");
var Human = /** @class */ (function () {
    function Human(name, surname, age) {
        this._name = name;
        this._surname = surname;
        this.age = age;
        if (age > 0) {
            this.age = age;
        }
        else {
            this.age = 0;
        }
    }
    Object.defineProperty(Human.prototype, "name", {
        //   getters setters
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "surname", {
        get: function () {
            return this._surname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Human.prototype, "fullName", {
        get: function () {
            return this._name + " " + this._surname;
        },
        enumerable: false,
        configurable: true
    });
    // methods
    Human.prototype.getInfo = function () {
        console.log("".concat(this.fullName, " is ").concat(this.age, " years old"));
    };
    return Human;
}());
var Position;
(function (Position) {
    Position["front"] = "frontend";
    Position["back"] = "backend";
    Position["ceo"] = "ceo";
})(Position || (Position = {}));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, surname, age, salary, skills, position) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.salary = salary;
        _this.skills = skills;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Human));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, surname, age, groupName, hobbies, GPA) {
        var _this = _super.call(this, name, surname, age) || this;
        _this.groupName = groupName;
        _this.hobbies = hobbies;
        if (GPA < 0 || GPA > 100) {
            _this._GPA = 0;
        }
        else {
            _this._GPA = GPA;
        }
        return _this;
    }
    Object.defineProperty(Student.prototype, "GPA", {
        get: function () {
            return this._GPA;
        },
        set: function (grade) {
            if (grade >= 0 && grade <= 100) {
                this._GPA = grade;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.hasPassed = function () {
        if (this._GPA < 50) {
            return false;
        }
        else {
            return true;
        }
    };
    return Student;
}(Human));
var student1 = new Student("laman", "nazirli", 20, "bf203", ["drawing", "music"], 99);
// console.log(student1)
// console.log(student1.fullName)
// student1.getInfo();
var employee1 = new Employee("barni", "bean", 25, 2222, ["working", "dying"], Position.back);
// console.log(employee1)
// HTMLL
var form = document.querySelector(".form");
var nameValue = document.querySelector(".name");
var surnameValue = document.querySelector(".surname");
var ageValue = document.querySelector(".age");
var selectOption = document.querySelector("#selectOption");
var selectedOption = selectOption.value;
console.log(selectedOption);
var StudentObj = {
    name: name,
    surname: surname,
    age: age,
    groupName: groupName,
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function () { });
