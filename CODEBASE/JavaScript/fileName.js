var firstName = 'John';
/*var is the ES5 way of declaring a variable. This is a generic variable keyword.*/

let lastName = 'Smith';
/*let is a new ES6 variable keyword. This will assign a variable much like var,
but with a little bit different behavior.
Most notably, it differs by creating “block level scope”.*/

const favoriteFood = 'Taco';
/*const is also new in ES6. A const variable is a variable that cannot be changed. It’s short for “constant”.*/


/*DATA TYPES*/
/*STRINGS*/
const dog = 'fido';
const dog = "fido";
/*Strings are blocks of text.
They will always be defined with quotation marks around them, either single or double.
Any text with quotes around it is a string.*/

/*NUMBERS*/
const answer = 42;
const negative = -13;
/*Numbers are just that, numbers.
Numbers do NOT have quotes around them.
They can be negative as well.
JavaScript does have a limitation on the size of a number (+/- 9007199254740991), but only very rarely will that limitation come up.*/

/*BOOLEANS*/
const iLoveJavascript = true;
/*Booleans come from low-level computer science.
It is a concept that powers binary code and the very core of computers.
You may have seen binary code in the past (e.g., 0001 0110…).
That is Boolean logic.
It essentially means you have two choices, on or off, 0 or 1, true or false.
In JavaScript, we use Booleans to mean true or false.
This may seem simple at first but can get complicated later on.*/

/*ARRAYS: Because Javascript is not a strongly typed language, arrays do not need to be typed either. Arrays in Javascript can contains multiple different data types in the same array.*/
const studentsNames = [‘Dan’, ‘Maria’, ‘Sara’, ‘Raj’];
//‘Dan’ = 0
//‘Maria’ = 1
//‘Sara’ = 2
//‘Raj’ = 3
console.log(studentNames[1]); // 'Maria'
/****ARRAYS LAST ITEM...*/
const studentsNames = [‘Dan’, ‘Maria’, ‘Sara’, … ,’Raj’];

console.log(studentNames[studentNames.length - 1]); // 'Raj', length = 4 because 4 values.
/*To dynamically access the last item in the array, we will use the .length method.
In our studentsNames array, the length is 4.
We know the first item is always going to be 0, and every item after is shifted over one number.
So in our example the last item has an index of 3.
Using our length property we will show how it is done when we don’t know the number of items in an array:*/
/****ARRAYS Assignment/reassign*/
const studentsNames = [‘Dan’, ‘Maria’, ‘Sara’, ‘Raj’];

studentNames[0] = 'Ryan';

console.log(studentNames); // ['Ryan', 'Maria', 'Sara', 'Raj'];
/*We can assign and reassign any index in the array using the bracket/index and an =.*/
/****ARRAYS: Methods and Properties*/
/*.length*/
const studentsNames = [‘Dan’, ‘Maria’, ‘Sara’, ‘Raj’];

console.log(studentNames.length);  // 4
/*Just like the String data type has a built in .length method, so does the array.
In fact the array has a lot of useful built in methods (we will be discussing those in a moment and in later lessons).
Just like the string .length counts the characters, array .length will return the number of items in an array:*/
/****.push & .pop*/
const studentsNames = [‘Dan’, ‘Maria’, ‘Sara’, ‘Raj’];

studentNames.push('Ryan');

console.log(studentNames);  // ['Dan', 'Maria', 'Sara', 'Raj', 'Ryan']
/*.push adds an item to the end of the array, incrementing it’s length by 1.
(.push returns the new length)*/
const studentsNames = [‘Dan’, ‘Maria’, ‘Sara’, ‘Raj’];

studentNames.pop();

console.log(studentNames);  // ['Dan', 'Maria', 'Sara']
/*.pop removes the last item in the array, decrementing the length by 1.
(.pop returns the “popped” item)*/
/****.unshift & .shift*/
const studentsNames = [‘Dan’, ‘Maria’, ‘Sara’, ‘Raj’];

studentNames.unshift('Ryan');

console.log(studentNames);  // ['Ryan', 'Dan', 'Maria', 'Sara', 'Raj']

studentNames.shift();

console.log(studentNames);  // ['Dan', 'Maria', 'Sara', 'Raj']
/*.unshift and .shift are exactly like .push and .pop, except they operate on the first item in the array.
.unshift(item) will put a new item in the first position of the array,
and .shift() will remove the first item in the array.*/

