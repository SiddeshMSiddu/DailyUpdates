class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative");
    } else {
      this._age = value;
    }
  }
}

const person = new Person("Anand", 30);
console.log(person.name);  
person.name = "Krishna";     
console.log(person.name);  

console.log(person.age);   
person.age = -5;           
console.log(person.age);   
