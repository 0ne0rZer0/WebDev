function frequencyItem(array) {
  var a = {};
  for (var i = 0; i < array.length; i++) {
    if (array[i] in a) {
      a[array[i]] += 1;
    } else {
      a[array[i]] = 1;
    }
  }
  console.log(a);
  for (x in a) {
    console.log(x + ":" + a[x]);
  }
}

var array = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
frequencyItem(array);