/****higher order methods, because they take callbacks as arguments.*/
/***.forEach*/
const cars = [‘Ford’, ‘Chevrolet’, ‘Toyota’, ‘Tesla’];

//We can write the callback function itself in the parentheses as an anonymous function
cars.forEach(function(item, index) {
  console.log(item);
});

//Or we can instantiate a function to be used as a callback.
//Also, we do not need to use the index argument, if you don’t need it, feel free to leave it out.
function printNames(item) {
  console.log(item);
}

//And call that function in the forEach parentheses
cars.forEach(printNames);
/*.forEach is a built in for loop on every array.
.forEach takes a callback as its only argument, and iterates over every item in the array and calls the callback on it.
The callback can take two arguments, the first is the item itself, the second is the index of the item, this argument is optional.*/

/****.map*/
function multiplyByThree(item) {
  return item * 3;
}

const double = nums.map(function(item) {
  return item * 2;
});

const triple = nums.map(multiplyByThree)// nums is the ARRAY you are changing

console.log(double); // [ 4, 6, 8, 10 ]

console.log(triple); // [ 6, 9, 12, 15 ]
/*.map is used when we want to change every item in an array in the same way.
.map takes a callback as its only argument.
Like the .forEach method, the callback has the optional arguments item and index.
Unlike .reduce, .map will return the entire array.*/

/*LOOP AN ARRAYS*/
let studentsNames = ["Dan", "Maria", "Sara", "Raj"];

for (let i = 0; i < studentsNames.length; i++) {
  console.log(studentsNames[i]);
}
/*THIS CODE WILL USE A LOOP TO OUT-PUT THE VALUES OF THE ARRAY 1 BY 1*/





/*OBJECTS: Objects and arrays are similar in some ways and very different in others. Where arrays hold multiple items related to each other, Objects will hold a lot of information about one thing. Objects are instantiated by using braces ({}).*/
const newObj = {};
/****Key:Value pairs*/
const user = {

  username: 'dan.frehner',

  password: 'abc123',

  lovesJavascript: true,

  favoriteNumber: 42,

};
/*Unlike arrays that have index valued items, objects use a concept called key:value pairs.
The key is the identifier and the value is the value we want to save to that key.
The syntax is “key: value”.
Objects can hold many key:value pairs, they must be separated by a comma (no semi-colons inside of an object!).
Keys are unique in an object, there can be only one key of that name.
Although, multiple keys can have the same value.
Values can be any Javascript type, string, number, boolean, array, function or even another object.
In this demo we will create a user object.(SEE ABOVE)*/
/****Accessing Values*/
/*dot notation*/
user.lovesJavascript; // true

user.username; // dan.frehner
/*With dot notation we can just call the object name, a dot, and the key name.
Just as we call the .length property on an array (hint: the length property is a key:value pair):*/
/*Bracket notation*/
const passString = 'password';

user['lovesJavascript']; // true

user['username']; // dan.frehner

user[passString]; // abc123
/*Bracket notation is just like calling an item on an array, although with brackets we MUST use a string or number, or variable pointing to a string or number.
Each key can be called by wrapping it with quotes:*/
/*IN THE WILD you will see brackets almost always being used with variables.*/
/****Assigning Values*/
const newUser = {

  isNew: true,

}

const loveJSString = 'lovesJavascript';

newUser.username = 'new.username';

newUser['password'] = '12345';

newUser[loveJSString] = true;
/*Assigning values works just like accessing them.
We can assign them, when we create the object, with dot notation, or with bracket notation:*/
/****Removing Properties*/
const newObject = {

  removeThisProperty: true,

};

delete newObject.removeThisProperty;
/*If we want to remove a property we can do it using the delete keyword:
It is rare we will see the use of the delete keyword, many find best practice to be setting the value of a keyword to undefined.
It will be up to you when the time comes.*/

/*METHODS: Functions saved on an object are called methods. We have used plenty of methods so far throughout this course. .length, .push, .pop, etc, are all methods. We can set a key to a name, and the value to a function. Just like other times we call methods, we will call this method using dot notation and trailing parentheses (note: we can call a method with arguments just as we would a normal function):*/
const newObject = {

  sayHiMethod: function() {

    console.log(‘Hi Everyone!’);

  },

}

