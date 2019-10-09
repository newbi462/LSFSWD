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
