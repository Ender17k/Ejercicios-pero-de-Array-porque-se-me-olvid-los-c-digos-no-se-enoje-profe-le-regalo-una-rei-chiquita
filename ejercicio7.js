// Ejercicio 7: Eliminar el primer elemento del arreglo (en el PDF se usó every para evaluar)
// Resultado esperado al ejecutar: false

const pergaminos = [65, 70, 85, 90, 50];
let legible = pergaminos.every(function(pergaminos) {
  return (pergaminos > 60);
});
console.log(legible);
// Resultado en consola: false