newObject.sayHiMethod(); // Hi Everyone!
/*In objects, values can be set to functions.
Functions saved on an object are called methods.
We have used plenty of methods so far throughout this course. .length, .push, .pop, etc, are all methods.
We can set a key to a name, and the value to a function.
Just like other times we call methods, we will call this method using dot notation and trailing parentheses (note: we can call a method with arguments just as we would a normal function):*/
/***LOOPS = SEE "for…in Loops"*/
/***The ‘this’ Keyword*/
const user = {
  username: ‘dan.frehner’,
  password: ‘abc123’,
  lovesJavascript: true,
  favoriteNumber: 42,

  userSaysHi: function(){
    console.log( this.username + ’ says hi!’);
  },
};

user.usersaysHi(); // 'dan.frehner says hi!'
/*Objects have a self referential keyword that may be applied in each object called this.
When called inside of an object it is referring to that very object.
this can be used to access other keys in the same object, and is especially useful in methods:*/




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




/*CALLBACKS: A very important concept in Javascript is the ability to pass a function as an arguments to another function. These functions are called callbacks. These functions can be called anytime and passed arguments within the function. We will soon discover why callbacks are so important to Javascript. Convention is to use the callback or cb argument variable as your callback, although as always you are free to name them what you please.*/
function saysHelloToUser(user) {
  return ‘Hello ’ + user + ‘!’;
}

function saysGoodbyeToUser(user) {
  return 'Goodbye ' + user + '!';
}

function createGreeting(user, cb) {
  return cb(user);
}

createGreeting('Dan', saysHelloToUser); // 'Hello Dan!'
createGreeting('Dan', saysGoodbyeToUser); // 'Goodbye Dan!'
/*Within createGreeting we have set the parameter cb to equal whatever was passed in as the second argument.
In the above example we see that in the first createGreeting call, the function saysHelloToUser was passed as the second argument. This gives us the ability to call cb (which is equal to the function saysHelloToUser) within the createGreeting function.*/





/*MATH WITH JS*/
/*BASIC MATH*/
1 + 1 = 2
2 * 2 = 4
2 - 2 = 0
2 / 2 = 1
/*One of the first jobs a computer had was to compute numbers.
In JavaScript, we have built-in math operators that work exactly as they do on your calculator.*/

/*FIND THE REMINDOR*/
21 % 5 = 1;
21 % 6 = 3;
21 % 7 = 0;
/*Something you may not have seen before is the Modulo (%).
This math operator will divide the two numbers and return the remainder.*/

/*EXPONET*/
Math.pow(2,2) = 4;
Math.pow(3,2) = 9;
Math.pow(3,3) = 27;
/*We can use the pow method on Math to return a number risen to an exponent.
It will take two numbers.*/

/*ROUND*/
Math.round(6.5) = 7;
Math.round(6.45) = 6;
Math.floor(6.999) = 6;
Math.ceil(6.0001) = 7;
/*Math also has methods that will round numbers for us.
.round will round a number to the nearest whole number.
.floor will always round a number down to the nearest whole number.
.ceil will always round up to the nearest whole number.*/





/*PROPERTIES*/
const school = 'Lambda';
school.length; //6
/*Properties allow us to access data from a data type.
There are many different properties on every data type that will give you a bit of information about that specific object.
One we will look at here is the length property of a string.
It will give us the length of the string, as in how many characters are in the string (spaces count).*/

/*METHODS*/
const num = 42;
num.toString(); //"42"
/*Methods allow us to manipulate a data type.
Methods are different from properties in that they need to have parentheses on the end.
The method we will look at here is the toString method.
It will convert a Number or Boolean to a string.*/



/*CONTROL FLOW LOGIC*/
/*AND OR*/
if (100 > 10 && 10 === 10) { }
/*The first logical operator we will look at is the “AND” operator.
It is written with two ampersands (&&).
This will evaluate both expressions and will return true if BOTH expressions are true.
If one (or both) of them is false, then this operator will return false:*/
if (100 > 10 || 10 === 10) { }
/*The next is the “OR” operator.
It is written with two vertical bars (||).
It will determine if one of the expressions is true.
It will return true if one (or both) of the expressions is true.
It will return false if BOTH expressions are false:*/

