// Ejercicio 8: Uso de splice() para modificar el arreglo (en el PDF se usó some para verificar >100)
// Resultado esperado al ejecutar: true

const hechizos = [60, 80, 110, 95, 85];
let siono = hechizos.some(function(hechizos) {
  return (hechizos > 100);
});
console.log(siono);
// Resultado en consola: true
