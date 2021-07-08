function volumeCylinder(cylinder) {
  return (Math.PI * cylinder.radius ** 2 * cylinder.height).toFixed(4);
}

console.log(
  "Volume of Cylinder: " + volumeCylinder({ radius: 10, height: 15 })
);
