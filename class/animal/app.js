class Animal {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  speak() {
    console.log(`${this.name} make noise`);
  }
}

let animal1 = new Animal("bear", 10);
animal1.speak();
console.log(animal1.age);

class Cat extends Animal {
  speak() {
    super.speak();
    console.log(`${this.name} make meow`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} make barks`);
  }
}

let cat1 = new Cat("pepe", 3);
cat1.speak();

let dog1 = new Dog("black", 2);
dog1.speak();

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} make roar`);
  }
}

let lion1 = new Lion("simba", 6);
lion1.speak();
