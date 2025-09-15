// Ejercicio 5: Eliminar el último elemento del arreglo (en el PDF se hizo un conteo con reduce)
// Resultado esperado al ejecutar: 3

const espadas = [20, 60, 45, 80, 90, 30];
const espada = espadas.reduce((acumulador, espada) => {
  if (espada > 50) {
    return acumulador + 1;
  }
  return acumulador;
}, 0);
console.log(espada);
// Resultado en consola: 3
