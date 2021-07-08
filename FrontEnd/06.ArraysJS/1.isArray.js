// Create a function, which checks parameter is array or not
function isArray(input) {
  return Array.isArray(input);
}
console.log(isArray([1, 2, 3]));
console.log(isArray("wwww"));
console.log(isArray(1));
