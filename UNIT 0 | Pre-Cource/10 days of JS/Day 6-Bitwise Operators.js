function getMaxLessThanK(n, k) {
    let maximum = 0;

    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            ((a & b) < k && (a & b) > maximum) && (maximum = (a & b));
        }
    }

    return maximum;
}



/*var q = 3;
var n = 8;
var k = 5;


var numbers = [];
var binarars = [];

function bitwise( n, k ){
  if (n > k){
    for (let i = 0; i < n; i++) {
      numbers.push(i+1);
    }
  }
  if (n < k){
    for (let i = 0; i < k; i++) {
      numbers.push(i);
    }
  }

  var clone = numbers.slice(0);
  for (let i = 0; i < clone.length; i++) {
    binarars.push((clone[i]).toString(2));
  }


}

for (let i = q; i > 0; i--) {
  bitwise( n, k );
  console.log(binarars);
  numbers = [];
  binarars = [];
}*/