/*NOT*/
if (!false) { }
/*The last logical operator is the “NOT” operator.
It is written as a single exclamation mark (!).
We saw this operator earlier when determining equality (!==).
As before, the NOT operator will return the opposite Boolean value of what is passed to it:*/

/*IF ELSE*/
function canDrive(age) {
   if (age > 15) {
     return true;
   }

   return false;
}
canDrive(16); // true
/*Here we are taking a number (age) and checking to see if the statement is true.
The statement 16 > 15 is true, so we will return true, and the function will stop.
If it is not, it will skip that code and the function will return false.

The “Greater Than” symbol ( > ) that you see in the last example is called a Comparison Operator.
Comparison Operators evaluate two items and return either true or false.
These operators are: < , <=, >, >=, ===, !== . We will learn more about these operators later in this lesson.*/

/*TRUTHINESS*/
/*TRUTHY items that are coerced to true:*/
true

1

’ ’

[] // an array, you’ll learn more about this later

{} // an object, you’ll learn more about this later

function() {}
/*FALSEY  items that are coerced to false:*/
false

0

undefined

null

''
/*In these lessons, we have talked a lot about the Boolean values, true and false.
When using an if statement or other statements that expect a Boolean value (such as the !, NOT), and the expression given is not a Boolean value, JavaScript will do something called type coercion and transform whatever it is given into a Boolean value.
This is known as truthy and falsey. Every data type has a truthiness to it.*/

/*COMPARISON OPERATORS*/
1 > 2;     // false

2 < 3;     //  true

10 >= 10;  //  true

100 <= 1;  // false
/*EQUAL*/
1 === 1;          // true

1 === '1';        // false

'cat' === 'cat';  // true

'cat' === 'Cat';  // false
/*The “triple equals” sign ( === ) must not be confused with a single equal sign (which indicates assigning a value to a variable).
The triple equal will compare everything about the two items, including type, and return if they are exactly equal or not:
(Something to note: there is a “double equals” ( == ) sign which will compare two items, but it will NOT take into account their types (1 == '1' // true).
Due to this, it is considered bad practice to use the double equal sign.
We would like to see you always using the triple equal sign, and you will always see us using it.)*/
/*NOT EQUAL*/
1 !== 1;          // false

1 !== '1';        // true

'cat' !== 'cat';  // false

'cat' !== 'Cat';  // true
/*First is the “NOT” (!).
When you see this it will mean that we are asking the opposite of the expression (we will revisit the NOT operator later in this lesson).
With that in mind, we can introduce the “not equals” ( !== ) sign.
This will return true if the items are NOT equal to each other, in any way.
This, like the triple equal sign, takes type into account.*/





/*UNDEFINED*/
console.log(unkownVar); // undefined
/*There are a couple of JavaScript objects that don’t really fit into any type.
Those are the values undefined and null.
You will get undefined when you are looking for something that does not exist like a variable that does not have a value yet.
undefined simply means what you are asking for does not exist.*/

/*NULL*/
let phoneNumber = ‘123-456-7890’;

phoneNumber = null;

phoneNumer; // null
/*null is an object that we, the developers, set when we want to tell other developers that the item they are looking for exists, but there is no value associated with it.
While undefined is set by the JavaScript language, null is set by the developer.
If you ever receive null, know that another developer has set that value to null*/


/*IF vs ELSE IF*/
const age = 21;
if(age > 20){
  console.log('older than 20!');//code ends here
}
else if (age > 15){
  console.log('older than 15!');//wont run because ELSE
}
else {
  console.log('younger than 15!');
}
/*END OF LINE*/
const age = 21;
if(age > 20){
  console.log('older than 20!');
}
if (age > 15){
  console.log('older than 15!');// no ELSE so will run...
}
if (age <= 15) {
  console.log('younger than 15!');
}





/*LOOPS*/
/****for loop*/
for (let i = 0; i < 10; i++) {
//  | declare a var | conditional expression | increment var|
  console.log(i);
}
/*In this example, we see that we initially set our counter variable to 0.
The loop will run and each time it gets to the end, it will increase the counter by one.
The for loop will then evaluate the conditional expression.
If it is true, it will run again, but if it is false it will stop running.*/
/****for…in Loops, for use with OBJECTS*/
const user = {

  username: ‘dan.frehner’,

  password: ‘abc123’,

  lovesJavascript: true,

  favoriteNumber: 42,

};

