function lengthOfObject(student) {
  var text = 0;
  for (x in student) {
    text += 1;
  }
  return text;
}
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(lengthOfObject(student));
