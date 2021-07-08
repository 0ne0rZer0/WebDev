function keysOfMap(array) {
  var tex = "";
  for (x in array) {
    tex += x + " ";
  }
  console.log(tex);
}

var array = { name: "David Rayy", sclass: "VI", rollno: 12 };
keysOfMap(array);
