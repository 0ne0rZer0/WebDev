var red = [
  104, 117, 124, 125, 136, 137, 144, 145, 146, 155, 156, 157, 164, 165, 166,
  167, 174, 175, 176, 177, 184, 185, 186, 187, 188, 193, 194, 195, 196, 197,
  204, 205, 206, 207, 208, 209, 212, 213, 214, 215, 216, 225, 226, 227, 228,
  229, 230, 232, 233, 234, 235, 246, 247, 248, 249, 250, 251, 267, 268, 269,
  270, 271, 272, 288, 289, 290, 291, 292, 293, 309, 310, 311, 312, 313, 314, 1,
  2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 40, 60,
  80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380,
  21, 41, 61, 81, 101, 121, 141, 161, 181, 201, 221, 241, 261, 281, 301, 321,
  341, 361, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393,
  394, 395, 396, 397, 398, 399, 400,
];

for (var i = 0; i < 400; i++) {
  var node = document.createElement("div");
  node.classList.add("grid-item");
  node.classList.add("selected");
  node.classList.add("notselected");
  if (red.includes(i + 1)) {
    node.classList.toggle("notselected");
  } else {
    node.classList.toggle("selected");
  }
  node.id = i;
  document.querySelector(".container").appendChild(node);
}

var container = document.querySelector(".container");
var nodes = document.querySelectorAll("grid-item");
container.addEventListener("click", function (e) {
  var id = e.target.id;
  container.children[id].classList.toggle("selected");
  container.children[id].classList.toggle("notselected");
});
