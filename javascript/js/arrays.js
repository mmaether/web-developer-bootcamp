var numbers = [1, 2, 3, 4];
var letters = ["a", "b", "c", "d"];

/*
  Takes in an array and prints the items
  in reverse order.
*/
function printReverse(arr) {
  for(var i = arr.length-1; i>=0; i--){
    console.log(arr[i]);
  }
}

/*
  Checks an array to see if all items
  are the exact same.

  1. Store the first value in the array.
  2. Check to see if the value is the same as next number.
  3. If it's the same then true, else false. Loop.
*/
function isUniform(array){
  var firstItem = array[0];
  for(var i = 1; i < array.length; i++) {
    if(array[i] !== firstItem) {
      return false;
    }
  }
  return true;
}

/*
  Take every number in an array and add them together.
*/
function sumArray(array){
  var total = 0;
  array.forEach(function(element){
    total += element;
  });
  return total;
}

function max(array) {
  var max = array[0];
  for(var i = 1; i < array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}
