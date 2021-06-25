function readingStatus(arr) {
  var str = [];
  for (x in arr) {
    console.log(
      "Title: " +
        arr[x].title +
        " Author: " +
        arr[x].author +
        " Reading Status:" +
        arr[x].readingStatus
    );
  }
}

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

readingStatus(library);
