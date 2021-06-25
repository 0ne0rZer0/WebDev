// Create a function to clone an array

//Shallow for nested arrays, deep for 1 level
function cloneArray1(array) {
  var array2 = [...array];
  return array2;
}

//Shallow
function cloneArray2(array) {
  // shallow = uses address only
  var array2 = [];
  for (var i = 0; i < array.length; i++) {
    array2[i] = array[i];
  }
  return array2;
}

// Shallow
function cloneArray3(array) {
  var array2 = array.map((x) => x);
  return array2;
}

//Deep and safe for nested but probably slow
function cloneArray4(array) {
  var stringFromObject = JSON.stringify(array);
  var array2 = JSON.parse(stringFromObject);
  return array2;
}

var array = [1, 2, 3, 4];
console.log("Orginal array " + array);
console.log("Shallow copied using spread operator " + cloneArray1(array));
console.log("Shallow copied using for loop = operator " + cloneArray2(array));
console.log("Shallow copied using .map call " + cloneArray3(array));
console.log("Shallow copied using Stringify, then parse " + cloneArray4(array));
