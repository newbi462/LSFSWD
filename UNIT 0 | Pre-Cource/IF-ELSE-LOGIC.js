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
