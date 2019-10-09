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



/*LOOP AN ARRAYS*/
let studentsNames = ["Dan", "Maria", "Sara", "Raj"];

for (let i = 0; i < studentsNames.length; i++) {
  console.log(studentsNames[i]);
}
/*THIS CODE WILL USE A LOOP TO OUT-PUT THE VALUES OF THE ARRAY 1 BY 1*/

/*WHILE LOOP*/
while (condition) {
  // code block to be executed
}
/*for when you dont want a for or counter*/
