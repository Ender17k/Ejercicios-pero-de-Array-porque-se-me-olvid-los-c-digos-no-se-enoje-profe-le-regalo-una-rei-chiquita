const anillosProteccion = [10, 20, 30, 40, 50];
let anillosProteccionmult = anillosProteccion.map(function(anillo) {
  return anillo * 1.5;
});
console.log(anillosProteccionmult);
// [ 15, 30, 45, 60, 75 ]
