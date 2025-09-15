// Ejercicio 6: Agregar elementos al principio del arreglo (en el PDF se utilizó map para multiplicar)
// Resultado esperado al ejecutar: [ 15, 30, 45, 60, 75 ]

const anillosProteccion = [10, 20, 30, 40, 50];
let anillosProteccionmult = anillosProteccion.map(function(anillo) {
  return anillo * 1.5;
});
console.log(anillosProteccionmult);
// Resultado en consola: [ 15, 30, 45, 60, 75 ]
