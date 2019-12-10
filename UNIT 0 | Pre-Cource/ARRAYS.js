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

/*CLONE AN ARRAY so you can edict the copy and KEEP the original*/
var clone = myArray.slice(0);
/*this code will clone an array which will neewd to be done if you want the orginal and the map redo*/

/*split(), reverse() and join(*/
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello");
/**/


/*PUSH or add to an array*/
var arr = [];
arr.push(1); // arr = [1]
arr.push(4); // arr = [1, 4], and so on depending on what you PUSH


/*REMOVE DUPLIKETS*/
arr = [...new Set(arr)];
/*SET is an ES6+ addition that only logs uniqe values and so "new Set" wiill oinly log the uniqe values of the array and ignore the rest
FULL explnation is here https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c*/


/*REPLACE ARRAY ELAMENTS*/
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

array.splice(i, 1);
// would remove one item and "i" index and reduse the array, because it was replaced with nothing
array.splice(INDEX-NUM, NUMBER TO DEL, what to replace or insers);
/**/


/*FOREACH*/
/*The forEach() method executes a provided function once for each array element.*/

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

/*MAP*/
/*The map() method creates a new array with the results of calling a provided function on every element in the calling array.*/
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map


/*FILTER*/
/*The filter() method creates a new array with all elements that pass the test implemented by the provided function.*/

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


/*REDUCE*/
/*The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.*/

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
/*REDUSE WITH array of OBJECTS*/
var arr = [{x:1},{x:2},{x:4}];

arr.reduce(function (a, b) {
  return {x: a.x + b.x}; // returns object with property x
})

// ES6
arr.reduce((a, b) => ({x: a.x + b.x}));

// -> {x: 7}
// https://stackoverflow.com/questions/5732043/javascript-reduce-on-array-of-objects

//code from TL for this
ticketPriceTotal  = runners.reduce( function(accumulator, currentValue) {
    return accumulator + currentValue.donation;
  }, 0);
//console.log(ticketPriceTotal);



//MUTATE CHECK  https://doesitmutate.xyz/
