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
