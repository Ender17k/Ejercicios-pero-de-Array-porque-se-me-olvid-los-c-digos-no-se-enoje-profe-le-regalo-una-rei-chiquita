const hechizos = [60, 80, 110, 95, 85];
let siono = hechizos.some(function(hechizos) {
  return (hechizos > 100);
});
console.log(siono);
// true
