/*CLASSES*/
function Cat(name) {
// the 'new' operator creates an object, ‘this’
  this.name = name;
  this.meows = function() {
    return ‘My name is ’ + this.name + ’ …Meow!’;// return the object ‘this’
  }
}

const sam = new Cat('Sam');// the 'new' operator creates an object, ‘this’

const kitty = new Cat('Kitty');

console.log(sam.meows()); // 'My name is Sam ...Meow!'

console.log(kitty.meows()); // 'My name is Kitty ...Meow!
/*In this example we will be creating a Cat class.
Convention for classes is to give the name of anything that can be instantiated with the new keyword an uppercase name.
When we use the new keyword, Javascript does some great behind the scenes work for us and creates and returns an object automatically.*/
/****Prototype*/
function User(name, github) {
  this.name = name;
  this.github = github;
}

User.prototype.introduction = function(){
  return 'My name is ' + this.name + ', my github handle is ' + this.github + '.';
}

let dan = new User('Dan', 'tetondan');
let riley = new User('Riley', 'rileyriley');

console.log(dan.introduction()); // My name is Dan, my github handle is tetondan.
console.log(riley.introduction()); // My name is Riley, my github handle is rileyriley.
/*Prototype methods DO have access to the this keyword,
and just as before, it will always point to the object (left of the dot) that is calling it.*/


/*SUB CLASS*/
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(w, h) {
        super(w, h);
        this.h = w;
    }
}
/*When doing a sup class use super to infort from the main parent class*/


//TK EXTENTIONS
/*HSUPPER ==
// this.isachild = attributes2.isachild
// AND
// Child.prototype = Object.create(Person.prototype);
from prototype*/
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() { //  unless changed by an "extends" this acts as a prototype...
    console.log(`${this.name} says, Hello!`);
  }
}

const ryan = new Animal("ryan");
//console.log(ryan);
//console.log(ryan.speak()); // why is this login an unfied line also?
ryan.speak(); // does not need log because the funtion logs


class Cat extends Animal {
  constructor(name) {
    super(name);// super calls the Animal class? construtor
  }

  speak() { // this will over ride speak() for this "extention" if not delayer "supper" cuases it to inharit
    console.log(this.name + ', meyows.');
  }
}

const kittyKat = new Cat("Spot");
console.log(kittyKat);
kittyKat.speak();




class Dog extends Animal {
  constructor(name) {
    super(name);// super calls the Animal class? construtor
  }

/*  speak() {
    console.log(this.name + ' barks.');
  }*/
}

const bowWow = new Dog("Grissly");
console.log(bowWow);
bowWow.speak();
/// END TK extention


/*CONVERT PROTYPEE TO CLASS*/
function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}
Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}`;
};

//BECOMES
class Person {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }
  speak() {
    return `Hello, my name is ${this.name}`;
  }
}

/*CONVERT CHILD PROTOTYPE TO CLASS*/
function Child(childAttrs) {
  Person.call(this, childAttrs); // this is the special sauce
  this.isChild = childAttrs.isChild; // this will be a special attribute to Child
}
Child.prototype.checkIfChild = function() {
  if(this.isChild) {
    console.log(`${this.speak} and I am a child object`);
  }
};
//BECOMES
class Child extends Parent {
  constructor(childAttrs) {
    super(childAttrs);
    this.isChild = childAttrs.isChild;
  }
  checkIfChild() {
    if(this.isChild) {
    console.log(`${this.speak} and I am a child object`);
  }
}
