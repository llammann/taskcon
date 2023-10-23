class Foo {
  constructor(name) {
    this.name = name;
  }

  getNameSeparator() {
    return "-";
  }
}

class FooBar extends Foo {
  constructor(name, index) {
    super(name); //super
    this.index = index;
  }

  getFullName() {
    return this.name + super.getNameSeparator() + this.index; //super
  }
}

const firstFooBar = new FooBar("foo", 1);

console.log(firstFooBar.name);
// Expected output: "foo"
console.log(firstFooBar.index);

console.log(firstFooBar.getFullName());
// Expected output: "foo-1"
