var container = document.querySelector(".container");
var node = document.querySelector("svg");
node.id = 0;
node.classList.add("available");
node.classList.add("selected");
node.classList.toggle("selected");
node.addEventListener("click", function (e) {
  console.log(e.target.id);
});
for (var i = 1; i <= 115; i++) {
  var node = document.querySelector("svg").cloneNode(true);
  if (Math.floor(Math.random() * 114) == i) {
    node.classList.add("booked");
    node.classList.remove("available");
  }
  node.id = i;

  container.appendChild(node);
}

var nodes = document.querySelectorAll("svg");
console.log(nodes);
var j = 0;
for (; j < nodes.length; j++) {
  console.log(nodes[j].id);
  var id = nodes[j].id;
  nodes[j].addEventListener("click", mydelegate(nodes, id), true);
}
function mydelegate(nodes, id) {
  return function () {
    console.log(nodes[id]);
    if (nodes[id].classList.contains("booked") == false) {
      nodes[id].classList.toggle("selected");
      nodes[id].classList.toggle("available");
    }
  };
}
