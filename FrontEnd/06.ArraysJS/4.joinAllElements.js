function joinAllString(array) {
  var stringFromArray = "";
  for (var i = 0; i < array.length; i++) {
    stringFromArray += array[i].toString();
    stringFromArray += " ";
  }
  return stringFromArray;
}

var arr = ["red", "blue", "green", "yellow"];
console.log(joinAllString(arr));