for (let key in user){
  console.log(key);// because of "in" will loop out all KEY:username, password, lovesJavascript, favoriteNumber
  console.log(user[key]); // (object[key]) where "key" is a call for the loop to aoutout what key is set to
}
/*Sometimes we want to iterate over each key:value pair in our object.
With arrays we used a standard for loop and an index number variable.
Objects do not contain numerical indexes so the standard loop will not work for objects.
Javascript has a second type of for loop built in called the “for…in” loop.
It is slightly different syntax, it starts the same but in the parentheses we will declare a variable, the keyword in, and the name of the object.
This will loop over each key in the object and finish when all of the keys have been iterated over.
We can use this key, and bracket notation, in our for loop to access the value associated with that key.*/







/*FUNCTIONS*/
function myFunc() {}

const anotherFunc = function () {};

const yetAnother = () => {}; // this is es6+ syntax to call a funtion.
/*There are three ways we can build a function. HERE THEY ARE*/
/*A function will start with the function keyword.
This tells whatever is running your program that what follows is a function and to treat it as such.
After that comes the name of the function.
We like to give functions names that describe what they do.
Then comes an open and a close parenthesis.
And finally, open and close brackets.
In between these brackets is where all of our function code will go.*/

/*Anatomy of a Function*/
function logsHello() {
  console.log(‘hello’);
}
logsHello(); //this line will OUTPUT or RUN the funtion, but is not needed for the funtion.
/*In this example, we declare a function logsHello and set it up to console.log 'hello'.
We can then see that in order to run this function, we need to write or invoke its name with the parentheses after it.
This is the syntax to run a function.
A function always needs parentheses to run.*/

/*PARAMETERS and ARGUMENTS: call data from out side var*/
function myFunc( parameter1, parameter2 ){
  // We can use parameter1 and parameter2 in this function just like a variable.
  console.log(${parameter1} ${parameter2}`);
  console.log(parameter1); // the code of the funtion is the "arguments"
  /*Arguments will always line up with parameters in order, so the first argument will be the first parameter, and etc.

  If an argument is not given for a parameter, the parameter will be equal to undefined.*/
}
/*A function parameter will represent the data we pass into a function, for use in the function.
Essentially when we write a function we assign the data variable names, even without knowing what the data will be.
We set these variables inside of the parentheses when we write the function.
There is no limit to the amount of parameters we can include in a function, but each variable name must be separated by a comma.
We can then use these variables within our function just as we would any other variable.*/


/*SCOOPS: Scope is defined as what variables we currently have access to and where.
So far in this course, we have been working in Global scope, in that we can access any variable we have created, anywhere in our code.
There are a couple different levels of scope:
you may have heard of block level scope (used in if statements and for loops) in which a variable using either let or const is only available within the statement or loop.*/
/*Function Level Scope*/
const var1 = ‘Lambda’

function myFunc(){
  const var2 = ‘School’

  console.log(var1) // Lambda

  console.log(var2) // School
}

console.log(var1) // Lambda
console.log(var2) // undefined
/*Functions have something similar, known as function scope.
Function scope allows us to create variables inside of functions, that are essentially private to that function.
We can not reach into a function from the outside and get access to these variables.
But we are free to use these variables anywhere within our function.
Conversely, we DO have access to variables outside of the function.
It is a one-way street.
Functions can reach out and grab variables outside of their scope, but we can not reach into a function to get a variable.*/

/*The return Statement*/
function addTwoNumbers( a, b ) {

  const sum = a + b;

  return sum;

  console.log(‘This will never be reached’);

}

const newSum = addTwoNumbers( 1, 2 );

console.log(sum) // undefined

console.log(newSum) // 3;
/*We will not console.log everything that comes out of a function.
Most likely we will want to return something.
There is one way we can access data from within a function.
In fact, it is the only way for us to get ANY data from a function, and that is to use the keyword return.
Think of the return statement as the only way for data to escape a function.
Nothing other than what is returned can be accessed outside of the function.
Also note that when a function hits a return statement, the function immediately stops what it is doing and returns.

We can also assign the value of a return statement to another variable, and we will now have access to the data returned from the function.*/
