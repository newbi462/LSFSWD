/*CONSTRUTOR*/
function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
  this.speak = function () {
    return `Hello, my name is ${this.name}`;
  };
}


/*CHAINED WITH PROTOTYPES*/
function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name;
  this.homeTown = attributes.homeTown;
}
Person.prototype.speak = function () { // this funtion is now a "protypoe" of the "Person" construtor
  return `Hello, my name is ${this.name}`;
};


let sam = new Person({name: 'Sam'});//only name was defined... each must be defined, or it will be undefined
console.log(sam);
sam.speak();

function Child(attributes2) {
  Person.call(this, attributes2); // to bind to the Person above

  // no like "age" above
  this.isachild = attributes2.isachild; //?? arr atrobutes for this constructot?

};
Child.prototype = Object.create(Person.prototype); //? links above proto?

let samskid = new Child(
  {
    age: 2,
    name: "thekid",
    hometown: "a-place",
    isachild: "test value?"// this value is only part of "Child" the rest come from "Person"
  }
);

console.log(samskid);
samskid.speak();
