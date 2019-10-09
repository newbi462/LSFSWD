
/*STRING AS AN ARRAY*/
var s = 'string';
console.log(s[0]);
console.log(s.charAt(0));// would retun "s"
/*use "vaibalname[i]" or "vaibalname.charAt(i)" to get the "i" place of the stink like it is an array*/


/*SORT NUMBERS low to high or high to low from an array*/
function sortNumber(a, b) {
  return a - b;
}

var numArray = [140000, 104, 99];
numArray.sort(sortNumber);

console.log(numArray);
/*or in ES6*/
numArray.sort((a, b) => a - b); // For ascending sort
numArray.sort((a, b) => b - a); // For descending sort
/**/


/*REMOVE MAX or MIN USEING MATH*/
var secondMax = function (){
    var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};
/*NOTE: "arr" is the name of the array, sub "max" for "min" to remove min value*/


/*ERRORS*/
try {

  // code...

} catch (err) {
  alert(err.name); // ReferenceError
  alert(err.message); // lalala is not defined
  alert(err.stack); // ReferenceError: lalala is not defined at ...

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  alert(err); // ReferenceError: lalala is not defined

  // error handling

}
/**/

/*CONVERT TO BINAY AND HEX*/
(255).toString(); // "255" (default is radix 10)
(255).toString(2); // "11111111" (radix 2, i.e. binary)
(255).toString(16); // "ff" (radix 16, i.e. hexadecimal)
/*255 is the value to covert*/
var b = parseInt( a, 0 ); // will convert strig to its number
var b = parseInt( a, 2 ); // converts binary to numbwer
var b = parseInt( a, 16 ); // convers hex to number
/*and in the like parseInt converts to an interger */


/*FORCE UPER OR LOWER CASE*/
var string = 'string';
string.toUpperCase() // convits all to upper case
string.toLowerCase() // convits all to lower case
/**/

/*check if a string contains a substring in JavaScript*/
/*ES6WAY*/
'a nice string'.includes('nice') //true
'a nice string'.includes('nice', 3) //false
'a nice string'.includes('nice', 2) //true
/**/
'a nice string'.indexOf('nice') !== -1 //true
'a nice string'.indexOf('nice', 3) !== -1 //false
'a nice string'.indexOf('nice', 2) !== -1 //true
/*PRE ES6 had to use indexof*/


/*REPEAT SOMTHING*/
// Taking a string "gfg"
var repeetme = "gfg";

// Repeating the string multiple times
a = repeetme.repeat(5); // would repeat 5 times
/**/













/*INTRESTING CHALANGES*/
/*reduse arary to find 2nd largest*/
function sortNumber(a, b) {
  return b - a;
}

var nums = [140000, 140000, 140000, 104, 104, 104, 100, 99];
nums.sort(sortNumber);

var clone = nums.slice(0);
var truemax = Math.max.apply(null, nums);
console.log(truemax); //140000
console.log(clone); // [ 140000, 140000, 140000, 104, 104, 104, 100, 99 ]


for (let i = 0; i < clone.length; i++) {
  if (clone[i] >= truemax) {
    var max = Math.max.apply(null, clone);
    clone.splice(clone.indexOf(max), 1);
  }
  else if (clone[0] >= truemax) {
    var max = Math.max.apply(null, clone);
    clone.splice(clone.indexOf(max), 1);
  }
}

console.log(clone); // [ 104, 104, 104, 100, 99 ]
/*Used a clone to be safe and removed max values ELSE to check for a dupiket that is skiped*/
