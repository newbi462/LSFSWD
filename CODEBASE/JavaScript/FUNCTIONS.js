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
